
import React, { useState } from 'react';

interface CheckoutFlowProps {
  total: number;
  onComplete: (details: { method: string, area: string, address: string, phone: string, name: string }) => void;
  onCancel: () => void;
}

const CheckoutFlow: React.FC<CheckoutFlowProps> = ({ total, onComplete, onCancel }) => {
  const [method, setMethod] = useState<'COD' | 'bKash' | 'Nagad' | 'Rocket' | 'Card'>('COD');
  const [step, setStep] = useState<'details' | 'payment' | 'processing'>('details');
  const [area, setArea] = useState<'Inside Dhaka' | 'Outside Dhaka'>('Inside Dhaka');
  const [customer, setCustomer] = useState({ name: '', phone: '', address: '' });

  const deliveryCharge = area === 'Inside Dhaka' ? 60 : 120;
  const finalTotal = total + deliveryCharge;

  const paymentMethods = [
    { 
      id: 'bKash', 
      name: 'bKash', 
      icon: 'https://raw.githubusercontent.com/Anisul-Islam/ecommerce-icons/main/bkash.png',
      desc: 'Pay via bKash Wallet'
    },
    { 
      id: 'Nagad', 
      name: 'Nagad', 
      icon: 'https://raw.githubusercontent.com/Anisul-Islam/ecommerce-icons/main/nagad.png',
      desc: 'Pay via Nagad Wallet'
    },
    { 
      id: 'Rocket', 
      name: 'Rocket', 
      icon: 'https://raw.githubusercontent.com/Anisul-Islam/ecommerce-icons/main/rocket.png',
      desc: 'Pay via Rocket Wallet'
    },
    { 
      id: 'Card', 
      name: 'Card', 
      icon: '💳',
      desc: 'Credit or Debit Card'
    },
    { 
      id: 'COD', 
      name: 'COD', 
      icon: '🚚',
      desc: 'Cash on Delivery'
    }
  ];

  const handleFinalSubmit = () => {
    setStep('processing');
    // Simulate payment ritual
    setTimeout(() => {
      onComplete({ ...customer, method, area });
    }, 2500);
  };

  return (
    <div className="fixed inset-0 z-[400] flex items-center justify-center px-4">
      <div className="absolute inset-0 bg-[#050505]/95 backdrop-blur-xl" onClick={onCancel} />
      
      <div className="relative bg-white w-full max-w-2xl rounded-[4rem] shadow-2xl overflow-hidden animate-slide-up">
        {step !== 'processing' && (
          <div className="p-10 lg:p-16 pb-0 flex justify-between items-center">
            <div className="space-y-1">
              <span className="text-[#b89150] text-[9px] uppercase tracking-[0.6em] font-extrabold block">Sanctuary Checkout</span>
              <h2 className="text-4xl font-serif font-bold text-[#1a1a1a]">
                {step === 'details' ? 'Origin Details' : 'Payment Protocol'}
              </h2>
            </div>
            <button onClick={onCancel} className="w-10 h-10 rounded-full border border-slate-100 flex items-center justify-center text-slate-300 hover:text-red-500 transition-colors">×</button>
          </div>
        )}

        <div className="p-10 lg:p-16">
          {step === 'details' ? (
            <div className="space-y-8 animate-slide-up">
              <div className="space-y-6">
                <div className="space-y-2">
                   <label className="text-[10px] uppercase tracking-[0.4em] font-bold text-slate-400 ml-4">Human Label</label>
                   <input type="text" placeholder="Your Full Name" value={customer.name} onChange={e => setCustomer({...customer, name: e.target.value})} className="w-full p-6 bg-slate-50 rounded-[2rem] border border-transparent outline-none focus:border-[#b89150] transition-all text-sm font-semibold" />
                </div>
                <div className="space-y-2">
                   <label className="text-[10px] uppercase tracking-[0.4em] font-bold text-slate-400 ml-4">Neural Link (Phone)</label>
                   <input type="tel" placeholder="01XXX XXXXXX" value={customer.phone} onChange={e => setCustomer({...customer, phone: e.target.value})} className="w-full p-6 bg-slate-50 rounded-[2rem] border border-transparent outline-none focus:border-[#b89150] transition-all text-sm font-semibold" />
                </div>
                <div className="space-y-2">
                   <label className="text-[10px] uppercase tracking-[0.4em] font-bold text-slate-400 ml-4">Delivery Sanctuary (Address)</label>
                   <textarea placeholder="House, Road, Area..." value={customer.address} onChange={e => setCustomer({...customer, address: e.target.value})} className="w-full p-6 bg-slate-50 rounded-[2rem] border border-transparent outline-none focus:border-[#b89150] transition-all text-sm font-semibold h-28 resize-none" />
                </div>
              </div>

              <div className="space-y-4">
                <h4 className="text-[10px] uppercase tracking-[0.4em] font-bold text-slate-400 ml-4">Delivery Region</h4>
                <div className="flex gap-4">
                  {['Inside Dhaka', 'Outside Dhaka'].map(a => (
                    <button key={a} onClick={() => setArea(a as any)} className={`flex-1 py-4 rounded-full text-[10px] font-bold uppercase tracking-widest border transition-all ${area === a ? 'bg-[#1a1a1a] text-[#b89150] border-[#1a1a1a]' : 'border-slate-100 text-slate-400 hover:border-[#b89150]/30'}`}>{a}</button>
                  ))}
                </div>
              </div>

              <button 
                onClick={() => setStep('payment')} 
                disabled={!customer.name || !customer.phone || !customer.address}
                className="w-full bg-[#1a1a1a] text-[#b89150] py-7 rounded-full font-bold uppercase tracking-[0.6em] text-[11px] shadow-2xl disabled:opacity-50 hover:bg-black transition-all transform active:scale-95"
              >
                Proceed to Payment
              </button>
            </div>
          ) : step === 'payment' ? (
            <div className="space-y-10 animate-slide-up">
              <div className="grid grid-cols-1 gap-4">
                {paymentMethods.map(m => (
                  <button 
                    key={m.id} 
                    onClick={() => setMethod(m.id as any)} 
                    className={`flex items-center gap-6 p-6 rounded-[2.5rem] border transition-all ${method === m.id ? 'border-[#b89150] bg-[#1a1a1a] shadow-xl translate-x-2' : 'border-slate-100 bg-white hover:border-[#b89150]/30'}`}
                  >
                    <div className={`w-14 h-14 rounded-2xl flex items-center justify-center text-2xl ${method === m.id ? 'bg-white' : 'bg-slate-50'}`}>
                      {m.id === 'Card' || m.id === 'COD' ? m.icon : <img src={m.icon} className="w-10 h-10 object-contain" alt=""/>}
                    </div>
                    <div className="text-left flex-grow">
                      <h4 className={`text-sm font-bold uppercase tracking-widest ${method === m.id ? 'text-[#b89150]' : 'text-[#1a1a1a]'}`}>{m.name}</h4>
                      <p className={`text-[10px] italic ${method === m.id ? 'text-slate-400' : 'text-slate-300'}`}>{m.desc}</p>
                    </div>
                    {method === m.id && <div className="w-3 h-3 bg-[#b89150] rounded-full shadow-[0_0_10px_#b89150]"></div>}
                  </button>
                ))}
              </div>

              <div className="bg-slate-50 p-10 rounded-[3rem] border border-slate-100">
                <div className="flex justify-between items-center mb-6">
                   <span className="text-[10px] uppercase tracking-[0.4em] font-black text-slate-400">Final Order Value</span>
                   <span className="text-4xl font-serif font-bold text-[#1a1a1a]">৳{finalTotal}</span>
                </div>
                <div className="flex gap-4">
                  <button onClick={() => setStep('details')} className="flex-1 py-4 text-[9px] font-bold text-slate-400 uppercase tracking-widest hover:text-[#1a1a1a] transition-all">Back to Details</button>
                  <button 
                    onClick={handleFinalSubmit}
                    className="flex-[2] bg-[#1a1a1a] text-[#b89150] py-5 rounded-full font-bold uppercase tracking-[0.4em] text-[10px] shadow-2xl hover:bg-black transition-all"
                  >
                    Confirm & Complete
                  </button>
                </div>
              </div>
            </div>
          ) : (
            <div className="py-20 flex flex-col items-center justify-center space-y-8 animate-pulse">
               <div className="w-24 h-24 border-4 border-[#b89150] border-t-transparent rounded-full animate-spin"></div>
               <div className="text-center space-y-3">
                 <h3 className="text-2xl font-serif font-bold text-[#1a1a1a]">Crystallizing Ritual...</h3>
                 <p className="text-[10px] uppercase tracking-[0.6em] text-[#b89150] font-black">Establishing Neural Exchange</p>
               </div>
               <p className="text-slate-400 text-xs italic">Please wait while we secure your aura essence.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CheckoutFlow;
