import React, { useState, useMemo } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import L from 'leaflet';
import {
  Search,
  Filter,
  X,
  Star,
  Users,
  Compass,
  ArrowRight,
  Maximize2
} from 'lucide-react';
import { ALL_DESTINATIONS } from '../data/destinations';
import { ALL_COUNTRIES } from '../data/countries';
import { Destination, RankingTier } from '../types';
import { BadgeTier } from '../components/common/BadgeTier';
import { PriceDisplay } from '../components/common/PriceDisplay';
import { UniversalActions } from '../components/common/UniversalActions';

// Helper component to center map on coordinates change
const MapUpdater: React.FC<{ center: [number, number]; zoom: number }> = ({ center, zoom }) => {
  const map = useMap();
  React.useEffect(() => {
    map.setView(center, zoom, { animate: true });
  }, [center, zoom, map]);
  return null;
};

// Custom HTML DivIcon creator for the 6 ranking tiers
const createCustomPin = (tier: RankingTier) => {
  const emojiMap: Record<RankingTier, { emoji: string; bg: string; border: string }> = {
    hidden_gem: { emoji: '💎', bg: 'bg-cyan-500', border: 'border-cyan-200' },
    underrated: { emoji: '🟢', bg: 'bg-emerald-500', border: 'border-emerald-200' },
    emerging: { emoji: '🟡', bg: 'bg-amber-500', border: 'border-amber-200' },
    popular: { emoji: '🔴', bg: 'bg-rose-500', border: 'border-rose-200' },
    iconic: { emoji: '👑', bg: 'bg-yellow-400', border: 'border-yellow-200' },
    crowded: { emoji: '⚠️', bg: 'bg-orange-500', border: 'border-orange-200' },
  };

  const item = emojiMap[tier] || { emoji: '📍', bg: 'bg-brand-500', border: 'border-white' };

  return L.divIcon({
    className: 'custom-map-marker',
    html: `
      <div style="
        width: 36px;
        height: 36px;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 18px;
        background: white;
        border-radius: 9999px;
        box-shadow: 0 4px 14px rgba(0,0,0,0.25);
        border: 2px solid #ffffff;
        cursor: pointer;
        transition: transform 0.2s ease;
      ">
        ${item.emoji}
      </div>
    `,
    iconSize: [36, 36],
    iconAnchor: [18, 18],
    popupAnchor: [0, -18]
  });
};

export const WorldMapView: React.FC = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  // Initial center from URL if provided
  const initialLat = searchParams.get('lat') ? parseFloat(searchParams.get('lat')!) : 25.0;
  const initialLng = searchParams.get('lng') ? parseFloat(searchParams.get('lng')!) : 15.0;
  const initialZoom = searchParams.get('lat') ? 7 : 3;

  const [mapCenter, setMapCenter] = useState<[number, number]>([initialLat, initialLng]);
  const [mapZoom, setMapZoom] = useState<number>(initialZoom);

  // Filters
  const [search, setSearch] = useState('');
  const [selectedCountry, setSelectedCountry] = useState('All');
  const [selectedTier, setSelectedTier] = useState<string>('All');
  const [selectedCrowd, setSelectedCrowd] = useState<string>('All');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [selectedDestination, setSelectedDestination] = useState<Destination | null>(null);

  const tiers: { value: string; label: string; icon: string }[] = [
    { value: 'All', label: 'All Markers', icon: '✨' },
    { value: 'hidden_gem', label: 'Hidden Gem', icon: '💎' },
    { value: 'underrated', label: 'Underrated', icon: '🟢' },
    { value: 'emerging', label: 'Emerging', icon: '🟡' },
    { value: 'popular', label: 'Popular', icon: '🔴' },
    { value: 'iconic', label: 'Iconic', icon: '👑' },
    { value: 'crowded', label: 'Crowded', icon: '⚠️' }
  ];

  const filteredDestinations = useMemo(() => {
    return ALL_DESTINATIONS.filter(dest => {
      if (search && !dest.name.toLowerCase().includes(search.toLowerCase()) && !dest.countryName.toLowerCase().includes(search.toLowerCase())) return false;
      if (selectedCountry !== 'All' && dest.countryId !== selectedCountry) return false;
      if (selectedTier !== 'All' && dest.rankingTier !== selectedTier) return false;
      if (selectedCrowd !== 'All' && dest.crowdLevel !== selectedCrowd) return false;
      if (selectedCategory !== 'All' && dest.category !== selectedCategory) return false;
      return true;
    });
  }, [search, selectedCountry, selectedTier, selectedCrowd, selectedCategory]);

  return (
    <div className="relative h-[calc(100vh-7rem)] w-full rounded-3xl overflow-hidden border border-stone-200/80 shadow-elevated">
      {/* Floating Top Controls Overlay */}
      <div className="absolute top-4 left-4 right-4 z-[1000] flex flex-col md:flex-row items-stretch md:items-center justify-between gap-3 pointer-events-none">
        {/* Search & Country Filter Pill */}
        <div className="bg-white/95 backdrop-blur-md p-2 rounded-2xl shadow-floating border border-stone-200/80 pointer-events-auto flex items-center gap-2 max-w-xl w-full">
          <Search className="w-4 h-4 text-stone-400 ml-2 shrink-0" />
          <input
            type="text"
            placeholder="Search spot on map (e.g. Kyoto, Amalfi)..."
            value={search}
            onChange={e => setSearch(e.target.value)}
            className="w-full bg-transparent text-xs text-stone-900 placeholder:text-stone-400 focus:outline-hidden"
          />
          <select
            value={selectedCountry}
            onChange={e => setSelectedCountry(e.target.value)}
            className="text-xs bg-stone-100 border border-stone-200 rounded-xl px-2 py-1.5 focus:outline-hidden shrink-0"
          >
            <option value="All">All Countries</option>
            {ALL_COUNTRIES.map(c => (
              <option key={c.id} value={c.id}>{c.flag} {c.name}</option>
            ))}
          </select>
        </div>

        {/* Tier Ranking Filters */}
        <div className="bg-white/95 backdrop-blur-md p-1.5 rounded-2xl shadow-floating border border-stone-200/80 pointer-events-auto flex items-center gap-1 overflow-x-auto scrollbar-none">
          {tiers.map(t => (
            <button
              key={t.value}
              onClick={() => setSelectedTier(t.value)}
              className={`px-2.5 py-1 rounded-xl text-xs font-semibold whitespace-nowrap flex items-center gap-1 transition-all ${
                selectedTier === t.value
                  ? 'bg-brand-500 text-white shadow-2xs'
                  : 'text-stone-600 hover:bg-stone-100'
              }`}
            >
              <span>{t.icon}</span>
              <span className="hidden sm:inline">{t.label}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Leaflet Map Canvas */}
      <MapContainer
        center={mapCenter}
        zoom={mapZoom}
        scrollWheelZoom={true}
        className="h-full w-full z-0"
      >
        <MapUpdater center={mapCenter} zoom={mapZoom} />

        {/* Crisp Positron Map Tile Layer */}
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'
          url="https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png"
        />

        {/* Render markers */}
        {filteredDestinations.map(dest => (
          <Marker
            key={dest.id}
            position={dest.coordinates}
            icon={createCustomPin(dest.rankingTier)}
            eventHandlers={{
              click: () => {
                setSelectedDestination(dest);
                setMapCenter(dest.coordinates);
              }
            }}
          >
            <Popup>
              {/* Compact Leaflet Popup */}
              <div className="w-64 p-3 space-y-2">
                <img src={dest.heroImage} alt={dest.name} className="w-full h-28 object-cover rounded-lg" />
                <div className="flex items-center justify-between">
                  <BadgeTier tier={dest.rankingTier} size="sm" />
                  <span className="text-xs font-bold text-amber-600 flex items-center gap-1">
                    <Star className="w-3 h-3 fill-current" /> {dest.rating.toFixed(1)}
                  </span>
                </div>
                <h4 className="font-serif font-bold text-sm text-stone-900">{dest.name}</h4>
                <p className="text-[11px] text-stone-500">{dest.countryName} • {dest.category}</p>
                <div className="flex items-center justify-between pt-2 border-t border-stone-100">
                  <span className="text-xs font-bold text-stone-900">
                    <PriceDisplay amountUSD={dest.dailyBudgetUSD} /> / day
                  </span>
                  <button
                    onClick={() => navigate(`/destinations/${dest.id}`)}
                    className="text-xs font-bold text-brand-600 hover:text-brand-700 flex items-center gap-1"
                  >
                    <span>Details</span>
                    <ArrowRight className="w-3 h-3" />
                  </button>
                </div>
              </div>
            </Popup>
          </Marker>
        ))}
      </MapContainer>

      {/* Floating Destination Detail Preview Card (Bottom Left / Bottom Full) */}
      {selectedDestination && (
        <div className="absolute bottom-6 left-6 z-[1000] w-full max-w-sm bg-white rounded-3xl shadow-floating border border-stone-200/80 p-4 animate-in slide-in-from-bottom duration-300">
          <div className="relative h-36 w-full rounded-2xl overflow-hidden mb-3">
            <img src={selectedDestination.heroImage} alt={selectedDestination.name} className="w-full h-full object-cover" />
            <button
              onClick={() => setSelectedDestination(null)}
              className="absolute top-2 right-2 p-1.5 rounded-full bg-black/60 text-white hover:bg-black transition-colors"
            >
              <X className="w-3.5 h-3.5" />
            </button>
            <div className="absolute top-2 left-2">
              <BadgeTier tier={selectedDestination.rankingTier} size="sm" />
            </div>
          </div>

          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-serif text-lg font-bold text-stone-900 leading-tight">
                  {selectedDestination.name}
                </h3>
                <p className="text-xs text-stone-500">
                  {selectedDestination.countryFlag} {selectedDestination.countryName} • {selectedDestination.region}
                </p>
              </div>
              <div className="flex items-center gap-1 text-xs font-bold text-amber-700 bg-amber-50 px-2 py-0.5 rounded-md border border-amber-200">
                <Star className="w-3 h-3 fill-current" />
                <span>{selectedDestination.rating.toFixed(1)}</span>
              </div>
            </div>

            <p className="text-xs text-stone-600 line-clamp-2 leading-relaxed">
              {selectedDestination.description}
            </p>

            <div className="flex items-center justify-between pt-2 border-t border-stone-100 text-xs">
              <div>
                <span className="text-stone-400">Est. </span>
                <strong className="text-stone-900 font-bold"><PriceDisplay amountUSD={selectedDestination.dailyBudgetUSD} /> / day</strong>
              </div>
              <div className="flex items-center gap-2">
                <UniversalActions id={selectedDestination.id} name={selectedDestination.name} type="destination" compact />
                <button
                  onClick={() => navigate(`/destinations/${selectedDestination.id}`)}
                  className="px-3 py-1.5 bg-brand-500 hover:bg-brand-600 text-white rounded-xl text-xs font-bold shadow-xs transition-colors"
                >
                  View Details →
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
