
import React, { useState } from 'react';
import { FAQS } from '../constants';

const FAQ: React.FC = () => {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <div className="pt-40 pb-32 container mx-auto px-6 max-w-3xl">
      <h1 className="text-5xl font-serif font-bold text-center mb-20">Common Inquiries</h1>
      <div className="space-y-4">
        {FAQS.map((f, i) => (
          <div key={i} className="bg-white rounded-[2rem] shadow-sm overflow-hidden border border-slate-50">
            <button 
              onClick={() => setOpen(open === i ? null : i)}
              className="w-full p-8 text-left flex justify-between items-center group"
            >
              <span className="text-lg font-bold group-hover:text-[#b89150] transition-colors">{f.question}</span>
              <span className={`text-2xl transition-transform ${open === i ? 'rotate-45' : ''}`}>+</span>
            </button>
            {open === i && (
              <div className="px-8 pb-8 text-slate-500 text-sm italic border-t border-slate-50 pt-4">
                {f.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
