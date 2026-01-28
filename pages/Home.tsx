
import React from 'react';
import { Link } from 'react-router-dom';
import { CATEGORIES, PRODUCTS, BLOGS } from '../constants.tsx';
import { Product } from '../types.ts';
import CategoryIcon from '../components/CategoryIcon.tsx';
import Carousel from '../components/Carousel.tsx';

interface HomeProps {
  addToCart: (product: Product) => void;
}

const Home: React.FC<HomeProps> = ({ addToCart }) => {
  const featuredProducts = PRODUCTS.filter(p => p.isFeatured).slice(0, 5);

  return (
    <div className="relative">
      <Carousel />

      {/* RITUAL ARCHIVES - CATEGORIES */}
      <section className="bg-[#050505] pt-0 pb-12 md:pb-16 relative overflow-hidden">
        <div className="aura-blob w-[600px] h-[600px] bg-[#b89150]/10 top-[-20%] left-[-10%]" />
        <div className="container mx-auto px-6 relative z-10">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8 md:gap-16">
            <div className="w-full lg:w-1/3 text-center lg:text-left space-y-4 pt-4 pb-8 md:pt-6 md:pb-12">
              <span className="text-[#b89150] text-[10px] uppercase tracking-[0.8em] font-black opacity-60">Selection Protocol</span>
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-white tracking-tight leading-tight">Ritual <br /> Archives</h2>
              <p className="text-slate-500 text-sm font-light italic leading-relaxed max-w-xs mx-auto lg:mx-0">Categorized essences meticulously curated for your daily sanctification.</p>
            </div>
            <div className="w-full lg:w-2/3">
              <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-6">
                {CATEGORIES.map(cat => (
                  <CategoryIcon key={cat.name} name={cat.name} icon={cat.icon} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ESSENTIAL RITUALS - FEATURED PRODUCTS */}
      <section className="container mx-auto px-6 py-24 md:py-32">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 border-b border-slate-100 pb-12">
          <div className="space-y-4">
            <span className="text-[#b89150] text-[11px] uppercase tracking-[0.6em] font-bold block">Exclusive Discovery</span>
            <h3 className="text-5xl md:text-6xl font-serif font-bold text-[#1a1a1a] tracking-tight">Essential Rituals</h3>
          </div>
          <Link to="/shop" className="group flex items-center gap-6 text-slate-400 hover:text-[#b89150] transition-all py-4">
            <span className="text-[10px] uppercase tracking-[0.5em] font-extrabold">Full Inventory</span>
            <div className="w-14 h-14 rounded-full border border-slate-100 flex items-center justify-center group-hover:bg-[#1a1a1a] group-hover:text-[#b89150] group-hover:border-[#1a1a1a] transition-all duration-500">→</div>
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-x-10 gap-y-20">
          {featuredProducts.map(product => (
            <Link to={`/product/${product.id}`} key={product.id} className="group flex flex-col">
              <div className="relative aspect-[3/4] rounded-[3rem] overflow-hidden bg-white shadow-sm transition-all duration-700 group-hover:shadow-[0_60px_100px_rgba(26,26,26,0.1)] group-hover:-translate-y-3 border border-slate-50">
                <img src={product.image} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" alt={product.name} />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              </div>
              <div className="mt-8 space-y-2 text-center">
                <span className="text-[9px] uppercase tracking-[0.4em] text-[#b89150] font-bold">{product.category}</span>
                <h4 className="text-xl font-serif font-bold text-[#1a1a1a] group-hover:text-[#b89150] transition-colors line-clamp-1">{product.name}</h4>
                <p className="text-lg font-bold text-[#1a1a1a]">৳{product.price}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* EDITORIAL DISPATCH - BLOGS */}
      <section className="bg-slate-50 py-24 md:py-32 overflow-hidden relative">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row gap-20">
            <div className="w-full md:w-1/3">
              <div className="sticky top-40 space-y-8">
                 <span className="text-[#b89150] text-[11px] uppercase tracking-[0.8em] font-black">Knowledge Registry</span>
                 <h2 className="text-5xl font-serif font-bold text-[#1a1a1a] leading-tight">The Beauty Dispatch</h2>
                 <p className="text-slate-500 font-light italic leading-relaxed">Deep dives into the science and rituals of modern self-care. Authored by the house experts.</p>
                 <Link to="/blog" className="inline-block px-10 py-4 border border-[#1a1a1a] rounded-full text-[10px] uppercase tracking-[0.4em] font-bold hover:bg-[#1a1a1a] hover:text-[#b89150] transition-all">View All Entries</Link>
              </div>
            </div>
            <div className="w-full md:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-12">
               {BLOGS.map(blog => (
                 <Link key={blog.id} to={`/blog/${blog.id}`} className="group bg-white rounded-[4rem] p-10 shadow-sm hover:shadow-2xl transition-all duration-700 hover:-translate-y-2 border border-slate-100">
                    <div className="aspect-square rounded-[3rem] overflow-hidden mb-8">
                      <img src={blog.image} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000" alt="" />
                    </div>
                    <span className="text-[10px] text-[#b89150] font-black uppercase tracking-widest">{blog.date}</span>
                    <h4 className="text-2xl font-serif font-bold mt-4 group-hover:text-[#b89150] transition-colors">{blog.title}</h4>
                    <p className="text-slate-400 text-sm mt-4 line-clamp-3 italic">{blog.excerpt}</p>
                 </Link>
               ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
