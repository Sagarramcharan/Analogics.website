
import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-32 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          
          {/* Text Content Block */}
          <div className="order-2 lg:order-1">
            <div className="relative mb-10">
              <div className="w-16 h-1.5 bg-orange-500 mb-8 rounded-full"></div>
              <h3 className="text-5xl md:text-7xl font-black text-slate-900 leading-[0.9] tracking-tighter mb-8 uppercase italic">
                WELCOME TO <br/>
                <span className="text-blue-800">ANALOGICS</span>
              </h3>
              <div className="flex items-center gap-4 mb-10">
                <span className="h-px w-8 bg-slate-300"></span>
                <p className="text-sm font-bold text-slate-500 uppercase tracking-[0.3em]">
                  Redefining Precision
                </p>
              </div>
            </div>

            <p className="text-xl text-slate-700 leading-relaxed font-medium mb-8 max-w-xl">
              We empower global enterprises with mission-critical technology that sets new benchmarks in accuracy, reliability, and performance.
            </p>
            
            <p className="text-lg text-slate-500 leading-relaxed mb-12 max-w-xl">
              From the core of diagnostic medical imaging to high-security threat detection, Analogics delivers sophisticated systems designed to simplify complexity and drive operational excellence.
            </p>

            <div className="grid grid-cols-2 gap-10">
              <div className="border-l-4 border-blue-600 pl-6">
                <p className="text-4xl font-black text-slate-900 mb-1">40+</p>
                <p className="text-slate-500 text-[10px] font-bold uppercase tracking-widest">Years of Expertise</p>
              </div>
              <div className="border-l-4 border-orange-500 pl-6">
                <p className="text-4xl font-black text-slate-900 mb-1">Global</p>
                <p className="text-slate-500 text-[10px] font-bold uppercase tracking-widest">Industry Footprint</p>
              </div>
            </div>
          </div>

          {/* Image Block with 3D Effects */}
          <div className="order-1 lg:order-2">
            <div className="relative perspective-1000 py-10">
              <div className="tilt-container group relative">
                {/* Dynamic Glow Layer */}
                <div className="absolute -inset-4 bg-gradient-to-r from-blue-600/20 to-indigo-500/20 rounded-3xl blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                
                {/* Main Image Container */}
                <div className="relative rounded-2xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.15)] border border-slate-200/50 bg-white">
                  <img 
                    src="https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=95&w=1200" 
                    alt="Precision Engineering Realism" 
                    className="w-full h-[550px] object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  {/* Glass Shimmer Overlay */}
                  <div className="absolute inset-0 z-10 bg-gradient-to-tr from-blue-900/10 via-white/5 to-transparent opacity-50"></div>
                </div>

                {/* Floating 3D Badge */}
                <div className="absolute -bottom-8 -right-8 bg-white p-6 rounded-2xl shadow-xl border border-slate-100 z-30 transform transition-transform duration-500 group-hover:translate-z-50 translate-z-20 hidden md:block" style={{ transform: 'translateZ(40px)' }}>
                   <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                         <div className="w-6 h-6 bg-blue-600 rounded-full animate-pulse"></div>
                      </div>
                      <div>
                        <p className="text-[10px] font-black uppercase tracking-widest text-slate-400 leading-none mb-1">Status</p>
                        <p className="text-sm font-bold text-slate-900">Precision Verified</p>
                      </div>
                   </div>
                </div>
              </div>

              {/* Background abstract elements */}
              <div className="absolute -bottom-10 -left-10 w-48 h-48 bg-blue-50/50 -z-10 rounded-full blur-3xl"></div>
              <div className="absolute top-0 right-0 w-32 h-32 bg-orange-50/30 -z-10 rounded-full blur-2xl"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
