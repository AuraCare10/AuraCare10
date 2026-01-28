
import React, { useState } from 'react';
import { PRODUCTS } from '../constants';

const Admin: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'Stats' | 'Products' | 'Orders' | 'Discounts'>('Stats');

  return (
    <div className="pt-40 pb-20 container mx-auto px-6">
      <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-12 gap-8">
        <div>
          <h1 className="text-4xl font-serif font-bold text-[#1a1a1a]">House Registry</h1>
          <p className="text-slate-400 mt-2 text-sm italic">Managing AuraCare operations with precision.</p>
        </div>
        <div className="flex flex-wrap gap-2 bg-slate-50 p-2 rounded-full border border-slate-100">
           {['Stats', 'Products', 'Orders', 'Discounts'].map(tab => (
             <button 
               key={tab}
               onClick={() => setActiveTab(tab as any)}
               className={`px-6 py-2 rounded-full font-bold transition-all text-[9px] uppercase tracking-widest ${activeTab === tab ? 'bg-[#1a1a1a] text-[#b89150] shadow-xl' : 'text-slate-400 hover:text-[#1a1a1a]'}`}
             >
               {tab}
             </button>
           ))}
        </div>
      </div>

      {activeTab === 'Stats' && (
        <div className="space-y-12 animate-slide-up">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-10 rounded-[2.5rem] shadow-xl border-b-8 border-[#1a1a1a]">
              <span className="text-[9px] font-bold text-slate-400 uppercase tracking-widest">Revenue</span>
              <h4 className="text-3xl font-extrabold mt-4 text-[#1a1a1a]">৳824,500</h4>
            </div>
            <div className="bg-white p-10 rounded-[2.5rem] shadow-xl border-b-8 border-[#b89150]">
              <span className="text-[9px] font-bold text-slate-400 uppercase tracking-widest">Active Requests</span>
              <h4 className="text-3xl font-extrabold mt-4 text-[#1a1a1a]">48</h4>
            </div>
            <div className="bg-white p-10 rounded-[2.5rem] shadow-xl border-b-8 border-[#f4dada]">
              <span className="text-[9px] font-bold text-slate-400 uppercase tracking-widest">Membership</span>
              <h4 className="text-3xl font-extrabold mt-4 text-[#1a1a1a]">1.2k</h4>
            </div>
            <div className="bg-white p-10 rounded-[2.5rem] shadow-xl border-b-8 border-red-200">
              <span className="text-[9px] font-bold text-slate-400 uppercase tracking-widest">Alerts</span>
              <h4 className="text-3xl font-extrabold mt-4 text-red-500">05</h4>
            </div>
          </div>
        </div>
      )}

      {activeTab === 'Products' && (
        <div className="bg-white rounded-[2.5rem] shadow-2xl border border-slate-50 overflow-hidden animate-slide-up">
          <div className="p-10 border-b flex flex-col md:flex-row justify-between items-center gap-6">
             <h3 className="font-bold text-xl text-[#1a1a1a]">Collection Archive</h3>
             <button className="bg-[#1a1a1a] text-[#b89150] px-8 py-3 rounded-full font-bold uppercase tracking-widest text-[9px] shadow-xl hover:bg-[#b89150] hover:text-white transition-all">+ Add New</button>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs">
              <thead>
                <tr className="bg-slate-50">
                  <th className="px-10 py-6 text-[9px] uppercase tracking-widest text-slate-400">Detail</th>
                  <th className="px-10 py-6 text-[9px] uppercase tracking-widest text-slate-400">Valuation</th>
                  <th className="px-10 py-6 text-[9px] uppercase tracking-widest text-slate-400">Stock</th>
                  <th className="px-10 py-6 text-[9px] uppercase tracking-widest text-slate-400 text-right">Rituals</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-50">
                {PRODUCTS.map(p => (
                  <tr key={p.id} className="hover:bg-slate-50/20">
                    <td className="px-10 py-8">
                      <div className="flex items-center gap-4">
                        <img src={p.image} className="w-12 h-12 rounded-xl object-cover shadow-sm" alt="" />
                        <span className="font-bold text-[#1a1a1a]">{p.name}</span>
                      </div>
                    </td>
                    <td className="px-10 py-8 font-bold">৳{p.price}</td>
                    <td className="px-10 py-8">
                      <span className={`text-[9px] font-bold uppercase tracking-widest px-3 py-1 rounded-full ${p.stockCount < 10 ? 'bg-red-50 text-red-500' : 'bg-slate-50 text-slate-400'}`}>
                        {p.stockCount} Units
                      </span>
                    </td>
                    <td className="px-10 py-8 text-right space-x-4">
                      <button className="text-slate-400 hover:text-[#b89150]">Edit</button>
                      <button className="text-slate-400 hover:text-red-500">Delete</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* Placeholder for other tabs with same style */}
      {['Orders', 'Discounts'].includes(activeTab) && (
        <div className="bg-white rounded-[3rem] shadow-2xl border border-slate-50 text-center py-40 animate-slide-up">
           <span className="text-6xl block mb-6">📦</span>
           <h3 className="text-2xl font-serif font-bold text-[#1a1a1a]">{activeTab} Command</h3>
           <p className="text-slate-400 max-w-xs mx-auto text-xs italic">Registry synchronization in progress.</p>
        </div>
      )}
    </div>
  );
};

export default Admin;
