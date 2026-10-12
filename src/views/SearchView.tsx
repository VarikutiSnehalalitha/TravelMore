import React, { useState, useEffect } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import { Search, Globe, MapPin, Compass, BookOpen, Bookmark, ArrowRight } from 'lucide-react';
import { ALL_COUNTRIES } from '../data/countries';
import { ALL_DESTINATIONS } from '../data/destinations';
import { TRAVEL_GUIDES } from '../data/guides';
import { useSavedStore } from '../stores/useSavedStore';
import { CountryCard } from '../components/cards/CountryCard';
import { DestinationCard } from '../components/cards/DestinationCard';
import { GuideCard } from '../components/cards/GuideCard';

export const SearchView: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();
  const initialQuery = searchParams.get('q') || '';
  const [searchTerm, setSearchTerm] = useState(initialQuery);
  const { isSaved } = useSavedStore();

  useEffect(() => {
    setSearchTerm(searchParams.get('q') || '');
  }, [searchParams]);

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSearchParams({ q: searchTerm });
  };

  const normalized = searchTerm.toLowerCase().trim();

  // Grouped Matches
  const matchedCountries = normalized
    ? ALL_COUNTRIES.filter(c =>
        c.name.toLowerCase().includes(normalized) ||
        c.capital.toLowerCase().includes(normalized) ||
        c.continent.toLowerCase().includes(normalized) ||
        c.bestFor.some(b => b.toLowerCase().includes(normalized))
      )
    : [];

  const matchedCities = normalized
    ? ALL_DESTINATIONS.filter(d =>
        d.category === 'Cities' && (
          d.name.toLowerCase().includes(normalized) ||
          d.countryName.toLowerCase().includes(normalized) ||
          d.region.toLowerCase().includes(normalized)
        )
      )
    : [];

  const matchedDestinations = normalized
    ? ALL_DESTINATIONS.filter(d =>
        d.category !== 'Cities' && (
          d.name.toLowerCase().includes(normalized) ||
          d.countryName.toLowerCase().includes(normalized) ||
          d.region.toLowerCase().includes(normalized) ||
          d.category.toLowerCase().includes(normalized)
        )
      )
    : [];

  const matchedGuides = normalized
    ? TRAVEL_GUIDES.filter(g =>
        g.title.toLowerCase().includes(normalized) ||
        g.subtitle.toLowerCase().includes(normalized) ||
        g.category.toLowerCase().includes(normalized) ||
        g.tags.some(t => t.toLowerCase().includes(normalized))
      )
    : [];

  const savedMatches = normalized
    ? [
        ...matchedCountries.filter(c => isSaved(c.id)).map(c => ({ id: c.id, name: c.name, type: 'country' as const })),
        ...matchedDestinations.filter(d => isSaved(d.id)).map(d => ({ id: d.id, name: d.name, type: 'destination' as const }))
      ]
    : [];

  const totalResults = matchedCountries.length + matchedCities.length + matchedDestinations.length + matchedGuides.length;

  return (
    <div className="space-y-8 pb-16">
      {/* Search Header */}
      <div className="bg-white rounded-3xl p-6 md:p-8 border border-stone-200/80 shadow-2xs space-y-4">
        <div>
          <h1 className="font-serif text-3xl font-bold text-stone-900">Global Search</h1>
          <p className="text-xs text-stone-500 mt-1">
            Search across every country, city, destination, and travel story.
          </p>
        </div>

        <form onSubmit={handleSearchSubmit} className="flex gap-2">
          <div className="relative flex-1">
            <Search className="w-5 h-5 text-stone-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search for Japan, Italy, Kyoto, Pyramids, Budget guides..."
              value={searchTerm}
              onChange={e => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-3 rounded-xl border border-stone-200 bg-stone-50 text-sm focus:outline-hidden focus:border-brand-500 focus:bg-white text-stone-900"
            />
          </div>
          <button
            type="submit"
            className="px-6 py-3 bg-brand-500 hover:bg-brand-600 text-white font-bold text-xs rounded-xl shadow-xs transition-colors shrink-0"
          >
            Search
          </button>
        </form>

        {searchTerm && (
          <p className="text-xs text-stone-500 pt-1">
            Found <strong>{totalResults}</strong> categorized results for "{searchTerm}":
          </p>
        )}
      </div>

      {/* Categorized Results */}
      {!searchTerm ? (
        <div className="p-12 text-center bg-white rounded-3xl border border-stone-200 text-stone-400 text-sm">
          Type a country, city, sight, or topic above to explore grouped results.
        </div>
      ) : totalResults === 0 ? (
        <div className="p-12 text-center bg-white rounded-3xl border border-stone-200 text-stone-500 text-sm space-y-2">
          <p>No results found for "{searchTerm}".</p>
          <button onClick={() => setSearchTerm('')} className="text-brand-600 font-semibold text-xs">
            Clear Search
          </button>
        </div>
      ) : (
        <div className="space-y-10">
          {/* Countries Group */}
          {matchedCountries.length > 0 && (
            <div className="space-y-4">
              <div className="flex items-center gap-2 border-b border-stone-200 pb-2">
                <Globe className="w-5 h-5 text-brand-600" />
                <h2 className="font-serif text-xl font-bold text-stone-900">
                  Countries ({matchedCountries.length})
                </h2>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
                {matchedCountries.map(c => (
                  <CountryCard key={c.id} country={c} />
                ))}
              </div>
            </div>
          )}

          {/* Cities Group */}
          {matchedCities.length > 0 && (
            <div className="space-y-4">
              <div className="flex items-center gap-2 border-b border-stone-200 pb-2">
                <Compass className="w-5 h-5 text-brand-600" />
                <h2 className="font-serif text-xl font-bold text-stone-900">
                  Cities ({matchedCities.length})
                </h2>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                {matchedCities.map(d => (
                  <DestinationCard key={d.id} destination={d} />
                ))}
              </div>
            </div>
          )}

          {/* Destinations Group */}
          {matchedDestinations.length > 0 && (
            <div className="space-y-4">
              <div className="flex items-center gap-2 border-b border-stone-200 pb-2">
                <MapPin className="w-5 h-5 text-brand-600" />
                <h2 className="font-serif text-xl font-bold text-stone-900">
                  Destinations & Sights ({matchedDestinations.length})
                </h2>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                {matchedDestinations.map(d => (
                  <DestinationCard key={d.id} destination={d} />
                ))}
              </div>
            </div>
          )}

          {/* Guides Group */}
          {matchedGuides.length > 0 && (
            <div className="space-y-4">
              <div className="flex items-center gap-2 border-b border-stone-200 pb-2">
                <BookOpen className="w-5 h-5 text-brand-600" />
                <h2 className="font-serif text-xl font-bold text-stone-900">
                  Travel Guides & Articles ({matchedGuides.length})
                </h2>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {matchedGuides.map(g => (
                  <GuideCard key={g.slug} guide={g} />
                ))}
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};
