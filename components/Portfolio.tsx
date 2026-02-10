
import React, { useState } from 'react';
import { PROJECTS } from '../constants';

const Portfolio: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const categories = ['All', 'Healthcare', 'Security', 'Industrial'];

  const filteredProjects = activeFilter === 'All' 
    ? PROJECTS 
    : PROJECTS.filter(p => p.category === activeFilter);

  return (
    <section id="industries" className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Reference-inspired Header Layout */}
        <div className="flex flex-col lg:flex-row items-center gap-10 mb-20">
          <div className="lg:w-1/2">
            <h3 className="text-4xl md:text-5xl font-serif text-slate-800 tracking-tight uppercase">
              SOFTWARE & SOLUTIONS
            </h3>
          </div>
          
          <div className="hidden lg:block w-px h-24 bg-orange-500 self-center"></div>
          <div className="lg:hidden w-24 h-px bg-orange-500 mb-4"></div>

          <div className="lg:w-1/2">
            <p className="text-lg text-slate-600 leading-relaxed font-light">
              Our powerful cross-platform software applications along with our Hand Held Computers and other devices are customizable and are designed to help businesses simplify their operational processes.
            </p>
          </div>
        </div>

        <div className="flex flex-wrap gap-4 mb-16">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className={`text-xs font-bold uppercase tracking-widest pb-2 border-b-2 transition-all ${
                activeFilter === cat 
                  ? 'border-orange-500 text-blue-800' 
                  : 'border-transparent text-slate-400 hover:text-slate-600'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {filteredProjects.map((project) => (
            <div 
              key={project.id} 
              className="group block relative overflow-hidden aspect-video bg-slate-100 shadow-sm border border-slate-100"
            >
              <img 
                src={project.imageUrl} 
                alt={project.title} 
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 scale-100 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-slate-900/40 group-hover:bg-blue-900/70 transition-colors duration-500"></div>
              <div className="absolute inset-0 p-8 flex flex-col justify-between z-10">
                <span className="text-white text-[10px] font-bold uppercase tracking-[0.3em] block">
                  {project.category}
                </span>
                <div>
                  <h4 className="text-2xl font-bold text-white tracking-tight mb-2">
                    {project.title}
                  </h4>
                  <div className="w-0 group-hover:w-12 h-1 bg-orange-500 transition-all duration-500"></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
