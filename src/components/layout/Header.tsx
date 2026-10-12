import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Search, Globe, Bell, ChevronDown, Compass, Menu } from 'lucide-react';
import { useCurrencyStore } from '../../stores/useCurrencyStore';
import { useUserStore } from '../../stores/useUserStore';
import { CURRENCIES } from '../../data/currencies';

interface HeaderProps {
  onOpenSearch: () => void;
  onToggleSidebar?: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenSearch, onToggleSidebar }) => {
  const navigate = useNavigate();
  const { activeCurrency, setCurrency } = useCurrencyStore();
  const { profile } = useUserStore();

  const [showCurrencyDropdown, setShowCurrencyDropdown] = useState(false);
  const [showLanguageDropdown, setShowLanguageDropdown] = useState(false);
  const [showNotifications, setShowNotifications] = useState(false);
  const [activeLanguage, setActiveLanguage] = useState('English');

  const languages = ['English', 'Español', 'Français', 'Deutsch', '日本語', 'Italiano'];

  return (
    <header className="sticky top-0 z-30 bg-white/95 backdrop-blur-md border-b border-stone-200/80 h-16 px-4 md:px-8 flex items-center justify-between">
      {/* Left: Mobile hamburger & Logo */}
      <div className="flex items-center gap-3">
        {onToggleSidebar && (
          <button
            onClick={onToggleSidebar}
            className="md:hidden p-2 rounded-xl text-stone-600 hover:bg-stone-100 transition-colors"
          >
            <Menu className="w-5 h-5" />
          </button>
        )}

        <Link to="/" className="flex items-center gap-2 group">
          <div className="w-9 h-9 rounded-xl bg-brand-500 text-white flex items-center justify-center shadow-xs group-hover:bg-brand-600 transition-colors">
            <Compass className="w-5 h-5 group-hover:rotate-45 transition-transform duration-500" />
          </div>
          <div>
            <span className="font-serif font-black text-lg md:text-xl tracking-tight text-stone-900 leading-none">
              TRAVEL MORE
            </span>
            <span className="block text-[10px] tracking-widest text-brand-600 font-semibold uppercase leading-none mt-0.5">
              Wanderlust Edition
            </span>
          </div>
        </Link>
      </div>

      {/* Center: Global Search Pill */}
      <div className="flex-1 max-w-md mx-4 hidden sm:block">
        <button
          onClick={onOpenSearch}
          className="w-full flex items-center justify-between px-3.5 py-2 bg-stone-100/80 hover:bg-stone-100 text-stone-500 hover:text-stone-800 rounded-xl border border-stone-200/60 text-xs transition-all shadow-2xs group"
        >
          <div className="flex items-center gap-2.5">
            <Search className="w-4 h-4 text-stone-400 group-hover:text-brand-500 transition-colors" />
            <span>Search 35+ countries, hidden gems, guides...</span>
          </div>
          <kbd className="hidden md:inline-block px-1.5 py-0.5 text-[10px] font-semibold text-stone-400 bg-white rounded border border-stone-200 shadow-2xs">
            ⌘K
          </kbd>
        </button>
      </div>

      {/* Right Controls: Search icon for mobile, Currency, Language, Notifications, Profile */}
      <div className="flex items-center gap-2 md:gap-3">
        {/* Mobile search trigger */}
        <button
          onClick={onOpenSearch}
          className="sm:hidden p-2 text-stone-600 hover:bg-stone-100 rounded-xl"
        >
          <Search className="w-5 h-5" />
        </button>

        {/* Currency Switcher */}
        <div className="relative">
          <button
            onClick={() => {
              setShowCurrencyDropdown(!showCurrencyDropdown);
              setShowLanguageDropdown(false);
              setShowNotifications(false);
            }}
            className="flex items-center gap-1 px-2.5 py-1.5 rounded-xl border border-stone-200 text-xs font-semibold text-stone-700 hover:bg-stone-100 transition-colors"
          >
            <span>{activeCurrency.symbol}</span>
            <span>{activeCurrency.code}</span>
            <ChevronDown className="w-3 h-3 text-stone-400" />
          </button>

          {showCurrencyDropdown && (
            <div className="absolute right-0 mt-2 w-48 bg-white rounded-2xl shadow-floating border border-stone-200 p-1.5 z-50">
              <div className="px-2.5 py-1.5 text-[11px] font-semibold text-stone-400 uppercase tracking-wider border-b border-stone-100 mb-1">
                Preferred Currency
              </div>
              <div className="max-h-64 overflow-y-auto space-y-0.5">
                {Object.values(CURRENCIES).map(curr => (
                  <button
                    key={curr.code}
                    onClick={() => {
                      setCurrency(curr.code);
                      setShowCurrencyDropdown(false);
                    }}
                    className={`w-full flex items-center justify-between px-2.5 py-1.5 rounded-lg text-xs transition-colors ${
                      activeCurrency.code === curr.code
                        ? 'bg-brand-50 text-brand-700 font-bold'
                        : 'text-stone-700 hover:bg-stone-50'
                    }`}
                  >
                    <span>{curr.name}</span>
                    <span className="font-mono text-stone-400">{curr.symbol} {curr.code}</span>
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Language Selector */}
        <div className="relative hidden lg:block">
          <button
            onClick={() => {
              setShowLanguageDropdown(!showLanguageDropdown);
              setShowCurrencyDropdown(false);
              setShowNotifications(false);
            }}
            className="flex items-center gap-1 px-2.5 py-1.5 rounded-xl border border-stone-200 text-xs font-semibold text-stone-700 hover:bg-stone-100 transition-colors"
          >
            <Globe className="w-3.5 h-3.5 text-stone-400" />
            <span>{activeLanguage}</span>
            <ChevronDown className="w-3 h-3 text-stone-400" />
          </button>

          {showLanguageDropdown && (
            <div className="absolute right-0 mt-2 w-36 bg-white rounded-2xl shadow-floating border border-stone-200 p-1.5 z-50">
              <div className="px-2 py-1 text-[10px] font-semibold text-stone-400 uppercase tracking-wider border-b border-stone-100 mb-1">
                Select Language
              </div>
              {languages.map(lang => (
                <button
                  key={lang}
                  onClick={() => {
                    setActiveLanguage(lang);
                    setShowLanguageDropdown(false);
                  }}
                  className={`w-full text-left px-2.5 py-1.5 rounded-lg text-xs transition-colors ${
                    activeLanguage === lang
                      ? 'bg-brand-50 text-brand-700 font-bold'
                      : 'text-stone-700 hover:bg-stone-50'
                  }`}
                >
                  {lang}
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Notifications Bell */}
        <div className="relative">
          <button
            onClick={() => {
              setShowNotifications(!showNotifications);
              setShowCurrencyDropdown(false);
              setShowLanguageDropdown(false);
            }}
            className="relative p-2 rounded-xl text-stone-600 hover:bg-stone-100 transition-colors"
            title="Notifications"
          >
            <Bell className="w-5 h-5" />
            <span className="absolute top-1.5 right-1.5 w-2 h-2 rounded-full bg-brand-500 ring-2 ring-white" />
          </button>

          {showNotifications && (
            <div className="absolute right-0 mt-2 w-80 bg-white rounded-2xl shadow-floating border border-stone-200 p-4 z-50">
              <div className="flex items-center justify-between pb-2 border-b border-stone-100 mb-3">
                <h4 className="font-semibold text-xs text-stone-900">Notifications (2 new)</h4>
                <span className="text-[10px] text-brand-600 font-semibold cursor-pointer">Mark read</span>
              </div>
              <div className="space-y-3">
                <div className="p-2.5 rounded-xl bg-brand-50/60 border border-brand-100 text-xs">
                  <p className="font-semibold text-brand-900">🌸 Cherry Blossom Forecast Alert</p>
                  <p className="text-stone-600 text-[11px] mt-0.5">Kyoto peak bloom predicted April 4-11 for 2027.</p>
                </div>
                <div className="p-2.5 rounded-xl bg-stone-50 border border-stone-100 text-xs">
                  <p className="font-semibold text-stone-900">✈️ Upcoming Trip: Japan Odyssey</p>
                  <p className="text-stone-600 text-[11px] mt-0.5">Countdown: 18 days until departure to Tokyo Haneda.</p>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* User Profile Avatar */}
        <Link
          to="/profile"
          className="flex items-center gap-2 pl-2 border-l border-stone-200 group"
          title="Profile & Travel Preferences"
        >
          <img
            src={profile.avatar}
            alt={profile.name}
            className="w-8 h-8 rounded-full object-cover ring-2 ring-stone-200 group-hover:ring-brand-500 transition-all shadow-2xs"
          />
        </Link>
      </div>
    </header>
  );
};
