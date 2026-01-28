import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { User } from '../types';

interface NavbarProps {
  cartCount: number;
  user: User | null;
  onOpenCart: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ cartCount, user, onOpenCart }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled ? 'bg-white/95 backdrop-blur-md shadow-sm py-4' : 'bg-transparent py-8'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <Link to="/" className="flex items-center gap-3">
          <div className="w-12 h-12 bg-[#1a1a1a] rounded-full flex items-center justify-center shadow-xl border border-[#b89150]/20 transform hover:rotate-12 transition-transform">
            <span className="text-[#b89150] text-2xl font-serif">A</span>
          </div>
          <div className="flex flex-col">
            <span className={`text-2xl font-serif font-bold tracking-tight transition-colors duration-500 ${isScrolled ? 'text-[#1a1a1a]' : 'text-white'}`}>AuraCare</span>
            <span className="text-[8px] uppercase tracking-[0.4em] font-extrabold text-[#b89150]">House of Beauty</span>
          </div>
        </Link>
        
        <div className="hidden lg:flex gap-10 items-center text-[11px] uppercase tracking-[0.2em] font-bold">
          <Link to="/" className={`${location.pathname === '/' ? 'text-[#b89150]' : (isScrolled ? 'text-slate-600' : 'text-white/80')} hover:text-[#b89150] transition-colors`}>Home</Link>
          <Link to="/shop" className={`${location.pathname === '/shop' ? 'text-[#b89150]' : (isScrolled ? 'text-slate-600' : 'text-white/80')} hover:text-[#b89150] transition-colors`}>Shop</Link>
          <Link to="/dashboard" className={`${isScrolled ? 'text-slate-600' : 'text-white/80'} hover:text-[#b89150] transition-colors`}>Wishlist</Link>
          <Link to="/dashboard" className={`${isScrolled ? 'text-slate-600' : 'text-white/80'} hover:text-[#b89150] transition-colors`}>My Orders</Link>
        </div>

        <div className="flex items-center gap-6">
          <button onClick={onOpenCart} className="relative group">
            <div className={`p-3 rounded-full transition-all duration-300 ${isScrolled ? 'bg-slate-50' : 'bg-white/10 backdrop-blur-sm'}`}>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.2} stroke="currentColor" className={`w-6 h-6 ${isScrolled ? 'text-[#1a1a1a]' : 'text-white'}`}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.114 6.348a4.5 4.5 0 0 1-4.436 5.279H7.817a4.5 4.5 0 0 1-4.436-5.279l1.114-6.348a4.5 4.5 0 0 1 4.436-5.279l1.114-6.348a4.5 4.5 0 0 1 4.436-4.207h8.167a4.5 4.5 0 0 1 4.436 4.207Z" />
              </svg>
            </div>
            {cartCount > 0 && (
              <span className="absolute -top-1 -right-1 bg-[#b89150] text-white text-[9px] w-5 h-5 flex items-center justify-center rounded-full font-bold shadow-lg ring-2 ring-white">
                {cartCount}
              </span>
            )}
          </button>

          <Link to="/dashboard">
            <div className={`p-3 rounded-full transition-all duration-300 ${isScrolled ? 'bg-[#1a1a1a] text-[#b89150]' : 'bg-white/10 backdrop-blur-sm text-[#b89150]'}`}>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
              </svg>
            </div>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;