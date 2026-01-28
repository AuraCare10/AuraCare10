
import React from 'react';

const FloatingActions: React.FC = () => {
  return (
    <div className="fixed bottom-10 right-10 z-[100] flex flex-col gap-4">
      {/* WhatsApp Link */}
      <a 
        href="https://wa.me/8801700000000" 
        target="_blank" 
        rel="noopener noreferrer"
        className="w-16 h-16 bg-[#25D366] rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-transform group relative"
      >
        <div className="absolute right-20 bg-white text-black px-5 py-3 rounded-2xl text-[10px] font-bold uppercase tracking-[0.2em] opacity-0 group-hover:opacity-100 transition-all shadow-2xl whitespace-nowrap border border-slate-50 -translate-x-4 group-hover:translate-x-0">
          Chat on WhatsApp
        </div>
        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="white">
          <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.246 2.248 3.484 5.232 3.484 8.412-.003 6.557-5.338 11.892-11.893 11.892-1.997-.001-3.951-.5-5.688-1.448l-6.309 1.656zm6.29-4.143c1.589.943 3.133 1.441 4.703 1.442 5.483 0 9.943-4.46 9.946-9.943.002-2.657-1.031-5.155-2.908-7.034-1.876-1.879-4.375-2.912-7.033-2.913-5.483 0-9.941 4.458-9.944 9.941-.001 1.737.472 3.427 1.369 4.895l-1.102 4.026 4.127-1.082-.158-.232z"/>
        </svg>
      </a>
      
      {/* Scroll to Top */}
      <button 
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="w-16 h-16 bg-[#1a1a1a] text-[#b89150] rounded-full flex items-center justify-center shadow-2xl hover:bg-white border border-white/10 hover:border-[#b89150] transition-all group"
      >
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6 group-hover:-translate-y-1 transition-transform">
          <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 10.5 12 3m0 0 7.5 7.5M12 3v18" />
        </svg>
      </button>
    </div>
  );
};

export default FloatingActions;
