import React from 'react';
import { NavLink } from 'react-router-dom';
import {
  Home,
  Compass,
  Globe,
  MapPin,
  Map,
  Luggage,
  Scale,
  Bookmark,
  BookOpen,
  Settings,
  Sparkles,
  ChevronRight
} from 'lucide-react';
import { useCompareStore } from '../../stores/useCompareStore';
import { useSavedStore } from '../../stores/useSavedStore';

export const Sidebar: React.FC = () => {
  const compareCount = useCompareStore(state => state.compareIds.length);
  const savedCount = useSavedStore(state => state.savedItemIds.length);

  const primaryNavItems = [
    { label: 'Home', path: '/', icon: Home, end: true },
    { label: 'Explore', path: '/explore', icon: Compass },
    { label: 'Countries', path: '/countries', icon: Globe },
    { label: 'Destinations', path: '/destinations', icon: MapPin },
    { label: 'World Map', path: '/map', icon: Map },
    { label: 'Trip Planner', path: '/trips', icon: Luggage },
    { label: 'Compare', path: '/compare', icon: Scale, badge: compareCount > 0 ? compareCount : null },
    { label: 'Saved Places', path: '/saved', icon: Bookmark, badge: savedCount > 0 ? savedCount : null },
    { label: 'Travel Guides', path: '/guides', icon: BookOpen },
  ];

  return (
    <aside className="w-64 bg-white border-r border-stone-200/80 flex flex-col justify-between h-[calc(100vh-4rem)] sticky top-16 shrink-0 select-none hidden md:flex">
      {/* Top: Nav list */}
      <div className="p-4 space-y-6 overflow-y-auto">
        <div className="space-y-1">
          <div className="px-3 pb-2 text-[10px] font-bold uppercase tracking-wider text-stone-400">
            Primary Navigation
          </div>
          {primaryNavItems.map(item => {
            const Icon = item.icon;
            return (
              <NavLink
                key={item.path}
                to={item.path}
                end={item.end}
                className={({ isActive }) =>
                  `flex items-center justify-between px-3.5 py-2.5 rounded-xl text-xs font-semibold transition-all ${
                    isActive
                      ? 'bg-brand-50 text-brand-700 shadow-2xs font-bold'
                      : 'text-stone-600 hover:text-stone-900 hover:bg-stone-100/70'
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    <div className="flex items-center gap-3">
                      <Icon className={`w-4 h-4 ${isActive ? 'text-brand-600' : 'text-stone-400'}`} />
                      <span>{item.label}</span>
                    </div>

                    {item.badge !== null && item.badge !== undefined && (
                      <span className={`text-[11px] font-bold px-2 py-0.5 rounded-full ${
                        isActive
                          ? 'bg-brand-500 text-white'
                          : 'bg-stone-200 text-stone-700'
                      }`}>
                        {item.badge}
                      </span>
                    )}
                  </>
                )}
              </NavLink>
            );
          })}
        </div>

        {/* Discovery Inspiration Widget */}
        <div className="p-3.5 rounded-2xl bg-gradient-to-br from-brand-50 via-stone-50 to-sand-100 border border-brand-200/60 shadow-2xs">
          <div className="flex items-center gap-1.5 text-brand-700 text-xs font-bold mb-1">
            <Sparkles className="w-3.5 h-3.5" />
            <span>AI Trip Synthesis</span>
          </div>
          <p className="text-[11px] text-stone-600 mb-2.5 leading-relaxed">
            Generate a personalized day-by-day itinerary tailored to your budget & interests.
          </p>
          <NavLink
            to="/trips/new"
            className="w-full inline-flex items-center justify-center gap-1.5 py-2 px-3 bg-brand-500 hover:bg-brand-600 text-white rounded-xl text-xs font-bold shadow-xs transition-colors"
          >
            <span>Create Itinerary</span>
            <ChevronRight className="w-3 h-3" />
          </NavLink>
        </div>
      </div>

      {/* Bottom Footer: Comparison Drawer Preview & Settings */}
      <div className="p-4 border-t border-stone-200/80 space-y-2">
        {compareCount > 0 && (
          <NavLink
            to="/compare"
            className="w-full flex items-center justify-between p-2.5 rounded-xl bg-amber-50 border border-amber-200 hover:bg-amber-100/80 transition-colors text-xs font-semibold text-amber-900 group"
          >
            <div className="flex items-center gap-2">
              <Scale className="w-4 h-4 text-amber-600" />
              <span>Comparing {compareCount} {compareCount === 1 ? 'place' : 'places'}</span>
            </div>
            <span className="text-[10px] bg-amber-500 text-white font-bold px-2 py-0.5 rounded-full">
              View
            </span>
          </NavLink>
        )}

        <NavLink
          to="/settings"
          className={({ isActive }) =>
            `flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-xs font-semibold transition-all ${
              isActive
                ? 'bg-stone-100 text-stone-900 font-bold'
                : 'text-stone-500 hover:text-stone-900 hover:bg-stone-100/70'
            }`
          }
        >
          <Settings className="w-4 h-4 text-stone-400" />
          <span>App Settings</span>
        </NavLink>
      </div>
    </aside>
  );
};
