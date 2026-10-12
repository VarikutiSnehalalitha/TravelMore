import React, { useState } from 'react';
import { Bookmark, Scale, PlusCircle, Share2, Check } from 'lucide-react';
import { useSavedStore } from '../../stores/useSavedStore';
import { useCompareStore } from '../../stores/useCompareStore';
import { useTripStore } from '../../stores/useTripStore';
import { useNavigate } from 'react-router-dom';

interface UniversalActionsProps {
  id: string;
  name: string;
  type: 'country' | 'destination';
  compact?: boolean;
}

export const UniversalActions: React.FC<UniversalActionsProps> = ({ id, name, type, compact = false }) => {
  const navigate = useNavigate();
  const { isSaved, toggleSaved } = useSavedStore();
  const { isInCompare, addToCompare, removeFromCompare } = useCompareStore();
  const { trips, addActivity } = useTripStore();

  const [copied, setCopied] = useState(false);
  const [showTripModal, setShowTripModal] = useState(false);

  const saved = isSaved(id);
  const inCompare = isInCompare(id);

  const handleCompareClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    e.preventDefault();
    if (inCompare) {
      removeFromCompare(id);
    } else {
      const added = addToCompare(id);
      if (!added) {
        alert('You can compare a maximum of 4 items at a time. Please remove an item in the Compare screen to add another.');
      }
    }
  };

  const handleSaveClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    e.preventDefault();
    toggleSaved(id);
  };

  const handleShareClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    e.preventDefault();
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleAddToTrip = (tripId: string) => {
    addActivity(tripId, 1, {
      title: `Visit ${name}`,
      timeSlot: 'afternoon',
      time: '02:00 PM',
      location: name,
      costUSD: 20,
      duration: '2.5 hours',
      travelTime: '15 mins transit',
      category: 'Sightseeing'
    });
    setShowTripModal(false);
    navigate(`/trips/${tripId}`);
  };

  if (compact) {
    return (
      <div className="flex items-center gap-1.5" onClick={e => e.stopPropagation()}>
        <button
          onClick={handleSaveClick}
          title={saved ? 'Remove from saved' : 'Save'}
          className={`p-1.5 rounded-full transition-all ${
            saved
              ? 'bg-rose-500 text-white shadow-xs hover:bg-rose-600'
              : 'bg-white/90 backdrop-blur-xs text-stone-700 hover:bg-white hover:text-rose-500'
          }`}
        >
          <Bookmark className={`w-3.5 h-3.5 ${saved ? 'fill-current' : ''}`} />
        </button>

        <button
          onClick={handleCompareClick}
          title={inCompare ? 'Remove from comparison' : 'Compare'}
          className={`p-1.5 rounded-full transition-all ${
            inCompare
              ? 'bg-amber-500 text-white shadow-xs hover:bg-amber-600'
              : 'bg-white/90 backdrop-blur-xs text-stone-700 hover:bg-white hover:text-amber-500'
          }`}
        >
          <Scale className="w-3.5 h-3.5" />
        </button>

        <button
          onClick={() => setShowTripModal(true)}
          title="Add to Trip"
          className="p-1.5 rounded-full bg-white/90 backdrop-blur-xs text-stone-700 hover:bg-white hover:text-brand-500 transition-all"
        >
          <PlusCircle className="w-3.5 h-3.5" />
        </button>

        {showTripModal && (
          <TripSelectModal
            name={name}
            trips={trips}
            onSelect={handleAddToTrip}
            onClose={() => setShowTripModal(false)}
            onCreateNew={() => {
              setShowTripModal(false);
              navigate('/trips/new');
            }}
          />
        )}
      </div>
    );
  }

  return (
    <div className="flex items-center gap-2 flex-wrap" onClick={e => e.stopPropagation()}>
      <button
        onClick={handleSaveClick}
        className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
          saved
            ? 'bg-rose-100 text-rose-700 border border-rose-200'
            : 'bg-stone-100 hover:bg-stone-200 text-stone-700 border border-stone-200/80'
        }`}
      >
        <Bookmark className={`w-3.5 h-3.5 ${saved ? 'fill-current text-rose-600' : ''}`} />
        <span>{saved ? 'Saved' : 'Save'}</span>
      </button>

      <button
        onClick={handleCompareClick}
        className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
          inCompare
            ? 'bg-amber-100 text-amber-800 border border-amber-300'
            : 'bg-stone-100 hover:bg-stone-200 text-stone-700 border border-stone-200/80'
        }`}
      >
        <Scale className="w-3.5 h-3.5" />
        <span>{inCompare ? 'In Compare' : 'Compare'}</span>
      </button>

      <button
        onClick={() => setShowTripModal(true)}
        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium bg-brand-50 hover:bg-brand-100 text-brand-700 border border-brand-200 transition-all"
      >
        <PlusCircle className="w-3.5 h-3.5" />
        <span>Add to Trip</span>
      </button>

      <button
        onClick={handleShareClick}
        className="inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg text-xs font-medium bg-stone-100 hover:bg-stone-200 text-stone-600 border border-stone-200/80 transition-all"
        title="Copy Link"
      >
        {copied ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Share2 className="w-3.5 h-3.5" />}
        <span>{copied ? 'Copied!' : 'Share'}</span>
      </button>

      {showTripModal && (
        <TripSelectModal
          name={name}
          trips={trips}
          onSelect={handleAddToTrip}
          onClose={() => setShowTripModal(false)}
          onCreateNew={() => {
            setShowTripModal(false);
            navigate('/trips/new');
          }}
        />
      )}
    </div>
  );
};

interface TripSelectModalProps {
  name: string;
  trips: any[];
  onSelect: (tripId: string) => void;
  onClose: () => void;
  onCreateNew: () => void;
}

const TripSelectModal: React.FC<TripSelectModalProps> = ({ name, trips, onSelect, onClose, onCreateNew }) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-xs p-4" onClick={onClose}>
      <div className="bg-white rounded-2xl shadow-elevated w-full max-w-md p-6 overflow-hidden" onClick={e => e.stopPropagation()}>
        <div className="flex items-center justify-between pb-3 border-b border-stone-100 mb-4">
          <h3 className="font-serif text-lg font-bold text-stone-900">Add "{name}" to Trip</h3>
          <button onClick={onClose} className="text-stone-400 hover:text-stone-700 text-sm font-semibold">✕</button>
        </div>

        {trips.length === 0 ? (
          <div className="text-center py-6">
            <p className="text-stone-500 text-sm mb-4">You do not have any trips planned yet.</p>
            <button
              onClick={onCreateNew}
              className="px-4 py-2 bg-brand-500 text-white rounded-xl text-sm font-semibold hover:bg-brand-600 transition-colors shadow-xs"
            >
              Create Your First Trip
            </button>
          </div>
        ) : (
          <div>
            <p className="text-xs text-stone-500 mb-3">Select an itinerary to add this destination:</p>
            <div className="space-y-2 max-h-60 overflow-y-auto mb-4 pr-1">
              {trips.map(trip => (
                <button
                  key={trip.id}
                  onClick={() => onSelect(trip.id)}
                  className="w-full text-left p-3 rounded-xl border border-stone-200 hover:border-brand-500 hover:bg-brand-50/50 transition-all flex items-center justify-between group"
                >
                  <div>
                    <h4 className="font-medium text-stone-900 text-sm group-hover:text-brand-600 transition-colors">{trip.title}</h4>
                    <p className="text-xs text-stone-500">{trip.totalDays} Days • {trip.startDate}</p>
                  </div>
                  <PlusCircle className="w-4 h-4 text-stone-400 group-hover:text-brand-500 transition-colors" />
                </button>
              ))}
            </div>

            <div className="pt-2 border-t border-stone-100 flex justify-between items-center">
              <button onClick={onCreateNew} className="text-xs font-semibold text-brand-600 hover:text-brand-700">
                + Or Create New Trip
              </button>
              <button onClick={onClose} className="px-3 py-1.5 text-xs text-stone-500 hover:text-stone-800">
                Cancel
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
