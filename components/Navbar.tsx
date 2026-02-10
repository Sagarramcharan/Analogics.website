
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { NAV_ITEMS } from '../constants';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white shadow-sm py-2' : 'bg-white py-4'
      } border-b border-slate-100`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo Section */}
          <div className="flex items-center gap-3 shrink-0">
            <div className="relative w-10 h-10 flex items-center justify-center">
               <div className="absolute inset-0 bg-blue-600 rounded-full opacity-10 animate-pulse"></div>
               <svg viewBox="0 0 100 100" className="w-8 h-8 relative z-10">
                 <circle cx="50" cy="50" r="40" fill="none" stroke="#1e40af" strokeWidth="8" />
                 <circle cx="50" cy="50" r="15" fill="#1e40af" />
                 <path d="M50 10 A40 40 0 0 1 90 50" fill="none" stroke="#f97316" strokeWidth="12" strokeLinecap="round" />
               </svg>
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-black italic tracking-tighter text-blue-900 leading-none">
                ANALOGICS
              </span>
              <span className="text-[8px] text-slate-500 font-medium tracking-wide italic">
                Redefining Technologies...
              </span>
            </div>
          </div>

          {/* Desktop Nav - Optimized for 8 items */}
          <div className="hidden xl:flex items-center space-x-6">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="group relative py-2 text-[11px] font-bold tracking-widest text-slate-700 hover:text-blue-800 transition-colors"
              >
                {item.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-orange-500 transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
          </div>

          {/* Mobile Menu Toggle */}
          <div className="xl:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-slate-900 p-2"
            >
              {isOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav Overlay */}
      {isOpen && (
        <div className="xl:hidden absolute top-full left-0 right-0 bg-white border-b border-slate-200 animate-in fade-in slide-in-from-top-4 overflow-y-auto max-h-[80vh]">
          <div className="px-4 py-8 space-y-2">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="block text-sm font-bold text-slate-800 hover:text-blue-700 border-l-4 border-transparent hover:border-orange-500 pl-4 py-3 uppercase tracking-widest"
              >
                {item.label}
              </a>
            ))}
            <div className="pt-4 mt-4 border-t border-slate-100">
               <button className="w-full bg-blue-700 text-white py-4 text-xs font-bold uppercase tracking-widest rounded-sm">
                  Contact Sales
               </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
