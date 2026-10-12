import React, { useState, useMemo } from 'react';
import { Search, Globe, Shield, Coins, Sparkles, Filter, Award } from 'lucide-react';
import { ALL_COUNTRIES } from '../data/countries';
import { CountryCard } from '../components/cards/CountryCard';
import { Continent } from '../types';

export const CountriesView: React.FC = () => {
  const [search, setSearch] = useState('');
  const [selectedContinent, setSelectedContinent] = useState<Continent>('All');
  const [budgetFilter, setBudgetFilter] = useState<'All' | 'Budget' | 'Mid-range' | 'Luxury'>('All');
  const [minSafety, setMinSafety] = useState<number>(0);
  const [selectedBestFor, setSelectedBestFor] = useState<string>('All');
  const [sortBy, setSortBy] = useState<'score' | 'budget_low' | 'budget_high' | 'safety' | 'name'>('score');

  const continents: Continent[] = ['All', 'Europe', 'Asia', 'Americas', 'Africa', 'Oceania', 'Middle East'];

  const bestForCategories = ['All', 'Culture', 'Food', 'Nature', 'Safety', 'Beaches', 'History'];

  const filteredCountries = useMemo(() => {
    let result = ALL_COUNTRIES.filter(country => {
      if (search && !country.name.toLowerCase().includes(search.toLowerCase()) && !country.capital.toLowerCase().includes(search.toLowerCase())) return false;
      if (selectedContinent !== 'All' && country.continent !== selectedContinent) return false;
      if (budgetFilter !== 'All' && country.budgetTier !== budgetFilter) return false;
      if (country.safetyScore < minSafety) return false;
      if (selectedBestFor !== 'All') {
        const matches = country.bestFor.some(tag => tag.toLowerCase().includes(selectedBestFor.toLowerCase()));
        if (!matches) return false;
      }
      return true;
    });

    // Sorting
    return result.sort((a, b) => {
      if (sortBy === 'score') return b.overallScore - a.overallScore;
      if (sortBy === 'budget_low') return a.dailyBudgetUSD - b.dailyBudgetUSD;
      if (sortBy === 'budget_high') return b.dailyBudgetUSD - a.dailyBudgetUSD;
      if (sortBy === 'safety') return b.safetyScore - a.safetyScore;
      if (sortBy === 'name') return a.name.localeCompare(b.name);
      return 0;
    });
  }, [search, selectedContinent, budgetFilter, minSafety, selectedBestFor, sortBy]);

  return (
    <div className="space-y-8 pb-16">
      {/* Header */}
      <div className="bg-white rounded-3xl p-6 md:p-8 border border-stone-200/80 shadow-2xs space-y-6">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-brand-50 text-brand-700 border border-brand-200 mb-2">
              <Globe className="w-3.5 h-3.5" />
              <span>World Directory ({ALL_COUNTRIES.length} Countries)</span>
            </div>
            <h1 className="font-serif text-3xl md:text-4xl font-bold text-stone-900">
              Browse Every Country
            </h1>
            <p className="text-xs md:text-sm text-stone-500 mt-1">
              Deep editorial profiles, starting daily budgets, seasonal condition matrices, and safety scores.
            </p>
          </div>

          {/* Search box */}
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 text-stone-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search country or capital..."
              value={search}
              onChange={e => setSearch(e.target.value)}
              className="w-full pl-9 pr-4 py-2 rounded-xl border border-stone-200 bg-stone-50 text-xs focus:outline-hidden focus:border-brand-500 focus:bg-white transition-all text-stone-900"
            />
          </div>
        </div>

        {/* Region selector pills */}
        <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none border-b border-stone-100">
          {continents.map(c => (
            <button
              key={c}
              onClick={() => setSelectedContinent(c)}
              className={`px-4 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition-all ${
                selectedContinent === c
                  ? 'bg-stone-900 text-white shadow-xs font-bold'
                  : 'text-stone-600 hover:text-stone-900 hover:bg-stone-100'
              }`}
            >
              {c === 'All' ? '🌍 All Continents' : c}
            </button>
          ))}
        </div>

        {/* Filter controls row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 pt-1">
          {/* Budget tier */}
          <div>
            <label className="text-[11px] font-semibold text-stone-500 block mb-1">Budget Tier</label>
            <select
              value={budgetFilter}
              onChange={e => setBudgetFilter(e.target.value as any)}
              className="w-full text-xs bg-stone-50 border border-stone-200 rounded-xl p-2 focus:outline-hidden focus:border-brand-500"
            >
              <option value="All">All Budgets</option>
              <option value="Budget">Budget (&lt; $50/day)</option>
              <option value="Mid-range">Mid-Range ($50-$120/day)</option>
              <option value="Luxury">Luxury (&gt; $120/day)</option>
            </select>
          </div>

          {/* Safety filter */}
          <div>
            <label className="text-[11px] font-semibold text-stone-500 block mb-1">Safety Index</label>
            <select
              value={minSafety}
              onChange={e => setMinSafety(Number(e.target.value))}
              className="w-full text-xs bg-stone-50 border border-stone-200 rounded-xl p-2 focus:outline-hidden focus:border-brand-500"
            >
              <option value={0}>Any Safety Rating</option>
              <option value={8.5}>Safe (8.5+)</option>
              <option value={9.5}>Ultra-Safe (9.5+)</option>
            </select>
          </div>

          {/* Best For */}
          <div>
            <label className="text-[11px] font-semibold text-stone-500 block mb-1">Best For</label>
            <select
              value={selectedBestFor}
              onChange={e => setSelectedBestFor(e.target.value)}
              className="w-full text-xs bg-stone-50 border border-stone-200 rounded-xl p-2 focus:outline-hidden focus:border-brand-500"
            >
              {bestForCategories.map(cat => (
                <option key={cat} value={cat}>{cat}</option>
              ))}
            </select>
          </div>

          {/* Sort By */}
          <div>
            <label className="text-[11px] font-semibold text-stone-500 block mb-1">Sort Results By</label>
            <select
              value={sortBy}
              onChange={e => setSortBy(e.target.value as any)}
              className="w-full text-xs bg-stone-50 border border-stone-200 rounded-xl p-2 focus:outline-hidden focus:border-brand-500 font-semibold"
            >
              <option value="score">Highest Overall Score</option>
              <option value="budget_low">Budget: Low to High</option>
              <option value="budget_high">Budget: High to Low</option>
              <option value="safety">Highest Safety Score</option>
              <option value="name">Alphabetical (A-Z)</option>
            </select>
          </div>
        </div>
      </div>

      {/* Country Cards Grid */}
      <div className="space-y-4">
        <div className="flex items-center justify-between text-xs text-stone-500">
          <span>Showing <strong>{filteredCountries.length}</strong> countries</span>
          <span>Sorted by {sortBy.replace('_', ' ')}</span>
        </div>

        {filteredCountries.length === 0 ? (
          <div className="text-center py-16 bg-white rounded-3xl border border-stone-200 p-8">
            <p className="text-stone-500 text-sm mb-3">No countries found matching your filters.</p>
            <button
              onClick={() => {
                setSearch('');
                setSelectedContinent('All');
                setBudgetFilter('All');
                setMinSafety(0);
                setSelectedBestFor('All');
              }}
              className="px-4 py-2 bg-brand-500 text-white rounded-xl text-xs font-bold hover:bg-brand-600 transition-colors"
            >
              Clear All Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {filteredCountries.map(country => (
              <CountryCard key={country.id} country={country} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
