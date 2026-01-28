
import React, { useState } from 'react';
import { Order, Review, User } from '../types';

interface OrderHistoryProps {
  orders: Order[];
  onReviewProduct?: (productId: string, productName: string) => void;
  reviews: Review[];
}

const OrderHistory: React.FC<OrderHistoryProps> = ({ orders, onReviewProduct, reviews }) => {
  return (
    <section className="animate-slide-up stagger-1">
      <h3 className="text-4xl font-serif font-bold text-[#1a1a1a] mb-12 flex items-center gap-6">
        Acquisition History
        <span className="flex-grow h-px bg-slate-100"></span>
      </h3>
      
      {orders.length === 0 ? (
        <div className="bg-white rounded-[3.5rem] shadow-2xl overflow-hidden border border-slate-50 text-center py-24">
          <span className="text-6xl block mb-6 opacity-20">📜</span>
          <p className="text-slate-400 font-bold uppercase tracking-widest text-xs">No Recent Rituals Found</p>
        </div>
      ) : (
        <div className="space-y-10">
          {orders.map(order => (
            <div key={order.id} className="bg-white p-10 rounded-[3rem] shadow-xl border border-slate-50 space-y-8 group hover:border-[#b89150]/20 transition-all">
              <div className="flex flex-col md:flex-row justify-between items-center gap-8">
                <div className="flex flex-col gap-2">
                  <span className="text-[10px] uppercase tracking-widest font-extrabold text-[#b89150]">Ritual ID: {order.id}</span>
                  <p className="text-slate-400 text-xs italic">{order.date}</p>
                </div>
                <div className="flex flex-col items-center">
                  <span className={`px-6 py-2 rounded-full text-[9px] font-black uppercase tracking-widest ${order.status === 'Delivered' ? 'bg-green-50 text-green-500' : 'bg-yellow-50 text-yellow-600'} mb-2`}>
                    {order.status}
                  </span>
                  <span className="font-bold text-lg">৳{order.total}</span>
                </div>
                <button className="px-10 py-4 bg-slate-50 rounded-full text-[9px] font-bold uppercase tracking-widest hover:bg-[#1a1a1a] hover:text-[#b89150] transition-all">View Invoice</button>
              </div>

              {/* Order Items & Review Capability */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 border-t border-slate-50 pt-8">
                {order.items.map(item => {
                  const hasReviewed = reviews.some(r => r.productId === item.id && r.userId === order.userId);
                  return (
                    <div key={item.id} className="flex items-center gap-4 bg-slate-50/50 p-4 rounded-3xl">
                      <img src={item.image} className="w-16 h-16 object-cover rounded-2xl shadow-sm" alt="" />
                      <div className="flex-grow">
                        <h5 className="text-[11px] font-bold text-[#1a1a1a] uppercase line-clamp-1">{item.name}</h5>
                        <p className="text-[10px] text-slate-400 font-bold uppercase">৳{item.price}</p>
                      </div>
                      {order.status === 'Delivered' && onReviewProduct && (
                        <button 
                          disabled={hasReviewed}
                          onClick={() => onReviewProduct(item.id, item.name)}
                          className={`px-4 py-2 rounded-full text-[8px] font-black uppercase tracking-widest transition-all ${hasReviewed ? 'bg-slate-100 text-slate-300' : 'bg-[#1a1a1a] text-[#b89150] hover:bg-black'}`}
                        >
                          {hasReviewed ? 'Reviewed' : 'Share Aura'}
                        </button>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  );
};

export default OrderHistory;
