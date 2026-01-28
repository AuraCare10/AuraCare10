
import React from 'react';
import { PRODUCTS } from '../constants';
import ProductCard from '../components/ProductCard';
import { Product } from '../types';

interface WishlistPageProps {
  wishlist: string[];
  toggleWishlist: (id: string) => void;
  addToCart: (product: Product) => void;
}

const WishlistPage: React.FC<WishlistPageProps> = ({ wishlist, toggleWishlist, addToCart }) => {
  const items = PRODUCTS.filter(p => wishlist.includes(p.id));

  return (
    <div className="pt-48 pb-32 container mx-auto px-6">
      <div className="flex items-center gap-10 mb-20">
        <h1 className="text-5xl font-serif font-bold">Sacred List</h1>
        <div className="flex-grow h-px bg-slate-100"></div>
        <span className="text-slate-400 uppercase tracking-widest font-black text-xs">{items.length} Essences Saved</span>
      </div>

      {items.length === 0 ? (
        <div className="text-center py-40 bg-white rounded-[4rem] shadow-xl border border-slate-50">
           <span className="text-6xl block mb-6 opacity-20">✨</span>
           <p className="text-slate-400 font-bold uppercase tracking-widest text-xs">The list is currently empty.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
          {items.map(p => (
            <div key={p.id} className="relative group">
              <ProductCard product={p} onClick={() => {}} onQuickAdd={() => addToCart(p)} />
              <button 
                onClick={() => toggleWishlist(p.id)}
                className="absolute top-6 right-6 w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-lg text-red-500 opacity-0 group-hover:opacity-100 transition-all"
              >
                ×
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default WishlistPage;
