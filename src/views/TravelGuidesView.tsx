import React, { useState } from 'react';
import { BookOpen, Search, Clock, ArrowRight } from 'lucide-react';
import { TRAVEL_GUIDES } from '../data/guides';
import { GuideCard } from '../components/cards/GuideCard';

export const TravelGuidesView: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [search, setSearch] = useState('');

  const categories = [
    'All',
    'First-Time Traveler',
    'Hidden Gems',
    'Food Guides',
    'Country Guides',
    'City Guides',
    'Budget Guides',
    'Travel Tips',
    'Solo Travel',
    'Family Travel'
  ];

  const featuredGuide = TRAVEL_GUIDES[0];
  const otherGuides = TRAVEL_GUIDES.slice(1);

  const filteredGuides = TRAVEL_GUIDES.filter(g => {
    if (search && !g.title.toLowerCase().includes(search.toLowerCase()) && !g.subtitle.toLowerCase().includes(search.toLowerCase())) return false;
    if (selectedCategory !== 'All' && g.category !== selectedCategory) return false;
    return true;
  });

  return (
    <div className="space-y-10 pb-16">
      {/* Editorial Header */}
      <div className="bg-white rounded-3xl p-6 md:p-8 border border-stone-200/80 shadow-2xs space-y-4">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-brand-50 text-brand-700 border border-brand-200 mb-2">
              <BookOpen className="w-3.5 h-3.5" />
              <span>Editorial Magazine & Field Notes</span>
            </div>
            <h1 className="font-serif text-3xl md:text-5xl font-black text-stone-900 tracking-tight">
              Travel Guides & Stories
            </h1>
            <p className="text-xs md:text-sm text-stone-500 font-light mt-1 max-w-xl">
              Deep journalistic explorations, culinary roadmaps, and firsthand tips written by regional experts.
            </p>
          </div>

          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 text-stone-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search articles and itineraries..."
              value={search}
              onChange={e => setSearch(e.target.value)}
              className="w-full pl-9 pr-4 py-2 rounded-xl border border-stone-200 bg-stone-50 text-xs focus:outline-hidden focus:border-brand-500 focus:bg-white text-stone-900"
            />
          </div>
        </div>

        {/* Category Pills */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-1 scrollbar-none pt-2 border-t border-stone-100">
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

      {/* Featured Editorial Story (if category is All and no search) */}
      {selectedCategory === 'All' && !search && featuredGuide && (
        <GuideCard guide={featuredGuide} featured={true} />
      )}

      {/* Articles Grid */}
      <div className="space-y-4">
        <h3 className="font-serif text-xl font-bold text-stone-900">
          Latest Stories ({filteredGuides.length})
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredGuides.map(guide => (
            <GuideCard key={guide.slug} guide={guide} />
          ))}
        </div>
      </div>
    </div>
  );
};
