import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Search,
  Sparkles,
  MapPin,
  Globe,
  Compass,
  ArrowRight,
  Flame,
  Award,
  Trees,
  UtensilsCrossed,
  Coins,
  Smile,
  Shield,
  Eye
} from 'lucide-react';
import { ALL_COUNTRIES } from '../data/countries';
import { ALL_DESTINATIONS } from '../data/destinations';
import { CountryCard } from '../components/cards/CountryCard';
import { DestinationCard } from '../components/cards/DestinationCard';
import { useUserStore } from '../stores/useUserStore';
import { Continent } from '../types';

export const HomeView: React.FC = () => {
  const navigate = useNavigate();
  const { profile } = useUserStore();
  const [heroSearch, setHeroSearch] = useState('');
  const [activeContinent, setActiveContinent] = useState<Continent>('All');

  // Filter lists for discovery sections
  const continents: Continent[] = ['All', 'Europe', 'Asia', 'Americas', 'Africa', 'Oceania', 'Middle East'];

  const filteredCountries = activeContinent === 'All'
    ? ALL_COUNTRIES
    : ALL_COUNTRIES.filter(c => c.continent === activeContinent);

  // Discovery sections:
  const trendingCountries = ALL_COUNTRIES.slice(0, 4); // Japan, Italy, Switzerland, Norway
  const hiddenGems = ALL_DESTINATIONS.filter(d => d.rankingTier === 'hidden_gem');
  const underratedDestinations = ALL_DESTINATIONS.filter(d => d.rankingTier === 'underrated');
  const popularDestinations = ALL_DESTINATIONS.filter(d => d.rankingTier === 'popular' || d.rankingTier === 'iconic').slice(0, 4);
  const lowCrowdPlaces = ALL_DESTINATIONS.filter(d => d.crowdLevel === 'Low' || d.crowdLevel === 'Very Low');
  const bestBudgetCountries = ALL_COUNTRIES.filter(c => c.dailyBudgetUSD <= 50).slice(0, 4);
  const bestFoodCountries = ALL_COUNTRIES.filter(c => c.bestFor.some(b => b.toLowerCase().includes('food') || b.toLowerCase().includes('culinary') || b.toLowerCase().includes('gastronomy'))).slice(0, 4);
  const bestNatureCountries = ALL_COUNTRIES.filter(c => c.bestFor.some(b => b.toLowerCase().includes('nature') || b.toLowerCase().includes('alpine') || b.toLowerCase().includes('wilderness') || b.toLowerCase().includes('waterfalls'))).slice(0, 4);

  // Personalized recommendations based on user profile preferences
  const personalizedDestinations = ALL_DESTINATIONS.filter(d => {
    return profile.preferences.favoriteActivities.some(act =>
      d.category.toLowerCase().includes(act.toLowerCase()) ||
      d.whyVisit.some(w => w.toLowerCase().includes(act.toLowerCase()))
    );
  }).slice(0, 4);

  const handleHeroSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (heroSearch.trim()) {
      navigate(`/search?q=${encodeURIComponent(heroSearch.trim())}`);
    }
  };

  return (
    <div className="space-y-12 pb-16">
      {/* 1. Hero Search Banner */}
      <section className="relative rounded-3xl overflow-hidden bg-stone-900 text-white min-h-[460px] md:min-h-[520px] flex flex-col justify-center items-center px-6 py-12 text-center shadow-floating">
        <img
          src="https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&w=2000&q=80"
          alt="World Discovery Hero"
          className="absolute inset-0 w-full h-full object-cover opacity-50 scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/40 to-stone-950/20" />

        <div className="relative z-10 max-w-3xl space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-xs font-semibold text-brand-300">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Discover Where The World Is Calling You</span>
          </div>

          <h1 className="font-serif text-3xl sm:text-5xl md:text-6xl font-black tracking-tight leading-tight">
            Curated journeys for the curious traveler.
          </h1>

          <p className="text-sm md:text-lg text-stone-200 font-light max-w-xl mx-auto leading-relaxed">
            Explore 35+ countries, unearth authentic hidden gems, and craft day-by-day itineraries with our editorial discovery engine.
          </p>

          {/* Search Box */}
          <form onSubmit={handleHeroSubmit} className="max-w-xl mx-auto w-full">
            <div className="flex items-center bg-white rounded-2xl p-2 shadow-floating border border-white/30 text-stone-900">
              <Search className="w-5 h-5 text-stone-400 ml-3 shrink-0" />
              <input
                type="text"
                placeholder="Where do you want to wander? (e.g. Kyoto, Dolomites, Norway...)"
                value={heroSearch}
                onChange={e => setHeroSearch(e.target.value)}
                className="w-full px-3 py-2 bg-transparent text-sm focus:outline-hidden text-stone-900 placeholder:text-stone-400"
              />
              <button
                type="submit"
                className="px-5 py-2.5 bg-brand-500 hover:bg-brand-600 text-white font-bold text-xs rounded-xl shadow-xs transition-colors shrink-0"
              >
                Search
              </button>
            </div>
          </form>

          {/* Quick Category Action Pills */}
          <div className="flex items-center justify-center gap-2 flex-wrap text-xs pt-2">
            <span className="text-stone-300 text-[11px]">Popular:</span>
            <button
              onClick={() => navigate('/explore?tier=hidden_gem')}
              className="px-3 py-1 rounded-full bg-white/15 hover:bg-white/25 backdrop-blur-md border border-white/20 text-white transition-colors"
            >
              💎 Hidden Gems
            </button>
            <button
              onClick={() => navigate('/explore?budget=budget')}
              className="px-3 py-1 rounded-full bg-white/15 hover:bg-white/25 backdrop-blur-md border border-white/20 text-white transition-colors"
            >
              🪙 Under $50/Day
            </button>
            <button
              onClick={() => navigate('/map')}
              className="px-3 py-1 rounded-full bg-brand-500/80 hover:bg-brand-500 backdrop-blur-md border border-brand-400/40 text-white font-semibold transition-colors"
            >
              🗺️ Interactive Map
            </button>
            <button
              onClick={() => navigate('/trips/new')}
              className="px-3 py-1 rounded-full bg-white/15 hover:bg-white/25 backdrop-blur-md border border-white/20 text-white transition-colors"
            >
              ✨ Plan a Trip
            </button>
          </div>
        </div>
      </section>

      {/* 2. Explore the World (Continent Selector) */}
      <section className="space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="font-serif text-2xl font-bold text-stone-900">Explore the World</h2>
            <p className="text-xs text-stone-500">Browse 35+ country profiles across all 6 continents</p>
          </div>
          <button
            onClick={() => navigate('/countries')}
            className="text-xs font-semibold text-brand-600 hover:text-brand-700 flex items-center gap-1 group"
          >
            <span>All Countries</span>
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
          </button>
        </div>

        {/* Continent Pills */}
        <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
          {continents.map(c => (
            <button
              key={c}
              onClick={() => setActiveContinent(c)}
              className={`px-4 py-2 rounded-xl text-xs font-semibold shrink-0 transition-all ${
                activeContinent === c
                  ? 'bg-stone-900 text-white shadow-xs'
                  : 'bg-white border border-stone-200 text-stone-600 hover:bg-stone-100 hover:text-stone-900'
              }`}
            >
              {c === 'All' ? '🌍 All Continents' : c}
            </button>
          ))}
        </div>

        {/* Filtered Countries Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {filteredCountries.slice(0, 8).map(country => (
            <CountryCard key={country.id} country={country} />
          ))}
        </div>
      </section>

      {/* 3. Trending Countries */}
      <section className="space-y-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="p-2 rounded-xl bg-rose-50 text-rose-600">
              <Flame className="w-5 h-5" />
            </div>
            <div>
              <h2 className="font-serif text-2xl font-bold text-stone-900">Trending Countries</h2>
              <p className="text-xs text-stone-500">The most sought-after destinations of the season</p>
            </div>
          </div>
          <button
            onClick={() => navigate('/countries')}
            className="text-xs font-semibold text-brand-600 hover:text-brand-700 flex items-center gap-1 group"
          >
            <span>View All</span>
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {trendingCountries.map(country => (
            <CountryCard key={country.id} country={country} />
          ))}
        </div>
      </section>

      {/* 4. Hidden Gems (💎) */}
      <section className="p-6 md:p-8 rounded-3xl bg-cyan-950/5 border border-cyan-200/60 space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-semibold bg-cyan-100 text-cyan-800 border border-cyan-300 mb-1">
              <span>💎</span>
              <span>Off The Beaten Path</span>
            </div>
            <h2 className="font-serif text-2xl font-bold text-stone-900">Hidden Gems</h2>
            <p className="text-xs text-stone-600">Spectacular, uncommercialized spots with minimal tourist crowds</p>
          </div>
          <button
            onClick={() => navigate('/explore?tier=hidden_gem')}
            className="text-xs font-semibold text-cyan-800 hover:text-cyan-950 flex items-center gap-1 group"
          >
            <span>See All Gems</span>
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {hiddenGems.map(dest => (
            <DestinationCard key={dest.id} destination={dest} />
          ))}
        </div>
      </section>

      {/* 5. Underrated Destinations (🟢) */}
      <section className="space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-semibold bg-emerald-100 text-emerald-800 border border-emerald-300 mb-1">
              <span>🟢</span>
              <span>High Value Alternatives</span>
            </div>
            <h2 className="font-serif text-2xl font-bold text-stone-900">Underrated Destinations</h2>
            <p className="text-xs text-stone-500">World-class charm and natural beauty at a fraction of the cost</p>
          </div>
          <button
            onClick={() => navigate('/explore?tier=underrated')}
            className="text-xs font-semibold text-brand-600 hover:text-brand-700 flex items-center gap-1 group"
          >
            <span>Explore More</span>
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {underratedDestinations.map(dest => (
            <DestinationCard key={dest.id} destination={dest} />
          ))}
        </div>
      </section>

      {/* 6. Popular & Iconic Destinations */}
      <section className="space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="font-serif text-2xl font-bold text-stone-900">Iconic Destinations</h2>
            <p className="text-xs text-stone-500">Legendary bucket list wonders that live up to the hype</p>
          </div>
          <button
            onClick={() => navigate('/destinations')}
            className="text-xs font-semibold text-brand-600 hover:text-brand-700 flex items-center gap-1 group"
          >
            <span>All Destinations</span>
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {popularDestinations.map(dest => (
            <DestinationCard key={dest.id} destination={dest} />
          ))}
        </div>
      </section>

      {/* 7. Places With Low Crowds */}
      <section className="space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="font-serif text-2xl font-bold text-stone-900">Places With Low Crowds</h2>
            <p className="text-xs text-stone-500">Escape tourist bottlenecks and experience pure tranquility</p>
          </div>
          <button
            onClick={() => navigate('/explore?crowd=low')}
            className="text-xs font-semibold text-brand-600 hover:text-brand-700 flex items-center gap-1 group"
          >
            <span>View All</span>
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {lowCrowdPlaces.slice(0, 3).map(dest => (
            <DestinationCard key={dest.id} destination={dest} />
          ))}
        </div>
      </section>

      {/* 8. Thematic Country Highlights: Budget, Food, Nature */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Best Budget Countries */}
        <div className="p-6 rounded-3xl bg-white border border-stone-200 shadow-2xs space-y-4">
          <div className="flex items-center gap-2 pb-2 border-b border-stone-100">
            <Coins className="w-5 h-5 text-emerald-600" />
            <h3 className="font-serif text-lg font-bold text-stone-900">Best Budget Countries</h3>
          </div>
          <p className="text-xs text-stone-500">Starting under $50/day without sacrificing comfort or safety</p>
          <div className="space-y-3">
            {bestBudgetCountries.map(country => (
              <div
                key={country.id}
                onClick={() => navigate(`/countries/${country.id}`)}
                className="flex items-center justify-between p-2.5 rounded-xl hover:bg-stone-50 transition-colors cursor-pointer group"
              >
                <div className="flex items-center gap-3">
                  <span className="text-2xl">{country.flag}</span>
                  <div>
                    <h4 className="text-sm font-semibold text-stone-900 group-hover:text-brand-600">{country.name}</h4>
                    <p className="text-[11px] text-stone-400">Score: {country.overallScore}</p>
                  </div>
                </div>
                <span className="text-xs font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-md border border-emerald-200">
                  ${country.dailyBudgetUSD}/day
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Best Countries for Food */}
        <div className="p-6 rounded-3xl bg-white border border-stone-200 shadow-2xs space-y-4">
          <div className="flex items-center gap-2 pb-2 border-b border-stone-100">
            <UtensilsCrossed className="w-5 h-5 text-brand-600" />
            <h3 className="font-serif text-lg font-bold text-stone-900">Best for Culinary & Food</h3>
          </div>
          <p className="text-xs text-stone-500">Unsurpassed street food, fine dining, and heritage markets</p>
          <div className="space-y-3">
            {bestFoodCountries.map(country => (
              <div
                key={country.id}
                onClick={() => navigate(`/countries/${country.id}`)}
                className="flex items-center justify-between p-2.5 rounded-xl hover:bg-stone-50 transition-colors cursor-pointer group"
              >
                <div className="flex items-center gap-3">
                  <span className="text-2xl">{country.flag}</span>
                  <div>
                    <h4 className="text-sm font-semibold text-stone-900 group-hover:text-brand-600">{country.name}</h4>
                    <p className="text-[11px] text-stone-400">{country.capital}</p>
                  </div>
                </div>
                <span className="text-xs font-bold text-brand-700 bg-brand-50 px-2 py-0.5 rounded-md border border-brand-200">
                  {country.bestFor[0]}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Best Countries for Nature */}
        <div className="p-6 rounded-3xl bg-white border border-stone-200 shadow-2xs space-y-4">
          <div className="flex items-center gap-2 pb-2 border-b border-stone-100">
            <Trees className="w-5 h-5 text-emerald-700" />
            <h3 className="font-serif text-lg font-bold text-stone-900">Best for Wild Nature</h3>
          </div>
          <p className="text-xs text-stone-500">Pristine fjords, glacier lakes, and alpine national parks</p>
          <div className="space-y-3">
            {bestNatureCountries.map(country => (
              <div
                key={country.id}
                onClick={() => navigate(`/countries/${country.id}`)}
                className="flex items-center justify-between p-2.5 rounded-xl hover:bg-stone-50 transition-colors cursor-pointer group"
              >
                <div className="flex items-center gap-3">
                  <span className="text-2xl">{country.flag}</span>
                  <div>
                    <h4 className="text-sm font-semibold text-stone-900 group-hover:text-brand-600">{country.name}</h4>
                    <p className="text-[11px] text-stone-400">Score: {country.overallScore}</p>
                  </div>
                </div>
                <span className="text-xs font-bold text-stone-700 bg-stone-100 px-2 py-0.5 rounded-md">
                  {country.continent}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 9. Personalized Recommendations */}
      <section className="p-6 md:p-8 rounded-3xl bg-gradient-to-br from-brand-50 via-sand-50 to-white border border-brand-200 space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-semibold bg-brand-100 text-brand-800 border border-brand-300 mb-1">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Tailored For You ({profile.name})</span>
            </div>
            <h2 className="font-serif text-2xl font-bold text-stone-900">Personalized Recommendations</h2>
            <p className="text-xs text-stone-600">
              Matched to your travel style: <strong>{profile.preferences.travelStyle}</strong> • Interests:{' '}
              <strong>{profile.preferences.favoriteActivities.join(', ')}</strong>
            </p>
          </div>
          <button
            onClick={() => navigate('/profile')}
            className="text-xs font-semibold text-brand-700 hover:text-brand-800"
          >
            Edit Preferences →
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {personalizedDestinations.map(dest => (
            <DestinationCard key={dest.id} destination={dest} />
          ))}
        </div>
      </section>

      {/* 10. Interactive Map CTA Banner */}
      <section className="relative rounded-3xl overflow-hidden bg-stone-900 text-white p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-6 shadow-elevated">
        <div className="space-y-3 max-w-xl text-center md:text-left">
          <span className="text-xs font-bold text-amber-400 uppercase tracking-widest">
            Geospatial Exploration
          </span>
          <h2 className="font-serif text-2xl md:text-3xl font-bold leading-tight">
            See the world by tier: from hidden gems to iconic wonders.
          </h2>
          <p className="text-xs md:text-sm text-stone-300 leading-relaxed font-light">
            Our full-screen world map visualizes destinations with custom pins (💎🟢🟡🔴👑⚠️) so you can effortlessly plan routes without crowd bottlenecks.
          </p>
        </div>
        <div className="flex items-center gap-3 shrink-0">
          <button
            onClick={() => navigate('/map')}
            className="px-6 py-3 bg-brand-500 hover:bg-brand-600 text-white font-bold text-xs rounded-xl shadow-xs transition-colors"
          >
            Launch World Map
          </button>
          <button
            onClick={() => navigate('/explore')}
            className="px-6 py-3 bg-white/10 hover:bg-white/20 text-white font-bold text-xs rounded-xl border border-white/20 transition-colors"
          >
            Discovery Engine
          </button>
        </div>
      </section>
    </div>
  );
};
