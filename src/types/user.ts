import { TravelStyle } from './common';

export interface UserPreferences {
  budgetTier: 'Budget' | 'Mid-range' | 'Luxury';
  favoriteActivities: string[]; // ['Food', 'Nature', 'Culture', 'Architecture', 'Photography']
  preferredClimate: string; // 'Mild & Sunny' | 'Tropical' | 'Alpine / Cool' | 'Warm'
  travelStyle: TravelStyle;
  preferredTripLengthDays: number;
}

export interface Collection {
  id: string;
  name: string;
  description: string;
  icon: string;
  itemIds: { id: string; type: 'country' | 'destination' }[];
  createdAt: string;
}

export interface UserProfile {
  name: string;
  handle: string;
  bio: string;
  avatar: string;
  homeCountry: string;
  passportCountriesCount: number;
  preferences: UserPreferences;
}
