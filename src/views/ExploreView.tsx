import React, { useState, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Search, Filter, SlidersHorizontal, RotateCcw, Compass } from 'lucide-react';
import { ALL_COUNTRIES } from '../data/countries';
import { ALL_DESTINATIONS } from '../data/destinations';
import { CountryCard } from '../components/cards/CountryCard';
import { DestinationCard } from '../components/cards/DestinationCard';
import { RankingTier, DestinationCategory, CrowdLevel } from '../types';

export const ExploreView: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  // Search input state
  const [query, setQuery] = useState(searchParams.get('q') || '');
  const [activeTab, setActiveTab] = useState<'All' | 'Countries' | 'Cities' | 'Destinations' | 'Hidden Gems'>('All');

  // Filter states
  const [selectedCountry, setSelectedCountry] = useState<string>(searchParams.get('country') || 'All');
  const [selectedContinent, setSelectedContinent] = useState<string>('All');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [selectedTier, setSelectedTier] = useState<string>(searchParams.get('tier') || 'All');
  const [selectedCrowd, setSelectedCrowd] = useState<string>('All');
  const [maxBudget, setMaxBudget] = useState<number>(200);

  const tabs = ['All', 'Countries', 'Cities', 'Destinations', 'Hidden Gems'] as const;

  const tiers: { value: string; label: string; icon: string }[] = [
    { value: 'All', label: 'All Tiers', icon: '✨' },
    { value: 'hidden_gem', label: 'Hidden Gem', icon: '💎' },
    { value: 'underrated', label: 'Underrated', icon: '🟢' },
    { value: 'emerging', label: 'Emerging', icon: '🟡' },
    { value: 'popular', label: 'Popular', icon: '🔴' },
    { value: 'iconic', label: 'Iconic', icon: '👑' },
    { value: 'crowded', label: 'Crowded', icon: '⚠️' }
  ];

  const categories: string[] = [
    'All',
    'Cities',
    'Beaches',
    'Mountains',
    'National Parks',
    'Historical Sites',
    'Islands',
    'Villages',
    'Adventure',
    'Cultural',
    'Food',
    'Nightlife'
  ];

  const resetFilters = () => {
    setQuery('');
    setSelectedCountry('All');
    setSelectedContinent('All');
    setSelectedCategory('All');
    setSelectedTier('All');
    setSelectedCrowd('All');
    setMaxBudget(200);
    setActiveTab('All');
    setSearchParams({});
  };

  // Filtered Countries
  const filteredCountries = useMemo(() => {
    return ALL_COUNTRIES.filter(country => {
      if (query && !country.name.toLowerCase().includes(query.toLowerCase()) && !country.capital.toLowerCase().includes(query.toLowerCase())) return false;
      if (selectedContinent !== 'All' && country.continent !== selectedContinent) return false;
      if (country.dailyBudgetUSD > maxBudget) return false;
      return true;
    });
  }, [query, selectedContinent, maxBudget]);

  // Filtered Destinations
  const filteredDestinations = useMemo(() => {
    return ALL_DESTINATIONS.filter(dest => {
      if (query && !dest.name.toLowerCase().includes(query.toLowerCase()) && !dest.countryName.toLowerCase().includes(query.toLowerCase())) return false;
      if (selectedCountry !== 'All' && dest.countryId !== selectedCountry) return false;
      if (selectedCategory !== 'All' && dest.category !== selectedCategory) return false;
      if (selectedTier !== 'All' && dest.rankingTier !== selectedTier) return false;
      if (selectedCrowd !== 'All' && dest.crowdLevel !== selectedCrowd) return false;
      if (dest.dailyBudgetUSD > maxBudget) return false;
      if (activeTab === 'Cities' && dest.category !== 'Cities') return false;
      if (activeTab === 'Hidden Gems' && dest.rankingTier !== 'hidden_gem') return false;
      return true;
    });
  }, [query, selectedCountry, selectedCategory, selectedTier, selectedCrowd, maxBudget, activeTab]);

  return (
    <div className="space-y-8 pb-16">
      {/* Header banner */}
      <div className="bg-white rounded-3xl p-6 md:p-8 border border-stone-200/80 shadow-2xs space-y-6">
        <div>
          <span className="text-xs font-bold text-brand-600 uppercase tracking-wider flex items-center gap-1.5">
            <Compass className="w-4 h-4" /> Destination Discovery Engine
          </span>
          <h1 className="font-serif text-3xl md:text-4xl font-bold text-stone-900 mt-1">
            Explore The World
          </h1>
          <p className="text-xs md:text-sm text-stone-500 mt-1">
            Filter across 35+ countries and ranked destination tiers from quiet hidden gems to iconic bucket lists.
          </p>
        </div>

        {/* Search input & reset */}
        <div className="flex flex-col md:flex-row gap-3">
          <div className="relative flex-1">
            <Search className="w-5 h-5 text-stone-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search by country, city, spot, or keyword..."
              value={query}
              onChange={e => setQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-stone-200 bg-stone-50/50 text-sm focus:outline-hidden focus:border-brand-500 focus:bg-white transition-all text-stone-900"
            />
          </div>

          <button
            onClick={resetFilters}
            className="inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-xl border border-stone-200 hover:bg-stone-100 text-stone-600 text-xs font-semibold transition-colors shrink-0"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>Reset Filters</span>
          </button>
        </div>

        {/* Primary View Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none border-b border-stone-100">
          {tabs.map(tab => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4 py-2.5 rounded-xl text-xs font-semibold whitespace-nowrap transition-all ${
                activeTab === tab
                  ? 'bg-stone-900 text-white shadow-xs font-bold'
                  : 'text-stone-600 hover:text-stone-900 hover:bg-stone-100'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Tier Ranking Selector Bar */}
        <div>
          <span className="text-[11px] font-bold text-stone-400 uppercase tracking-wider block mb-2">
            Destination Ranking Tier
          </span>
          <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none">
            {tiers.map(t => (
              <button
                key={t.value}
                onClick={() => setSelectedTier(t.value)}
                className={`px-3 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap flex items-center gap-1.5 border transition-all ${
                  selectedTier === t.value
                    ? 'bg-brand-500 text-white border-brand-500 shadow-xs'
                    : 'bg-white border-stone-200 text-stone-700 hover:bg-stone-50'
                }`}
              >
                <span>{t.icon}</span>
                <span>{t.label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Multi-facet Filter Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3 pt-2">
          {/* Country filter */}
          <div>
            <label className="text-[11px] font-semibold text-stone-500 block mb-1">Country</label>
            <select
              value={selectedCountry}
              onChange={e => setSelectedCountry(e.target.value)}
              className="w-full text-xs bg-stone-50 border border-stone-200 rounded-xl p-2.5 focus:outline-hidden focus:border-brand-500"
            >
              <option value="All">All Countries (35+)</option>
              {ALL_COUNTRIES.map(c => (
                <option key={c.id} value={c.id}>{c.flag} {c.name}</option>
              ))}
            </select>
          </div>

          {/* Category filter */}
          <div>
            <label className="text-[11px] font-semibold text-stone-500 block mb-1">Destination Type</label>
            <select
              value={selectedCategory}
              onChange={e => setSelectedCategory(e.target.value)}
              className="w-full text-xs bg-stone-50 border border-stone-200 rounded-xl p-2.5 focus:outline-hidden focus:border-brand-500"
            >
              {categories.map(cat => (
                <option key={cat} value={cat}>{cat}</option>
              ))}
            </select>
          </div>

          {/* Crowd level filter */}
          <div>
            <label className="text-[11px] font-semibold text-stone-500 block mb-1">Crowd Level</label>
            <select
              value={selectedCrowd}
              onChange={e => setSelectedCrowd(e.target.value)}
              className="w-full text-xs bg-stone-50 border border-stone-200 rounded-xl p-2.5 focus:outline-hidden focus:border-brand-500"
            >
              <option value="All">Any Crowd Level</option>
              <option value="Very Low">Very Low Crowds</option>
              <option value="Low">Low Crowds</option>
              <option value="Moderate">Moderate</option>
              <option value="High">High</option>
              <option value="Extremely Crowded">Extremely Crowded</option>
            </select>
          </div>

          {/* Budget slider */}
          <div>
            <div className="flex items-center justify-between mb-1">
              <label className="text-[11px] font-semibold text-stone-500">Max Daily Budget</label>
              <span className="text-xs font-bold text-stone-900">${maxBudget}/day</span>
            </div>
            <input
              type="range"
              min="20"
              max="350"
              step="10"
              value={maxBudget}
              onChange={e => setMaxBudget(Number(e.target.value))}
              className="w-full accent-brand-500"
            />
          </div>
        </div>
      </div>

      {/* Results Display */}
      <div className="space-y-6">
        {/* Countries Section (if tab allows) */}
        {(activeTab === 'All' || activeTab === 'Countries') && filteredCountries.length > 0 && (
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <h3 className="font-serif text-xl font-bold text-stone-900">
                Countries ({filteredCountries.length})
              </h3>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {filteredCountries.slice(0, activeTab === 'Countries' ? 40 : 4).map(country => (
                <CountryCard key={country.id} country={country} />
              ))}
            </div>
          </div>
        )}

        {/* Destinations Section (if tab allows) */}
        {(activeTab === 'All' || activeTab === 'Destinations' || activeTab === 'Cities' || activeTab === 'Hidden Gems') && (
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <h3 className="font-serif text-xl font-bold text-stone-900">
                Destinations & Cities ({filteredDestinations.length})
              </h3>
            </div>

            {filteredDestinations.length === 0 ? (
              <div className="text-center py-16 bg-white rounded-3xl border border-stone-200 p-8">
                <p className="text-stone-500 text-sm mb-3">No destinations match your exact filter criteria.</p>
                <button
                  onClick={resetFilters}
                  className="px-4 py-2 bg-brand-500 text-white rounded-xl text-xs font-bold hover:bg-brand-600 transition-colors"
                >
                  Clear All Filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                {filteredDestinations.map(dest => (
                  <DestinationCard key={dest.id} destination={dest} />
                ))}
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};
