import React from 'react';
import { Link } from 'react-router-dom';

interface CategoryIconProps {
  name: string;
  icon: string;
}

const CategoryIcon: React.FC<CategoryIconProps> = ({ name, icon }) => {
  return (
    <Link 
      to={`/shop?category=${name}`} 
      className="flex flex-col items-center group space-y-4 relative py-2"
    >
      {/* Scaled Down Golden Orbit Ring */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[70%] w-16 h-16 md:w-20 md:h-20 border border-[#b89150]/10 rounded-full group-hover:border-[#b89150]/40 transition-all duration-700 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-0.5 h-0.5 bg-[#b89150] rounded-full shadow-[0_0_5px_#b89150] opacity-0 group-hover:opacity-100 transition-opacity animate-rotate-slow origin-[0px_32px] md:origin-[0px_40px]"></div>
      </div>

      {/* Scaled Ripple Rings */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[70%] w-14 h-14 md:w-16 md:h-16 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none">
        <div className="absolute inset-0 border border-[#b89150]/30 rounded-full animate-ring-ripple"></div>
      </div>

      {/* Scaled Aura Background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[70%] w-24 h-24 bg-[#b89150]/5 rounded-full blur-2xl opacity-10 group-hover:opacity-30 group-hover:scale-125 transition-all duration-1000 animate-aura pointer-events-none -z-10"></div>

      {/* Scaled Glass Icon Container */}
      <div className="w-14 h-14 md:w-16 md:h-16 glass-morphism rounded-[1.5rem] flex items-center justify-center text-2xl md:text-3xl transition-all duration-700 group-hover:bg-[#1a1a1a] group-hover:shadow-[0_15px_30px_rgba(184,145,80,0.15)] group-hover:-translate-y-2 relative overflow-hidden z-10 border border-white/5 group-hover:border-[#b89150]/30">
        
        <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
        
        <span className="relative z-10 transform group-hover:scale-110 transition-all duration-700 filter drop-shadow-[0_0_8px_rgba(184,145,80,0.3)]">
          {icon}
        </span>
      </div>

      {/* Scaled Premium Label */}
      <div className="text-center relative">
        <span className="text-[8px] md:text-[9px] uppercase tracking-[0.3em] font-black text-slate-500 group-hover:text-white group-hover:tracking-[0.5em] transition-all duration-500 whitespace-nowrap block">
          {name}
        </span>
        <div className="h-[1.5px] w-0 bg-gradient-to-r from-transparent via-[#b89150] to-transparent mx-auto mt-2 group-hover:w-full transition-all duration-700 shadow-[0_0_5px_#b89150]"></div>
      </div>
    </Link>
  );
};

export default CategoryIcon;