import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface CompareStore {
  compareIds: string[]; // max 4 items (Country or Destination IDs)
  addToCompare: (id: string) => boolean;
  removeFromCompare: (id: string) => void;
  clearCompare: () => void;
  isInCompare: (id: string) => boolean;
}

export const useCompareStore = create<CompareStore>()(
  persist(
    (set, get) => ({
      compareIds: ['japan', 'italy', 'peru'],

      addToCompare: (id: string) => {
        const { compareIds } = get();
        if (compareIds.includes(id)) return true;
        if (compareIds.length >= 4) return false; // max 4 items reached
        set({ compareIds: [...compareIds, id] });
        return true;
      },

      removeFromCompare: (id: string) => {
        set({ compareIds: get().compareIds.filter(i => i !== id) });
      },

      clearCompare: () => {
        set({ compareIds: [] });
      },

      isInCompare: (id: string) => {
        return get().compareIds.includes(id);
      }
    }),
    {
      name: 'travelmore-compare-storage'
    }
  )
);
