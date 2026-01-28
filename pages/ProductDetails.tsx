
import React, { useState, useEffect, useRef } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { Product, Review } from '../types.ts';
import { api } from '../services/api.ts';
import { PRODUCTS } from '../constants.tsx';
import ProductCard from '../components/ProductCard.tsx';

interface ProductDetailsProps {
  addToCart: (product: Product, quantity: number, size?: string, color?: string) => void;
  toggleWishlist: (id: string) => void;
  isWishlisted: (id: string) => boolean;
  reviews: Review[];
}

const ProductDetails: React.FC<ProductDetailsProps> = ({ addToCart, toggleWishlist, isWishlisted, reviews }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const scrollRef = useRef<HTMLDivElement>(null);
  const [product, setProduct] = useState<Product | null>(null);
  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState<string | undefined>();
  const [selectedColor, setSelectedColor] = useState<string | undefined>();
  const [activeTab, setActiveTab] = useState<'Description' | 'Ingredients' | 'Usage' | 'Reviews'>('Description');

  useEffect(() => {
    if (id) {
      api.getProductById(id).then(found => {
        if (found) {
          setProduct(found);
          // Auto-select first in-stock variations
          if (found.variations?.sizes) {
            const firstInStock = found.variations.sizes.find(s => s.inStock);
            if (firstInStock) setSelectedSize(firstInStock.name);
          }
          if (found.variations?.colors) {
            const firstInStock = found.variations.colors.find(c => c.inStock);
            if (firstInStock) setSelectedColor(firstInStock.name);
          }
        }
      });
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [id]);

  if (!product) return <div className="pt-60 text-center font-serif text-2xl animate-pulse text-[#b89150]">Summoning Ritual Essence...</div>;

  const productReviews = reviews.filter(r => r.productId === product.id);
  
  const relatedProducts = PRODUCTS
    .filter(p => p.id !== product.id)
    .sort((a, b) => {
      if (a.category === product.category && b.category !== product.category) return -1;
      if (b.category === product.category && a.category !== product.category) return 1;
      const priority = { 'In Stock': 0, 'Low Stock': 1, 'Out of Stock': 2 };
      return priority[a.stockStatus] - priority[b.stockStatus];
    })
    .slice(0, 12);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollTo = direction === 'left' ? scrollLeft - clientWidth : scrollLeft + clientWidth;
      scrollRef.current.scrollTo({ left: scrollTo, behavior: 'smooth' });
    }
  };

  const handleAddToCart = () => {
    if (product) {
      addToCart(product, quantity, selectedSize, selectedColor);
    }
  };

  const isVariationAvailable = () => {
    if (product.variations?.sizes) {
      const sizeOpt = product.variations.sizes.find(s => s.name === selectedSize);
      if (sizeOpt && !sizeOpt.inStock) return false;
    }
    if (product.variations?.colors) {
      const colorOpt = product.variations.colors.find(c => c.name === selectedColor);
      if (colorOpt && !colorOpt.inStock) return false;
    }
    return product.stockStatus !== 'Out of Stock';
  };

  return (
    <div className="pt-40 pb-32 container mx-auto px-6">
      <div className="flex flex-col lg:flex-row gap-20">
        <div className="w-full lg:w-1/2 group relative">
          <div className="aspect-[4/5] overflow-hidden rounded-[4rem] shadow-2xl bg-white border border-slate-50">
            <img src={product.image} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" alt={product.name} />
          </div>
          <button 
            onClick={() => toggleWishlist(product.id)}
            className={`absolute top-10 right-10 w-16 h-16 rounded-full flex items-center justify-center shadow-xl backdrop-blur-md transition-all ${isWishlisted(product.id) ? 'bg-[#1a1a1a] text-[#b89150]' : 'bg-white/80 text-slate-400 hover:text-[#b89150]'}`}
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill={isWishlisted(product.id) ? "currentColor" : "none"} viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
              <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
            </svg>
          </button>
        </div>

        <div className="w-full lg:w-1/2 space-y-10">
          <div className="space-y-4">
            <span className="text-[#b89150] text-[10px] uppercase tracking-[0.8em] font-black">{product.category}</span>
            <h1 className="text-6xl font-serif font-bold text-[#1a1a1a] leading-tight tracking-tight">{product.name}</h1>
            <div className="flex items-center gap-6">
              <span className="text-4xl font-bold text-[#1a1a1a]">৳{product.price}</span>
              {product.originalPrice && <span className="text-xl text-slate-300 line-through">৳{product.originalPrice}</span>}
              <span className={`text-[10px] font-black uppercase tracking-widest px-6 py-2 rounded-full border ${product.stockStatus === 'Out of Stock' ? 'bg-red-50 text-red-500 border-red-100' : 'bg-green-50 text-green-500 border-green-100'}`}>
                {product.stockStatus}
              </span>
            </div>
            
            {productReviews.length > 0 && (
              <div className="flex items-center gap-2">
                <div className="flex text-[#b89150]">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className={i < 4 ? "text-[#b89150]" : "text-slate-200"}>★</span>
                  ))}
                </div>
                <span className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">({productReviews.length} Testimonials)</span>
              </div>
            )}
          </div>

          {(product.variations?.colors || product.variations?.sizes) && (
            <div className="space-y-8 py-6 border-y border-slate-50">
              {product.variations?.colors && (
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <h4 className="text-[10px] uppercase tracking-[0.4em] font-black text-slate-400">Atmosphere Essence</h4>
                    <span className="text-[10px] font-bold text-[#1a1a1a] uppercase">{selectedColor || 'Select Tone'}</span>
                  </div>
                  <div className="flex flex-wrap gap-4">
                    {product.variations.colors.map(color => (
                      <div key={color.name} className="relative group">
                        <button
                          disabled={!color.inStock}
                          onClick={() => setSelectedColor(color.name)}
                          className={`w-14 h-14 rounded-full border-2 transition-all flex items-center justify-center p-1.5 ${!color.inStock ? 'opacity-30 cursor-not-allowed grayscale' : 'hover:scale-110 active:scale-95'} ${selectedColor === color.name ? 'border-[#b89150] shadow-2xl' : 'border-slate-100 bg-white shadow-sm'}`}
                        >
                          <div 
                            className="w-full h-full rounded-full shadow-inner relative overflow-hidden" 
                            style={{ backgroundColor: color.value }}
                          >
                            {!color.inStock && (
                              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                                <div className="w-[150%] h-[2px] bg-red-600/60 rotate-[45deg] transform"></div>
                              </div>
                            )}
                          </div>
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {product.variations?.sizes && (
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <h4 className="text-[10px] uppercase tracking-[0.4em] font-black text-slate-400">Magnitude / Size</h4>
                    <span className="text-[10px] font-bold text-[#1a1a1a] uppercase">{selectedSize || 'Select Volume'}</span>
                  </div>
                  <div className="flex flex-wrap gap-4">
                    {product.variations.sizes.map(size => (
                      <button
                        key={size.name}
                        disabled={!size.inStock}
                        onClick={() => setSelectedSize(size.name)}
                        className={`relative px-10 py-5 rounded-2xl border text-[10px] font-extrabold uppercase tracking-[0.3em] transition-all overflow-hidden ${!size.inStock ? 'bg-slate-50 text-slate-300 border-slate-100 cursor-not-allowed' : 'hover:border-[#b89150] hover:text-[#b89150]'} ${selectedSize === size.name ? 'bg-[#1a1a1a] text-[#b89150] border-[#1a1a1a] shadow-2xl scale-105' : 'bg-white text-slate-500 border-slate-100'}`}
                      >
                        {size.name}
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-8">
            <div className="flex items-center bg-white border border-slate-100 rounded-full px-8 py-5 shadow-sm justify-between sm:justify-start">
              <button onClick={() => setQuantity(Math.max(1, quantity - 1))} className="text-xl px-4 hover:text-[#b89150] transition-colors">-</button>
              <span className="text-xl font-bold px-10 min-w-[80px] text-center">{quantity}</span>
              <button onClick={() => setQuantity(quantity + 1)} className="text-xl px-4 hover:text-[#b89150] transition-colors">+</button>
            </div>
            <button 
              onClick={handleAddToCart}
              disabled={!isVariationAvailable()}
              className={`flex-grow py-6 rounded-full font-bold uppercase tracking-[0.4em] text-[11px] shadow-2xl transition-all transform active:scale-95 ${isVariationAvailable() ? 'bg-[#1a1a1a] text-[#b89150] hover:bg-black hover:scale-[1.02]' : 'bg-slate-100 text-slate-400 cursor-not-allowed'}`}
            >
              {isVariationAvailable() ? 'Acquire Ritual' : 'Essence Depleted'}
            </button>
          </div>

          <div className="space-y-8 pt-10 border-t border-slate-100">
            <div className="flex gap-10 border-b border-slate-100 overflow-x-auto whitespace-nowrap scrollbar-hide pb-px">
              {['Description', 'Ingredients', 'Usage', 'Reviews'].map(tab => (
                <button 
                  key={tab} 
                  onClick={() => setActiveTab(tab as any)}
                  className={`pb-4 text-[10px] uppercase tracking-[0.4em] font-black transition-all relative ${activeTab === tab ? 'text-[#b89150]' : 'text-slate-400'}`}
                >
                  {tab === 'Reviews' ? `Testimonials (${productReviews.length})` : tab}
                  {activeTab === tab && <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#b89150]" />}
                </button>
              ))}
            </div>
            <div className="text-slate-500 text-sm italic font-light leading-relaxed min-h-[120px] animate-slide-up">
              {activeTab === 'Description' && product.description}
              {activeTab === 'Ingredients' && (product.ingredients?.join(', ') || 'Natural synthetic extracts, botanical essences curated for the divine.')}
              {activeTab === 'Usage' && (product.usageSteps?.join('. ') || 'Incorporate into your morning or evening sanctuary rituals for optimal luminosity.')}
              {activeTab === 'Reviews' && (
                <div className="space-y-8 py-4">
                  {productReviews.length === 0 ? (
                    <p className="text-center py-10 opacity-50">No chronicles written for this essence yet.</p>
                  ) : (
                    productReviews.map(review => (
                      <div key={review.id} className="border-b border-slate-50 pb-8 last:border-0">
                        <div className="flex justify-between items-center mb-4">
                          <div className="flex items-center gap-4">
                            <div className="w-10 h-10 bg-slate-100 rounded-full flex items-center justify-center font-serif text-[#b89150] font-bold">{review.userName.charAt(0)}</div>
                            <div>
                              <h5 className="font-bold text-[#1a1a1a] text-[10px] uppercase tracking-widest">{review.userName}</h5>
                              <p className="text-[9px] text-slate-300 font-bold uppercase">{review.date}</p>
                            </div>
                          </div>
                        </div>
                        <p className="text-slate-500 leading-relaxed text-sm italic">{review.comment}</p>
                      </div>
                    ))
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {relatedProducts.length > 0 && (
        <section className="mt-48 pt-32 border-t border-slate-100 relative">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#b89150]/5 rounded-full blur-[150px] -z-10" />

          <div className="flex flex-col md:flex-row justify-between items-center md:items-end mb-20 gap-8">
            <div className="space-y-4 text-center md:text-left">
              <div className="flex items-center gap-4 justify-center md:justify-start">
                <div className="h-px w-10 bg-[#b89150]/30" />
                <span className="text-[#b89150] text-[10px] uppercase tracking-[0.8em] font-black">Divine Suggestions</span>
              </div>
              <h2 className="text-5xl md:text-6xl font-serif font-bold text-[#1a1a1a] tracking-tight">You Might Also Like</h2>
              <p className="text-slate-400 text-sm italic font-light">Explore complementary rituals curated for your sanctuary.</p>
            </div>
            
            <div className="flex gap-4">
              <button onClick={() => scroll('left')} className="w-14 h-14 rounded-full border border-slate-100 flex items-center justify-center hover:bg-[#1a1a1a] hover:text-[#b89150] transition-all shadow-sm bg-white">←</button>
              <button onClick={() => scroll('right')} className="w-14 h-14 rounded-full border border-slate-100 flex items-center justify-center hover:bg-[#1a1a1a] hover:text-[#b89150] transition-all shadow-sm bg-white">→</button>
            </div>
          </div>
          
          <div ref={scrollRef} className="flex gap-10 md:gap-14 overflow-x-auto scrollbar-hide pb-20 -mx-6 px-6 snap-x snap-mandatory">
            {relatedProducts.map(p => (
              <div key={p.id} className="min-w-[280px] md:min-w-[340px] snap-start">
                <ProductCard product={p} onClick={() => navigate(`/product/${p.id}`)} onQuickAdd={() => handleAddToCart()} />
              </div>
            ))}
          </div>
        </section>
      )}
    </div>
  );
};

export default ProductDetails;
