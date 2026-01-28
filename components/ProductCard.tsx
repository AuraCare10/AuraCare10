
import React from 'react';
import { Product } from '../types';

interface ProductCardProps {
  product: Product;
  onClick: () => void;
  onQuickAdd?: (e: React.MouseEvent) => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, onClick, onQuickAdd }) => {
  const isOutOfStock = product.stockStatus === 'Out of Stock';
  const isLowStock = product.stockStatus === 'Low Stock';

  return (
    <div className="group cursor-pointer flex flex-col h-full" onClick={onClick}>
      <div className="relative aspect-[3/4] rounded-[3rem] overflow-hidden bg-white shadow-sm group-hover:shadow-[0_40px_80px_rgba(184,145,80,0.12)] transition-all duration-700 border border-slate-50">
        <img src={product.image} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" alt={product.name} />
        
        {/* Overlay Darkening on Hover */}
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-500" />
        
        {/* Luxury Badges */}
        <div className="absolute top-6 left-6 flex flex-col gap-2">
          {product.originalPrice && (
            <div className="bg-[#b89150] text-white text-[8px] font-black uppercase tracking-[0.2em] px-4 py-1.5 rounded-full shadow-lg backdrop-blur-md">
              Special Offer
            </div>
          )}
          {isOutOfStock ? (
            <div className="bg-red-500 text-white text-[8px] font-black uppercase tracking-[0.2em] px-4 py-1.5 rounded-full shadow-lg">
              Sold Out
            </div>
          ) : isLowStock && (
            <div className="bg-orange-400 text-white text-[8px] font-black uppercase tracking-[0.2em] px-4 py-1.5 rounded-full shadow-lg">
              Limited Stock
            </div>
          )}
        </div>

        {/* Quick Add Button with Slide-up Animation */}
        {onQuickAdd && !isOutOfStock && (
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0">
            <button 
              onClick={(e) => {
                e.stopPropagation();
                onQuickAdd(e);
              }}
              className="bg-white text-[#1a1a1a] px-8 py-4 rounded-full text-[10px] font-black uppercase tracking-widest shadow-2xl hover:bg-[#1a1a1a] hover:text-[#b89150] transition-all duration-300 transform active:scale-90"
            >
              Quick Add
            </button>
          </div>
        )}
      </div>

      <div className="mt-8 space-y-2 text-center flex-grow flex flex-col justify-between">
        <div className="space-y-1">
          <span className="text-[9px] uppercase tracking-[0.4em] text-[#b89150] font-black">{product.category}</span>
          <h3 className="text-xl font-serif font-bold text-[#1a1a1a] group-hover:text-[#b89150] transition-colors line-clamp-1">{product.name}</h3>
        </div>
        <div className="flex items-center justify-center gap-3">
          <p className={`text-lg font-bold ${isOutOfStock ? 'text-slate-300' : 'text-[#1a1a1a]'}`}>৳{product.price}</p>
          {product.originalPrice && (
            <p className="text-sm text-slate-300 line-through">৳{product.originalPrice}</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
