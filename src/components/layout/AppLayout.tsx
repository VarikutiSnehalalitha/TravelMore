import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import { Header } from './Header';
import { Sidebar } from './Sidebar';
import { MobileNav } from './MobileNav';
import { Breadcrumbs } from './Breadcrumbs';
import { SearchModal } from '../common/SearchModal';
import { X } from 'lucide-react';

export const AppLayout: React.FC = () => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen bg-stone-50 flex flex-col font-sans text-stone-900 antialiased selection:bg-brand-500 selection:text-white pb-16 md:pb-0">
      {/* Top Header */}
      <Header
        onOpenSearch={() => setIsSearchOpen(true)}
        onToggleSidebar={() => setIsMobileSidebarOpen(!isMobileSidebarOpen)}
      />

      {/* Main Body Shell */}
      <div className="flex-1 flex max-w-[1720px] w-full mx-auto">
        {/* Desktop Sidebar */}
        <Sidebar />

        {/* Mobile Sidebar Overlay Drawer */}
        {isMobileSidebarOpen && (
          <div
            className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs md:hidden"
            onClick={() => setIsMobileSidebarOpen(false)}
          >
            <div
              className="w-72 bg-white h-full p-4 overflow-y-auto relative animate-in slide-in-from-left duration-200"
              onClick={e => e.stopPropagation()}
            >
              <div className="flex items-center justify-between pb-3 border-b border-stone-200 mb-4">
                <span className="font-serif font-black text-lg text-stone-900">TRAVEL MORE</span>
                <button
                  onClick={() => setIsMobileSidebarOpen(false)}
                  className="p-1.5 rounded-lg text-stone-400 hover:text-stone-700"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
              <div onClick={() => setIsMobileSidebarOpen(false)}>
                <Sidebar />
              </div>
            </div>
          </div>
        )}

        {/* Dynamic Route Content */}
        <main className="flex-1 min-w-0 px-4 md:px-8 py-4 overflow-x-hidden">
          <Breadcrumbs />
          <div className="mt-1">
            <Outlet />
          </div>
        </main>
      </div>

      {/* Mobile Bottom Fixed Nav */}
      <MobileNav />

      {/* Global Cmd+K Search Modal */}
      <SearchModal isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />
    </div>
  );
};
