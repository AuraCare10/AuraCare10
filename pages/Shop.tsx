import React, { useState, useMemo, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { CATEGORIES, PRODUCTS } from '../constants';
import { CartItem, Product } from '../types';
import SearchBar from '../components/SearchBar';
import ProductCard from '../components/ProductCard';

interface ShopProps {
  cart: CartItem[];
  addToCart: (product: Product, quantity?: number) => void;
  updateCartQuantity: (id: string, delta: number) => void;
  removeFromCart: (id: string) => void;
  clearCart: () => void;
}

const Shop: React.FC<ShopProps> = ({ cart, addToCart }) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [search, setSearch] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>(searchParams.get('category') || 'All');
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  
  // Advanced Filter State
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 5000]);
  const [showInStockOnly, setShowInStockOnly] = useState(false);
  const [selectedSizes, setSelectedSizes] = useState<string[]>([]);
  const [selectedColors, setSelectedColors] = useState<string[]>([]);

  // Extraction of unique variations for filters
  const allSizes = useMemo(() => {
    const sizes = new Set<string>();
    PRODUCTS.forEach(p => p.variations?.size?.forEach(s => sizes.add(s)));
    return Array.from(sizes).sort();
  }, []);

  const allColors = useMemo(() => {
    const colors = new Set<string>();
    PRODUCTS.forEach(p => p.variations?.color?.forEach(c => colors.add(c)));
    return Array.from(colors).sort();
  }, []);

  useEffect(() => {
    const cat = searchParams.get('category');
    if (cat) setSelectedCategory(cat);
  }, [searchParams]);

  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter(p => {
      const matchesCategory = selectedCategory === 'All' || p.category === selectedCategory;
      const matchesSearch = !search || p.name.toLowerCase().includes(search.toLowerCase());
      const matchesPrice = p.price >= priceRange[0] && p.price <= priceRange[1];
      const matchesAvailability = !showInStockOnly || p.stockStatus === 'In Stock';
      
      const matchesSize = selectedSizes.length === 0 || 
        (p.variations?.size && p.variations.size.some(s => selectedSizes.includes(s)));
      
      const matchesColor = selectedColors.length === 0 || 
        (p.variations?.color && p.variations.color.some(c => selectedColors.includes(c)));

      return matchesCategory && matchesSearch && matchesPrice && matchesAvailability && matchesSize && matchesColor;
    });
  }, [selectedCategory, search, priceRange, showInStockOnly, selectedSizes, selectedColors]);

  const resetFilters = () => {
    setSelectedCategory('All');
    setPriceRange([0, 5000]);
    setShowInStockOnly(false);
    setSelectedSizes([]);
    setSelectedColors([]);
    setSearch('');
    setSearchParams({});
  };

  const toggleSize = (size: string) => {
    setSelectedSizes(prev => prev.includes(size) ? prev.filter(s => s !== size) : [...prev, size]);
  };

  const toggleColor = (color: string) => {
    setSelectedColors(prev => prev.includes(color) ? prev.filter(c => c !== color) : [...prev, color]);
  };

  const handleQuickAdd = (product: Product) => {
    addToCart(product);
  };

  return (
    <div className="pt-48 pb-32 container mx-auto px-6 bg-[#fcfaf8] min-h-screen">
      <div className="flex flex-col lg:flex-row gap-16">
        {/* Advanced Filter Sidebar */}
        <aside className="w-full lg:w-80 space-y-12 bg-white p-10 rounded-[3rem] shadow-xl border border-slate-50 h-fit sticky top-32 transition-all">
          <div className="flex justify-between items-center border-b border-slate-100 pb-6">
            <h3 className="text-[11px] uppercase tracking-[0.4em] font-extrabold text-[#1a1a1a]">Archive Filters</h3>
            <button 
              onClick={resetFilters}
              className="text-[9px] uppercase tracking-widest font-bold text-[#b89150] hover:text-[#1a1a1a] transition-colors"
            >
              Reset All
            </button>
          </div>

          {/* Categories */}
          <div className="space-y-6">
            <h4 className="text-[10px] uppercase tracking-[0.2em] font-bold text-slate-400">Category Selection</h4>
            <div className="flex flex-wrap gap-2">
              {['All', ...CATEGORIES.map(c => c.name)].map(cat => (
                <button 
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-5 py-2.5 rounded-full text-[9px] uppercase tracking-widest font-bold transition-all border ${selectedCategory === cat ? 'bg-[#1a1a1a] text-[#b89150] border-[#1a1a1a] shadow-lg' : 'bg-transparent text-slate-400 border-slate-100 hover:border-[#b89150]'}`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Price Range */}
          <div className="space-y-6">
            <div className="flex justify-between items-center">
              <h4 className="text-[10px] uppercase tracking-[0.2em] font-bold text-slate-400">Valuation Range</h4>
              <span className="text-[10px] font-bold text-[#1a1a1a]">৳{priceRange[1]}</span>
            </div>
            <input 
              type="range" 
              min="0" 
              max="5000" 
              step="100"
              value={priceRange[1]} 
              onChange={(e) => setPriceRange([0, parseInt(e.target.value)])}
              className="w-full accent-[#b89150]"
            />
          </div>

          {/* Availability */}
          <div className="flex justify-between items-center">
            <h4 className="text-[10px] uppercase tracking-[0.2em] font-bold text-slate-400">In Stock Registry</h4>
            <button 
              onClick={() => setShowInStockOnly(!showInStockOnly)}
              className={`w-12 h-6 rounded-full transition-all relative p-1 ${showInStockOnly ? 'bg-[#1a1a1a]' : 'bg-slate-200'}`}
            >
              <div className={`w-4 h-4 bg-white rounded-full shadow-sm transition-transform ${showInStockOnly ? 'translate-x-6' : 'translate-x-0'}`} />
            </button>
          </div>

          {/* Variations: Size */}
          {allSizes.length > 0 && (
            <div className="space-y-6">
              <h4 className="text-[10px] uppercase tracking-[0.2em] font-bold text-slate-400">Dimensional Variants</h4>
              <div className="flex flex-wrap gap-3">
                {allSizes.map(size => (
                  <button 
                    key={size}
                    onClick={() => toggleSize(size)}
                    className={`px-4 py-2 rounded-xl text-[9px] font-bold uppercase tracking-widest transition-all ${selectedSizes.includes(size) ? 'bg-[#b89150] text-white shadow-md' : 'bg-slate-50 text-slate-400 hover:bg-slate-100'}`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Variations: Color */}
          {allColors.length > 0 && (
            <div className="space-y-6">
              <h4 className="text-[10px] uppercase tracking-[0.2em] font-bold text-slate-400">Pigment Options</h4>
              <div className="flex flex-wrap gap-4">
                {allColors.map(color => (
                  <button 
                    key={color}
                    onClick={() => toggleColor(color)}
                    title={color}
                    className={`w-8 h-8 rounded-full border-2 transition-all p-0.5 ${selectedColors.includes(color) ? 'border-[#b89150] scale-110 shadow-lg' : 'border-transparent'}`}
                  >
                    <div 
                      className="w-full h-full rounded-full" 
                      style={{ 
                        backgroundColor: color.startsWith('#') ? color : 
                          color.toLowerCase().includes('pink') ? '#ffc0cb' : 
                          color.toLowerCase().includes('green') ? '#008000' : 
                          '#ccc' 
                      }} 
                    />
                  </button>
                ))}
              </div>
            </div>
          )}
        </aside>

        <div className="flex-grow space-y-12">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="w-full md:w-2/3">
              <SearchBar value={search} onChange={setSearch} placeholder="Search product registry..." />
            </div>
            <p className="text-[10px] uppercase tracking-widest font-bold text-slate-400">
              Found <span className="text-[#1a1a1a]">{filteredProducts.length}</span> Rituals
            </p>
          </div>
          
          {filteredProducts.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-12">
              {filteredProducts.map(product => (
                <ProductCard 
                  key={product.id} 
                  product={product} 
                  onClick={() => setSelectedProduct(product)} 
                  onQuickAdd={() => handleQuickAdd(product)}
                />
              ))}
            </div>
          ) : (
            <div className="text-center py-40 bg-white rounded-[4rem] shadow-xl border border-slate-50 animate-slide-up">
              <span className="text-6xl block mb-6 opacity-20">🔍</span>
              <h3 className="text-2xl font-serif font-bold text-[#1a1a1a]">No Matches Found</h3>
              <p className="text-slate-400 text-xs italic mt-4 max-w-xs mx-auto">Try adjusting your filters to find the perfect ritual for your sanctuary.</p>
              <button 
                onClick={resetFilters}
                className="mt-10 px-8 py-3 bg-[#1a1a1a] text-[#b89150] rounded-full text-[9px] uppercase tracking-widest font-bold shadow-xl hover:bg-[#b89150] hover:text-white transition-all"
              >
                Clear All Parameters
              </button>
            </div>
          )}
        </div>
      </div>

      {selectedProduct && (
        <div className="fixed inset-0 z-[200] flex items-center justify-center px-4">
          <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" onClick={() => setSelectedProduct(null)} />
          <div className="relative bg-white w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-[4rem] shadow-2xl flex flex-col md:flex-row animate-slide-up">
            <div className="w-full md:w-1/2 p-10 relative flex items-center justify-center bg-slate-50 md:bg-white">
              <div className="absolute w-[80%] h-[80%] bg-[#bc13fe]/10 rounded-full animate-aura blur-3xl -z-10"></div>
              <img src={selectedProduct.image} className="w-full h-auto object-cover rounded-[3rem] shadow-2xl relative z-10" alt="" />
            </div>
            <div className="w-full md:w-1/2 p-10 lg:p-16 flex flex-col justify-center space-y-8">
               <div className="space-y-4">
                 <span className="text-[#b89150] text-[10px] uppercase tracking-[0.6em] font-bold">{selectedProduct.category}</span>
                 <h2 className="text-5xl font-serif font-bold text-[#1a1a1a] leading-tight">{selectedProduct.name}</h2>
                 <div className="flex items-baseline gap-4">
                    <p className="text-3xl font-bold text-[#1a1a1a]">৳{selectedProduct.price}</p>
                    {selectedProduct.originalPrice && (
                      <p className="text-lg text-slate-300 line-through">৳{selectedProduct.originalPrice}</p>
                    )}
                 </div>
               </div>

               <p className="text-slate-500 italic font-light leading-relaxed text-sm">
                 {selectedProduct.description}
               </p>

               {/* Variation Selectors inside Modal */}
               <div className="space-y-6 py-4 border-y border-slate-100">
                  {selectedProduct.variations?.size && (
                    <div className="space-y-3">
                      <h4 className="text-[9px] uppercase tracking-widest font-bold text-slate-400">Select Volume</h4>
                      <div className="flex flex-wrap gap-2">
                        {selectedProduct.variations.size.map(s => (
                          <button key={s} className="px-4 py-2 border border-slate-100 rounded-xl text-[9px] font-bold hover:border-[#b89150] transition-colors">{s}</button>
                        ))}
                      </div>
                    </div>
                  )}
                  {selectedProduct.variations?.color && (
                    <div className="space-y-3">
                      <h4 className="text-[9px] uppercase tracking-widest font-bold text-slate-400">Select Essence</h4>
                      <div className="flex flex-wrap gap-2">
                        {selectedProduct.variations.color.map(c => (
                          <button key={c} className="w-8 h-8 rounded-full border border-slate-100 hover:border-[#b89150] transition-all p-1">
                            <div className="w-full h-full rounded-full" style={{ backgroundColor: c.startsWith('#') ? c : '#ccc' }} />
                          </button>
                        ))}
                      </div>
                    </div>
                  )}
               </div>

               <button 
                onClick={() => { addToCart(selectedProduct); setSelectedProduct(null); }}
                className="w-full bg-[#1a1a1a] text-[#b89150] py-6 rounded-full font-bold uppercase tracking-widest text-[10px] shadow-2xl hover:bg-[#b89150] hover:text-white transition-all duration-500 transform active:scale-95"
              >
                Acquire Ritual
              </button>

              <div className="grid grid-cols-2 gap-4">
                <div className="p-4 bg-slate-50 rounded-2xl text-center">
                  <span className="block text-[10px] font-bold text-[#1a1a1a]">Secure</span>
                  <span className="text-[8px] text-slate-400 uppercase">Registry</span>
                </div>
                <div className="p-4 bg-slate-50 rounded-2xl text-center">
                  <span className="block text-[10px] font-bold text-[#1a1a1a]">Authentic</span>
                  <span className="text-[8px] text-slate-400 uppercase">Origin</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Shop;