import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import {
  Calendar,
  Clock,
  DollarSign,
  Users,
  MapPin,
  Plus,
  ArrowUp,
  ArrowDown,
  Trash2,
  CheckCircle2,
  Circle,
  FileText,
  Map as MapIcon,
  PieChart,
  Luggage,
  Sparkles
} from 'lucide-react';
import { useTripStore } from '../stores/useTripStore';
import { PriceDisplay } from '../components/common/PriceDisplay';
import { Activity } from '../types';

export const ItineraryDetailView: React.FC = () => {
  const { trip: tripId } = useParams<{ trip: string }>();
  const navigate = useNavigate();
  const {
    getTrip,
    addActivity,
    deleteActivity,
    reorderActivity,
    toggleActivityCompleted,
    updateTrip
  } = useTripStore();

  const trip = getTrip(tripId || '');

  const [activeTab, setActiveTab] = useState<'Itinerary' | 'Overview' | 'Budget' | 'Bookings' | 'Notes'>('Itinerary');
  const [selectedDayNumber, setSelectedDayNumber] = useState<number>(1);
  const [showAddModal, setShowAddModal] = useState<boolean>(false);

  // Add activity form state
  const [newTitle, setNewTitle] = useState('');
  const [newSlot, setNewSlot] = useState<'morning' | 'afternoon' | 'evening'>('morning');
  const [newTime, setNewTime] = useState('09:30 AM');
  const [newLocation, setNewLocation] = useState('');
  const [newCost, setNewCost] = useState(15);
  const [newDuration, setNewDuration] = useState('2 hours');
  const [newTravelTime, setNewTravelTime] = useState('15 mins subway');

  if (!trip) {
    return (
      <div className="py-20 text-center space-y-4">
        <h2 className="font-serif text-2xl font-bold text-stone-900">Trip Not Found</h2>
        <p className="text-stone-500 text-sm">We couldn't find the trip you're looking for.</p>
        <button
          onClick={() => navigate('/trips')}
          className="px-4 py-2 bg-brand-500 text-white rounded-xl text-xs font-semibold hover:bg-brand-600"
        >
          Return to Trips Dashboard
        </button>
      </div>
    );
  }

  const currentDay = trip.itinerary.find(d => d.dayNumber === selectedDayNumber) || trip.itinerary[0];

  const handleCreateActivity = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newTitle.trim()) return;

    addActivity(trip.id, selectedDayNumber, {
      title: newTitle,
      timeSlot: newSlot,
      time: newTime,
      location: newLocation || trip.destinationNames[0],
      costUSD: newCost,
      duration: newDuration,
      travelTime: newTravelTime,
      category: 'Sightseeing'
    });

    setNewTitle('');
    setShowAddModal(false);
  };

  // Group activities of current day into slots
  const morningActs = currentDay ? currentDay.activities.filter(a => a.timeSlot === 'morning') : [];
  const afternoonActs = currentDay ? currentDay.activities.filter(a => a.timeSlot === 'afternoon') : [];
  const eveningActs = currentDay ? currentDay.activities.filter(a => a.timeSlot === 'evening') : [];

  return (
    <div className="space-y-8 pb-16">
      {/* 1. Trip Header Banner */}
      <div className="relative rounded-3xl overflow-hidden bg-stone-900 text-white min-h-[280px] flex flex-col justify-end p-6 md:p-10 shadow-floating">
        <img
          src={trip.heroImage}
          alt={trip.title}
          className="absolute inset-0 w-full h-full object-cover opacity-50 scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/40 to-transparent" />

        <div className="relative z-10 space-y-3 max-w-4xl">
          <div className="flex flex-wrap items-center gap-2">
            <span className="px-3 py-1 rounded-full text-xs font-bold bg-brand-500 text-white uppercase tracking-wider">
              {trip.status}
            </span>
            <span className="px-3 py-1 rounded-full text-xs font-semibold bg-white/20 backdrop-blur-md">
              {trip.destinationNames.join(' • ')}
            </span>
          </div>

          <h1 className="font-serif text-3xl md:text-5xl font-black tracking-tight leading-tight">
            {trip.title}
          </h1>

          <div className="flex flex-wrap items-center gap-4 text-xs text-stone-300 pt-1">
            <span className="flex items-center gap-1.5"><Calendar className="w-3.5 h-3.5 text-stone-400" /> {trip.startDate} - {trip.endDate} ({trip.totalDays} Days)</span>
            <span>•</span>
            <span className="flex items-center gap-1.5"><Users className="w-3.5 h-3.5 text-stone-400" /> {trip.travelers.adults + trip.travelers.children} Travelers ({trip.travelStyle})</span>
            <span>•</span>
            <span className="flex items-center gap-1.5"><DollarSign className="w-3.5 h-3.5 text-stone-400" /> Budget: <strong className="text-white"><PriceDisplay amountUSD={trip.totalBudgetUSD} /></strong></span>
          </div>
        </div>
      </div>

      {/* 2. Workspace Navigation Tabs */}
      <div className="flex items-center gap-2 border-b border-stone-200 pb-2 overflow-x-auto scrollbar-none">
        {(['Itinerary', 'Overview', 'Budget', 'Bookings', 'Notes'] as const).map(tab => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-4 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition-all ${
              activeTab === tab
                ? 'bg-stone-900 text-white font-bold shadow-xs'
                : 'text-stone-600 hover:text-stone-900 hover:bg-stone-100'
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* 3. Tab Contents */}
      {activeTab === 'Itinerary' && (
        <div className="space-y-6">
          {/* Day Selector Pills */}
          <div className="flex items-center justify-between gap-4">
            <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none flex-1">
              {trip.itinerary.map(day => (
                <button
                  key={day.dayNumber}
                  onClick={() => setSelectedDayNumber(day.dayNumber)}
                  className={`px-4 py-2.5 rounded-2xl text-xs font-semibold whitespace-nowrap border transition-all text-left ${
                    selectedDayNumber === day.dayNumber
                      ? 'bg-brand-500 text-white border-brand-500 shadow-xs'
                      : 'bg-white border-stone-200 text-stone-700 hover:bg-stone-50'
                  }`}
                >
                  <span className="block font-bold">Day {day.dayNumber}</span>
                  <span className="text-[10px] opacity-80 block">{day.date}</span>
                </button>
              ))}
            </div>

            <button
              onClick={() => setShowAddModal(true)}
              className="px-4 py-2 bg-stone-900 hover:bg-stone-800 text-white text-xs font-bold rounded-xl flex items-center gap-1.5 shrink-0 shadow-xs"
            >
              <Plus className="w-4 h-4" />
              <span>Add Activity</span>
            </button>
          </div>

          {/* Day Title */}
          {currentDay && (
            <div className="bg-white p-5 rounded-2xl border border-stone-200 flex items-center justify-between">
              <div>
                <span className="text-xs font-bold text-brand-600 uppercase tracking-wider">
                  Day {currentDay.dayNumber} Schedule
                </span>
                <h3 className="font-serif text-xl font-bold text-stone-900">{currentDay.title}</h3>
              </div>
              <span className="text-xs text-stone-500">
                {currentDay.activities.length} planned activities
              </span>
            </div>
          )}

          {/* Time Slot Timeline: Morning -> Afternoon -> Evening */}
          <div className="space-y-6">
            {/* Morning Slot */}
            <div className="space-y-3">
              <span className="text-xs font-bold uppercase tracking-wider text-amber-700 bg-amber-50 px-3 py-1 rounded-full border border-amber-200 inline-block">
                ☀️ Morning
              </span>
              <div className="space-y-3">
                {morningActs.length === 0 ? (
                  <p className="text-xs text-stone-400 italic pl-4">No morning activities scheduled.</p>
                ) : (
                  morningActs.map(act => (
                    <ActivityCard
                      key={act.id}
                      act={act}
                      tripId={trip.id}
                      dayNumber={selectedDayNumber}
                      onToggle={toggleActivityCompleted}
                      onDelete={deleteActivity}
                      onReorder={reorderActivity}
                    />
                  ))
                )}
              </div>
            </div>

            {/* Afternoon Slot */}
            <div className="space-y-3">
              <span className="text-xs font-bold uppercase tracking-wider text-brand-700 bg-brand-50 px-3 py-1 rounded-full border border-brand-200 inline-block">
                🌤️ Afternoon
              </span>
              <div className="space-y-3">
                {afternoonActs.length === 0 ? (
                  <p className="text-xs text-stone-400 italic pl-4">No afternoon activities scheduled.</p>
                ) : (
                  afternoonActs.map(act => (
                    <ActivityCard
                      key={act.id}
                      act={act}
                      tripId={trip.id}
                      dayNumber={selectedDayNumber}
                      onToggle={toggleActivityCompleted}
                      onDelete={deleteActivity}
                      onReorder={reorderActivity}
                    />
                  ))
                )}
              </div>
            </div>

            {/* Evening Slot */}
            <div className="space-y-3">
              <span className="text-xs font-bold uppercase tracking-wider text-indigo-700 bg-indigo-50 px-3 py-1 rounded-full border border-indigo-200 inline-block">
                🌙 Evening
              </span>
              <div className="space-y-3">
                {eveningActs.length === 0 ? (
                  <p className="text-xs text-stone-400 italic pl-4">No evening activities scheduled.</p>
                ) : (
                  eveningActs.map(act => (
                    <ActivityCard
                      key={act.id}
                      act={act}
                      tripId={trip.id}
                      dayNumber={selectedDayNumber}
                      onToggle={toggleActivityCompleted}
                      onDelete={deleteActivity}
                      onReorder={reorderActivity}
                    />
                  ))
                )}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* OVERVIEW TAB */}
      {activeTab === 'Overview' && (
        <div className="bg-white p-6 md:p-8 rounded-3xl border border-stone-200 space-y-4">
          <h3 className="font-serif text-xl font-bold text-stone-900">Trip Summary</h3>
          <p className="text-xs text-stone-600 leading-relaxed font-light">{trip.notes}</p>
          <div className="pt-4 border-t border-stone-100 text-xs space-y-2 text-stone-700">
            <p>• <strong>Destinations:</strong> {trip.destinationNames.join(', ')}</p>
            <p>• <strong>Travel Style:</strong> {trip.travelStyle}</p>
            <p>• <strong>Focus Interests:</strong> {trip.interests.join(', ')}</p>
          </div>
        </div>
      )}

      {/* BUDGET TAB */}
      {activeTab === 'Budget' && (
        <div className="bg-white p-6 md:p-8 rounded-3xl border border-stone-200 space-y-6">
          <h3 className="font-serif text-xl font-bold text-stone-900">Estimated Budget Breakdown</h3>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            <div className="p-4 bg-stone-50 rounded-2xl border border-stone-200">
              <span className="text-xs text-stone-500">Accommodation (~45%)</span>
              <p className="text-lg font-bold text-stone-900 mt-1"><PriceDisplay amountUSD={Math.round(trip.totalBudgetUSD * 0.45)} /></p>
            </div>
            <div className="p-4 bg-stone-50 rounded-2xl border border-stone-200">
              <span className="text-xs text-stone-500">Food & Dining (~25%)</span>
              <p className="text-lg font-bold text-stone-900 mt-1"><PriceDisplay amountUSD={Math.round(trip.totalBudgetUSD * 0.25)} /></p>
            </div>
            <div className="p-4 bg-stone-50 rounded-2xl border border-stone-200">
              <span className="text-xs text-stone-500">Transit (~15%)</span>
              <p className="text-lg font-bold text-stone-900 mt-1"><PriceDisplay amountUSD={Math.round(trip.totalBudgetUSD * 0.15)} /></p>
            </div>
            <div className="p-4 bg-stone-50 rounded-2xl border border-stone-200">
              <span className="text-xs text-stone-500">Activities (~15%)</span>
              <p className="text-lg font-bold text-stone-900 mt-1"><PriceDisplay amountUSD={Math.round(trip.totalBudgetUSD * 0.15)} /></p>
            </div>
          </div>
        </div>
      )}

      {/* BOOKINGS TAB */}
      {activeTab === 'Bookings' && (
        <div className="bg-white p-6 md:p-8 rounded-3xl border border-stone-200 space-y-4">
          <h3 className="font-serif text-xl font-bold text-stone-900">Confirmed & Pending Bookings</h3>
          {trip.bookings.length === 0 ? (
            <p className="text-stone-500 text-xs">No flights or hotels linked to this trip yet.</p>
          ) : (
            <div className="space-y-3">
              {trip.bookings.map(b => (
                <div key={b.id} className="p-4 rounded-2xl border border-stone-200 flex items-center justify-between text-xs">
                  <div>
                    <h4 className="font-bold text-stone-900 text-sm">{b.title}</h4>
                    <p className="text-stone-500">{b.provider} • Code: {b.confirmationCode} • Date: {b.date}</p>
                  </div>
                  <div className="text-right">
                    <span className="font-bold text-stone-900 block"><PriceDisplay amountUSD={b.costUSD} /></span>
                    <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${b.status === 'Confirmed' ? 'bg-emerald-100 text-emerald-800' : 'bg-amber-100 text-amber-800'}`}>
                      {b.status}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      )}

      {/* NOTES TAB */}
      {activeTab === 'Notes' && (
        <div className="bg-white p-6 md:p-8 rounded-3xl border border-stone-200 space-y-4">
          <h3 className="font-serif text-xl font-bold text-stone-900">Trip Notes & Packing Checklist</h3>
          <textarea
            value={trip.notes}
            onChange={e => updateTrip(trip.id, { notes: e.target.value })}
            rows={6}
            className="w-full text-xs text-stone-800 p-4 border border-stone-200 rounded-2xl focus:outline-hidden focus:border-brand-500"
            placeholder="Add packing lists, flight notes, emergency contacts..."
          />
        </div>
      )}

      {/* Add Activity Modal */}
      {showAddModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-xs p-4" onClick={() => setShowAddModal(false)}>
          <div className="bg-white rounded-3xl shadow-floating w-full max-w-md p-6 space-y-4" onClick={e => e.stopPropagation()}>
            <h3 className="font-serif text-lg font-bold text-stone-900">
              Add Activity to Day {selectedDayNumber}
            </h3>

            <form onSubmit={handleCreateActivity} className="space-y-3 text-xs">
              <div>
                <label className="font-semibold text-stone-600 block mb-1">Activity Name</label>
                <input
                  type="text"
                  placeholder="e.g. Visit Fushimi Inari Shrine"
                  value={newTitle}
                  onChange={e => setNewTitle(e.target.value)}
                  className="w-full p-2.5 border border-stone-200 rounded-xl focus:outline-hidden focus:border-brand-500"
                  required
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="font-semibold text-stone-600 block mb-1">Time Slot</label>
                  <select
                    value={newSlot}
                    onChange={e => setNewSlot(e.target.value as any)}
                    className="w-full p-2.5 border border-stone-200 rounded-xl bg-stone-50"
                  >
                    <option value="morning">Morning</option>
                    <option value="afternoon">Afternoon</option>
                    <option value="evening">Evening</option>
                  </select>
                </div>

                <div>
                  <label className="font-semibold text-stone-600 block mb-1">Estimated Time</label>
                  <input
                    type="text"
                    value={newTime}
                    onChange={e => setNewTime(e.target.value)}
                    className="w-full p-2.5 border border-stone-200 rounded-xl"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="font-semibold text-stone-600 block mb-1">Cost (USD)</label>
                  <input
                    type="number"
                    value={newCost}
                    onChange={e => setNewCost(Number(e.target.value))}
                    className="w-full p-2.5 border border-stone-200 rounded-xl"
                  />
                </div>

                <div>
                  <label className="font-semibold text-stone-600 block mb-1">Duration</label>
                  <input
                    type="text"
                    value={newDuration}
                    onChange={e => setNewDuration(e.target.value)}
                    className="w-full p-2.5 border border-stone-200 rounded-xl"
                  />
                </div>
              </div>

              <div className="flex items-center justify-end gap-2 pt-3 border-t border-stone-100">
                <button
                  type="button"
                  onClick={() => setShowAddModal(false)}
                  className="px-4 py-2 text-stone-500 hover:text-stone-800"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-5 py-2 bg-brand-500 text-white font-bold rounded-xl hover:bg-brand-600"
                >
                  Save Activity
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

// Activity item card with completed toggle, reordering, and deletion
interface ActivityCardProps {
  act: Activity;
  tripId: string;
  dayNumber: number;
  onToggle: (tripId: string, dayNumber: number, actId: string) => void;
  onDelete: (tripId: string, dayNumber: number, actId: string) => void;
  onReorder: (tripId: string, dayNumber: number, actId: string, dir: 'up' | 'down') => void;
}

const ActivityCard: React.FC<ActivityCardProps> = ({ act, tripId, dayNumber, onToggle, onDelete, onReorder }) => {
  return (
    <div className={`p-4 rounded-2xl border transition-all flex items-center justify-between gap-3 ${
      act.completed ? 'bg-stone-100/60 border-stone-200 opacity-60' : 'bg-white border-stone-200 hover:border-brand-200 hover:shadow-xs'
    }`}>
      <div className="flex items-center gap-3 flex-1 min-w-0">
        <button
          onClick={() => onToggle(tripId, dayNumber, act.id)}
          className="text-stone-400 hover:text-brand-600 shrink-0"
        >
          {act.completed ? <CheckCircle2 className="w-5 h-5 text-emerald-600" /> : <Circle className="w-5 h-5" />}
        </button>

        <div className="min-w-0">
          <div className="flex items-center gap-2">
            <span className="font-mono text-xs font-bold text-brand-600">{act.time}</span>
            <span className="text-stone-300">•</span>
            <h4 className={`text-sm font-bold text-stone-900 truncate ${act.completed ? 'line-through text-stone-500' : ''}`}>
              {act.title}
            </h4>
          </div>

          <div className="flex items-center gap-3 text-[11px] text-stone-500 mt-1 flex-wrap">
            <span className="flex items-center gap-1"><MapPin className="w-3 h-3 text-stone-400" /> {act.location}</span>
            <span>•</span>
            <span className="flex items-center gap-1"><Clock className="w-3 h-3 text-stone-400" /> {act.duration}</span>
            <span>•</span>
            <span className="font-semibold text-stone-900">
              {act.costUSD === 0 ? 'Free' : <PriceDisplay amountUSD={act.costUSD} />}
            </span>
            <span>•</span>
            <span className="text-stone-400">Transit: {act.travelTime}</span>
          </div>
        </div>
      </div>

      <div className="flex items-center gap-1 shrink-0">
        <button
          onClick={() => onReorder(tripId, dayNumber, act.id, 'up')}
          title="Move Earlier"
          className="p-1 rounded-lg hover:bg-stone-100 text-stone-400 hover:text-stone-700"
        >
          <ArrowUp className="w-3.5 h-3.5" />
        </button>
        <button
          onClick={() => onReorder(tripId, dayNumber, act.id, 'down')}
          title="Move Later"
          className="p-1 rounded-lg hover:bg-stone-100 text-stone-400 hover:text-stone-700"
        >
          <ArrowDown className="w-3.5 h-3.5" />
        </button>
        <button
          onClick={() => onDelete(tripId, dayNumber, act.id)}
          title="Remove Activity"
          className="p-1 rounded-lg hover:bg-rose-50 text-stone-400 hover:text-rose-600"
        >
          <Trash2 className="w-3.5 h-3.5" />
        </button>
      </div>
    </div>
  );
};
