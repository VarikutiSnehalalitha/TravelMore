import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { AppLayout } from './components/layout/AppLayout';

// All 16 Screen Views
import { HomeView } from './views/HomeView';
import { ExploreView } from './views/ExploreView';
import { CountriesView } from './views/CountriesView';
import { CountryOverviewView } from './views/CountryOverviewView';
import { DestinationsView } from './views/DestinationsView';
import { DestinationDetailView } from './views/DestinationDetailView';
import { WorldMapView } from './views/WorldMapView';
import { TripPlannerView } from './views/TripPlannerView';
import { CreateTripView } from './views/CreateTripView';
import { ItineraryDetailView } from './views/ItineraryDetailView';
import { CompareView } from './views/CompareView';
import { SavedView } from './views/SavedView';
import { TravelGuidesView } from './views/TravelGuidesView';
import { GuideDetailView } from './views/GuideDetailView';
import { SearchView } from './views/SearchView';
import { ProfileView } from './views/ProfileView';
import { SettingsView } from './views/SettingsView';

export function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AppLayout />}>
          {/* 1. Home */}
          <Route index element={<HomeView />} />

          {/* 2. Explore */}
          <Route path="explore" element={<ExploreView />} />

          {/* 3. Countries */}
          <Route path="countries" element={<CountriesView />} />

          {/* 4. Country Overview & Deep Link Subroutes */}
          <Route path="countries/:country" element={<CountryOverviewView />} />
          <Route path="countries/:country/places" element={<CountryOverviewView />} />
          <Route path="countries/:country/hidden-gems" element={<CountryOverviewView />} />
          <Route path="countries/:country/budget" element={<CountryOverviewView />} />
          <Route path="countries/:country/currency" element={<CountryOverviewView />} />

          {/* 5. Destinations */}
          <Route path="destinations" element={<DestinationsView />} />

          {/* 6. Destination Detail */}
          <Route path="destinations/:destination" element={<DestinationDetailView />} />

          {/* 7. World Map */}
          <Route path="map" element={<WorldMapView />} />

          {/* 8. Trip Planner Dashboard */}
          <Route path="trips" element={<TripPlannerView />} />

          {/* 9. Create Trip Wizard */}
          <Route path="trips/new" element={<CreateTripView />} />

          {/* 10. Trip Itinerary Workspace */}
          <Route path="trips/:trip" element={<ItineraryDetailView />} />

          {/* 11. Compare */}
          <Route path="compare" element={<CompareView />} />

          {/* 12. Saved & Collections */}
          <Route path="saved" element={<SavedView />} />

          {/* 13. Travel Guides */}
          <Route path="guides" element={<TravelGuidesView />} />
          <Route path="guides/:slug" element={<GuideDetailView />} />

          {/* 14. Global Search */}
          <Route path="search" element={<SearchView />} />

          {/* 15. Profile & Travel Preferences */}
          <Route path="profile" element={<ProfileView />} />

          {/* 16. App Settings */}
          <Route path="settings" element={<SettingsView />} />

          {/* Fallback to Home */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
