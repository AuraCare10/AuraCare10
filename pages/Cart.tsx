
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { CartItem } from '../types';

interface CartPageProps {
  cart: CartItem[];
  updateQuantity: (id: string, delta: number) => void;
  remove: (id: string) => void;
}

const CartPage: React.FC<CartPageProps> = ({ cart, updateQuantity, remove }) => {
  const navigate = useNavigate();
  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="pt-48 pb-32 container mx-auto px-6">
      <h1 className="text-5xl font-serif font-bold mb-16">Registry Basket</h1>
      
      {cart.length === 0 ? (
        <div className="text-center py-40 bg-white rounded-[4rem] shadow-xl">
          <p className="text-slate-400 uppercase tracking-widest font-black mb-10">Basket Empty</p>
          <Link to="/shop" className="bg-[#1a1a1a] text-[#b89150] px-12 py-5 rounded-full font-bold uppercase tracking-widest text-[10px]">Return to Archives</Link>
        </div>
      ) : (
        <div className="flex flex-col lg:flex-row gap-20">
          <div className="flex-grow space-y-8">
            {cart.map(item => (
              <div key={item.id} className="bg-white p-10 rounded-[3rem] shadow-xl flex items-center gap-10 group border border-transparent hover:border-[#b89150]/20 transition-all">
                <img src={item.image} className="w-32 h-40 object-cover rounded-[2rem]" alt="" />
                <div className="flex-grow">
                  <span className="text-[10px] uppercase tracking-widest font-black text-[#b89150]">{item.category}</span>
                  <h4 className="text-2xl font-serif font-bold mb-4">{item.name}</h4>
                  <div className="flex items-center gap-6">
                    <div className="flex items-center border rounded-full px-4 py-2">
                       <button onClick={() => updateQuantity(item.id, -1)} className="px-3">-</button>
                       <span className="px-4 font-bold">{item.quantity}</span>
                       <button onClick={() => updateQuantity(item.id, 1)} className="px-3">+</button>
                    </div>
                    <span className="font-bold text-xl">৳{item.price * item.quantity}</span>
                  </div>
                </div>
                <button onClick={() => remove(item.id)} className="text-red-400 hover:scale-125 transition-transform text-2xl">×</button>
              </div>
            ))}
          </div>

          <aside className="w-full lg:w-96">
            <div className="bg-[#1a1a1a] p-12 rounded-[4rem] text-white space-y-8 sticky top-32 shadow-2xl">
              <h3 className="text-2xl font-serif font-bold border-b border-white/10 pb-6 text-[#b89150]">Ritual Summary</h3>
              <div className="space-y-4 text-slate-400 text-xs font-bold uppercase tracking-widest">
                <div className="flex justify-between"><span>Subtotal</span> <span className="text-white">৳{total}</span></div>
                <div className="flex justify-between"><span>Logistics</span> <span className="text-white">Calculated at Checkout</span></div>
              </div>
              <div className="h-px bg-white/10"></div>
              <div className="flex justify-between items-end">
                <span className="text-[10px] font-black uppercase text-[#b89150]">Grand Essence</span>
                <span className="text-4xl font-serif font-bold">৳{total}</span>
              </div>
              <button 
                onClick={() => navigate('/checkout')}
                className="w-full bg-[#b89150] text-white py-6 rounded-full font-bold uppercase tracking-widest text-[10px] shadow-2xl hover:bg-white hover:text-[#1a1a1a] transition-all"
              >
                Proceed to Checkout
              </button>
            </div>
          </aside>
        </div>
      )}
    </div>
  );
};

export default CartPage;
