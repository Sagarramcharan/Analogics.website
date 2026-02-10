
import React from 'react';
import { SECTORS } from '../constants';

const Services: React.FC = () => {
  return (
    <section id="services" className="py-20 bg-white relative overflow-hidden">
      {/* Background fingerprint pattern (SVG mask) */}
      <div className="absolute left-0 bottom-0 w-64 h-64 opacity-5 pointer-events-none transform -translate-x-1/4 translate-y-1/4">
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          <circle cx="100" cy="100" r="80" fill="none" stroke="currentColor" strokeWidth="2" strokeDasharray="10 5" />
          <circle cx="100" cy="100" r="60" fill="none" stroke="currentColor" strokeWidth="2" strokeDasharray="8 6" />
          <circle cx="100" cy="100" r="40" fill="none" stroke="currentColor" strokeWidth="2" strokeDasharray="5 5" />
          <circle cx="100" cy="100" r="20" fill="none" stroke="currentColor" strokeWidth="2" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-16">
          
          {/* Left Title Section */}
          <div className="lg:w-1/3 text-right flex items-center justify-end gap-10">
            <h3 className="text-xl md:text-2xl font-bold text-blue-800 tracking-tight leading-snug uppercase max-w-[250px]">
              OUR PRODUCTS & SOLUTIONS CATER TO NEEDS IN MULTIPLE SECTORS
            </h3>
            {/* Orange Vertical Divider */}
            <div className="w-0.5 h-24 bg-orange-400 hidden lg:block"></div>
          </div>

          {/* Right Icons Grid Section */}
          <div className="lg:w-2/3">
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-y-12 gap-x-4">
              {SECTORS.map((sector) => (
                <div key={sector.id} className="group flex flex-col items-center text-center">
                  <div className="w-20 h-20 bg-orange-50/70 rounded-2xl flex items-center justify-center text-orange-500 mb-4 transition-all duration-300 group-hover:bg-orange-100 group-hover:-translate-y-1 group-hover:shadow-lg group-hover:shadow-orange-200/50">
                    {sector.icon}
                  </div>
                  <span className="text-[10px] sm:text-[11px] font-black text-slate-700 tracking-wider leading-tight max-w-[100px] uppercase">
                    {sector.title}
                  </span>
                </div>
              ))}
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default Services;
