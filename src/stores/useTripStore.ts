import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { SAMPLE_TRIPS } from '../data/sampleTrips';
import { Trip, Activity, ItineraryDay, TravelStyle } from '../types';

interface CreateTripParams {
  title: string;
  destinationNames: string[];
  countryIds: string[];
  startDate: string;
  endDate: string;
  travelers: { adults: number; children: number };
  travelStyle: TravelStyle;
  interests: string[];
  totalBudgetUSD: number;
}

interface TripStore {
  trips: Trip[];
  getTrip: (id: string) => Trip | undefined;
  createTrip: (params: CreateTripParams) => Trip;
  updateTrip: (id: string, updates: Partial<Trip>) => void;
  deleteTrip: (id: string) => void;
  duplicateTrip: (id: string) => Trip | undefined;
  addActivity: (tripId: string, dayNumber: number, activity: Omit<Activity, 'id'>) => void;
  deleteActivity: (tripId: string, dayNumber: number, activityId: string) => void;
  reorderActivity: (tripId: string, dayNumber: number, activityId: string, direction: 'up' | 'down') => void;
  toggleActivityCompleted: (tripId: string, dayNumber: number, activityId: string) => void;
}

export const useTripStore = create<TripStore>()(
  persist(
    (set, get) => ({
      trips: SAMPLE_TRIPS,

      getTrip: (id: string) => {
        return get().trips.find(t => t.id === id);
      },

      createTrip: (params: CreateTripParams) => {
        // Calculate number of days
        const start = new Date(params.startDate);
        const end = new Date(params.endDate);
        const diffTime = Math.abs(end.getTime() - start.getTime());
        const totalDays = Math.max(1, Math.ceil(diffTime / (1000 * 60 * 60 * 24)) + 1);

        // Algorithmic synthesis of itinerary days based on selected interests and destinations
        const generatedItinerary: ItineraryDay[] = [];
        const primaryDest = params.destinationNames[0] || 'Destination';

        const activityPool = [
          { title: `Morning walking tour & historic exploration of ${primaryDest}`, slot: 'morning' as const, time: '09:00 AM', duration: '3 hours', cost: 15, travelTime: '15 mins metro', cat: 'Sightseeing' },
          { title: 'Local artisan lunch & regional specialties tasting', slot: 'afternoon' as const, time: '12:30 PM', duration: '1.5 hours', cost: 25, travelTime: '5 mins walk', cat: 'Dining' },
          { title: 'Museum & cultural heritage landmark visit', slot: 'afternoon' as const, time: '02:30 PM', duration: '2.5 hours', cost: 20, travelTime: '10 mins transit', cat: 'Culture' },
          { title: 'Golden hour panoramic viewpoint & photography', slot: 'evening' as const, time: '05:30 PM', duration: '1.5 hours', cost: 0, travelTime: '20 mins walk', cat: 'Nature' },
          { title: 'Rooftop dinner & evening stroll through old town', slot: 'evening' as const, time: '07:30 PM', duration: '2 hours', cost: 45, travelTime: '10 mins walk', cat: 'Dining' },
        ];

        for (let i = 1; i <= totalDays; i++) {
          const currentDate = new Date(start);
          currentDate.setDate(start.getDate() + (i - 1));
          const dateStr = currentDate.toISOString().split('T')[0];

          const dayActs: Activity[] = [
            {
              id: `act-${i}-1`,
              title: i === 1 ? `Arrive in ${primaryDest} & check in to hotel` : activityPool[0].title,
              timeSlot: 'morning',
              time: '09:00 AM',
              location: primaryDest,
              costUSD: i === 1 ? 0 : activityPool[0].cost,
              duration: i === 1 ? '2 hours' : activityPool[0].duration,
              travelTime: 'Airport / Transit',
              category: 'Transit'
            },
            {
              id: `act-${i}-2`,
              title: activityPool[1].title,
              timeSlot: 'afternoon',
              time: '12:30 PM',
              location: `${primaryDest} Old Quarter`,
              costUSD: activityPool[1].cost,
              duration: activityPool[1].duration,
              travelTime: activityPool[1].travelTime,
              category: activityPool[1].cat
            },
            {
              id: `act-${i}-3`,
              title: i % 2 === 0 ? activityPool[3].title : activityPool[2].title,
              timeSlot: 'afternoon',
              time: '03:00 PM',
              location: `${primaryDest} Landmarks`,
              costUSD: activityPool[2].cost,
              duration: activityPool[2].duration,
              travelTime: activityPool[2].travelTime,
              category: activityPool[2].cat
            },
            {
              id: `act-${i}-4`,
              title: activityPool[4].title,
              timeSlot: 'evening',
              time: '07:30 PM',
              location: `${primaryDest} Dining District`,
              costUSD: activityPool[4].cost,
              duration: activityPool[4].duration,
              travelTime: activityPool[4].travelTime,
              category: activityPool[4].cat
            }
          ];

          generatedItinerary.push({
            dayNumber: i,
            date: dateStr,
            title: i === 1 ? `Arrival in ${primaryDest}` : i === totalDays ? `Departure & Farewell to ${primaryDest}` : `Discovering ${primaryDest} — Day ${i}`,
            activities: dayActs
          });
        }

        const newTrip: Trip = {
          id: `trip-${Date.now()}`,
          title: params.title || `${primaryDest} Exploration`,
          destinationNames: params.destinationNames,
          countryIds: params.countryIds,
          startDate: params.startDate,
          endDate: params.endDate,
          totalDays,
          travelers: params.travelers,
          travelStyle: params.travelStyle,
          interests: params.interests,
          totalBudgetUSD: params.totalBudgetUSD,
          status: 'Planning',
          heroImage: 'https://images.unsplash.com/photo-1488646953014-85cb44e25828?auto=format&fit=crop&w=1200&q=80',
          bookings: [],
          notes: `Generated trip tailored for ${params.travelStyle} travel with interests in ${params.interests.join(', ')}.`,
          itinerary: generatedItinerary
        };

        set({ trips: [newTrip, ...get().trips] });
        return newTrip;
      },

      updateTrip: (id: string, updates: Partial<Trip>) => {
        set({
          trips: get().trips.map(t => (t.id === id ? { ...t, ...updates } : t))
        });
      },

      deleteTrip: (id: string) => {
        set({ trips: get().trips.filter(t => t.id !== id) });
      },

      duplicateTrip: (id: string) => {
        const found = get().trips.find(t => t.id === id);
        if (!found) return undefined;
        const duplicated: Trip = {
          ...found,
          id: `trip-${Date.now()}`,
          title: `${found.title} (Copy)`,
          status: 'Planning'
        };
        set({ trips: [duplicated, ...get().trips] });
        return duplicated;
      },

      addActivity: (tripId: string, dayNumber: number, activity: Omit<Activity, 'id'>) => {
        set({
          trips: get().trips.map(trip => {
            if (trip.id !== tripId) return trip;
            return {
              ...trip,
              itinerary: trip.itinerary.map(day => {
                if (day.dayNumber !== dayNumber) return day;
                const newAct: Activity = {
                  ...activity,
                  id: `act-${Date.now()}`
                };
                return {
                  ...day,
                  activities: [...day.activities, newAct]
                };
              })
            };
          })
        });
      },

      deleteActivity: (tripId: string, dayNumber: number, activityId: string) => {
        set({
          trips: get().trips.map(trip => {
            if (trip.id !== tripId) return trip;
            return {
              ...trip,
              itinerary: trip.itinerary.map(day => {
                if (day.dayNumber !== dayNumber) return day;
                return {
                  ...day,
                  activities: day.activities.filter(a => a.id !== activityId)
                };
              })
            };
          })
        });
      },

      reorderActivity: (tripId: string, dayNumber: number, activityId: string, direction: 'up' | 'down') => {
        set({
          trips: get().trips.map(trip => {
            if (trip.id !== tripId) return trip;
            return {
              ...trip,
              itinerary: trip.itinerary.map(day => {
                if (day.dayNumber !== dayNumber) return day;
                const acts = [...day.activities];
                const idx = acts.findIndex(a => a.id === activityId);
                if (idx < 0) return day;
                if (direction === 'up' && idx > 0) {
                  const temp = acts[idx];
                  acts[idx] = acts[idx - 1];
                  acts[idx - 1] = temp;
                } else if (direction === 'down' && idx < acts.length - 1) {
                  const temp = acts[idx];
                  acts[idx] = acts[idx + 1];
                  acts[idx + 1] = temp;
                }
                return { ...day, activities: acts };
              })
            };
          })
        });
      },

      toggleActivityCompleted: (tripId: string, dayNumber: number, activityId: string) => {
        set({
          trips: get().trips.map(trip => {
            if (trip.id !== tripId) return trip;
            return {
              ...trip,
              itinerary: trip.itinerary.map(day => {
                if (day.dayNumber !== dayNumber) return day;
                return {
                  ...day,
                  activities: day.activities.map(a => (a.id === activityId ? { ...a, completed: !a.completed } : a))
                };
              })
            };
          })
        });
      }
    }),
    {
      name: 'travelmore-trips-storage'
    }
  )
);
