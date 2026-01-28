
import React from 'react';

const About: React.FC = () => {
  return (
    <div className="pt-40 pb-32">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto space-y-16">
          <div className="text-center space-y-6">
            <h1 className="text-7xl font-serif font-bold">The Aura Philosophy</h1>
            <p className="text-xl text-slate-400 italic">Established in 2024, AuraCare House is more than just a vendor; it is a sanctuary for those who seek the pinnacle of self-care.</p>
          </div>
          
          <img src="https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?auto=format&fit=crop&q=80&w=1200" className="w-full h-[500px] object-cover rounded-[4rem] shadow-2xl" alt="" />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
            <div className="space-y-6">
              <h3 className="text-3xl font-serif font-bold">Our Promise</h3>
              <p className="text-slate-500 leading-relaxed">We promise only the most authentic, scientifically proven, and ethically sourced beauty essences. Every product in our archive is tested for purity.</p>
            </div>
            <div className="space-y-6">
              <h3 className="text-3xl font-serif font-bold">The Sanctuary</h3>
              <p className="text-slate-500 leading-relaxed">Located in the heart of Dhaka, our house serves thousands of rituals daily, ensuring that every customer feels the touch of luxury.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
