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
  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  if (!isOpen) return null;

  const handleContinueShopping = () => {
    navigate('/shop');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-[300] flex justify-end">
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity" onClick={onClose} />
      <div className="relative bg-white w-full max-w-lg h-full shadow-2xl flex flex-col p-10 animate-slide-in-right">
        <div className="flex justify-between items-center mb-12">
          <h2 className="text-3xl font-serif font-bold text-[#1a1a1a]">Registry Basket</h2>
          <button onClick={onClose} className="text-slate-400 hover:text-[#1a1a1a]">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <div className="flex-grow overflow-y-auto space-y-6 pr-4">
          {cart.length === 0 ? (
            <div className="text-center py-20">
              <span className="text-5xl block mb-6 opacity-20">🛒</span>
              <p className="text-slate-400 text-[10px] uppercase tracking-widest font-bold">Your basket is empty</p>
            </div>
          ) : (
            cart.map((item) => (
              <div key={item.id} className="flex gap-6 p-4 bg-slate-50 rounded-3xl group border border-transparent hover:border-[#b89150]/20 transition-all">
                <img src={item.image} className="w-20 h-24 rounded-2xl object-cover shadow-sm" alt="" />
                <div className="flex-grow flex flex-col justify-center">
                  <h4 className="font-bold text-[#1a1a1a] mb-1">{item.name}</h4>
                  <p className="text-[#b89150] font-bold mb-3">৳{item.price}</p>
                  <div className="flex items-center gap-4">
                    <button onClick={() => onUpdateQuantity(item.id, -1)} className="w-8 h-8 rounded-full border border-slate-200 flex items-center justify-center hover:bg-white transition-all text-xs">-</button>
                    <span className="font-bold text-xs">{item.quantity}</span>
                    <button onClick={() => onUpdateQuantity(item.id, 1)} className="w-8 h-8 rounded-full border border-slate-200 flex items-center justify-center hover:bg-white transition-all text-xs">+</button>
                  </div>
                </div>
                <button onClick={() => onRemove(item.id)} className="text-slate-300 hover:text-red-500 transition-colors self-start p-2">×</button>
              </div>
            ))
          )}
        </div>

        <div className="mt-10 pt-10 border-t border-slate-100 space-y-4">
          {cart.length > 0 && (
            <>
              <div className="flex justify-between items-center mb-4">
                <span className="text-slate-400 text-[10px] uppercase tracking-[0.4em] font-bold">Estimated Total</span>
                <span className="text-3xl font-serif font-bold text-[#1a1a1a]">৳{total}</span>
              </div>
              <button 
                onClick={onCheckout}
                className="w-full bg-[#1a1a1a] text-[#b89150] py-6 rounded-full font-bold uppercase tracking-[0.5em] text-[10px] shadow-2xl hover:bg-[#b89150] hover:text-white transition-all duration-500"
              >
                Proceed to Registry
              </button>
            </>
          )}
          <button 
            onClick={handleContinueShopping}
            className="w-full bg-transparent text-[#b89150] py-6 rounded-full font-bold uppercase tracking-[0.5em] text-[10px] border border-[#b89150] hover:bg-[#b89150]/5 transition-all duration-500"
          >
            Continue Shopping
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartDrawer;