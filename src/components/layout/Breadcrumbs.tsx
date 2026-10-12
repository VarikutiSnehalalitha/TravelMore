import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronRight, Home } from 'lucide-react';
import { ALL_COUNTRIES } from '../../data/countries';
import { ALL_DESTINATIONS } from '../../data/destinations';

export const Breadcrumbs: React.FC = () => {
  const location = useLocation();
  const pathnames = location.pathname.split('/').filter(x => x);

  if (pathnames.length === 0) return null;

  const breadcrumbsList = [];
  let currentPath = '';

  for (let i = 0; i < pathnames.length; i++) {
    const segment = pathnames[i];
    currentPath += `/${segment}`;

    let label = segment.replace(/-/g, ' ');

    // Match country name if segment is a country ID
    const foundCountry = ALL_COUNTRIES.find(c => c.id === segment);
    if (foundCountry) {
      label = foundCountry.name;
    }

    // Match destination name if segment is a destination ID
    const foundDest = ALL_DESTINATIONS.find(d => d.id === segment);
    if (foundDest) {
      label = foundDest.name;
    }

    if (segment === 'explore') label = 'Explore';
    if (segment === 'countries') label = 'Countries';
    if (segment === 'destinations') label = 'Destinations';
    if (segment === 'map') label = 'World Map';
    if (segment === 'trips') label = 'Trips';
    if (segment === 'compare') label = 'Compare';
    if (segment === 'saved') label = 'Saved Places';
    if (segment === 'guides') label = 'Travel Guides';
    if (segment === 'settings') label = 'Settings';
    if (segment === 'profile') label = 'Profile';
    if (segment === 'new') label = 'Create Trip';

    breadcrumbsList.push({
      label: label.charAt(0).toUpperCase() + label.slice(1),
      path: currentPath,
      isLast: i === pathnames.length - 1
    });
  }

  return (
    <nav className="flex items-center gap-1.5 text-xs text-stone-500 py-3 overflow-x-auto scrollbar-none whitespace-nowrap">
      <Link to="/" className="inline-flex items-center gap-1 hover:text-stone-900 transition-colors">
        <Home className="w-3.5 h-3.5" />
        <span>Home</span>
      </Link>

      {breadcrumbsList.map((crumb, idx) => (
        <React.Fragment key={idx}>
          <ChevronRight className="w-3.5 h-3.5 text-stone-300 shrink-0" />
          {crumb.isLast ? (
            <span className="font-semibold text-stone-900 truncate max-w-[200px]">
              {crumb.label}
            </span>
          ) : (
            <Link to={crumb.path} className="hover:text-stone-900 transition-colors truncate max-w-[160px]">
              {crumb.label}
            </Link>
          )}
        </React.Fragment>
      ))}
    </nav>
  );
};
