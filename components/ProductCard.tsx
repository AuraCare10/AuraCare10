
import React from 'react';
import { Product } from '../types';

interface ProductCardProps {
  product: Product;
  onClick: () => void;
  onQuickAdd?: (e: React.MouseEvent) => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, onClick, onQuickAdd }) => {
  return (
    <div className="group cursor-pointer" onClick={onClick}>
      <div className="relative aspect-[3/4] rounded-[3rem] overflow-hidden bg-white shadow-sm hover:shadow-2xl transition-all duration-700">
        <img src={product.image} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" alt={product.name} />
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors" />
        
        {product.originalPrice && (
          <div className="absolute top-6 left-6 bg-[#b89150] text-white text-[8px] font-bold uppercase tracking-widest px-4 py-2 rounded-full shadow-2xl">
            Sale
          </div>
        )}

        {/* Quick Add Button on Hover */}
        {onQuickAdd && (
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
            <button 
              onClick={(e) => {
                e.stopPropagation();
                onQuickAdd(e);
              }}
              className="bg-white text-[#1a1a1a] px-8 py-4 rounded-full text-[10px] font-bold uppercase tracking-widest shadow-2xl transform translate-y-4 group-hover:translate-y-0 transition-all duration-500 hover:bg-[#1a1a1a] hover:text-[#b89150]"
            >
              Quick Add
            </button>
          </div>
        )}
      </div>
      <div className="mt-8 space-y-1 text-center">
        <span className="text-[9px] uppercase tracking-[0.4em] text-[#b89150] font-bold">{product.category}</span>
        <h3 className="text-xl font-serif font-bold text-[#1a1a1a] group-hover:text-[#b89150] transition-colors line-clamp-1">{product.name}</h3>
        <p className="text-lg font-bold text-slate-400">৳{product.price}</p>
      </div>
    </div>
  );
};

export default ProductCard;
