
import React from 'react';

interface SearchBarProps {
  value: string;
  onChange: (val: string) => void;
  placeholder?: string;
}

const SearchBar: React.FC<SearchBarProps> = ({ value, onChange, placeholder = "Search archive..." }) => {
  return (
    <div className="relative w-full group">
      <div className="absolute inset-0 bg-[#b89150]/20 blur-2xl opacity-0 group-focus-within:opacity-100 transition-opacity duration-700 pointer-events-none rounded-full"></div>
      <input 
        type="text" 
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full bg-white border border-slate-100 p-6 pr-14 rounded-full outline-none focus:border-[#b89150] focus:shadow-[0_20px_60px_rgba(184,145,80,0.15)] focus:scale-[1.03] transition-all duration-700 text-xs shadow-sm font-medium placeholder:text-slate-300 relative z-10"
      />
      <div className="absolute right-6 top-1/2 -translate-y-1/2 pointer-events-none text-slate-300 group-focus-within:text-[#b89150] group-focus-within:scale-125 transition-all duration-700 z-10">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
          <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
        </svg>
      </div>
    </div>
  );
};

export default SearchBar;
