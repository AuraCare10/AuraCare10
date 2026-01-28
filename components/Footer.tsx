import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#050505] text-white pt-16 pb-10 relative overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-[#b89150]/20 to-transparent"></div>
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[400px] h-[200px] bg-[#b89150]/5 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand Identity */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center gap-3 group">
              <div className="w-10 h-10 bg-[#1a1a1a] rounded-full flex items-center justify-center border border-[#b89150]/30 transition-transform group-hover:rotate-12">
                <span className="text-[#b89150] text-xl font-serif">A</span>
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-serif font-bold tracking-tight">AuraCare</span>
                <span className="text-[7px] uppercase tracking-[0.3em] font-black text-[#b89150]">House of Beauty</span>
              </div>
            </Link>
            <p className="text-slate-500 text-[11px] leading-relaxed font-light italic opacity-80 max-w-xs">
              Curating rituals for the modern sanctuary. Skin is your temple.
            </p>
            <div className="flex gap-3">
              {['FB', 'IG', 'WA'].map(social => (
                <a key={social} href="#" className="text-[9px] font-black tracking-widest text-slate-500 hover:text-[#b89150] transition-colors">
                  {social}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Access */}
          <div className="space-y-4">
            <h4 className="text-[9px] uppercase tracking-[0.4em] font-black text-[#b89150]">Protocol</h4>
            <ul className="space-y-2 text-[11px] font-light text-slate-400">
              <li><Link to="/shop" className="hover:text-white transition-colors">The Archive</Link></li>
              <li><Link to="/dashboard" className="hover:text-white transition-colors">Identity</Link></li>
              <li><Link to="/dashboard" className="hover:text-white transition-colors">Ritual Tracking</Link></li>
            </ul>
          </div>

          {/* Contact Ritual */}
          <div className="space-y-4">
            <h4 className="text-[9px] uppercase tracking-[0.4em] font-black text-[#b89150]">Communication</h4>
            <ul className="space-y-2 text-[11px] font-light text-slate-400">
              <li className="flex gap-2">
                <span className="text-[#b89150] font-bold">A:</span>
                <span>Gulshan-2, Dhaka</span>
              </li>
              <li className="flex gap-2">
                <span className="text-[#b89150] font-bold">P:</span>
                <span className="font-mono">+880 1700 000000</span>
              </li>
            </ul>
          </div>

          {/* Legals */}
          <div className="space-y-4">
            <h4 className="text-[9px] uppercase tracking-[0.4em] font-black text-[#b89150]">The Code</h4>
            <ul className="space-y-2 text-[11px] font-light text-slate-400">
              <li><a href="#" className="hover:text-white transition-colors">Privacy Paradigm</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Exchange Terms</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Logistics</a></li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-[9px] uppercase tracking-[0.3em] font-bold text-slate-500">
          <p>© {new Date().getFullYear()} AuraCare House.</p>
          <div className="flex gap-6 italic">
             <span className="hover:text-[#b89150] cursor-default transition-colors">Secure Sanctuary</span>
             <span className="hover:text-[#b89150] cursor-default transition-colors">Verified Origin</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;