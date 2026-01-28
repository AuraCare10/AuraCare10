import React, { useState } from 'react';

interface CheckoutFlowProps {
  total: number;
  onComplete: () => void;
  onCancel: () => void;
}

const CheckoutFlow: React.FC<CheckoutFlowProps> = ({ total, onComplete, onCancel }) => {
  const [method, setMethod] = useState<'COD' | 'bKash' | 'Nagad' | 'Rocket' | 'Card'>('COD');
  const [step, setStep] = useState<'details' | 'payment'>('details');

  const paymentMethods = [
    { id: 'bKash', color: '#D12053', neon: '#ff0055', icon: 'https://raw.githubusercontent.com/Anisul-Islam/ecommerce-icons/main/bkash.png' },
    { id: 'Nagad', color: '#F7941D', neon: '#ff9100', icon: 'https://raw.githubusercontent.com/Anisul-Islam/ecommerce-icons/main/nagad.png' },
    { id: 'Rocket', color: '#8C3494', neon: '#bc13fe', icon: 'https://raw.githubusercontent.com/Anisul-Islam/ecommerce-icons/main/rocket.png' },
    { id: 'Card', color: '#1a1a1a', neon: '#00f2ff', icon: '💳' },
    { id: 'COD', color: '#b89150', neon: '#d4af37', icon: '🚚' }
  ];

  const currentMethodData = paymentMethods.find(m => m.id === method);

  return (
    <div className="fixed inset-0 z-[400] flex items-center justify-center px-4">
      <div className="absolute inset-0 bg-[#050505]/95 backdrop-blur-xl" onClick={onCancel} />
      
      {/* Background Ambience */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#b89150]/5 rounded-full blur-[150px] pointer-events-none animate-aura"></div>

      <div className="relative bg-white w-full max-w-2xl rounded-[4rem] shadow-[0_100px_200px_rgba(0,0,0,0.4)] overflow-hidden border border-white/10 animate-slide-up">
        
        {/* Header with Scanline */}
        <div className="relative p-10 lg:p-16 pb-0">
          <div className="flex justify-between items-center mb-10">
            <div className="space-y-1">
              <span className="text-[#b89150] text-[9px] uppercase tracking-[0.6em] font-extrabold block">Sanctuary Checkout</span>
              <h2 className="text-4xl font-serif font-bold text-[#1a1a1a]">{step === 'details' ? 'Establish Origin' : 'Final Ritual'}</h2>
            </div>
            <button onClick={onCancel} className="w-12 h-12 rounded-full bg-slate-50 flex items-center justify-center text-slate-400 hover:text-red-500 hover:bg-red-50 transition-all group">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6 group-hover:rotate-90 transition-transform">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>

        <div className="p-10 lg:p-16 pt-0">
          {step === 'details' ? (
            <div className="space-y-10 animate-slide-up">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-3">
                  <label className="text-[10px] uppercase tracking-[0.4em] font-bold text-slate-400 ml-6">Sanctuary Address</label>
                  <input type="text" placeholder="House #, Street name" className="w-full p-6 bg-slate-50 rounded-[2.5rem] border border-transparent outline-none focus:border-[#b89150] focus:shadow-[0_0_40px_rgba(184,145,80,0.1)] transition-all text-xs font-semibold" />
                </div>
                <div className="space-y-3">
                  <label className="text-[10px] uppercase tracking-[0.4em] font-bold text-slate-400 ml-6">Contact Cipher</label>
                  <input type="tel" placeholder="017XXXXXXXX" className="w-full p-6 bg-slate-50 rounded-[2.5rem] border border-transparent outline-none focus:border-[#b89150] focus:shadow-[0_0_40px_rgba(184,145,80,0.1)] transition-all text-xs font-semibold" />
                </div>
              </div>

              <div className="space-y-6">
                <label className="text-[10px] uppercase tracking-[0.4em] font-bold text-slate-400 ml-6">Payment Essence Selection</label>
                <div className="grid grid-cols-3 sm:grid-cols-5 gap-4">
                  {paymentMethods.map(m => (
                    <button 
                      key={m.id}
                      onClick={() => setMethod(m.id as any)}
                      className={`relative group flex flex-col items-center justify-center p-5 rounded-[2rem] border transition-all duration-500 overflow-hidden ${
                        method === m.id 
                          ? 'border-transparent shadow-[0_20px_50px_rgba(0,0,0,0.1)]' 
                          : 'border-slate-100 bg-white hover:border-[#b89150]/30'
                      }`}
                    >
                      {/* Selection Glow Effect */}
                      {method === m.id && (
                        <>
                          <div className="absolute inset-0 opacity-10 animate-pulse" style={{ backgroundColor: m.neon }}></div>
                          <div className="absolute inset-0 border-2 rounded-[2rem] animate-border-glow opacity-60" style={{ borderColor: m.neon }}></div>
                          <div className="absolute -inset-2 blur-xl opacity-20 animate-aura" style={{ backgroundColor: m.neon }}></div>
                        </>
                      )}

                      <div className={`relative z-10 transition-transform duration-500 ${method === m.id ? 'scale-110' : 'group-hover:scale-105'}`}>
                        {m.id === 'Card' || m.id === 'COD' ? (
                          <span className={`text-2xl mb-2 block ${method === m.id ? 'animate-float' : ''}`}>{m.icon}</span>
                        ) : (
                          <img src={m.icon} className={`w-10 h-10 object-contain mb-2 ${method === m.id ? 'drop-shadow-[0_0_8px_rgba(0,0,0,0.2)]' : ''}`} alt={m.id} />
                        )}
                      </div>
                      <span className={`relative z-10 text-[8px] uppercase tracking-[0.3em] font-black transition-colors ${
                        method === m.id ? 'text-[#1a1a1a]' : 'text-slate-300 group-hover:text-slate-500'
                      }`}>
                        {m.id}
                      </span>
                    </button>
                  ))}
                </div>
              </div>

              <div className="bg-slate-50 p-8 rounded-[3rem] space-y-4 relative overflow-hidden group">
                 <div className="absolute top-0 right-0 w-32 h-32 bg-[#b89150]/5 rounded-full blur-3xl -z-0 group-hover:scale-150 transition-transform duration-1000"></div>
                 <div className="flex justify-between text-[11px] text-slate-400 uppercase tracking-[0.4em] font-bold relative z-10">
                   <span>Subtotal</span>
                   <span className="text-[#1a1a1a]">৳{total}</span>
                 </div>
                 <div className="flex justify-between text-[11px] text-slate-400 uppercase tracking-[0.4em] font-bold relative z-10">
                   <span>Delivery</span>
                   <span className="text-[#1a1a1a]">৳60</span>
                 </div>
                 <div className="h-px bg-slate-200 relative z-10"></div>
                 <div className="flex justify-between items-end relative z-10">
                   <span className="text-[12px] font-extrabold uppercase tracking-[0.5em] text-[#b89150]">Total Ritual</span>
                   <span className="text-4xl font-serif font-bold text-[#1a1a1a]">৳{total + 60}</span>
                 </div>
              </div>

              <button 
                onClick={() => setStep('payment')}
                className="w-full bg-[#1a1a1a] text-[#b89150] py-7 rounded-full font-bold uppercase tracking-[0.6em] text-[11px] shadow-[0_30px_80px_rgba(184,145,80,0.3)] hover:bg-[#b89150] hover:text-white transition-all duration-700 transform active:scale-95 group relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                Proceed to Verification
              </button>
            </div>
          ) : (
            <div className="space-y-10 animate-slide-up">
              <div className="text-center relative">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 rounded-full blur-[80px] opacity-20 pointer-events-none" style={{ backgroundColor: currentMethodData?.neon }}></div>
                <span className="text-[10px] uppercase tracking-[0.6em] font-extrabold text-[#b89150] relative z-10">{method} Secure Linkage</span>
                <p className="text-slate-400 text-xs italic mt-3 font-light relative z-10">Authorized Protocol Encryption Active</p>
              </div>

              <div className="relative">
                {method === 'COD' ? (
                  <div className="text-center py-16 bg-slate-50 rounded-[4rem] border border-dashed border-[#b89150]/30 relative overflow-hidden group">
                    <div className="absolute inset-0 bg-gradient-to-tr from-[#b89150]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    <span className="text-6xl block mb-6 animate-float">🤝</span>
                    <p className="text-slate-600 text-sm font-semibold tracking-wide">Seal the exchange with <span className="text-[#b89150] font-black">৳{total + 60}</span> upon ritual completion.</p>
                  </div>
                ) : method === 'Card' ? (
                  <div className="space-y-6">
                    <div className="relative group">
                      <div className="absolute -inset-0.5 bg-gradient-to-r from-[#00f2ff]/30 to-transparent rounded-[2rem] blur opacity-30 group-focus-within:opacity-100 transition-opacity"></div>
                      <input type="text" placeholder="Card Holder Name" className="relative w-full p-6 bg-slate-50 rounded-[2rem] outline-none border border-transparent focus:border-[#00f2ff] transition-all text-sm font-semibold uppercase tracking-widest placeholder:opacity-50" />
                    </div>
                    <div className="relative group">
                      <input type="text" placeholder="XXXX XXXX XXXX XXXX" className="w-full p-6 bg-slate-50 rounded-[2rem] outline-none border border-transparent focus:border-[#00f2ff] transition-all text-sm font-semibold tracking-widest placeholder:opacity-50" />
                    </div>
                    <div className="grid grid-cols-2 gap-6">
                      <input type="text" placeholder="MM/YY" className="w-full p-6 bg-slate-50 rounded-[2rem] outline-none border border-transparent focus:border-[#00f2ff] transition-all text-sm font-semibold tracking-widest placeholder:opacity-50" />
                      <input type="text" placeholder="CVV" className="w-full p-6 bg-slate-50 rounded-[2rem] outline-none border border-transparent focus:border-[#00f2ff] transition-all text-sm font-semibold tracking-widest placeholder:opacity-50" />
                    </div>
                  </div>
                ) : (
                  <div className="space-y-8">
                    <div className="relative group p-8 bg-[#1a1a1a] rounded-[3rem] text-center shadow-2xl overflow-hidden">
                      <div className="absolute inset-0 opacity-10 animate-pulse" style={{ backgroundColor: currentMethodData?.neon }}></div>
                      <span className="text-slate-500 text-[10px] uppercase tracking-[0.5em] block mb-3 relative z-10">Master Merchant Wallet</span>
                      <span className="text-[#b89150] font-black text-2xl tracking-[0.2em] relative z-10 neon-text-gold">01700-000000</span>
                      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#b89150] to-transparent opacity-40"></div>
                    </div>
                    
                    <div className="space-y-6">
                       <div className="space-y-3">
                         <label className="text-[10px] uppercase tracking-[0.4em] font-bold text-slate-400 ml-8">Origin Wallet</label>
                         <input type="text" placeholder="01XXXXXXXXX" className="w-full p-6 bg-slate-50 rounded-[2rem] outline-none border border-transparent focus:border-[#b89150] transition-all text-sm font-bold tracking-widest" />
                       </div>
                       <div className="space-y-3">
                         <label className="text-[10px] uppercase tracking-[0.4em] font-bold text-slate-400 ml-8">Verification Cipher (TrxID)</label>
                         <input type="text" placeholder="TRX-XXXXXX" className="w-full p-6 bg-slate-50 rounded-[2rem] outline-none border border-transparent focus:border-[#b89150] transition-all text-sm font-bold tracking-widest" />
                       </div>
                    </div>
                  </div>
                )}
              </div>

              <div className="flex gap-6">
                <button 
                  onClick={() => setStep('details')}
                  className="w-1/3 bg-slate-50 text-slate-400 py-7 rounded-full font-bold uppercase tracking-[0.4em] text-[10px] hover:bg-slate-100 hover:text-[#1a1a1a] transition-all active:scale-95"
                >
                  Regress
                </button>
                <button 
                  onClick={onComplete}
                  className="w-2/3 py-7 rounded-full font-bold uppercase tracking-[0.6em] text-[11px] shadow-2xl transition-all duration-700 relative group overflow-hidden active:scale-95"
                  style={{ 
                    backgroundColor: '#1a1a1a', 
                    color: currentMethodData?.neon,
                    boxShadow: `0 30px 60px ${currentMethodData?.neon}20`
                  }}
                >
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700" style={{ background: `linear-gradient(to right, transparent, ${currentMethodData?.neon}20, transparent)` }}></div>
                  <span className="relative z-10">Seal Sanctuary Ritual</span>
                </button>
              </div>

              <div className="flex items-center justify-center gap-4 text-[9px] font-black text-slate-300 uppercase tracking-[0.5em] opacity-60">
                 <div className="w-2 h-2 rounded-full animate-pulse" style={{ backgroundColor: currentMethodData?.neon }}></div>
                 Neural Signature Verified
                 <div className="w-2 h-2 rounded-full animate-pulse" style={{ backgroundColor: currentMethodData?.neon }}></div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CheckoutFlow;