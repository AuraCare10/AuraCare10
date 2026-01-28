
import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#050505] text-white pt-24 pb-12 relative overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-[#b89150]/20 to-transparent"></div>
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-[#b89150]/5 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">
          {/* Brand Identity */}
          <div className="space-y-8">
            <Link to="/" className="flex items-center gap-4 group">
              <div className="w-12 h-12 bg-[#1a1a1a] rounded-full flex items-center justify-center border border-[#b89150]/30 transition-all group-hover:rotate-12 group-hover:border-[#b89150]">
                <span className="text-[#b89150] text-2xl font-serif">A</span>
              </div>
              <div className="flex flex-col">
                <span className="text-2xl font-serif font-bold tracking-tight">AuraCare</span>
                <span className="text-[8px] uppercase tracking-[0.4em] font-black text-[#b89150]">House of Beauty</span>
              </div>
            </Link>
            <p className="text-slate-500 text-sm leading-relaxed font-light italic opacity-80 max-w-xs">
              Curating high-end rituals for the modern sanctuary. Skin is your temple, care is your prayer.
            </p>
            <div className="flex gap-6">
              {['Facebook', 'Instagram', 'WhatsApp'].map(social => (
                <a key={social} href="#" className="text-[9px] font-black uppercase tracking-[0.2em] text-slate-500 hover:text-[#b89150] transition-colors">
                  {social}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Access */}
          <div className="space-y-8">
            <h4 className="text-[10px] uppercase tracking-[0.6em] font-black text-[#b89150]">Ritual Protocol</h4>
            <ul className="space-y-4 text-xs font-bold uppercase tracking-widest text-slate-400">
              <li><Link to="/shop" className="hover:text-white transition-colors">The Archives</Link></li>
              <li><Link to="/about" className="hover:text-white transition-colors">Philosophy</Link></li>
              <li><Link to="/blog" className="hover:text-white transition-colors">Beauty Dispatch</Link></li>
              <li><Link to="/faq" className="hover:text-white transition-colors">Inquiries</Link></li>
            </ul>
          </div>

          {/* Communication */}
          <div className="space-y-8">
            <h4 className="text-[10px] uppercase tracking-[0.6em] font-black text-[#b89150]">Establish Link</h4>
            <ul className="space-y-4 text-xs font-medium text-slate-400">
              <li className="flex gap-4">
                <span className="text-[#b89150] font-black uppercase tracking-tighter">Loc:</span>
                <span>Gulshan-2, Dhaka, Bangladesh</span>
              </li>
              <li className="flex gap-4">
                <span className="text-[#b89150] font-black uppercase tracking-tighter">Tel:</span>
                <span className="font-mono">+880 1700 000000</span>
              </li>
              <li className="flex gap-4">
                <span className="text-[#b89150] font-black uppercase tracking-tighter">Eml:</span>
                <span>rituals@auracare.house</span>
              </li>
            </ul>
          </div>

          {/* Legal/Trust */}
          <div className="space-y-8">
            <h4 className="text-[10px] uppercase tracking-[0.6em] font-black text-[#b89150]">The Foundation</h4>
            <ul className="space-y-4 text-xs font-bold uppercase tracking-widest text-slate-400">
              <li><Link to="/contact" className="hover:text-white transition-colors">Support Portal</Link></li>
              <li><a href="#" className="hover:text-white transition-colors">Privacy Paradigm</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Terms of Entity</a></li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8 text-[9px] uppercase tracking-[0.4em] font-black text-slate-600">
          <p>© {new Date().getFullYear()} AuraCare House. Developed for the Divine.</p>
          <div className="flex gap-10">
             <span className="flex items-center gap-2"><div className="w-1 h-1 bg-[#b89150] rounded-full"></div> Verified Sanctuary</span>
             <span className="flex items-center gap-2"><div className="w-1 h-1 bg-[#b89150] rounded-full"></div> Encrypted Exchange</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
