
import React from 'react';
import { ArrowRight, ChevronDown } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* 3D-Effect Fixed Background */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=95&w=2000")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      >
        {/* Depth Overlay */}
        <div className="absolute inset-0 bg-slate-950/70"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-900/20 to-slate-950"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-20">
        <div className="max-w-4xl">
          <div className="flex items-center gap-4 mb-8">
            <div className="h-px w-12 bg-orange-500"></div>
            <span className="text-orange-500 text-sm font-black uppercase tracking-[0.4em]">Leading the Future</span>
          </div>
          
          <h1 className="text-6xl md:text-8xl font-black text-white leading-[0.9] tracking-tighter mb-10 italic">
            ENGINEERING <br/>
            <span className="text-blue-500">PRECISION</span> <br/>
            AT SCALE.
          </h1>

          <p className="text-xl md:text-2xl text-slate-300 mb-12 max-w-2xl leading-relaxed font-medium">
            Analogics Private Limited delivers world-class technology solutions that redefine accuracy in medical, industrial, and security sectors.
          </p>

          <div className="flex flex-col sm:flex-row gap-6">
            <button className="group bg-blue-700 hover:bg-blue-600 text-white px-10 py-5 rounded-sm font-bold text-sm uppercase tracking-widest transition-all flex items-center justify-center gap-3">
              Explore Solutions
              <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
            </button>
            <button className="border border-white/20 hover:bg-white/10 text-white px-10 py-5 rounded-sm font-bold text-sm uppercase tracking-widest transition-all backdrop-blur-sm">
              Our Products
            </button>
          </div>
        </div>
      </div>

      {/* Floating Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 animate-bounce">
        <ChevronDown className="w-8 h-8 text-white/50" />
      </div>
    </section>
  );
};

export default Hero;
