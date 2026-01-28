
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { CartItem, Order, User } from '../types';
import CheckoutFlow from '../components/CheckoutFlow';

interface CheckoutPageProps {
  cart: CartItem[];
  user: User | null;
  setOrders: React.Dispatch<React.SetStateAction<Order[]>>;
  clearCart: () => void;
}

const CheckoutPage: React.FC<CheckoutPageProps> = ({ cart, user, setOrders, clearCart }) => {
  const navigate = useNavigate();
  const subtotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const handleComplete = (details: any) => {
    const dCharge = details.area === 'Inside Dhaka' ? 60 : 120;
    const finalOrderTotal = subtotal + dCharge;

    const newOrder: Order = {
      id: `ORD-${Math.random().toString(36).substr(2, 9).toUpperCase()}`,
      userId: user?.id || 'guest',
      items: [...cart],
      subtotal: subtotal,
      shipping: dCharge,
      total: finalOrderTotal,
      status: 'Pending',
      date: new Date().toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' }),
      paymentDetails: {
        method: details.method,
      },
      shippingDetails: {
        name: details.name,
        phone: details.phone,
        address: details.address,
        area: details.area,
      }
    };
    
    setOrders(prev => [newOrder, ...prev]);
    clearCart();
    navigate('/dashboard');
  };

  if (cart.length === 0) {
    return (
      <div className="min-h-screen pt-60 text-center space-y-10">
        <h1 className="font-serif text-4xl text-[#1a1a1a]">Your basket is void of rituals.</h1>
        <button 
          onClick={() => navigate('/shop')}
          className="bg-[#1a1a1a] text-[#b89150] px-12 py-5 rounded-full font-bold uppercase tracking-[0.4em] text-[10px]"
        >
          Return to Archives
        </button>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-40 bg-[#050505]">
       <CheckoutFlow total={subtotal} onComplete={handleComplete} onCancel={() => navigate('/shop')} />
    </div>
  );
};

export default CheckoutPage;
