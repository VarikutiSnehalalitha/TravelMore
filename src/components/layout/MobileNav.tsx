import React from 'react';
import { NavLink } from 'react-router-dom';
import { Home, Compass, Map, Luggage, Bookmark } from 'lucide-react';
import { useSavedStore } from '../../stores/useSavedStore';

export const MobileNav: React.FC = () => {
  const savedCount = useSavedStore(state => state.savedItemIds.length);

  const items = [
    { label: 'Home', path: '/', icon: Home, end: true },
    { label: 'Explore', path: '/explore', icon: Compass },
    { label: 'Map', path: '/map', icon: Map },
    { label: 'Trips', path: '/trips', icon: Luggage },
    { label: 'Saved', path: '/saved', icon: Bookmark, badge: savedCount > 0 ? savedCount : null },
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-t border-stone-200/80 h-16 md:hidden px-2 flex items-center justify-around">
      {items.map(item => {
        const Icon = item.icon;
        return (
          <NavLink
            key={item.path}
            to={item.path}
            end={item.end}
            className={({ isActive }) =>
              `flex flex-col items-center justify-center flex-1 py-1 relative text-[10px] font-semibold transition-colors ${
                isActive ? 'text-brand-600' : 'text-stone-500 hover:text-stone-800'
              }`
            }
          >
            {({ isActive }) => (
              <>
                <div className="relative">
                  <Icon className={`w-5 h-5 ${isActive ? 'stroke-[2.5]' : 'stroke-[1.8]'}`} />
                  {item.badge !== null && item.badge !== undefined && (
                    <span className="absolute -top-1 -right-2 bg-brand-500 text-white text-[9px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
                      {item.badge}
                    </span>
                  )}
                </div>
                <span className="mt-1 leading-none">{item.label}</span>
              </>
            )}
          </NavLink>
        );
      })}
    </nav>
  );
};
