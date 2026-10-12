import React, { useState } from 'react';
import { Settings, DollarSign, Globe, Moon, Bell, Shield, Database, Check } from 'lucide-react';
import { useCurrencyStore } from '../stores/useCurrencyStore';
import { CURRENCIES } from '../data/currencies';

export const SettingsView: React.FC = () => {
  const { activeCurrency, setCurrency } = useCurrencyStore();
  const [distanceUnit, setDistanceUnit] = useState<'km' | 'miles'>('km');
  const [tempUnit, setTempUnit] = useState<'celsius' | 'fahrenheit'>('celsius');
  const [appearance, setAppearance] = useState<'light' | 'dark' | 'system'>('light');
  const [emailNotifications, setEmailNotifications] = useState(true);
  const [pushNotifications, setPushNotifications] = useState(true);
  const [savedBanner, setSavedBanner] = useState(false);

  const handleCurrencyChange = (code: string) => {
    setCurrency(code);
    setSavedBanner(true);
    setTimeout(() => setSavedBanner(false), 2500);
  };

  const handleExportData = () => {
    const data = {
      timestamp: new Date().toISOString(),
      activeCurrency: activeCurrency.code,
      note: 'Travel More Export'
    };
    const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `travel-more-backup-${Date.now()}.json`;
    a.click();
  };

  const handleResetData = () => {
    if (confirm('Are you sure you want to reset your local travel data back to default?')) {
      localStorage.clear();
      window.location.reload();
    }
  };

  return (
    <div className="max-w-3xl mx-auto space-y-8 pb-16">
      {/* Header */}
      <div className="bg-white rounded-3xl p-6 md:p-8 border border-stone-200/80 shadow-2xs space-y-2">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-stone-100 text-stone-700 mb-1">
          <Settings className="w-3.5 h-3.5" />
          <span>System & Preferences</span>
        </div>
        <h1 className="font-serif text-3xl font-bold text-stone-900">App Settings</h1>
        <p className="text-xs text-stone-500 font-light">
          Configure preferred currency, measurement units, appearance theme, and data management.
        </p>

        {savedBanner && (
          <div className="p-3 bg-emerald-50 border border-emerald-200 text-emerald-800 rounded-xl text-xs font-semibold flex items-center gap-2 animate-in fade-in">
            <Check className="w-4 h-4 text-emerald-600" />
            <span>Settings updated. Prices across all screens are now recalculated in {activeCurrency.code}.</span>
          </div>
        )}
      </div>

      {/* 1. Global Currency Selector */}
      <div className="bg-white rounded-3xl p-6 md:p-8 border border-stone-200 shadow-2xs space-y-4">
        <div className="flex items-center gap-2 pb-2 border-b border-stone-100">
          <DollarSign className="w-5 h-5 text-brand-600" />
          <div>
            <h3 className="font-serif text-lg font-bold text-stone-900">Global Currency</h3>
            <p className="text-xs text-stone-500">Every price in every view will automatically convert to your choice.</p>
          </div>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3 pt-2">
          {Object.values(CURRENCIES).map(curr => {
            const isSelected = activeCurrency.code === curr.code;
            return (
              <button
                key={curr.code}
                type="button"
                onClick={() => handleCurrencyChange(curr.code)}
                className={`p-3 rounded-2xl border text-center transition-all ${
                  isSelected
                    ? 'border-brand-500 bg-brand-50/80 shadow-xs'
                    : 'border-stone-200 hover:border-stone-300 bg-stone-50/50'
                }`}
              >
                <span className="text-xl font-bold font-mono block text-stone-800">{curr.symbol}</span>
                <span className="text-xs font-bold text-stone-900 block mt-1">{curr.code}</span>
                <span className="text-[10px] text-stone-400 block truncate">{curr.name}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* 2. Units of Measurement */}
      <div className="bg-white rounded-3xl p-6 md:p-8 border border-stone-200 shadow-2xs space-y-4">
        <div className="flex items-center gap-2 pb-2 border-b border-stone-100">
          <Globe className="w-5 h-5 text-stone-700" />
          <div>
            <h3 className="font-serif text-lg font-bold text-stone-900">Measurement Units</h3>
            <p className="text-xs text-stone-500">Configure distance and temperature indicators.</p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-1">
          <div>
            <label className="text-xs font-semibold text-stone-600 block mb-1">Distance & Speed</label>
            <div className="flex gap-2">
              <button
                type="button"
                onClick={() => setDistanceUnit('km')}
                className={`flex-1 py-2 rounded-xl text-xs font-semibold border ${distanceUnit === 'km' ? 'bg-stone-900 text-white border-stone-900' : 'bg-stone-50 border-stone-200 text-stone-700'}`}
              >
                Kilometers (km)
              </button>
              <button
                type="button"
                onClick={() => setDistanceUnit('miles')}
                className={`flex-1 py-2 rounded-xl text-xs font-semibold border ${distanceUnit === 'miles' ? 'bg-stone-900 text-white border-stone-900' : 'bg-stone-50 border-stone-200 text-stone-700'}`}
              >
                Miles (mi)
              </button>
            </div>
          </div>

          <div>
            <label className="text-xs font-semibold text-stone-600 block mb-1">Temperature</label>
            <div className="flex gap-2">
              <button
                type="button"
                onClick={() => setTempUnit('celsius')}
                className={`flex-1 py-2 rounded-xl text-xs font-semibold border ${tempUnit === 'celsius' ? 'bg-stone-900 text-white border-stone-900' : 'bg-stone-50 border-stone-200 text-stone-700'}`}
              >
                Celsius (°C)
              </button>
              <button
                type="button"
                onClick={() => setTempUnit('fahrenheit')}
                className={`flex-1 py-2 rounded-xl text-xs font-semibold border ${tempUnit === 'fahrenheit' ? 'bg-stone-900 text-white border-stone-900' : 'bg-stone-50 border-stone-200 text-stone-700'}`}
              >
                Fahrenheit (°F)
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* 3. Appearance */}
      <div className="bg-white rounded-3xl p-6 md:p-8 border border-stone-200 shadow-2xs space-y-4">
        <div className="flex items-center gap-2 pb-2 border-b border-stone-100">
          <Moon className="w-5 h-5 text-stone-700" />
          <div>
            <h3 className="font-serif text-lg font-bold text-stone-900">Appearance Theme</h3>
            <p className="text-xs text-stone-500">Editorial light or dark ambiance.</p>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-3">
          {(['light', 'dark', 'system'] as const).map(mode => (
            <button
              key={mode}
              type="button"
              onClick={() => setAppearance(mode)}
              className={`p-3 rounded-2xl border text-center text-xs font-bold capitalize transition-all ${
                appearance === mode
                  ? 'border-brand-500 bg-brand-50/80 text-brand-900'
                  : 'border-stone-200 bg-stone-50/50 text-stone-600'
              }`}
            >
              {mode === 'light' ? '☀️ Editorial Light' : mode === 'dark' ? '🌙 Night Mode' : '💻 System Match'}
            </button>
          ))}
        </div>
      </div>

      {/* 4. Data & Backup */}
      <div className="bg-white rounded-3xl p-6 md:p-8 border border-stone-200 shadow-2xs space-y-4">
        <div className="flex items-center gap-2 pb-2 border-b border-stone-100">
          <Database className="w-5 h-5 text-stone-700" />
          <div>
            <h3 className="font-serif text-lg font-bold text-stone-900">Data Management</h3>
            <p className="text-xs text-stone-500">Export your custom trips and saved collections.</p>
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-3 pt-1">
          <button
            onClick={handleExportData}
            className="px-4 py-2 bg-stone-100 hover:bg-stone-200 text-stone-800 text-xs font-bold rounded-xl border border-stone-200 transition-colors"
          >
            Export Trips & Data (JSON)
          </button>
          <button
            onClick={handleResetData}
            className="px-4 py-2 bg-rose-50 hover:bg-rose-100 text-rose-700 text-xs font-bold rounded-xl border border-rose-200 transition-colors"
          >
            Reset to Default Seed Data
          </button>
        </div>
      </div>
    </div>
  );
};
