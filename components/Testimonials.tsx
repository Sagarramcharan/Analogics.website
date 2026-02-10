
import React from 'react';
import { Quote } from 'lucide-react';
import { TESTIMONIALS } from '../constants';

const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="relative py-32 overflow-hidden">
      {/* 3D-Effect Fixed Background */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=95&w=2000")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      >
        {/* Dark Overlay for readability */}
        <div className="absolute inset-0 bg-slate-950/90"></div>
        <div className="absolute inset-0 bg-gradient-to-tr from-blue-900/30 to-transparent"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-orange-500 font-bold tracking-[0.3em] uppercase text-xs mb-4">Client Echoes</h2>
          <h3 className="text-4xl md:text-5xl font-black text-white mb-6 uppercase italic">Trusted by Global Leaders</h3>
          <p className="text-lg text-slate-400 font-medium leading-relaxed">
            Our commitment to precision has earned the trust of some of the world's most innovative organizations.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((t) => (
            <div key={t.id} className="group bg-slate-900/40 backdrop-blur-xl p-10 rounded-2xl border border-white/5 relative hover:border-blue-500/50 transition-all duration-500 hover:-translate-y-2">
              <Quote className="absolute top-8 right-8 w-10 h-10 text-blue-500/20 group-hover:text-blue-500/40 transition-colors" />
              <p className="text-lg text-slate-300 italic mb-10 relative z-10 leading-relaxed">
                "{t.content}"
              </p>
              <div className="flex items-center gap-4">
                <div className="relative">
                  <img src={t.avatar} alt={t.name} className="w-14 h-14 rounded-full object-cover border-2 border-slate-700 group-hover:border-blue-500 transition-colors" />
                  <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-orange-500 rounded-full flex items-center justify-center border-2 border-slate-900">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                </div>
                <div>
                  <h4 className="font-bold text-white text-lg">{t.name}</h4>
                  <p className="text-xs font-bold text-slate-500 uppercase tracking-widest">{t.role}, {t.company}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
