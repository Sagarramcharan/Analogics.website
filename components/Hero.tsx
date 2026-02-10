
import React from 'react';
import { ArrowRight, ChevronDown } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-slate-900">
      {/* Cinematic Background */}
      <div className="absolute inset-0 opacity-40">
        <img 
          src="https://images.unsplash.com/photo-1576086213369-97a306d36557?auto=format&fit=crop&q=80&w=2000" 
          alt="Engineering Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/80 to-transparent"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl">
          <div className="w-20 h-1 bg-blue-600 mb-8"></div>
          <h1 className="text-5xl md:text-7xl font-bold text-white tracking-tight leading-none mb-8">
            Advancing Life Through <span className="text-blue-500">Precision</span>.
          </h1>
          
          <p className="text-xl md:text-2xl text-slate-300 mb-10 leading-relaxed font-light">
            Our powerful cross-platform software applications along with our Hand Held Computers and other devices are customizable and are designed to help businesses simplify their operational processes.
          </p>

          <div className="flex flex-col sm:flex-row gap-6">
            <button className="group flex items-center justify-center gap-3 px-10 py-5 bg-blue-600 hover:bg-blue-500 text-white text-sm font-bold uppercase tracking-widest transition-all">
              Explore Our Technologies
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="px-10 py-5 border border-white/30 text-white text-sm font-bold uppercase tracking-widest hover:bg-white/10 transition-all">
              Global Operations
            </button>
          </div>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce text-white/50 hidden md:block">
        <ChevronDown className="w-8 h-8" />
      </div>
    </section>
  );
};

export default Hero;
