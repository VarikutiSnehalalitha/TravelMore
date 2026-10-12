import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { UserProfile, UserPreferences } from '../types';

interface UserStore {
  profile: UserProfile;
  updateProfile: (updates: Partial<UserProfile>) => void;
  updatePreferences: (updates: Partial<UserPreferences>) => void;
}

const DEFAULT_PROFILE: UserProfile = {
  name: 'Alex Sterling',
  handle: '@alexsterling',
  bio: 'Photographer, slow traveler & culinary enthusiast. On a mission to explore 50 countries before 2030.',
  avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=250&q=80',
  homeCountry: 'United States',
  passportCountriesCount: 19,
  preferences: {
    budgetTier: 'Mid-range',
    favoriteActivities: ['Culture', 'Food', 'Nature', 'Photography'],
    preferredClimate: 'Temperate Four Seasons',
    travelStyle: 'Couple',
    preferredTripLengthDays: 10
  }
};

export const useUserStore = create<UserStore>()(
  persist(
    (set, get) => ({
      profile: DEFAULT_PROFILE,

      updateProfile: (updates: Partial<UserProfile>) => {
        set({ profile: { ...get().profile, ...updates } });
      },

      updatePreferences: (updates: Partial<UserPreferences>) => {
        set({
          profile: {
            ...get().profile,
            preferences: { ...get().profile.preferences, ...updates }
          }
        });
      }
    }),
    {
      name: 'travelmore-user-storage'
    }
  )
);
