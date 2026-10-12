import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  User,
  Sparkles,
  Bookmark,
  Luggage,
  Compass,
  Check,
  Save,
  Globe,
  Star
} from 'lucide-react';
import { useUserStore } from '../stores/useUserStore';
import { useTripStore } from '../stores/useTripStore';
import { useSavedStore } from '../stores/useSavedStore';
import { TravelStyle } from '../types';

export const ProfileView: React.FC = () => {
  const navigate = useNavigate();
  const { profile, updateProfile, updatePreferences } = useUserStore();
  const trips = useTripStore(state => state.trips);
  const savedCount = useSavedStore(state => state.savedItemIds.length);
  const collectionsCount = useSavedStore(state => state.collections.length);

  const [name, setName] = useState(profile.name);
  const [bio, setBio] = useState(profile.bio);
  const [homeCountry, setHomeCountry] = useState(profile.homeCountry);

  // Preference states
  const [budgetTier, setBudgetTier] = useState(profile.preferences.budgetTier);
  const [travelStyle, setTravelStyle] = useState<TravelStyle>(profile.preferences.travelStyle);
  const [tripLength, setTripLength] = useState(profile.preferences.preferredTripLengthDays);
  const [selectedActivities, setSelectedActivities] = useState<string[]>(profile.preferences.favoriteActivities);
  const [savedSuccess, setSavedSuccess] = useState(false);

  const activityOptions = ['Culture', 'Food', 'Nature', 'Beaches', 'Architecture', 'Photography', 'Nightlife', 'Adventure'];

  const toggleActivity = (act: string) => {
    if (selectedActivities.includes(act)) {
      if (selectedActivities.length > 1) {
        setSelectedActivities(selectedActivities.filter(a => a !== act));
      }
    } else {
      setSelectedActivities([...selectedActivities, act]);
    }
  };

  const handleSaveProfile = (e: React.FormEvent) => {
    e.preventDefault();
    updateProfile({ name, bio, homeCountry });
    updatePreferences({
      budgetTier,
      travelStyle,
      preferredTripLengthDays: tripLength,
      favoriteActivities: selectedActivities
    });
    setSavedSuccess(true);
    setTimeout(() => setSavedSuccess(false), 2500);
  };

  return (
    <div className="max-w-4xl mx-auto space-y-8 pb-16">
      {/* Profile Header Card */}
      <div className="bg-white rounded-3xl p-6 md:p-8 border border-stone-200/80 shadow-2xs flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div className="flex items-center gap-5">
          <img
            src={profile.avatar}
            alt={profile.name}
            className="w-20 h-20 rounded-full object-cover ring-4 ring-brand-100 shadow-md shrink-0"
          />
          <div>
            <div className="flex items-center gap-2">
              <h1 className="font-serif text-2xl md:text-3xl font-bold text-stone-900">{profile.name}</h1>
              <span className="text-xs text-stone-400 font-mono">{profile.handle}</span>
            </div>
            <p className="text-xs text-stone-500 font-light mt-1 max-w-md">{profile.bio}</p>
            <p className="text-xs text-stone-400 mt-2 flex items-center gap-1.5">
              <Globe className="w-3.5 h-3.5" />
              <span>Home: {profile.homeCountry}</span>
            </p>
          </div>
        </div>

        {/* Passport Stats */}
        <div className="flex items-center gap-4 bg-stone-50 p-4 rounded-2xl border border-stone-200 self-start md:self-auto">
          <div className="text-center px-3">
            <span className="text-2xl font-serif font-black text-stone-900 block">{trips.length}</span>
            <span className="text-[10px] font-bold text-stone-400 uppercase tracking-wider">Itineraries</span>
          </div>
          <div className="w-px h-8 bg-stone-200" />
          <div className="text-center px-3">
            <span className="text-2xl font-serif font-black text-stone-900 block">{savedCount}</span>
            <span className="text-[10px] font-bold text-stone-400 uppercase tracking-wider">Saved Places</span>
          </div>
          <div className="w-px h-8 bg-stone-200" />
          <div className="text-center px-3">
            <span className="text-2xl font-serif font-black text-stone-900 block">{collectionsCount}</span>
            <span className="text-[10px] font-bold text-stone-400 uppercase tracking-wider">Collections</span>
          </div>
        </div>
      </div>

      {/* Preferences & Personalization Form */}
      <form onSubmit={handleSaveProfile} className="bg-white rounded-3xl p-6 md:p-8 border border-stone-200 shadow-2xs space-y-6">
        <div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-brand-50 text-brand-700 border border-brand-200 mb-2">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Discovery Personalization Engine</span>
          </div>
          <h2 className="font-serif text-2xl font-bold text-stone-900">
            Travel Style & Preferences
          </h2>
          <p className="text-xs text-stone-500 mt-1">
            These settings customize your "Personalized Recommendations" feed on the Home screen.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 pt-2">
          {/* Traveler Name */}
          <div>
            <label className="text-xs font-semibold text-stone-600 block mb-1">Display Name</label>
            <input
              type="text"
              value={name}
              onChange={e => setName(e.target.value)}
              className="w-full text-xs p-2.5 border border-stone-200 rounded-xl bg-stone-50 focus:outline-hidden focus:border-brand-500 focus:bg-white"
            />
          </div>

          {/* Home country */}
          <div>
            <label className="text-xs font-semibold text-stone-600 block mb-1">Home Country</label>
            <input
              type="text"
              value={homeCountry}
              onChange={e => setHomeCountry(e.target.value)}
              className="w-full text-xs p-2.5 border border-stone-200 rounded-xl bg-stone-50 focus:outline-hidden focus:border-brand-500 focus:bg-white"
            />
          </div>

          {/* Travel style */}
          <div>
            <label className="text-xs font-semibold text-stone-600 block mb-1">Preferred Travel Style</label>
            <select
              value={travelStyle}
              onChange={e => setTravelStyle(e.target.value as any)}
              className="w-full text-xs p-2.5 border border-stone-200 rounded-xl bg-stone-50 focus:outline-hidden focus:border-brand-500 font-semibold"
            >
              <option value="Solo">Solo Explorer</option>
              <option value="Couple">Romantic Couple</option>
              <option value="Family">Family Friendly</option>
              <option value="Backpacking">Backpacking Nomad</option>
              <option value="Mid-range">Mid-Range Comfort</option>
              <option value="Luxury">Luxury & Private</option>
            </select>
          </div>

          {/* Budget tier */}
          <div>
            <label className="text-xs font-semibold text-stone-600 block mb-1">Target Daily Budget</label>
            <select
              value={budgetTier}
              onChange={e => setBudgetTier(e.target.value as any)}
              className="w-full text-xs p-2.5 border border-stone-200 rounded-xl bg-stone-50 focus:outline-hidden focus:border-brand-500 font-semibold"
            >
              <option value="Budget">Budget (&lt; $50/day)</option>
              <option value="Mid-range">Mid-Range ($50 - $120/day)</option>
              <option value="Luxury">Luxury (&gt; $120/day)</option>
            </select>
          </div>
        </div>

        {/* Favorite activities */}
        <div>
          <label className="text-xs font-semibold text-stone-600 block mb-2">
            Favorite Themes & Activities (Select all that apply)
          </label>
          <div className="flex flex-wrap gap-2">
            {activityOptions.map(act => {
              const active = selectedActivities.includes(act);
              return (
                <button
                  key={act}
                  type="button"
                  onClick={() => toggleActivity(act)}
                  className={`px-3 py-1.5 rounded-full text-xs font-semibold transition-all ${
                    active
                      ? 'bg-brand-500 text-white shadow-xs'
                      : 'bg-stone-100 text-stone-600 hover:bg-stone-200'
                  }`}
                >
                  {active ? `✓ ${act}` : act}
                </button>
              );
            })}
          </div>
        </div>

        {/* Save button */}
        <div className="pt-4 border-t border-stone-100 flex items-center justify-between">
          {savedSuccess ? (
            <span className="text-xs font-bold text-emerald-600 flex items-center gap-1">
              ✓ Preferences updated and active!
            </span>
          ) : <div />}

          <button
            type="submit"
            className="flex items-center gap-2 px-6 py-2.5 bg-brand-500 hover:bg-brand-600 text-white font-bold text-xs rounded-xl shadow-xs transition-colors"
          >
            <Save className="w-4 h-4" />
            <span>Save Preferences</span>
          </button>
        </div>
      </form>
    </div>
  );
};
