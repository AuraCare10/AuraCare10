
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { CATEGORIES, PRODUCTS } from '../constants';
import { Product } from '../types';
import CategoryIcon from '../components/CategoryIcon';

interface HomeProps {
  addToCart: (product: Product) => void;
}

const Home: React.FC<HomeProps> = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      image: 'https://images.unsplash.com/photo-1612817288484-6f916006741a?auto=format&fit=crop&q=80&w=1920',
      title: 'AuraCare House',
      subtitle: 'Premium Sanctuary for Health & Beauty Rituals.',
      cta: 'Explore House'
    },
    {
      image: 'https://images.unsplash.com/photo-1556228578-0d85b1a4d571?auto=format&fit=crop&q=80&w=1920',
      title: 'Radiance Reimagined',
      subtitle: 'Experience the pinnacle of skincare craftsmanship.',
      cta: 'Shop Now'
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => setCurrentSlide(s => (s + 1) % slides.length), 6000);
    return () => clearInterval(timer);
  }, [slides.length]);

  return (
    <div className="relative">
      <section className="relative h-[85vh] md:h-[95vh] overflow-hidden">
        {slides.map((slide, idx) => (
          <div 
            key={idx}
            className={`absolute inset-0 transition-all duration-[2000ms] ${idx === currentSlide ? 'opacity-100 scale-100' : 'opacity-0 scale-110'}`}
          >
            <div className="absolute inset-0 bg-black/40 z-10" />
            <img src={slide.image} className="w-full h-full object-cover" alt="" />
            <div className="absolute inset-0 z-20 flex flex-col items-center justify-center text-center px-6">
              <span className="text-[#b89150] uppercase tracking-[0.6em] text-[10px] font-bold mb-6 opacity-0 animate-slide-up stagger-1">Est. AuraCare House</span>
              <h1 className="text-6xl md:text-9xl font-serif font-bold text-white mb-8 tracking-tighter opacity-0 animate-slide-up stagger-2 drop-shadow-2xl">{slide.title}</h1>
              <p className="text-lg md:text-2xl font-light text-white/90 italic mb-12 max-w-2xl opacity-0 animate-slide-up stagger-3">{slide.subtitle}</p>
              <div className="flex gap-6">
                <Link to="/shop" className="bg-[#b89150] text-white px-14 py-5 rounded-full font-bold uppercase tracking-widest text-[10px] hover:bg-white hover:text-[#1a1a1a] transition-all shadow-2xl transform active:scale-95 opacity-0 animate-slide-up" style={{animationDelay: '0.4s'}}>
                  Explore Archive
                </Link>
              </div>
            </div>
          </div>
        ))}
      </section>

      {/* REFINED COMPACT RITUAL ARCHIVES */}
      <section className="bg-[#050505] py-20 relative overflow-hidden">
        {/* Background Grids & Ambient Glow */}
        <div className="absolute inset-0 neon-grid opacity-10 pointer-events-none"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[200px] bg-[#b89150]/5 rounded-full blur-[100px] pointer-events-none"></div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
            <div className="w-full lg:w-1/3 text-center lg:text-left space-y-4">
              <span className="text-[#b89150] text-[9px] uppercase tracking-[0.8em] font-black opacity-60">Selection Protocol</span>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-white tracking-tight premium-shimmer">
                Ritual Archives
              </h2>
              <p className="text-slate-500 text-xs font-light italic leading-relaxed max-w-xs mx-auto lg:mx-0">
                Categorized essences for your daily sanctification.
              </p>
            </div>

            <div className="w-full lg:w-2/3">
              <div className="grid grid-cols-4 md:grid-cols-7 gap-4 md:gap-4">
                {CATEGORIES.map(cat => (
                  <CategoryIcon key={cat.name} name={cat.name} icon={cat.icon} />
                ))}
              </div>
            </div>
          </div>
        </div>
        
        {/* Cyber Line Decoration */}
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#b89150]/20 to-transparent"></div>
      </section>

      <section className="container mx-auto px-6 py-32">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 border-b border-slate-100 pb-10">
          <div className="space-y-4">
            <span className="text-[#b89150] text-[10px] uppercase tracking-[0.6em] font-bold block">Complete Inventory</span>
            <h3 className="text-5xl font-serif font-bold text-[#1a1a1a] tracking-tight">Essential Rituals</h3>
          </div>
          <Link to="/shop" className="group flex items-center gap-5 text-slate-400 hover:text-[#b89150] transition-all py-3">
            <span className="text-[9px] uppercase tracking-widest font-extrabold tracking-[0.4em]">Full Inventory</span>
            <div className="w-12 h-12 rounded-full border border-slate-100 flex items-center justify-center group-hover:bg-[#1a1a1a] group-hover:text-[#b89150] group-hover:border-[#1a1a1a] transition-all">→</div>
          </Link>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-x-8 gap-y-16">
          {PRODUCTS.slice(0, 15).map(product => (
            <Link to="/shop" key={product.id} className="group flex flex-col">
              <div className="relative aspect-[3/4] rounded-[2.5rem] overflow-hidden bg-white shadow-sm transition-all duration-700 group-hover:shadow-[0_40px_100px_rgba(26,26,26,0.1)] group-hover:-translate-y-2 border border-slate-50">
                <img src={product.image} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" alt={product.name} />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors" />
                {product.originalPrice && (
                   <div className="absolute top-6 left-6 bg-[#b89150] text-white text-[8px] font-bold uppercase tracking-widest px-3 py-1.5 rounded-full shadow-2xl">
                     Sale
                   </div>
                )}
              </div>
              <div className="mt-8 space-y-1 text-center">
                <span className="text-[8px] uppercase tracking-[0.4em] text-slate-400 font-bold">{product.category}</span>
                <h4 className="text-lg font-serif font-bold text-[#1a1a1a] group-hover:text-[#b89150] transition-colors line-clamp-1">{product.name}</h4>
                <div className="flex justify-center items-center gap-3">
                  <p className="text-base font-bold text-[#1a1a1a]">৳{product.price}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
