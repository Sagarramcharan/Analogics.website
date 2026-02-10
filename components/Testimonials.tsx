
import React from 'react';
import { Quote } from 'lucide-react';
import { TESTIMONIALS } from '../constants';

const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="py-24 bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-indigo-400 font-semibold tracking-wider uppercase text-sm mb-3">Testimonials</h2>
          <h3 className="text-4xl font-bold mb-6">Trusted by industry leaders</h3>
          <p className="text-lg text-slate-400">
            Don't just take our word for it. Here's what our partners say about working with NovaSphere.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((t) => (
            <div key={t.id} className="bg-slate-800/50 p-10 rounded-3xl border border-slate-700 relative hover:border-indigo-500/50 transition-colors">
              <Quote className="absolute top-8 right-8 w-12 h-12 text-slate-700 opacity-30" />
              <p className="text-lg text-slate-300 italic mb-8 relative z-10">
                "{t.content}"
              </p>
              <div className="flex items-center gap-4">
                <img src={t.avatar} alt={t.name} className="w-12 h-12 rounded-full object-cover border-2 border-slate-700" />
                <div>
                  <h4 className="font-bold text-white">{t.name}</h4>
                  <p className="text-sm text-slate-400">{t.role}, {t.company}</p>
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
