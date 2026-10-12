import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Bookmark,
  FolderPlus,
  Trash2,
  Plus,
  Folder,
  Globe,
  MapPin,
  Luggage
} from 'lucide-react';
import { useSavedStore } from '../stores/useSavedStore';
import { ALL_COUNTRIES } from '../data/countries';
import { ALL_DESTINATIONS } from '../data/destinations';
import { CountryCard } from '../components/cards/CountryCard';
import { DestinationCard } from '../components/cards/DestinationCard';

export const SavedView: React.FC = () => {
  const navigate = useNavigate();
  const { savedItemIds, collections, createCollection, deleteCollection, toggleSaved } = useSavedStore();

  const [activeTab, setActiveTab] = useState<'All' | 'Countries' | 'Destinations' | 'Collections'>('All');
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [newColName, setNewColName] = useState('');
  const [newColDesc, setNewColDesc] = useState('');
  const [newColIcon, setNewColIcon] = useState('✨');

  // Resolved saved items
  const savedCountries = ALL_COUNTRIES.filter(c => savedItemIds.includes(c.id));
  const savedDestinations = ALL_DESTINATIONS.filter(d => savedItemIds.includes(d.id));

  const handleCreateCollection = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newColName.trim()) return;
    createCollection(newColName, newColDesc, newColIcon);
    setNewColName('');
    setNewColDesc('');
    setShowCreateModal(false);
  };

  return (
    <div className="space-y-8 pb-16">
      {/* Header */}
      <div className="bg-white rounded-3xl p-6 md:p-8 border border-stone-200/80 shadow-2xs flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-rose-50 text-rose-700 border border-rose-200 mb-2">
            <Bookmark className="w-3.5 h-3.5" />
            <span>Saved Bookmarks & Collections</span>
          </div>
          <h1 className="font-serif text-3xl md:text-4xl font-bold text-stone-900">
            Saved Places
          </h1>
          <p className="text-xs md:text-sm text-stone-500 mt-1">
            {savedItemIds.length} bookmarked places across {collections.length} custom collections.
          </p>
        </div>

        <button
          onClick={() => setShowCreateModal(true)}
          className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-stone-900 hover:bg-stone-800 text-white font-bold text-xs shadow-xs transition-colors self-start md:self-auto"
        >
          <FolderPlus className="w-4 h-4" />
          <span>New Collection</span>
        </button>
      </div>

      {/* Tabs */}
      <div className="flex items-center gap-2 border-b border-stone-200 pb-2 overflow-x-auto scrollbar-none">
        {(['All', 'Countries', 'Destinations', 'Collections'] as const).map(tab => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-4 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition-all ${
              activeTab === tab
                ? 'bg-stone-900 text-white font-bold shadow-xs'
                : 'text-stone-600 hover:text-stone-900 hover:bg-stone-100'
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Content */}
      <div className="space-y-8">
        {/* COLLECTIONS VIEW */}
        {(activeTab === 'Collections' || activeTab === 'All') && collections.length > 0 && (
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="font-serif text-xl font-bold text-stone-900">Custom Collections</h3>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
              {collections.map(col => (
                <div
                  key={col.id}
                  className="p-5 bg-white rounded-2xl border border-stone-200 shadow-2xs hover:border-brand-300 transition-all space-y-3 group"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-3xl p-2 bg-stone-50 rounded-xl">{col.icon}</span>
                    <button
                      onClick={() => deleteCollection(col.id)}
                      className="p-1.5 text-stone-300 hover:text-rose-600 transition-colors"
                      title="Delete Collection"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                  <div>
                    <h4 className="font-serif font-bold text-base text-stone-900 group-hover:text-brand-600 transition-colors">
                      {col.name}
                    </h4>
                    <p className="text-xs text-stone-500 font-light mt-0.5">{col.description}</p>
                  </div>
                  <div className="pt-2 border-t border-stone-100 flex items-center justify-between text-xs text-stone-400">
                    <span>{col.itemIds.length} items</span>
                    <span>Created {col.createdAt}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* SAVED COUNTRIES */}
        {(activeTab === 'Countries' || activeTab === 'All') && (
          <div className="space-y-4">
            <h3 className="font-serif text-xl font-bold text-stone-900">
              Saved Countries ({savedCountries.length})
            </h3>
            {savedCountries.length === 0 ? (
              <p className="text-stone-400 text-xs italic">No countries saved yet.</p>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
                {savedCountries.map(country => (
                  <CountryCard key={country.id} country={country} />
                ))}
              </div>
            )}
          </div>
        )}

        {/* SAVED DESTINATIONS */}
        {(activeTab === 'Destinations' || activeTab === 'All') && (
          <div className="space-y-4">
            <h3 className="font-serif text-xl font-bold text-stone-900">
              Saved Destinations ({savedDestinations.length})
            </h3>
            {savedDestinations.length === 0 ? (
              <p className="text-stone-400 text-xs italic">No destinations saved yet.</p>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                {savedDestinations.map(dest => (
                  <DestinationCard key={dest.id} destination={dest} />
                ))}
              </div>
            )}
          </div>
        )}
      </div>

      {/* Create Collection Modal */}
      {showCreateModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-xs p-4" onClick={() => setShowCreateModal(false)}>
          <div className="bg-white rounded-3xl shadow-floating w-full max-w-md p-6 space-y-4" onClick={e => e.stopPropagation()}>
            <h3 className="font-serif text-lg font-bold text-stone-900">Create New Collection</h3>
            <form onSubmit={handleCreateCollection} className="space-y-3 text-xs">
              <div>
                <label className="font-semibold text-stone-600 block mb-1">Collection Name</label>
                <input
                  type="text"
                  placeholder="e.g. Summer 2027 Escapes"
                  value={newColName}
                  onChange={e => setNewColName(e.target.value)}
                  className="w-full p-2.5 border border-stone-200 rounded-xl focus:outline-hidden focus:border-brand-500"
                  required
                />
              </div>

              <div>
                <label className="font-semibold text-stone-600 block mb-1">Description</label>
                <input
                  type="text"
                  placeholder="Short note about this collection"
                  value={newColDesc}
                  onChange={e => setNewColDesc(e.target.value)}
                  className="w-full p-2.5 border border-stone-200 rounded-xl focus:outline-hidden focus:border-brand-500"
                />
              </div>

              <div>
                <label className="font-semibold text-stone-600 block mb-1">Icon / Emoji</label>
                <input
                  type="text"
                  value={newColIcon}
                  onChange={e => setNewColIcon(e.target.value)}
                  className="w-20 p-2.5 border border-stone-200 rounded-xl text-center text-lg"
                />
              </div>

              <div className="flex items-center justify-end gap-2 pt-3 border-t border-stone-100">
                <button
                  type="button"
                  onClick={() => setShowCreateModal(false)}
                  className="px-4 py-2 text-stone-500 hover:text-stone-800"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-5 py-2 bg-brand-500 text-white font-bold rounded-xl hover:bg-brand-600"
                >
                  Create Collection
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};
