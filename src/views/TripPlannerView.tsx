import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Plus, Luggage, Calendar, Compass, Sparkles } from 'lucide-react';
import { useTripStore } from '../stores/useTripStore';
import { TripCard } from '../components/cards/TripCard';

export const TripPlannerView: React.FC = () => {
  const navigate = useNavigate();
  const trips = useTripStore(state => state.trips);

  const activeTripsCount = trips.filter(t => t.status !== 'Completed').length;
  const totalDaysPlanned = trips.reduce((acc, t) => acc + t.totalDays, 0);

  return (
    <div className="space-y-8 pb-16">
      {/* Top Banner */}
      <div className="bg-white rounded-3xl p-6 md:p-8 border border-stone-200/80 shadow-2xs flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-brand-50 text-brand-700 border border-brand-200 mb-2">
            <Luggage className="w-3.5 h-3.5" />
            <span>Itinerary Dashboard</span>
          </div>
          <h1 className="font-serif text-3xl md:text-4xl font-bold text-stone-900">
            My Planned Trips
          </h1>
          <p className="text-xs md:text-sm text-stone-500 mt-1">
            Manage your journeys, customize day-by-day schedules, and track budgets.
          </p>

          <div className="flex items-center gap-4 text-xs font-semibold text-stone-600 mt-4">
            <span className="bg-stone-100 px-3 py-1.5 rounded-xl">
              🎯 <strong>{activeTripsCount}</strong> Active Itineraries
            </span>
            <span className="bg-stone-100 px-3 py-1.5 rounded-xl">
              🗓️ <strong>{totalDaysPlanned}</strong> Total Travel Days
            </span>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={() => navigate('/trips/new')}
            className="flex items-center gap-2 px-5 py-3 rounded-2xl bg-brand-500 hover:bg-brand-600 text-white font-bold text-xs shadow-xs transition-colors"
          >
            <Plus className="w-4 h-4" />
            <span>Plan New Trip</span>
          </button>
        </div>
      </div>

      {/* Trips Grid */}
      {trips.length === 0 ? (
        <div className="text-center py-20 bg-white rounded-3xl border border-stone-200 p-8 space-y-4 max-w-md mx-auto">
          <div className="w-16 h-16 rounded-full bg-brand-50 text-brand-500 flex items-center justify-center mx-auto">
            <Luggage className="w-8 h-8" />
          </div>
          <h3 className="font-serif text-xl font-bold text-stone-900">No Trips Created Yet</h3>
          <p className="text-xs text-stone-500 leading-relaxed font-light">
            Use our 7-step smart trip generator to assemble a day-by-day itinerary tailored to your style, pace, and interests.
          </p>
          <button
            onClick={() => navigate('/trips/new')}
            className="px-6 py-2.5 bg-brand-500 text-white rounded-xl text-xs font-bold hover:bg-brand-600 transition-colors shadow-xs"
          >
            Create Your First Trip
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {trips.map(trip => (
            <TripCard key={trip.id} trip={trip} />
          ))}
        </div>
      )}
    </div>
  );
};
