import React, { useState } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import {
  Star,
  ShieldCheck,
  Calendar,
  Compass,
  ArrowRight,
  PlusCircle,
  Bookmark,
  Scale,
  Share2,
  DollarSign,
  UtensilsCrossed,
  Sparkles,
  CheckCircle2,
  XCircle,
  HelpCircle,
  Calculator,
  ThumbsUp,
  ThumbsDown
} from 'lucide-react';
import { ALL_COUNTRIES } from '../data/countries';
import { ALL_DESTINATIONS } from '../data/destinations';
import { DestinationCard } from '../components/cards/DestinationCard';
import { PriceDisplay } from '../components/common/PriceDisplay';
import { UniversalActions } from '../components/common/UniversalActions';
import { useCurrencyStore } from '../stores/useCurrencyStore';

export const CountryOverviewView: React.FC = () => {
  const { country: countryId } = useParams<{ country: string }>();
  const navigate = useNavigate();
  const { activeCurrency, convert } = useCurrencyStore();

  const country = ALL_COUNTRIES.find(c => c.id === countryId);

  // Tab state
  const [activeTab, setActiveTab] = useState<
    'Overview' | 'Places' | 'Cities' | 'Hidden Gems' | 'Food' | 'Budget' | 'Currency' | 'Travel Tips' | 'Pros & Cons'
  >('Overview');

  // Currency converter state
  const [localAmount, setLocalAmount] = useState<number>(1000);

  if (!country) {
    return (
      <div className="py-20 text-center space-y-4">
        <h2 className="font-serif text-2xl font-bold text-stone-900">Country Not Found</h2>
        <p className="text-stone-500 text-sm">We couldn't locate the country you're looking for.</p>
        <button
          onClick={() => navigate('/countries')}
          className="px-4 py-2 bg-brand-500 text-white rounded-xl text-xs font-semibold hover:bg-brand-600"
        >
          Browse All Countries
        </button>
      </div>
    );
  }

  // Filter destinations belonging to this country
  const countryDestinations = ALL_DESTINATIONS.filter(d => d.countryId === country.id);
  const hiddenGems = countryDestinations.filter(d => d.rankingTier === 'hidden_gem');
  const cities = countryDestinations.filter(d => d.category === 'Cities');
  const popularPlaces = countryDestinations.filter(d => d.rankingTier === 'popular' || d.rankingTier === 'iconic');

  // Calculate currency conversion
  // 1 USD = country.currency.exchangeRateToUSD local units
  // localAmount / exchangeRateToUSD = amountInUSD
  const amountInUSD = localAmount / country.currency.exchangeRateToUSD;
  const convertedUserAmount = convert(amountInUSD);

  const tabs = [
    'Overview',
    'Places',
    'Cities',
    'Hidden Gems',
    'Food',
    'Budget',
    'Currency',
    'Travel Tips',
    'Pros & Cons'
  ] as const;

  return (
    <div className="space-y-8 pb-16">
      {/* 1. Hero Header */}
      <div className="relative rounded-3xl overflow-hidden bg-stone-900 text-white min-h-[380px] md:min-h-[440px] flex flex-col justify-end p-6 md:p-10 shadow-floating">
        <img
          src={country.heroImage}
          alt={country.name}
          className="absolute inset-0 w-full h-full object-cover opacity-60 scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/50 to-transparent" />

        <div className="relative z-10 space-y-4 max-w-4xl">
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-3xl leading-none">{country.flag}</span>
            <span className="px-3 py-1 rounded-full text-xs font-bold bg-white/20 backdrop-blur-md uppercase tracking-wider">
              {country.continent}
            </span>
            <div className="flex items-center gap-1 px-2.5 py-1 bg-amber-400 text-stone-950 rounded-full text-xs font-bold shadow-xs">
              <Star className="w-3.5 h-3.5 fill-current" />
              <span>{country.overallScore.toFixed(1)} Overall Score</span>
            </div>
            <div className="flex items-center gap-1 px-2.5 py-1 bg-emerald-500/80 backdrop-blur-md text-white rounded-full text-xs font-bold">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>Safety: {country.safetyScore}/10</span>
            </div>
          </div>

          <h1 className="font-serif text-3xl md:text-5xl lg:text-6xl font-black tracking-tight leading-tight">
            {country.name}
          </h1>

          <p className="text-xs md:text-sm text-stone-200 line-clamp-2 md:line-clamp-3 font-light leading-relaxed max-w-3xl">
            {country.overview}
          </p>

          {/* Quick Stats Bar */}
          <div className="pt-2 flex flex-wrap items-center gap-4 text-xs text-stone-300 border-t border-white/20">
            <span>Capital: <strong className="text-white">{country.capital}</strong></span>
            <span>•</span>
            <span>Currency: <strong className="text-white">{country.currency.code} ({country.currency.symbol})</strong></span>
            <span>•</span>
            <span>Best Months: <strong className="text-white">{country.bestMonths.join(', ')}</strong></span>
            <span>•</span>
            <span>Daily Budget: <strong className="text-white"><PriceDisplay amountUSD={country.dailyBudgetUSD} /> / day</strong></span>
          </div>

          {/* Universal Actions Bar */}
          <div className="pt-2 flex flex-wrap items-center gap-3">
            <UniversalActions id={country.id} name={country.name} type="country" />
            <button
              onClick={() => navigate(`/trips/new?country=${country.id}`)}
              className="px-4 py-1.5 rounded-lg text-xs font-bold bg-brand-500 hover:bg-brand-600 text-white shadow-xs transition-colors"
            >
              Plan a Trip to {country.name} →
            </button>
          </div>
        </div>
      </div>

      {/* 2. Quick Travel Stats Strip */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3">
        <div className="bg-white p-3.5 rounded-2xl border border-stone-200 shadow-2xs">
          <span className="text-[10px] uppercase font-bold text-stone-400 block mb-0.5">Primary Language</span>
          <p className="text-xs font-bold text-stone-900">{country.quickStats.language}</p>
        </div>
        <div className="bg-white p-3.5 rounded-2xl border border-stone-200 shadow-2xs">
          <span className="text-[10px] uppercase font-bold text-stone-400 block mb-0.5">Plug & Power</span>
          <p className="text-xs font-bold text-stone-900">{country.quickStats.plugType}</p>
        </div>
        <div className="bg-white p-3.5 rounded-2xl border border-stone-200 shadow-2xs">
          <span className="text-[10px] uppercase font-bold text-stone-400 block mb-0.5">Driving Side</span>
          <p className="text-xs font-bold text-stone-900">{country.quickStats.drivingSide} Side</p>
        </div>
        <div className="bg-white p-3.5 rounded-2xl border border-stone-200 shadow-2xs">
          <span className="text-[10px] uppercase font-bold text-stone-400 block mb-0.5">Tap Water</span>
          <p className="text-xs font-bold text-stone-900">{country.quickStats.waterDrinkable ? '✅ Safe to Drink' : '⚠️ Bottled Advised'}</p>
        </div>
        <div className="bg-white p-3.5 rounded-2xl border border-stone-200 shadow-2xs">
          <span className="text-[10px] uppercase font-bold text-stone-400 block mb-0.5">Visa Difficulty</span>
          <p className="text-xs font-bold text-stone-900">{country.visaDifficulty}</p>
        </div>
      </div>

      {/* 3. Sticky Sub-navigation Tabs */}
      <div className="sticky top-16 z-20 bg-stone-50/95 backdrop-blur-md py-2 border-b border-stone-200">
        <div className="flex items-center gap-1.5 overflow-x-auto scrollbar-none pb-1">
          {tabs.map(tab => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-3.5 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition-all ${
                activeTab === tab
                  ? 'bg-stone-900 text-white shadow-xs font-bold'
                  : 'bg-white border border-stone-200 text-stone-600 hover:text-stone-900 hover:bg-stone-100'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      {/* 4. Tab Content Sections */}
      <div className="space-y-8">
        {/* OVERVIEW TAB */}
        {activeTab === 'Overview' && (
          <div className="space-y-8">
            {/* Story & Highlights */}
            <div className="bg-white p-6 md:p-8 rounded-3xl border border-stone-200 shadow-2xs space-y-4">
              <h2 className="font-serif text-2xl font-bold text-stone-900">About {country.name}</h2>
              <p className="text-sm text-stone-700 leading-relaxed font-light">
                {country.overview}
              </p>

              <div className="pt-4 border-t border-stone-100">
                <span className="text-xs font-bold text-stone-400 uppercase tracking-wider block mb-2">
                  Known Best For
                </span>
                <div className="flex flex-wrap gap-2">
                  {country.bestFor.map((item, idx) => (
                    <span key={idx} className="px-3 py-1 bg-brand-50 text-brand-700 rounded-full text-xs font-semibold border border-brand-200">
                      ✨ {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Top Destinations Preview */}
            {countryDestinations.length > 0 && (
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="font-serif text-xl font-bold text-stone-900">Places in {country.name}</h3>
                  <button onClick={() => setActiveTab('Places')} className="text-xs font-semibold text-brand-600 hover:text-brand-700">
                    View All ({countryDestinations.length}) →
                  </button>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                  {countryDestinations.slice(0, 3).map(dest => (
                    <DestinationCard key={dest.id} destination={dest} />
                  ))}
                </div>
              </div>
            )}

            {/* Month-by-Month Weather Matrix */}
            <div className="bg-white p-6 md:p-8 rounded-3xl border border-stone-200 shadow-2xs space-y-4">
              <h3 className="font-serif text-xl font-bold text-stone-900">
                Month-by-Month Travel Conditions
              </h3>
              <p className="text-xs text-stone-500">
                Temperature, crowd pressure, and rainfall throughout the calendar year in {country.name}.
              </p>

              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 pt-2">
                {country.monthConditions.map(m => (
                  <div
                    key={m.month}
                    className={`p-3 rounded-2xl border text-center space-y-1 ${
                      m.status === 'Peak'
                        ? 'bg-rose-50/60 border-rose-200'
                        : m.status === 'Shoulder'
                        ? 'bg-amber-50/60 border-amber-200'
                        : 'bg-stone-50 border-stone-200'
                    }`}
                  >
                    <span className="font-bold text-sm text-stone-900 block">{m.month}</span>
                    <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full inline-block ${
                      m.status === 'Peak' ? 'bg-rose-500 text-white' : m.status === 'Shoulder' ? 'bg-amber-500 text-white' : 'bg-stone-200 text-stone-700'
                    }`}>
                      {m.status}
                    </span>
                    <p className="text-xs font-semibold text-stone-800 pt-1">{m.temp}</p>
                    <p className="text-[11px] text-stone-500">Crowds: {m.crowds}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* PLACES TAB */}
        {activeTab === 'Places' && (
          <div className="space-y-4">
            <h2 className="font-serif text-2xl font-bold text-stone-900">
              All Destinations in {country.name} ({countryDestinations.length})
            </h2>
            {countryDestinations.length === 0 ? (
              <p className="text-stone-500 text-sm">No destination profiles currently cataloged for this country.</p>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                {countryDestinations.map(dest => (
                  <DestinationCard key={dest.id} destination={dest} />
                ))}
              </div>
            )}
          </div>
        )}

        {/* CITIES TAB */}
        {activeTab === 'Cities' && (
          <div className="space-y-4">
            <h2 className="font-serif text-2xl font-bold text-stone-900">
              Major Cities in {country.name}
            </h2>
            {cities.length === 0 ? (
              <div className="p-8 bg-white rounded-2xl border border-stone-200 text-center">
                <p className="text-stone-500 text-sm">Capital city: <strong>{country.capital}</strong></p>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                {cities.map(dest => (
                  <DestinationCard key={dest.id} destination={dest} />
                ))}
              </div>
            )}
          </div>
        )}

        {/* HIDDEN GEMS TAB */}
        {activeTab === 'Hidden Gems' && (
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <span className="text-2xl">💎</span>
              <div>
                <h2 className="font-serif text-2xl font-bold text-stone-900">Hidden Gems in {country.name}</h2>
                <p className="text-xs text-stone-500">Quiet spots and under-the-radar retreats</p>
              </div>
            </div>
            {hiddenGems.length === 0 ? (
              <div className="p-8 bg-white rounded-2xl border border-stone-200 text-center">
                <p className="text-stone-500 text-sm">Exploring more secret gems in this region. Check back soon!</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                {hiddenGems.map(dest => (
                  <DestinationCard key={dest.id} destination={dest} />
                ))}
              </div>
            )}
          </div>
        )}

        {/* FOOD TAB */}
        {activeTab === 'Food' && (
          <div className="space-y-6">
            <div>
              <h2 className="font-serif text-2xl font-bold text-stone-900">Culinary Specialties of {country.name}</h2>
              <p className="text-xs text-stone-500">Iconic local dishes and flavors you cannot leave without trying</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
              {country.foodHighlights.map((dish, idx) => (
                <div key={idx} className="bg-white rounded-2xl border border-stone-200 overflow-hidden shadow-2xs group">
                  <div className="h-44 w-full overflow-hidden">
                    <img src={dish.image} alt={dish.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  </div>
                  <div className="p-4 space-y-1.5">
                    <div className="flex items-center justify-between">
                      <h4 className="font-serif font-bold text-stone-900 text-base">{dish.name}</h4>
                      {dish.mustTry && (
                        <span className="text-[10px] font-bold bg-brand-500 text-white px-2 py-0.5 rounded-full">
                          Must-Try
                        </span>
                      )}
                    </div>
                    <p className="text-xs text-stone-600 leading-relaxed font-light">{dish.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* BUDGET TAB */}
        {activeTab === 'Budget' && (
          <div className="space-y-6">
            <div>
              <h2 className="font-serif text-2xl font-bold text-stone-900">Estimated Travel Expenses</h2>
              <p className="text-xs text-stone-500">Average daily costs broken down across traveler styles in {country.name}</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {/* Backpacker */}
              <div className="bg-white p-6 rounded-3xl border border-stone-200 shadow-2xs space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold uppercase tracking-wider text-stone-400">Backpacker</span>
                  <span className="text-xs bg-stone-100 text-stone-600 px-2 py-0.5 rounded-full font-semibold">Hostels & Street Food</span>
                </div>
                <div className="text-3xl font-serif font-black text-stone-900">
                  <PriceDisplay amountUSD={country.budgetBreakdown.backpacker} /> <span className="text-xs font-sans text-stone-400 font-normal">/ day</span>
                </div>
                <ul className="text-xs text-stone-600 space-y-2 pt-2 border-t border-stone-100">
                  <li>• Dorm beds & guesthouses: ~${Math.round(country.budgetBreakdown.backpacker * 0.5)}</li>
                  <li>• Street food & local diners: ~${Math.round(country.budgetBreakdown.backpacker * 0.3)}</li>
                  <li>• Public buses & trains: ~${Math.round(country.budgetBreakdown.backpacker * 0.2)}</li>
                </ul>
              </div>

              {/* Mid-range */}
              <div className="bg-brand-50/50 p-6 rounded-3xl border-2 border-brand-500 shadow-elevated space-y-4 relative">
                <div className="absolute -top-3 right-6 bg-brand-500 text-white text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full">
                  Recommended
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold uppercase tracking-wider text-brand-700">Mid-Range Comfort</span>
                  <span className="text-xs bg-brand-100 text-brand-800 px-2 py-0.5 rounded-full font-semibold">3-4★ Hotels & Trattorias</span>
                </div>
                <div className="text-3xl font-serif font-black text-brand-900">
                  <PriceDisplay amountUSD={country.budgetBreakdown.midRange} /> <span className="text-xs font-sans text-stone-400 font-normal">/ day</span>
                </div>
                <ul className="text-xs text-stone-700 space-y-2 pt-2 border-t border-brand-200/60">
                  <li>• Private boutique hotel room: ~${country.budgetBreakdown.accommodationAvg}</li>
                  <li>• Sit-down dining & wine: ~${country.budgetBreakdown.mealAvg}</li>
                  <li>• Express trains & metro passes: ~${country.budgetBreakdown.transitAvg}</li>
                </ul>
              </div>

              {/* Luxury */}
              <div className="bg-white p-6 rounded-3xl border border-stone-200 shadow-2xs space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold uppercase tracking-wider text-stone-400">Luxury / Premium</span>
                  <span className="text-xs bg-stone-100 text-stone-600 px-2 py-0.5 rounded-full font-semibold">5★ Resorts & Fine Dining</span>
                </div>
                <div className="text-3xl font-serif font-black text-stone-900">
                  <PriceDisplay amountUSD={country.budgetBreakdown.luxury} /> <span className="text-xs font-sans text-stone-400 font-normal">/ day</span>
                </div>
                <ul className="text-xs text-stone-600 space-y-2 pt-2 border-t border-stone-100">
                  <li>• Luxury suite / palace hotel: ~${Math.round(country.budgetBreakdown.luxury * 0.6)}</li>
                  <li>• Tasting menus & Michelin dining: ~${Math.round(country.budgetBreakdown.luxury * 0.25)}</li>
                  <li>• Private drivers & tours: ~${Math.round(country.budgetBreakdown.luxury * 0.15)}</li>
                </ul>
              </div>
            </div>
          </div>
        )}

        {/* CURRENCY CONVERTER TAB */}
        {activeTab === 'Currency' && (
          <div className="bg-white p-6 md:p-8 rounded-3xl border border-stone-200 shadow-2xs space-y-6 max-w-2xl">
            <div className="flex items-center gap-3">
              <div className="p-3 bg-brand-50 text-brand-600 rounded-2xl">
                <Calculator className="w-6 h-6" />
              </div>
              <div>
                <h2 className="font-serif text-2xl font-bold text-stone-900">
                  {country.name} Currency Converter
                </h2>
                <p className="text-xs text-stone-500">
                  1 USD ≈ {country.currency.exchangeRateToUSD} {country.currency.code}
                </p>
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-stone-50 border border-stone-200 space-y-4">
              <div>
                <label className="text-xs font-semibold text-stone-500 block mb-1">
                  Local Currency ({country.currency.name} - {country.currency.code})
                </label>
                <div className="flex items-center gap-2">
                  <span className="text-lg font-bold text-stone-400">{country.currency.symbol}</span>
                  <input
                    type="number"
                    value={localAmount}
                    onChange={e => setLocalAmount(Number(e.target.value) || 0)}
                    className="w-full text-xl font-bold bg-white border border-stone-200 rounded-xl px-4 py-2.5 focus:outline-hidden focus:border-brand-500"
                  />
                </div>
              </div>

              <div className="pt-4 border-t border-stone-200">
                <span className="text-xs font-semibold text-stone-500 block mb-1">
                  Converted to Your Selected Currency ({activeCurrency.code})
                </span>
                <p className="text-3xl font-serif font-black text-brand-600">
                  {activeCurrency.symbol}{convertedUserAmount.toLocaleString()} {activeCurrency.code}
                </p>
                <p className="text-[11px] text-stone-400 mt-1">
                  Live calculated based on standard foreign exchange rates.
                </p>
              </div>
            </div>
          </div>
        )}

        {/* TRAVEL TIPS TAB */}
        {activeTab === 'Travel Tips' && (
          <div className="space-y-4">
            <div>
              <h2 className="font-serif text-2xl font-bold text-stone-900">
                Practical Travel Tips for {country.name}
              </h2>
              <p className="text-xs text-stone-500">Crucial etiquette, transport hacks, and packing essentials</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {country.travelTips.map((tip, idx) => (
                <div key={idx} className="bg-white p-6 rounded-3xl border border-stone-200 shadow-2xs space-y-2">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-brand-600 bg-brand-50 px-2.5 py-1 rounded-full">
                    {tip.category}
                  </span>
                  <h4 className="font-serif font-bold text-base text-stone-900 pt-1">{tip.title}</h4>
                  <p className="text-xs text-stone-600 leading-relaxed font-light">{tip.description}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* PROS & CONS TAB */}
        {activeTab === 'Pros & Cons' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Pros */}
            <div className="bg-white p-6 md:p-8 rounded-3xl border border-stone-200 shadow-2xs space-y-4">
              <div className="flex items-center gap-2 pb-2 border-b border-stone-100 text-emerald-700">
                <ThumbsUp className="w-5 h-5" />
                <h3 className="font-serif text-xl font-bold">Why You’ll Love Traveling Here</h3>
              </div>
              <ul className="space-y-3">
                {country.pros.map((pro, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-xs text-stone-700 leading-relaxed">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                    <span>{pro}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Cons */}
            <div className="bg-white p-6 md:p-8 rounded-3xl border border-stone-200 shadow-2xs space-y-4">
              <div className="flex items-center gap-2 pb-2 border-b border-stone-100 text-amber-700">
                <ThumbsDown className="w-5 h-5" />
                <h3 className="font-serif text-xl font-bold">Things to Keep in Mind</h3>
              </div>
              <ul className="space-y-3">
                {country.cons.map((con, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-xs text-stone-700 leading-relaxed">
                    <XCircle className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                    <span>{con}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}
      </div>

      {/* 5. Bottom Planning CTA Banner */}
      <div className="p-8 rounded-3xl bg-gradient-to-br from-stone-900 to-stone-950 text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-floating">
        <div className="space-y-2 text-center md:text-left">
          <span className="text-xs font-bold text-amber-400 uppercase tracking-widest">
            Trip Synthesis
          </span>
          <h3 className="font-serif text-2xl md:text-3xl font-bold">
            Ready to explore {country.name}?
          </h3>
          <p className="text-xs text-stone-300 font-light max-w-lg">
            Create an automated day-by-day itinerary tailored to your dates, travelers, travel style, and budget.
          </p>
        </div>
        <button
          onClick={() => navigate(`/trips/new?country=${country.id}`)}
          className="px-6 py-3 rounded-xl bg-brand-500 hover:bg-brand-600 text-white font-bold text-xs shadow-xs transition-colors shrink-0"
        >
          Plan a Trip to {country.name} →
        </button>
      </div>
    </div>
  );
};
