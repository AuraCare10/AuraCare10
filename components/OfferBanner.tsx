
import React from 'react';

const OfferBanner: React.FC = () => {
  return (
    <div className="bg-[#b89150] py-3 text-center overflow-hidden">
      <div className="flex justify-center items-center gap-10 animate-marquee whitespace-nowrap">
        {[1, 2, 3].map(i => (
          <span key={i} className="text-white text-[10px] font-black uppercase tracking-[0.6em]">
            ✨ Eid Special: Buy 2 Get 1 Free on all Combo Offers • Free Shipping Inside Dhaka ✨
          </span>
        ))}
      </div>
    </div>
  );
};

export default OfferBanner;
