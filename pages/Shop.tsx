
import React, { useState, useMemo, useEffect } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { CATEGORIES, PRODUCTS } from '../constants.tsx';
import { CartItem, Product } from '../types.ts';
import SearchBar from '../components/SearchBar.tsx';
import ProductCard from '../components/ProductCard.tsx';

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
  const [sortBy, setSortBy] = useState<'Newest' | 'PriceLow' | 'PriceHigh' | 'Popular'>('Newest');
  const [visibleCount, setVisibleCount] = useState(6);
  
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 5000]);
  const [showInStockOnly, setShowInStockOnly] = useState(false);

  useEffect(() => {
    const cat = searchParams.get('category');
    if (cat) setSelectedCategory(cat);
  }, [searchParams]);

  const filteredAndSortedProducts = useMemo(() => {
    let filtered = PRODUCTS.filter(p => {
      const matchesCategory = selectedCategory === 'All' || p.category === selectedCategory;
      const matchesSearch = !search || p.name.toLowerCase().includes(search.toLowerCase());
      const matchesPrice = p.price >= priceRange[0] && p.price <= priceRange[1];
      const matchesAvailability = !showInStockOnly || p.stockStatus === 'In Stock';
      return matchesCategory && matchesSearch && matchesPrice && matchesAvailability;
    });

    switch (sortBy) {
      case 'PriceLow': filtered.sort((a, b) => a.price - b.price); break;
      case 'PriceHigh': filtered.sort((a, b) => b.price - a.price); break;
      case 'Popular': filtered.sort((a, b) => (b.isFeatured ? 1 : 0) - (a.isFeatured ? 1 : 0)); break;
      default: filtered.sort((a, b) => parseInt(b.id) - parseInt(a.id));
    }

    return filtered;
  }, [selectedCategory, search, priceRange, showInStockOnly, sortBy]);

  const displayedProducts = filteredAndSortedProducts.slice(0, visibleCount);

  return (
    <div className="pt-48 pb-32 container mx-auto px-6 bg-[#fcfaf8] min-h-screen">
      <div className="flex flex-col lg:flex-row gap-16">
        <aside className="w-full lg:w-80 space-y-10 bg-white p-10 rounded-[3rem] shadow-xl border border-slate-50 h-fit sticky top-32">
          <div className="flex justify-between items-center border-b border-slate-100 pb-6">
            <h3 className="text-[11px] uppercase tracking-[0.4em] font-extrabold text-[#1a1a1a]">Filters</h3>
            <button onClick={() => { setSelectedCategory('All'); setPriceRange([0, 5000]); setShowInStockOnly(false); setSearch(''); }} className="text-[9px] uppercase tracking-widest font-bold text-[#b89150]">Reset</button>
          </div>

          <div className="space-y-6">
            <h4 className="text-[10px] uppercase tracking-[0.2em] font-bold text-slate-400">Categories</h4>
            <div className="flex flex-wrap gap-2">
              {['All', ...CATEGORIES.map(c => c.name)].map(cat => (
                <button 
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-5 py-2.5 rounded-full text-[9px] uppercase tracking-widest font-bold border transition-all ${selectedCategory === cat ? 'bg-[#1a1a1a] text-[#b89150] border-[#1a1a1a]' : 'bg-transparent text-slate-400 border-slate-100'}`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </aside>

        <div className="flex-grow space-y-12">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="w-full md:w-2/3">
              <SearchBar value={search} onChange={setSearch} placeholder="Search product registry..." />
            </div>
          </div>
          
          {displayedProducts.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-12">
              {displayedProducts.map(product => (
                <ProductCard 
                  key={product.id} 
                  product={product} 
                  onClick={() => {}} 
                  onQuickAdd={() => addToCart(product)}
                />
              ))}
            </div>
          ) : (
            <div className="text-center py-40 bg-white rounded-[4rem] border border-slate-50">
              <h3 className="text-2xl font-serif font-bold text-[#1a1a1a]">No Matches Found</h3>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Shop;
