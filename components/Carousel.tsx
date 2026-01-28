
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const slides = [
  {
    image: 'https://images.unsplash.com/photo-1612817288484-6f916006741a?auto=format&fit=crop&q=80&w=1920',
    title: 'Luxury Reimagined',
    subtitle: 'The Sanctuary for Premium Beauty Rituals.'
  },
  {
    image: 'https://images.unsplash.com/photo-1596462502278-27bfac4033c8?auto=format&fit=crop&q=80&w=1920',
    title: 'Authentic Glow',
    subtitle: 'Curated Skincare for your Divine Temple.'
  }
];

const Carousel: React.FC = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => setCurrent(s => (s + 1) % slides.length), 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative h-[70vh] md:h-[75vh] overflow-hidden">
      {slides.map((slide, idx) => (
        <div key={idx} className={`absolute inset-0 transition-opacity duration-1000 ${idx === current ? 'opacity-100' : 'opacity-0'}`}>
          <div className="absolute inset-0 bg-black/40 z-10" />
          <img src={slide.image} className="w-full h-full object-cover" alt="" />
          <div className="absolute inset-0 z-20 flex flex-col items-center justify-center text-center px-6">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold text-white mb-6 animate-slide-up">{slide.title}</h1>
            <p className="text-lg md:text-xl text-white/80 italic mb-10 max-w-xl animate-slide-up" style={{animationDelay: '0.2s'}}>{slide.subtitle}</p>
            <Link to="/shop" className="bg-[#b89150] text-white px-12 py-4 rounded-full font-bold uppercase tracking-widest text-xs hover:bg-white hover:text-[#1a1a1a] transition-all">Explore House</Link>
          </div>
        </div>
      ))}
    </section>
  );
};

export default Carousel;
