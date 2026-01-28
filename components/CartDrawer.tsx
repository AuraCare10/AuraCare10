
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { CartItem } from '../types';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  cart: CartItem[];
  onUpdateQuantity: (id: string, delta: number) => void;
  onRemove: (id: string) => void;
  onCheckout: () => void;
}

const CartDrawer: React.FC<CartDrawerProps> = ({ isOpen, onClose, cart, onUpdateQuantity, onRemove, onCheckout }) => {
  const navigate = useNavigate();
  const subtotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  
  // Free delivery logic (e.g., free delivery over ৳5000)
  const freeDeliveryThreshold = 5000;
  const progressToFreeDelivery = Math.min((subtotal / freeDeliveryThreshold) * 100, 100);
  const remainingForFreeDelivery = freeDeliveryThreshold - subtotal;

  if (!isOpen) return null;

  const handleContinueShopping = () => {
    navigate('/shop');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-[300] flex justify-end">
      <div className="absolute inset-0 bg-black/70 backdrop-blur-sm transition-opacity duration-500" onClick={onClose} />
      
      <div className="relative bg-white w-full max-w-lg h-full shadow-2xl flex flex-col animate-slide-in-right border-l border-slate-100">
        {/* Header */}
        <div className="p-10 flex justify-between items-center border-b border-slate-50">
          <div className="space-y-1">
            <h2 className="text-3xl font-serif font-bold text-[#1a1a1a]">Registry Basket</h2>
            <p className="text-[10px] uppercase tracking-[0.4em] font-black text-[#b89150]">{cart.length} Rituals Selected</p>
          </div>
          <button onClick={onClose} className="w-12 h-12 rounded-full flex items-center justify-center text-slate-300 hover:text-[#1a1a1a] hover:bg-slate-50 transition-all">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Free Shipping Milestone */}
        {cart.length > 0 && (
          <div className="px-10 py-6 bg-slate-50/50 border-b border-slate-100 space-y-3">
            <div className="flex justify-between items-center">
              <span className="text-[9px] uppercase tracking-widest font-black text-slate-400">
                {remainingForFreeDelivery > 0 
                  ? `Add ৳${remainingForFreeDelivery} for free delivery` 
                  : "You've unlocked Free Delivery"}
              </span>
              <span className="text-[9px] font-bold text-[#b89150]">{Math.round(progressToFreeDelivery)}%</span>
            </div>
            <div className="h-1.5 w-full bg-slate-200 rounded-full overflow-hidden">
              <div 
                className="h-full bg-[#b89150] transition-all duration-1000 ease-out"
                style={{ width: `${progressToFreeDelivery}%` }}
              />
            </div>
          </div>
        )}

        {/* Content */}
        <div className="flex-grow overflow-y-auto space-y-6 p-10 scrollbar-hide">
          {cart.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-center space-y-8 opacity-40">
              <div className="w-24 h-24 bg-slate-100 rounded-full flex items-center justify-center text-5xl">🛒</div>
              <div className="space-y-2">
                <p className="text-[11px] uppercase tracking-[0.5em] font-black">Your basket is void</p>
                <p className="text-sm italic font-light">The sanctuary awaits your selections.</p>
              </div>
            </div>
          ) : (
            <div className="space-y-8">
              {cart.map((item) => (
                <div key={item.id} className="flex gap-8 group animate-slide-up">
                  <div className="relative w-24 h-32 rounded-3xl overflow-hidden bg-slate-100 flex-shrink-0 shadow-sm">
                    <img src={item.image} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" alt="" />
                  </div>
                  
                  <div className="flex-grow flex flex-col justify-between py-1">
                    <div className="flex justify-between items-start gap-4">
                      <div className="space-y-1">
                        <span className="text-[9px] uppercase tracking-widest font-bold text-[#b89150]">{item.category}</span>
                        <h4 className="font-serif font-bold text-[#1a1a1a] text-lg leading-tight line-clamp-1">{item.name}</h4>
                      </div>
                      <button onClick={() => onRemove(item.id)} className="text-slate-300 hover:text-red-500 transition-colors">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                        </svg>
                      </button>
                    </div>

                    <div className="flex items-center justify-between mt-4">
                      <div className="flex items-center bg-slate-50 rounded-full p-1 border border-slate-100">
                        <button 
                          onClick={() => onUpdateQuantity(item.id, -1)} 
                          className="w-8 h-8 rounded-full flex items-center justify-center hover:bg-white hover:text-[#b89150] transition-all text-sm font-bold shadow-sm"
                        >
                          -
                        </button>
                        <span className="w-10 text-center text-xs font-black tracking-widest">{item.quantity}</span>
                        <button 
                          onClick={() => onUpdateQuantity(item.id, 1)} 
                          className="w-8 h-8 rounded-full flex items-center justify-center hover:bg-white hover:text-[#b89150] transition-all text-sm font-bold shadow-sm"
                        >
                          +
                        </button>
                      </div>
                      <p className="font-bold text-[#1a1a1a] text-lg">৳{item.price * item.quantity}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="p-10 bg-white border-t border-slate-50 space-y-6 shadow-[0_-20px_50px_rgba(0,0,0,0.02)]">
          {cart.length > 0 && (
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-slate-400 text-[10px] uppercase tracking-[0.4em] font-black">Sacred Total</span>
                <span className="text-4xl font-serif font-bold text-[#1a1a1a]">৳{subtotal}</span>
              </div>
              <button 
                onClick={onCheckout}
                className="w-full bg-[#1a1a1a] text-[#b89150] py-7 rounded-full font-bold uppercase tracking-[0.5em] text-[11px] shadow-2xl hover:bg-black hover:scale-[1.02] transition-all duration-500 active:scale-95"
              >
                Proceed to Checkout
              </button>
            </div>
          )}
          <button 
            onClick={handleContinueShopping}
            className="w-full bg-transparent text-slate-400 py-6 rounded-full font-bold uppercase tracking-[0.4em] text-[10px] border border-slate-100 hover:bg-slate-50 hover:text-[#1a1a1a] transition-all duration-500"
          >
            {cart.length === 0 ? "Begin the Discovery" : "Keep Exploring"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartDrawer;
