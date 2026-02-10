
import React from 'react';
import { Linkedin, Mail, ArrowUpRight } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-white pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">
          <div className="col-span-1 lg:col-span-2">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-8 h-8 bg-blue-600 flex items-center justify-center rounded-sm">
                <div className="w-3 h-3 bg-white rounded-full"></div>
              </div>
              <span className="text-2xl font-bold tracking-tight uppercase">ANALOGICS PVT LTD</span>
            </div>
            <p className="text-slate-400 text-lg leading-relaxed max-w-md mb-8">
              A global leadership team dedicated to solving the world's most complex engineering challenges through precision and innovation.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-12 h-12 rounded-full border border-slate-700 flex items-center justify-center hover:bg-blue-600 hover:border-blue-600 transition-all">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="w-12 h-12 rounded-full border border-slate-700 flex items-center justify-center hover:bg-blue-600 hover:border-blue-600 transition-all">
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-bold text-sm uppercase tracking-widest mb-8 text-blue-500">Corporate</h4>
            <ul className="space-y-4 text-slate-400">
              <li><a href="#" className="hover:text-white transition-colors flex items-center gap-2">About Us <ArrowUpRight className="w-3 h-3" /></a></li>
              <li><a href="#" className="hover:text-white transition-colors">Investors</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Sustainability</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Newsroom</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-sm uppercase tracking-widest mb-8 text-blue-500">Technologies</h4>
            <ul className="space-y-4 text-slate-400">
              <li><a href="#" className="hover:text-white transition-colors">Medical Imaging</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Threat Detection</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Power Systems</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Digital Solutions</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Supply Chain</a></li>
            </ul>
          </div>
        </div>

        <div className="pt-12 border-t border-slate-800 flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-slate-500 text-xs font-bold uppercase tracking-widest">
            © {new Date().getFullYear()} ANALOGICS PRIVATE LIMITED. ALL RIGHTS RESERVED.
          </p>
          <div className="flex items-center gap-8 text-[10px] font-bold uppercase tracking-widest text-slate-500">
            <a href="#" className="hover:text-white">Privacy</a>
            <a href="#" className="hover:text-white">Compliance</a>
            <a href="#" className="hover:text-white">Cookie Policy</a>
            <a href="#" className="hover:text-white">UK Tax Strategy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
