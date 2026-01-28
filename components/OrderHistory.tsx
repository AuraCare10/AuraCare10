
import React from 'react';
import { Order } from '../types';

interface OrderHistoryProps {
  orders: Order[];
}

const OrderHistory: React.FC<OrderHistoryProps> = ({ orders }) => {
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
        <div className="space-y-6">
          {orders.map(order => (
            <div key={order.id} className="bg-white p-10 rounded-[3rem] shadow-xl border border-slate-50 flex flex-col md:flex-row justify-between items-center gap-8 group hover:border-[#b89150]/20 transition-all">
              <div className="flex flex-col gap-2">
                <span className="text-[10px] uppercase tracking-widest font-extrabold text-[#b89150]">ID: {order.id}</span>
                <p className="text-slate-400 text-xs italic">{order.date}</p>
              </div>
              <div className="flex flex-col items-center">
                <span className="text-[9px] uppercase tracking-widest font-bold px-6 py-2 rounded-full bg-[#b89150]/10 text-[#b89150] mb-2">{order.status}</span>
                <span className="font-bold text-lg">৳{order.totalAmount}</span>
              </div>
              <button className="px-10 py-4 bg-slate-50 rounded-full text-[9px] font-bold uppercase tracking-widest hover:bg-[#1a1a1a] hover:text-[#b89150] transition-all">View Details</button>
            </div>
          ))}
        </div>
      )}
    </section>
  );
};

export default OrderHistory;
