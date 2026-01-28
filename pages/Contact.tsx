
import React from 'react';

const Contact: React.FC = () => {
  return (
    <div className="pt-40 pb-32">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-20">
          <div className="w-full lg:w-1/2 space-y-12">
            <h1 className="text-7xl font-serif font-bold leading-tight">Connect with the <span className="text-[#b89150]">Sanctuary</span></h1>
            <div className="space-y-8">
              <div className="flex gap-6">
                <div className="w-16 h-16 bg-white shadow-xl rounded-full flex items-center justify-center text-2xl">📍</div>
                <div>
                  <h4 className="font-bold text-xl">Address</h4>
                  <p className="text-slate-400">Road 12, Block D, Gulshan-2, Dhaka</p>
                </div>
              </div>
              <div className="flex gap-6">
                <div className="w-16 h-16 bg-white shadow-xl rounded-full flex items-center justify-center text-2xl">📞</div>
                <div>
                  <h4 className="font-bold text-xl">Call Ritual</h4>
                  <p className="text-slate-400 font-mono">+880 1700 000000</p>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full lg:w-1/2 bg-white p-12 rounded-[4rem] shadow-2xl space-y-8">
            <div className="grid grid-cols-2 gap-6">
              <input type="text" placeholder="Full Name" className="p-6 bg-slate-50 rounded-3xl outline-none border border-transparent focus:border-[#b89150]" />
              <input type="email" placeholder="Email Address" className="p-6 bg-slate-50 rounded-3xl outline-none border border-transparent focus:border-[#b89150]" />
            </div>
            <textarea placeholder="Message to House Owner" className="w-full h-40 p-6 bg-slate-50 rounded-3xl outline-none border border-transparent focus:border-[#b89150]"></textarea>
            <button className="w-full bg-[#1a1a1a] text-[#b89150] py-6 rounded-full font-bold uppercase tracking-widest text-xs">Transmit Message</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
