import React, { useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import {
  Sparkles,
  ArrowRight,
  ArrowLeft,
  Calendar,
  Users,
  Compass,
  CheckCircle2,
  DollarSign,
  Heart,
  Luggage,
  Clock,
  Check
} from 'lucide-react';
import { ALL_COUNTRIES } from '../data/countries';
import { ALL_DESTINATIONS } from '../data/destinations';
import { useTripStore } from '../stores/useTripStore';
import { TravelStyle } from '../types';

export const CreateTripView: React.FC = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const createTrip = useTripStore(state => state.createTrip);

  const initialCountry = searchParams.get('country') || 'japan';

  // Step wizard state (1 to 7)
  const [currentStep, setCurrentStep] = useState<number>(1);

  // Form states
  const [selectedCountryIds, setSelectedCountryIds] = useState<string[]>([initialCountry]);
  const [startDate, setStartDate] = useState<string>('2027-05-10');
  const [endDate, setEndDate] = useState<string>('2027-05-18');
  const [adults, setAdults] = useState<number>(2);
  const [children, setChildren] = useState<number>(0);
  const [travelStyle, setTravelStyle] = useState<TravelStyle>('Mid-range');
  const [selectedInterests, setSelectedInterests] = useState<string[]>(['Culture', 'Food', 'Nature']);
  const [totalBudget, setTotalBudget] = useState<number>(2200);

  // Step names
  const steps = [
    'Destination',
    'Dates',
    'Travelers',
    'Style',
    'Interests',
    'Budget',
    'Synthesis'
  ];

  const travelStyles: { style: TravelStyle; label: string; desc: string }[] = [
    { style: 'Budget', label: 'Budget Conscious', desc: 'Hostels, local transit, street dining' },
    { style: 'Mid-range', label: 'Comfort & Quality', desc: 'Boutique 3-4★ hotels, mixed dining' },
    { style: 'Luxury', label: 'Luxury & Private', desc: '5★ resorts, private tours, fine dining' },
    { style: 'Backpacking', label: 'Backpacking Nomad', desc: 'Slow travel, social dorms, off-beat trails' },
    { style: 'Solo', label: 'Solo Explorer', desc: 'Safe, flexible, vibrant social vibe' },
    { style: 'Couple', label: 'Romantic Escape', desc: 'Scenic dinners, sunset views, cozy stays' },
    { style: 'Family', label: 'Family Friendly', desc: 'Relaxed pacing, kid-safe activities' }
  ];

  const interestOptions = [
    { id: 'Food', label: '🍜 Culinary & Street Food' },
    { id: 'Culture', label: '🏯 Temples & Ancient Culture' },
    { id: 'Nature', label: '🏔️ Mountains & Scenic Nature' },
    { id: 'Beaches', label: '🏖️ Golden Beaches & Coast' },
    { id: 'Adventure', label: '🥾 Hiking & Adrenaline' },
    { id: 'History', label: '🏛️ Historic Ruins & Museums' },
    { id: 'Nightlife', label: '🍸 Nightlife & Rooftop Bars' },
    { id: 'Shopping', label: '🛍️ Artisan Markets & Shopping' }
  ];

  const toggleInterest = (id: string) => {
    if (selectedInterests.includes(id)) {
      if (selectedInterests.length > 1) {
        setSelectedInterests(selectedInterests.filter(i => i !== id));
      }
    } else {
      setSelectedInterests([...selectedInterests, id]);
    }
  };

  const toggleCountry = (id: string) => {
    if (selectedCountryIds.includes(id)) {
      if (selectedCountryIds.length > 1) {
        setSelectedCountryIds(selectedCountryIds.filter(c => c !== id));
      }
    } else {
      setSelectedCountryIds([...selectedCountryIds, id]);
    }
  };

  // Generate trip handler
  const handleGenerateTrip = () => {
    const primaryCountryObj = ALL_COUNTRIES.find(c => c.id === selectedCountryIds[0]) || ALL_COUNTRIES[0];
    const relatedDestinations = ALL_DESTINATIONS.filter(d => selectedCountryIds.includes(d.countryId));
    const destNames = relatedDestinations.length > 0
      ? relatedDestinations.slice(0, 3).map(d => d.name)
      : [primaryCountryObj.capital];

    const newTrip = createTrip({
      title: `${primaryCountryObj.name} Journey: ${destNames.join(' & ')}`,
      destinationNames: destNames,
      countryIds: selectedCountryIds,
      startDate,
      endDate,
      travelers: { adults, children },
      travelStyle,
      interests: selectedInterests,
      totalBudgetUSD: totalBudget
    });

    navigate(`/trips/${newTrip.id}`);
  };

  return (
    <div className="max-w-3xl mx-auto space-y-8 py-6 pb-20">
      {/* Step Tracker Header */}
      <div className="bg-white p-6 rounded-3xl border border-stone-200 shadow-2xs space-y-4">
        <div className="flex items-center justify-between text-xs text-stone-500 font-semibold">
          <span>Step {currentStep} of 7: <strong className="text-stone-900">{steps[currentStep - 1]}</strong></span>
          <span className="text-brand-600 font-bold">{Math.round((currentStep / 7) * 100)}% Complete</span>
        </div>

        {/* Progress bar */}
        <div className="w-full bg-stone-100 h-2 rounded-full overflow-hidden">
          <div
            className="bg-brand-500 h-full rounded-full transition-all duration-300"
            style={{ width: `${(currentStep / 7) * 100}%` }}
          />
        </div>
      </div>

      {/* Wizard Steps Form */}
      <div className="bg-white p-6 md:p-10 rounded-3xl border border-stone-200 shadow-elevated space-y-8">
        {/* STEP 1: DESTINATION */}
        {currentStep === 1 && (
          <div className="space-y-6 animate-in fade-in duration-200">
            <div>
              <h2 className="font-serif text-2xl md:text-3xl font-bold text-stone-900">
                Where are you heading?
              </h2>
              <p className="text-xs text-stone-500 mt-1">
                Select one or more countries you would like to include in this itinerary.
              </p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 max-h-96 overflow-y-auto pr-1">
              {ALL_COUNTRIES.map(country => {
                const selected = selectedCountryIds.includes(country.id);
                return (
                  <button
                    key={country.id}
                    type="button"
                    onClick={() => toggleCountry(country.id)}
                    className={`p-3 rounded-2xl border text-left transition-all flex flex-col justify-between ${
                      selected
                        ? 'border-brand-500 bg-brand-50/70 shadow-xs'
                        : 'border-stone-200 hover:border-stone-300 bg-stone-50/50'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-2xl">{country.flag}</span>
                      {selected && <Check className="w-4 h-4 text-brand-600" />}
                    </div>
                    <div>
                      <h4 className="font-bold text-xs text-stone-900 leading-tight">{country.name}</h4>
                      <p className="text-[10px] text-stone-400">{country.continent}</p>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        )}

        {/* STEP 2: DATES */}
        {currentStep === 2 && (
          <div className="space-y-6 animate-in fade-in duration-200">
            <div>
              <h2 className="font-serif text-2xl md:text-3xl font-bold text-stone-900">
                When are you traveling?
              </h2>
              <p className="text-xs text-stone-500 mt-1">
                Set your departure and return dates to calculate trip length and seasonal conditions.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="text-xs font-semibold text-stone-600 block mb-1">Start Date</label>
                <input
                  type="date"
                  value={startDate}
                  onChange={e => setStartDate(e.target.value)}
                  className="w-full text-sm font-semibold p-3 border border-stone-200 rounded-xl bg-stone-50 focus:outline-hidden focus:border-brand-500"
                />
              </div>

              <div>
                <label className="text-xs font-semibold text-stone-600 block mb-1">End Date</label>
                <input
                  type="date"
                  value={endDate}
                  onChange={e => setEndDate(e.target.value)}
                  className="w-full text-sm font-semibold p-3 border border-stone-200 rounded-xl bg-stone-50 focus:outline-hidden focus:border-brand-500"
                />
              </div>
            </div>
          </div>
        )}

        {/* STEP 3: TRAVELERS */}
        {currentStep === 3 && (
          <div className="space-y-6 animate-in fade-in duration-200">
            <div>
              <h2 className="font-serif text-2xl md:text-3xl font-bold text-stone-900">
                Who is joining you?
              </h2>
              <p className="text-xs text-stone-500 mt-1">
                Tell us how many adults and children will be on this trip.
              </p>
            </div>

            <div className="space-y-4 max-w-md">
              <div className="flex items-center justify-between p-4 bg-stone-50 rounded-2xl border border-stone-200">
                <div>
                  <h4 className="font-bold text-sm text-stone-900">Adults</h4>
                  <p className="text-xs text-stone-500">Age 13 and above</p>
                </div>
                <div className="flex items-center gap-3">
                  <button
                    onClick={() => setAdults(Math.max(1, adults - 1))}
                    className="w-8 h-8 rounded-full bg-white border border-stone-300 font-bold text-stone-700 flex items-center justify-center hover:bg-stone-100"
                  >
                    -
                  </button>
                  <span className="font-bold text-base w-4 text-center">{adults}</span>
                  <button
                    onClick={() => setAdults(adults + 1)}
                    className="w-8 h-8 rounded-full bg-white border border-stone-300 font-bold text-stone-700 flex items-center justify-center hover:bg-stone-100"
                  >
                    +
                  </button>
                </div>
              </div>

              <div className="flex items-center justify-between p-4 bg-stone-50 rounded-2xl border border-stone-200">
                <div>
                  <h4 className="font-bold text-sm text-stone-900">Children</h4>
                  <p className="text-xs text-stone-500">Age 0 to 12</p>
                </div>
                <div className="flex items-center gap-3">
                  <button
                    onClick={() => setChildren(Math.max(0, children - 1))}
                    className="w-8 h-8 rounded-full bg-white border border-stone-300 font-bold text-stone-700 flex items-center justify-center hover:bg-stone-100"
                  >
                    -
                  </button>
                  <span className="font-bold text-base w-4 text-center">{children}</span>
                  <button
                    onClick={() => setChildren(children + 1)}
                    className="w-8 h-8 rounded-full bg-white border border-stone-300 font-bold text-stone-700 flex items-center justify-center hover:bg-stone-100"
                  >
                    +
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* STEP 4: TRAVEL STYLE */}
        {currentStep === 4 && (
          <div className="space-y-6 animate-in fade-in duration-200">
            <div>
              <h2 className="font-serif text-2xl md:text-3xl font-bold text-stone-900">
                Choose your travel style
              </h2>
              <p className="text-xs text-stone-500 mt-1">
                This dictates accommodation recommendations, dining style, and daily pacing.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {travelStyles.map(item => (
                <button
                  key={item.style}
                  type="button"
                  onClick={() => setTravelStyle(item.style)}
                  className={`p-4 rounded-2xl border text-left transition-all ${
                    travelStyle === item.style
                      ? 'border-brand-500 bg-brand-50/70 shadow-xs'
                      : 'border-stone-200 hover:border-stone-300 bg-stone-50/50'
                  }`}
                >
                  <div className="flex items-center justify-between mb-1">
                    <h4 className="font-bold text-sm text-stone-900">{item.label}</h4>
                    {travelStyle === item.style && <Check className="w-4 h-4 text-brand-600" />}
                  </div>
                  <p className="text-xs text-stone-500 font-light">{item.desc}</p>
                </button>
              ))}
            </div>
          </div>
        )}

        {/* STEP 5: INTERESTS */}
        {currentStep === 5 && (
          <div className="space-y-6 animate-in fade-in duration-200">
            <div>
              <h2 className="font-serif text-2xl md:text-3xl font-bold text-stone-900">
                What are your main interests?
              </h2>
              <p className="text-xs text-stone-500 mt-1">
                Select the themes you want prioritized in morning, afternoon, and evening slots.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {interestOptions.map(opt => {
                const checked = selectedInterests.includes(opt.id);
                return (
                  <button
                    key={opt.id}
                    type="button"
                    onClick={() => toggleInterest(opt.id)}
                    className={`p-3.5 rounded-2xl border text-left transition-all flex items-center justify-between ${
                      checked
                        ? 'border-brand-500 bg-brand-50/70 shadow-xs'
                        : 'border-stone-200 hover:border-stone-300 bg-stone-50/50'
                    }`}
                  >
                    <span className="font-bold text-xs text-stone-900">{opt.label}</span>
                    {checked && <Check className="w-4 h-4 text-brand-600" />}
                  </button>
                );
              })}
            </div>
          </div>
        )}

        {/* STEP 6: BUDGET */}
        {currentStep === 6 && (
          <div className="space-y-6 animate-in fade-in duration-200">
            <div>
              <h2 className="font-serif text-2xl md:text-3xl font-bold text-stone-900">
                Set total trip budget
              </h2>
              <p className="text-xs text-stone-500 mt-1">
                Estimated budget across lodging, dining, transit, and sight admissions.
              </p>
            </div>

            <div className="p-6 bg-stone-50 rounded-2xl border border-stone-200 space-y-4 max-w-md">
              <div>
                <label className="text-xs font-semibold text-stone-600 block mb-1">Total Target (USD)</label>
                <div className="flex items-center gap-2">
                  <span className="text-xl font-bold text-stone-400">$</span>
                  <input
                    type="number"
                    value={totalBudget}
                    onChange={e => setTotalBudget(Number(e.target.value))}
                    step="100"
                    className="w-full text-2xl font-bold p-3 border border-stone-200 rounded-xl bg-white focus:outline-hidden focus:border-brand-500"
                  />
                </div>
              </div>
              <p className="text-xs text-stone-500">
                Recommended for {travelStyle} travel with {adults + children} travelers: ~$2,000 - $3,500.
              </p>
            </div>
          </div>
        )}

        {/* STEP 7: SYNTHESIS PREVIEW & LAUNCH */}
        {currentStep === 7 && (
          <div className="space-y-6 text-center py-6 animate-in fade-in duration-200">
            <div className="w-20 h-20 rounded-full bg-brand-50 text-brand-500 flex items-center justify-center mx-auto shadow-xs">
              <Sparkles className="w-10 h-10 animate-pulse" />
            </div>

            <div className="space-y-2">
              <h2 className="font-serif text-3xl font-bold text-stone-900">
                Ready to Synthesize Your Journey
              </h2>
              <p className="text-xs text-stone-500 max-w-md mx-auto leading-relaxed">
                We'll organize recommended cities, daily morning/afternoon/evening activities, transport times, and estimated costs into a drag-and-drop workspace.
              </p>
            </div>

            <div className="p-4 bg-stone-50 rounded-2xl border border-stone-200 text-left max-w-md mx-auto text-xs space-y-1.5 text-stone-700">
              <p>• <strong>Destinations:</strong> {selectedCountryIds.map(c => c.toUpperCase()).join(', ')}</p>
              <p>• <strong>Dates:</strong> {startDate} to {endDate}</p>
              <p>• <strong>Travelers:</strong> {adults} Adults, {children} Children ({travelStyle} style)</p>
              <p>• <strong>Focus:</strong> {selectedInterests.join(', ')}</p>
              <p>• <strong>Total Budget:</strong> ${totalBudget.toLocaleString()}</p>
            </div>

            <button
              onClick={handleGenerateTrip}
              className="px-8 py-3.5 bg-brand-500 hover:bg-brand-600 text-white font-bold text-sm rounded-2xl shadow-elevated transition-transform hover:scale-105"
            >
              🚀 Generate Trip Itinerary Now
            </button>
          </div>
        )}

        {/* Wizard Navigation Buttons */}
        {currentStep < 7 && (
          <div className="pt-6 border-t border-stone-100 flex items-center justify-between">
            {currentStep > 1 ? (
              <button
                type="button"
                onClick={() => setCurrentStep(currentStep - 1)}
                className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl border border-stone-200 text-xs font-semibold text-stone-600 hover:bg-stone-100 transition-colors"
              >
                <ArrowLeft className="w-3.5 h-3.5" />
                <span>Back</span>
              </button>
            ) : <div />}

            <button
              type="button"
              onClick={() => setCurrentStep(currentStep + 1)}
              className="inline-flex items-center gap-1.5 px-6 py-2.5 rounded-xl bg-brand-500 hover:bg-brand-600 text-white text-xs font-bold shadow-xs transition-colors"
            >
              <span>Continue</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
