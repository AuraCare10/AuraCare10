
import React from 'react';

const WishlistSection: React.FC = () => {
  return (
    <section className="animate-slide-up stagger-2">
      <h3 className="text-4xl font-serif font-bold text-[#1a1a1a] mb-12 flex items-center gap-6">
        The Wishlist
        <span className="flex-grow h-px bg-slate-100"></span>
      </h3>
      <div className="bg-white rounded-[3.5rem] shadow-2xl overflow-hidden border border-slate-50 text-center py-24">
        <span className="text-6xl block mb-6 opacity-20">✨</span>
        <p className="text-slate-400 font-bold uppercase tracking-widest text-xs">Your sanctuary is waiting for additions</p>
      </div>
    </section>
  );
};

export default WishlistSection;
