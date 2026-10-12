import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, MapPin, Globe, Compass, BookOpen, ArrowRight, X } from 'lucide-react';
import { ALL_COUNTRIES } from '../../data/countries';
import { ALL_DESTINATIONS } from '../../data/destinations';
import { TRAVEL_GUIDES } from '../../data/guides';
import { useSavedStore } from '../../stores/useSavedStore';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const SearchModal: React.FC<SearchModalProps> = ({ isOpen, onClose }) => {
  const navigate = useNavigate();
  const inputRef = useRef<HTMLInputElement>(null);
  const [query, setQuery] = useState('');
  const { isSaved } = useSavedStore();

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 50);
    } else {
      setQuery('');
    }
  }, [isOpen]);

  // Handle escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) onClose();
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        if (isOpen) onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const normalized = query.toLowerCase().trim();

  // Search Countries
  const matchedCountries = normalized
    ? ALL_COUNTRIES.filter(c =>
        c.name.toLowerCase().includes(normalized) ||
        c.capital.toLowerCase().includes(normalized) ||
        c.continent.toLowerCase().includes(normalized) ||
        c.bestFor.some(tag => tag.toLowerCase().includes(normalized))
      ).slice(0, 4)
    : ALL_COUNTRIES.slice(0, 3);

  // Search Destinations
  const matchedDestinations = normalized
    ? ALL_DESTINATIONS.filter(d =>
        d.name.toLowerCase().includes(normalized) ||
        d.countryName.toLowerCase().includes(normalized) ||
        d.region.toLowerCase().includes(normalized) ||
        d.category.toLowerCase().includes(normalized)
      ).slice(0, 5)
    : ALL_DESTINATIONS.slice(0, 4);

  // Search Guides
  const matchedGuides = normalized
    ? TRAVEL_GUIDES.filter(g =>
        g.title.toLowerCase().includes(normalized) ||
        g.category.toLowerCase().includes(normalized) ||
        g.tags.some(t => t.toLowerCase().includes(normalized))
      ).slice(0, 3)
    : TRAVEL_GUIDES.slice(0, 2);

  const handleSelectCountry = (countryId: string) => {
    onClose();
    navigate(`/countries/${countryId}`);
  };

  const handleSelectDestination = (destId: string) => {
    onClose();
    navigate(`/destinations/${destId}`);
  };

  const handleSelectGuide = (slug: string) => {
    onClose();
    navigate(`/guides/${slug}`);
  };

  const handleViewAll = () => {
    onClose();
    navigate(`/search?q=${encodeURIComponent(query)}`);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-16 md:pt-24 px-4 bg-black/60 backdrop-blur-xs animate-in fade-in duration-200">
      <div className="bg-white rounded-2xl shadow-floating border border-stone-200 w-full max-w-2xl overflow-hidden flex flex-col max-h-[80vh]">
        {/* Search Input Bar */}
        <div className="flex items-center px-4 py-3.5 border-b border-stone-200">
          <Search className="w-5 h-5 text-stone-400 shrink-0 mr-3" />
          <input
            ref={inputRef}
            type="text"
            placeholder="Search countries, cities, hidden gems, guides..."
            value={query}
            onChange={e => setQuery(e.target.value)}
            className="w-full bg-transparent text-sm md:text-base text-stone-900 placeholder:text-stone-400 focus:outline-hidden"
          />
          {query && (
            <button onClick={() => setQuery('')} className="p-1 text-stone-400 hover:text-stone-600 mr-2">
              <X className="w-4 h-4" />
            </button>
          )}
          <kbd className="hidden md:inline-block px-2 py-0.5 text-[11px] font-semibold text-stone-400 bg-stone-100 rounded border border-stone-200">
            ESC
          </kbd>
        </div>

        {/* Results Area */}
        <div className="flex-1 overflow-y-auto p-4 space-y-6">
          {/* Countries Group */}
          <div>
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-semibold text-stone-400 uppercase tracking-wider flex items-center gap-1.5">
                <Globe className="w-3.5 h-3.5" /> Countries
              </span>
              <span className="text-[11px] text-stone-400">{matchedCountries.length} found</span>
            </div>
            <div className="space-y-1">
              {matchedCountries.map(country => (
                <button
                  key={country.id}
                  onClick={() => handleSelectCountry(country.id)}
                  className="w-full flex items-center justify-between p-2.5 rounded-xl hover:bg-stone-100 transition-colors group text-left"
                >
                  <div className="flex items-center gap-3">
                    <span className="text-2xl leading-none">{country.flag}</span>
                    <div>
                      <h4 className="text-sm font-semibold text-stone-900 group-hover:text-brand-600 transition-colors">
                        {country.name}
                      </h4>
                      <p className="text-xs text-stone-500">
                        Capital: {country.capital} • {country.continent} • Score: {country.overallScore}
                      </p>
                    </div>
                  </div>
                  <ArrowRight className="w-4 h-4 text-stone-300 group-hover:text-brand-600 group-hover:translate-x-0.5 transition-all" />
                </button>
              ))}
            </div>
          </div>

          {/* Destinations Group */}
          <div>
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-semibold text-stone-400 uppercase tracking-wider flex items-center gap-1.5">
                <Compass className="w-3.5 h-3.5" /> Destinations & Cities
              </span>
              <span className="text-[11px] text-stone-400">{matchedDestinations.length} found</span>
            </div>
            <div className="space-y-1">
              {matchedDestinations.map(dest => (
                <button
                  key={dest.id}
                  onClick={() => handleSelectDestination(dest.id)}
                  className="w-full flex items-center justify-between p-2.5 rounded-xl hover:bg-stone-100 transition-colors group text-left"
                >
                  <div className="flex items-center gap-3">
                    <img src={dest.heroImage} alt={dest.name} className="w-10 h-10 rounded-lg object-cover shrink-0" />
                    <div>
                      <div className="flex items-center gap-2">
                        <h4 className="text-sm font-semibold text-stone-900 group-hover:text-brand-600 transition-colors">
                          {dest.name}
                        </h4>
                        <span className="text-xs">{dest.countryFlag}</span>
                      </div>
                      <p className="text-xs text-stone-500">
                        {dest.countryName} • {dest.category} • Crowd: {dest.crowdLevel}
                      </p>
                    </div>
                  </div>
                  <ArrowRight className="w-4 h-4 text-stone-300 group-hover:text-brand-600 group-hover:translate-x-0.5 transition-all" />
                </button>
              ))}
            </div>
          </div>

          {/* Guides Group */}
          <div>
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-semibold text-stone-400 uppercase tracking-wider flex items-center gap-1.5">
                <BookOpen className="w-3.5 h-3.5" /> Editorial Guides
              </span>
            </div>
            <div className="space-y-1">
              {matchedGuides.map(guide => (
                <button
                  key={guide.slug}
                  onClick={() => handleSelectGuide(guide.slug)}
                  className="w-full flex items-center justify-between p-2.5 rounded-xl hover:bg-stone-100 transition-colors group text-left"
                >
                  <div className="flex items-center gap-3">
                    <BookOpen className="w-4 h-4 text-brand-500 shrink-0" />
                    <div>
                      <h4 className="text-sm font-semibold text-stone-900 group-hover:text-brand-600 transition-colors line-clamp-1">
                        {guide.title}
                      </h4>
                      <p className="text-xs text-stone-500">
                        {guide.category} • {guide.readingTimeMin} min read
                      </p>
                    </div>
                  </div>
                  <ArrowRight className="w-4 h-4 text-stone-300 group-hover:text-brand-600 group-hover:translate-x-0.5 transition-all" />
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Footer */}
        {query && (
          <div className="p-3 bg-stone-50 border-t border-stone-200 flex items-center justify-between text-xs">
            <span className="text-stone-500">Press enter or click to see all categorized results</span>
            <button
              onClick={handleViewAll}
              className="px-3 py-1 bg-brand-500 text-white rounded-lg font-semibold hover:bg-brand-600 transition-colors"
            >
              View Full Search Page →
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
