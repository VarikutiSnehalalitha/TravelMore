import { TravelStyle } from './common';

export interface Activity {
  id: string;
  title: string;
  timeSlot: 'morning' | 'afternoon' | 'evening';
  time: string; // "09:30 AM"
  location: string;
  costUSD: number;
  duration: string; // "2.5 hours"
  travelTime: string; // "15 mins via metro"
  category: string;
  notes?: string;
  completed?: boolean;
}

export interface ItineraryDay {
  dayNumber: number;
  date: string;
  title: string;
  activities: Activity[];
}

export interface Booking {
  id: string;
  type: 'flight' | 'hotel' | 'train' | 'activity';
  title: string;
  provider: string;
  confirmationCode: string;
  date: string;
  costUSD: number;
  status: 'Confirmed' | 'Pending';
}

export interface Trip {
  id: string;
  title: string;
  destinationNames: string[];
  countryIds: string[];
  startDate: string;
  endDate: string;
  totalDays: number;
  travelers: {
    adults: number;
    children: number;
  };
  travelStyle: TravelStyle;
  interests: string[];
  totalBudgetUSD: number;
  status: 'Planning' | 'Upcoming' | 'Completed';
  heroImage: string;
  itinerary: ItineraryDay[];
  bookings: Booking[];
  notes: string;
}
