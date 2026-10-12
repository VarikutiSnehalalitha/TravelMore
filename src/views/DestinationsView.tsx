import React, { useState, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Search,
  LayoutGrid,
  List,
  Map as MapIcon,
  Filter,
  RotateCcw,
  Star,
  Users,
  Compass
} from 'lucide-react';
import { ALL_DESTINATIONS } from '../data/destinations';
import { ALL_COUNTRIES } from '../data/countries';
import { DestinationCard } from '../components/cards/DestinationCard';
import { DestinationCategory, RankingTier } from '../types';

export const DestinationsView: React.FC = () => {
  const navigate = useNavigate();

  // View state: Grid | List | Map
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

  // Filter states
  const [search, setSearch] = useState('');
  const [selectedCountry, setSelectedCountry] = useState('All');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [selectedTier, setSelectedTier] = useState<string>('All');
  const [selectedCrowd, setSelectedCrowd] = useState('All');
  const [maxBudget, setMaxBudget] = useState(250);
  const [minRating, setMinRating] = useState(0);

  const categories: DestinationCategory[] = [
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

  const tiers: { value: string; label: string; icon: string }[] = [
    { value: 'All', label: 'All Tiers', icon: '✨' },
    { value: 'hidden_gem', label: 'Hidden Gem', icon: '💎' },
    { value: 'underrated', label: 'Underrated', icon: '🟢' },
    { value: 'emerging', label: 'Emerging', icon: '🟡' },
    { value: 'popular', label: 'Popular', icon: '🔴' },
    { value: 'iconic', label: 'Iconic', icon: '👑' },
    { value: 'crowded', label: 'Crowded', icon: '⚠️' }
  ];

  const resetFilters = () => {
    setSearch('');
    setSelectedCountry('All');
    setSelectedCategory('All');
    setSelectedTier('All');
    setSelectedCrowd('All');
    setMaxBudget(250);
    setMinRating(0);
  };

  const filteredDestinations = useMemo(() => {
    return ALL_DESTINATIONS.filter(dest => {
      if (search && !dest.name.toLowerCase().includes(search.toLowerCase()) && !dest.countryName.toLowerCase().includes(search.toLowerCase()) && !dest.region.toLowerCase().includes(search.toLowerCase())) return false;
      if (selectedCountry !== 'All' && dest.countryId !== selectedCountry) return false;
      if (selectedCategory !== 'All' && dest.category !== selectedCategory) return false;
      if (selectedTier !== 'All' && dest.rankingTier !== selectedTier) return false;
      if (selectedCrowd !== 'All' && dest.crowdLevel !== selectedCrowd) return false;
      if (dest.dailyBudgetUSD > maxBudget) return false;
      if (dest.rating < minRating) return false;
      return true;
    });
  }, [search, selectedCountry, selectedCategory, selectedTier, selectedCrowd, maxBudget, minRating]);

  return (
    <div className="space-y-8 pb-16">
      {/* Top Banner & Controls */}
      <div className="bg-white rounded-3xl p-6 md:p-8 border border-stone-200/80 shadow-2xs space-y-6">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-brand-50 text-brand-700 border border-brand-200 mb-2">
              <Compass className="w-3.5 h-3.5" />
              <span>Global Destination Index</span>
            </div>
            <h1 className="font-serif text-3xl md:text-4xl font-bold text-stone-900">
              Browse Destinations Globally
            </h1>
            <p className="text-xs md:text-sm text-stone-500 mt-1">
              Explore {ALL_DESTINATIONS.length}+ world destinations categorized across 11 styles and 6 crowd tiers.
            </p>
          </div>

          {/* View switcher & Map jump */}
          <div className="flex items-center gap-2 self-start md:self-auto">
            <div className="flex items-center bg-stone-100 p-1 rounded-xl border border-stone-200">
              <button
                onClick={() => setViewMode('grid')}
                className={`p-2 rounded-lg text-xs font-semibold flex items-center gap-1.5 transition-all ${
                  viewMode === 'grid' ? 'bg-white text-stone-900 shadow-2xs' : 'text-stone-500 hover:text-stone-900'
                }`}
                title="Grid View"
              >
                <LayoutGrid className="w-4 h-4" />
                <span className="hidden sm:inline">Grid</span>
              </button>
              <button
                onClick={() => setViewMode('list')}
                className={`p-2 rounded-lg text-xs font-semibold flex items-center gap-1.5 transition-all ${
                  viewMode === 'list' ? 'bg-white text-stone-900 shadow-2xs' : 'text-stone-500 hover:text-stone-900'
                }`}
                title="List View"
              >
                <List className="w-4 h-4" />
                <span className="hidden sm:inline">List</span>
              </button>
            </div>

            <button
              onClick={() => navigate('/map')}
              className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-brand-50 hover:bg-brand-100 text-brand-700 border border-brand-200 text-xs font-bold transition-colors"
            >
              <MapIcon className="w-4 h-4" />
              <span>Full Map</span>
            </button>
          </div>
        </div>

        {/* 11 Category Pills Carousel */}
        <div>
          <span className="text-[11px] font-bold uppercase tracking-wider text-stone-400 block mb-2">
            Categories ({categories.length})
          </span>
          <div className="flex items-center gap-1.5 overflow-x-auto pb-2 scrollbar-none">
            <button
              onClick={() => setSelectedCategory('All')}
              className={`px-3.5 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap transition-all ${
                selectedCategory === 'All'
                  ? 'bg-stone-900 text-white font-bold shadow-xs'
                  : 'bg-stone-100 text-stone-600 hover:bg-stone-200'
              }`}
            >
              All Types
            </button>
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap transition-all ${
                  selectedCategory === cat
                    ? 'bg-stone-900 text-white font-bold shadow-xs'
                    : 'bg-stone-100 text-stone-600 hover:bg-stone-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Tier Ranking Filters */}
        <div>
          <span className="text-[11px] font-bold uppercase tracking-wider text-stone-400 block mb-2">
            Ranking Tier
          </span>
          <div className="flex items-center gap-1.5 overflow-x-auto pb-1 scrollbar-none">
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

        {/* Multi-Filter Input Row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-3 pt-2 border-t border-stone-100">
          {/* Search */}
          <div className="md:col-span-2 relative">
            <label className="text-[11px] font-semibold text-stone-500 block mb-1">Search Sights</label>
            <div className="relative">
              <Search className="w-4 h-4 text-stone-400 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search destination, region..."
                value={search}
                onChange={e => setSearch(e.target.value)}
                className="w-full pl-9 pr-3 py-2 rounded-xl border border-stone-200 bg-stone-50 text-xs focus:outline-hidden focus:border-brand-500 focus:bg-white"
              />
            </div>
          </div>

          {/* Country filter */}
          <div>
            <label className="text-[11px] font-semibold text-stone-500 block mb-1">Country</label>
            <select
              value={selectedCountry}
              onChange={e => setSelectedCountry(e.target.value)}
              className="w-full text-xs bg-stone-50 border border-stone-200 rounded-xl p-2 focus:outline-hidden focus:border-brand-500"
            >
              <option value="All">All Countries</option>
              {ALL_COUNTRIES.map(c => (
                <option key={c.id} value={c.id}>{c.flag} {c.name}</option>
              ))}
            </select>
          </div>

          {/* Crowd Level */}
          <div>
            <label className="text-[11px] font-semibold text-stone-500 block mb-1">Crowd Level</label>
            <select
              value={selectedCrowd}
              onChange={e => setSelectedCrowd(e.target.value)}
              className="w-full text-xs bg-stone-50 border border-stone-200 rounded-xl p-2 focus:outline-hidden focus:border-brand-500"
            >
              <option value="All">Any Crowd</option>
              <option value="Very Low">Very Low</option>
              <option value="Low">Low</option>
              <option value="Moderate">Moderate</option>
              <option value="High">High</option>
              <option value="Extremely Crowded">Extremely Crowded</option>
            </select>
          </div>

          {/* Max Budget */}
          <div>
            <div className="flex items-center justify-between mb-1">
              <label className="text-[11px] font-semibold text-stone-500">Max Budget</label>
              <span className="text-xs font-bold text-stone-900">${maxBudget}/day</span>
            </div>
            <input
              type="range"
              min="20"
              max="350"
              step="10"
              value={maxBudget}
              onChange={e => setMaxBudget(Number(e.target.value))}
              className="w-full accent-brand-500 mt-1"
            />
          </div>
        </div>
      </div>

      {/* Results Header */}
      <div className="flex items-center justify-between text-xs text-stone-500 px-1">
        <span>Showing <strong>{filteredDestinations.length}</strong> destinations</span>
        {(search || selectedCountry !== 'All' || selectedCategory !== 'All' || selectedTier !== 'All' || selectedCrowd !== 'All') && (
          <button onClick={resetFilters} className="text-brand-600 hover:text-brand-700 font-semibold flex items-center gap-1">
            <RotateCcw className="w-3 h-3" />
            <span>Reset Filters</span>
          </button>
        )}
      </div>

      {/* Results list/grid */}
      {filteredDestinations.length === 0 ? (
        <div className="text-center py-20 bg-white rounded-3xl border border-stone-200 p-8 space-y-3">
          <p className="text-stone-500 text-sm">No destinations matched your criteria.</p>
          <button
            onClick={resetFilters}
            className="px-4 py-2 bg-brand-500 text-white rounded-xl text-xs font-bold hover:bg-brand-600 transition-colors"
          >
            Clear Filters
          </button>
        </div>
      ) : viewMode === 'grid' ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {filteredDestinations.map(dest => (
            <DestinationCard key={dest.id} destination={dest} layout="grid" />
          ))}
        </div>
      ) : (
        <div className="space-y-4">
          {filteredDestinations.map(dest => (
            <DestinationCard key={dest.id} destination={dest} layout="list" />
          ))}
        </div>
      )}
    </div>
  );
};
