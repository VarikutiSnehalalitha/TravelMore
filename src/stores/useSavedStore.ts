import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { Collection } from '../types';

interface SavedStore {
  savedItemIds: string[]; // Country or Destination IDs
  collections: Collection[];
  toggleSaved: (id: string) => void;
  isSaved: (id: string) => boolean;
  createCollection: (name: string, description: string, icon: string) => void;
  deleteCollection: (id: string) => void;
  addToCollection: (collectionId: string, itemId: string, itemType: 'country' | 'destination') => void;
  removeFromCollection: (collectionId: string, itemId: string) => void;
}

const DEFAULT_COLLECTIONS: Collection[] = [
  {
    id: 'col-dream',
    name: 'Dream Destinations',
    description: 'Places at the very top of my lifetime bucket list',
    icon: '✨',
    itemIds: [
      { id: 'kyoto', type: 'destination' },
      { id: 'machu-picchu', type: 'destination' },
      { id: 'norway', type: 'country' }
    ],
    createdAt: '2026-09-01'
  },
  {
    id: 'col-2027',
    name: 'Places to Visit in 2027',
    description: 'Target destinations for next year’s holiday calendar',
    icon: '✈️',
    itemIds: [
      { id: 'japan', type: 'country' },
      { id: 'ksamil', type: 'destination' },
      { id: 'lake-bled', type: 'destination' }
    ],
    createdAt: '2026-10-01'
  },
  {
    id: 'col-budget',
    name: 'Budget Travel Gems',
    description: 'Unreal experiences under $50/day',
    icon: '💎',
    itemIds: [
      { id: 'albania', type: 'country' },
      { id: 'vietnam', type: 'country' },
      { id: 'shirakawa-go', type: 'destination' }
    ],
    createdAt: '2026-10-05'
  }
];

export const useSavedStore = create<SavedStore>()(
  persist(
    (set, get) => ({
      savedItemIds: ['japan', 'kyoto', 'machu-picchu', 'norway', 'ksamil', 'lake-bled', 'albania', 'vietnam', 'shirakawa-go'],
      collections: DEFAULT_COLLECTIONS,

      toggleSaved: (id: string) => {
        const { savedItemIds } = get();
        if (savedItemIds.includes(id)) {
          set({ savedItemIds: savedItemIds.filter(i => i !== id) });
        } else {
          set({ savedItemIds: [...savedItemIds, id] });
        }
      },

      isSaved: (id: string) => {
        return get().savedItemIds.includes(id);
      },

      createCollection: (name: string, description: string, icon: string) => {
        const newCol: Collection = {
          id: `col-${Date.now()}`,
          name,
          description,
          icon: icon || '📁',
          itemIds: [],
          createdAt: new Date().toISOString().split('T')[0]
        };
        set({ collections: [...get().collections, newCol] });
      },

      deleteCollection: (id: string) => {
        set({ collections: get().collections.filter(c => c.id !== id) });
      },

      addToCollection: (collectionId: string, itemId: string, itemType: 'country' | 'destination') => {
        set({
          collections: get().collections.map(c => {
            if (c.id === collectionId) {
              if (c.itemIds.some(item => item.id === itemId)) return c;
              return { ...c, itemIds: [...c.itemIds, { id: itemId, type: itemType }] };
            }
            return c;
          })
        });
      },

      removeFromCollection: (collectionId: string, itemId: string) => {
        set({
          collections: get().collections.map(c => {
            if (c.id === collectionId) {
              return { ...c, itemIds: c.itemIds.filter(item => item.id !== itemId) };
            }
            return c;
          })
        });
      }
    }),
    {
      name: 'travelmore-saved-storage'
    }
  )
);
