
import React, { useState } from 'react';
import { PRODUCTS } from '../constants';

const Admin: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'Stats' | 'Products' | 'Orders' | 'Inventory'>('Stats');
  
  const [mockOrders, setMockOrders] = useState([
    { id: 'ORD-A932', customer: 'Anisul Islam', amount: 3450, status: 'Pending', date: '24 May 2024', method: 'bKash' },
    { id: 'ORD-B211', customer: 'Sumi Akter', amount: 1850, status: 'Processing', date: '25 May 2024', method: 'Nagad' },
    { id: 'ORD-C440', customer: 'Rahat Khan', amount: 5200, status: 'Delivered', date: '20 May 2024', method: 'COD' },
  ]);

  const updateStatus = (id: string, newStatus: string) => {
    setMockOrders(prev => prev.map(o => o.id === id ? { ...o, status: newStatus as any } : o));
  };

  return (
    <div className="pt-40 pb-32 container mx-auto px-6">
      <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-16 gap-8 bg-[#1a1a1a] p-12 rounded-[4rem] shadow-2xl relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#b89150]/10 blur-[150px] rounded-full" />
        <div className="relative z-10">
          <span className="text-[#b89150] text-[11px] uppercase tracking-[0.8em] font-black block mb-4">Command Center</span>
          <h1 className="text-5xl font-serif font-bold text-white">Owner Sanctuary</h1>
          <p className="text-slate-400 mt-2 text-sm italic font-light">Direct oversight of AuraCare House logistics and essence registry.</p>
        </div>
        <div className="flex flex-wrap gap-3 bg-white/5 p-2 rounded-full border border-white/10 relative z-10">
           {['Stats', 'Products', 'Orders', 'Inventory'].map(tab => (
             <button 
               key={tab}
               onClick={() => setActiveTab(tab as any)}
               className={`px-8 py-3 rounded-full font-bold transition-all text-[10px] uppercase tracking-widest ${activeTab === tab ? 'bg-[#b89150] text-white shadow-[0_0_30px_rgba(184,145,80,0.4)]' : 'text-slate-400 hover:text-white'}`}
             >
               {tab}
             </button>
           ))}
        </div>
      </div>

      {activeTab === 'Stats' && (
        <div className="space-y-12 animate-slide-up">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-12 rounded-[3.5rem] shadow-xl border border-slate-50 group hover:border-[#b89150] transition-all duration-700">
              <span className="text-[10px] font-black text-[#b89150] uppercase tracking-widest">Revenue Sanctuary</span>
              <h4 className="text-4xl font-extrabold mt-6 text-[#1a1a1a]">৳8,24,500</h4>
              <p className="text-green-500 text-[10px] font-bold mt-2 uppercase">↑ 12% vs last month</p>
            </div>
            <div className="bg-white p-12 rounded-[3.5rem] shadow-xl border border-slate-50 group hover:border-[#b89150] transition-all duration-700">
              <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Registry Growth</span>
              <h4 className="text-4xl font-extrabold mt-6 text-[#1a1a1a]">1,452</h4>
              <p className="text-slate-400 text-[10px] font-bold mt-2 uppercase">Total Divine Orders</p>
            </div>
            <div className="bg-white p-12 rounded-[3.5rem] shadow-xl border border-slate-50 group hover:border-[#b89150] transition-all duration-700">
              <span className="text-[10px] font-black text-green-500 uppercase tracking-widest">Logistics Success</span>
              <h4 className="text-4xl font-extrabold mt-6 text-[#1a1a1a]">98.2%</h4>
              <p className="text-slate-400 text-[10px] font-bold mt-2 uppercase">On-time Restoration</p>
            </div>
            <div className="bg-white p-12 rounded-[3.5rem] shadow-xl border border-slate-50 group hover:border-[#b89150] transition-all duration-700">
              <span className="text-[10px] font-black text-yellow-500 uppercase tracking-widest">Active Trials</span>
              <h4 className="text-4xl font-extrabold mt-6 text-[#1a1a1a]">48</h4>
              <p className="text-slate-400 text-[10px] font-bold mt-2 uppercase">Pending Synchronizations</p>
            </div>
          </div>
          
          <div className="bg-[#1a1a1a] p-16 rounded-[4.5rem] shadow-2xl h-[400px] flex items-center justify-center border border-white/5 relative overflow-hidden">
            <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle, #b89150 1px, transparent 1px)', backgroundSize: '30px 30px' }} />
            <div className="text-center space-y-6">
              <div className="w-24 h-24 bg-[#b89150]/10 rounded-full mx-auto flex items-center justify-center animate-pulse">
                <div className="w-4 h-4 bg-[#b89150] rounded-full shadow-[0_0_20px_#b89150]" />
              </div>
              <p className="text-slate-400 font-serif italic text-2xl">Neural Analytics Node: Active & Syncing</p>
              <p className="text-[10px] uppercase tracking-[0.8em] text-[#b89150] font-black">Data Visualization Engine Offline</p>
            </div>
          </div>
        </div>
      )}

      {activeTab === 'Orders' && (
        <div className="bg-white rounded-[4rem] shadow-2xl overflow-hidden animate-slide-up border border-slate-50">
          <table className="w-full text-left text-xs">
            <thead>
              <tr className="bg-slate-50/50">
                <th className="px-12 py-8 uppercase tracking-[0.4em] text-slate-400 font-black">Ritual ID</th>
                <th className="px-12 py-8 uppercase tracking-[0.4em] text-slate-400 font-black">The Seeker</th>
                <th className="px-12 py-8 uppercase tracking-[0.4em] text-slate-400 font-black">Exchange</th>
                <th className="px-12 py-8 uppercase tracking-[0.4em] text-slate-400 font-black">Protocol</th>
                <th className="px-12 py-8 uppercase tracking-[0.4em] text-slate-400 font-black text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-50">
              {mockOrders.map(order => (
                <tr key={order.id} className="hover:bg-slate-50/20 transition-colors">
                  <td className="px-12 py-10 font-black text-[#1a1a1a] tracking-widest">{order.id}</td>
                  <td className="px-12 py-10">
                    <div className="font-bold text-base text-[#1a1a1a]">{order.customer}</div>
                    <div className="text-slate-400 mt-1 italic">{order.date}</div>
                  </td>
                  <td className="px-12 py-10">
                    <div className="font-black text-lg text-[#b89150]">৳{order.amount}</div>
                    <div className="text-[9px] uppercase font-bold text-slate-300 mt-1">{order.method}</div>
                  </td>
                  <td className="px-12 py-10">
                    <span className={`px-6 py-2 rounded-full text-[9px] font-black uppercase tracking-[0.3em] ${order.status === 'Delivered' ? 'bg-green-50 text-green-500' : 'bg-yellow-50 text-yellow-600'}`}>
                      {order.status}
                    </span>
                  </td>
                  <td className="px-12 py-10 text-right">
                    <select 
                      onChange={(e) => updateStatus(order.id, e.target.value)}
                      className="bg-[#1a1a1a] text-[#b89150] text-[9px] uppercase font-bold border-none rounded-full px-6 py-3 outline-none cursor-pointer hover:bg-black transition-all"
                    >
                      <option value="">Move Protocol</option>
                      <option value="Processing">Processing</option>
                      <option value="Shipped">Shipped</option>
                      <option value="Delivered">Delivered</option>
                      <option value="Cancelled">Cancelled</option>
                    </select>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {activeTab === 'Products' && (
        <div className="bg-white rounded-[4rem] shadow-2xl p-16 space-y-12 animate-slide-up border border-slate-50">
          <div className="flex justify-between items-center">
            <h3 className="text-3xl font-serif font-bold">Essence Catalog ({PRODUCTS.length})</h3>
            <button className="bg-[#1a1a1a] text-[#b89150] px-12 py-5 rounded-full font-bold uppercase tracking-[0.4em] text-[10px] shadow-2xl hover:scale-105 transition-all">Add New Essence</button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {PRODUCTS.map(p => (
              <div key={p.id} className="p-8 bg-slate-50 rounded-[3rem] flex flex-col gap-6 group hover:bg-white hover:shadow-2xl transition-all duration-700">
                <div className="relative aspect-square rounded-[2rem] overflow-hidden">
                  <img src={p.image} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" alt=""/>
                  <div className="absolute top-4 right-4 bg-white/80 backdrop-blur-md px-4 py-2 rounded-full text-[8px] font-black uppercase tracking-widest">Qty: {p.stockCount}</div>
                </div>
                <div>
                  <h4 className="font-serif font-bold text-xl text-[#1a1a1a] truncate">{p.name}</h4>
                  <p className="text-[11px] text-[#b89150] font-black mt-1">৳{p.price}</p>
                </div>
                <div className="flex gap-2">
                  <button className="flex-1 py-3 border border-slate-100 rounded-full text-[9px] font-bold uppercase hover:bg-[#1a1a1a] hover:text-[#b89150] transition-all">Edit</button>
                  <button className="w-12 h-12 border border-red-50 text-red-300 rounded-full flex items-center justify-center hover:bg-red-50 transition-all">×</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Admin;
