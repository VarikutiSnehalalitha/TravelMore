import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Calendar, Users, DollarSign, Copy, Trash2, ArrowRight } from 'lucide-react';
import { Trip } from '../../types';
import { PriceDisplay } from '../common/PriceDisplay';
import { useTripStore } from '../../stores/useTripStore';

interface TripCardProps {
  trip: Trip;
}

export const TripCard: React.FC<TripCardProps> = ({ trip }) => {
  const navigate = useNavigate();
  const { duplicateTrip, deleteTrip } = useTripStore();

  const handleCardClick = () => {
    navigate(`/trips/${trip.id}`);
  };

  const handleDuplicate = (e: React.MouseEvent) => {
    e.stopPropagation();
    duplicateTrip(trip.id);
  };

  const handleDelete = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (confirm(`Are you sure you want to delete "${trip.title}"?`)) {
      deleteTrip(trip.id);
    }
  };

  // Calculate days remaining until start date
  const today = new Date();
  const start = new Date(trip.startDate);
  const diffDays = Math.ceil((start.getTime() - today.getTime()) / (1000 * 60 * 60 * 24));

  const statusColors = {
    Planning: 'bg-amber-100 text-amber-800 border-amber-200',
    Upcoming: 'bg-emerald-100 text-emerald-800 border-emerald-200',
    Completed: 'bg-stone-100 text-stone-700 border-stone-200'
  }[trip.status];

  return (
    <div
      onClick={handleCardClick}
      className="group bg-white rounded-2xl border border-stone-200/80 hover:border-brand-300 hover:shadow-elevated transition-all overflow-hidden flex flex-col cursor-pointer"
    >
      <div className="relative h-44 w-full overflow-hidden bg-stone-100">
        <img
          src={trip.heroImage}
          alt={trip.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

        <div className="absolute top-3 left-3 flex items-center gap-2">
          <span className={`px-2.5 py-0.5 rounded-full text-xs font-semibold border ${statusColors} backdrop-blur-xs`}>
            {trip.status}
          </span>
          {diffDays > 0 && trip.status !== 'Completed' && (
            <span className="bg-black/60 backdrop-blur-xs text-white text-xs px-2.5 py-0.5 rounded-full font-medium">
              Departs in {diffDays} days
            </span>
          )}
        </div>

        <div className="absolute bottom-3 left-3 right-3 text-white">
          <p className="text-xs font-medium text-stone-200">
            {trip.destinationNames.join(' • ')}
          </p>
          <h3 className="font-serif text-lg font-bold leading-tight line-clamp-1">
            {trip.title}
          </h3>
        </div>
      </div>

      <div className="p-4 flex-1 flex flex-col justify-between">
        <div className="space-y-2 mb-4">
          <div className="flex items-center justify-between text-xs text-stone-600">
            <span className="flex items-center gap-1.5">
              <Calendar className="w-3.5 h-3.5 text-stone-400" />
              {trip.startDate} ({trip.totalDays} Days)
            </span>
            <span className="flex items-center gap-1.5">
              <Users className="w-3.5 h-3.5 text-stone-400" />
              {trip.travelers.adults + trip.travelers.children} Travelers ({trip.travelStyle})
            </span>
          </div>

          <div className="flex items-center justify-between text-xs text-stone-600">
            <span className="flex items-center gap-1.5">
              <DollarSign className="w-3.5 h-3.5 text-stone-400" />
              Total Budget: <strong className="text-stone-900"><PriceDisplay amountUSD={trip.totalBudgetUSD} /></strong>
            </span>
            <span className="text-stone-400">
              {trip.itinerary.length} Day Schedule
            </span>
          </div>
        </div>

        <div className="pt-3 border-t border-stone-100 flex items-center justify-between">
          <div className="flex items-center gap-1" onClick={e => e.stopPropagation()}>
            <button
              onClick={handleDuplicate}
              title="Duplicate Trip"
              className="p-1.5 rounded-lg text-stone-400 hover:text-stone-700 hover:bg-stone-100 transition-colors"
            >
              <Copy className="w-4 h-4" />
            </button>
            <button
              onClick={handleDelete}
              title="Delete Trip"
              className="p-1.5 rounded-lg text-stone-400 hover:text-rose-600 hover:bg-rose-50 transition-colors"
            >
              <Trash2 className="w-4 h-4" />
            </button>
          </div>

          <span className="inline-flex items-center gap-1 text-xs font-semibold text-brand-600 group-hover:text-brand-700">
            <span>View Itinerary</span>
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
          </span>
        </div>
      </div>
    </div>
  );
};
