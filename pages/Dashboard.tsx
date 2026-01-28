import React from 'react';
import { User, Order } from '../types';
import AuthForm from '../components/AuthForm';
import OrderHistory from '../components/OrderHistory';
import WishlistSection from '../components/WishlistSection';

interface DashboardProps {
  user: User | null;
  setUser: (user: User | null) => void;
}

const Dashboard: React.FC<DashboardProps> = ({ user, setUser }) => {
  const handleAuth = (name: string, email: string) => {
    setUser({
      id: '1',
      name,
      email,
      phone: '01700000000',
      address: 'Gulshan, Dhaka'
    });
  };

  if (!user) {
    return (
      <div className="min-h-screen pt-20 flex items-center justify-center bg-[#050505] relative overflow-hidden">
        {/* Deep Neon Background Atmosphere */}
        <div className="absolute top-[-20%] left-[-10%] w-[1000px] h-[1000px] bg-[#bc13fe]/10 rounded-full blur-[150px] animate-pulse" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[800px] h-[800px] bg-[#b89150]/5 rounded-full blur-[150px] animate-pulse" style={{animationDelay: '3s'}} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#ff00ff]/5 rounded-full blur-[120px] animate-drift" />
        
        <AuthForm onAuth={handleAuth} />
      </div>
    );
  }

  return (
    <div className="pt-48 pb-32 container mx-auto px-6 bg-[#fcfaf8] min-h-screen">
      <div className="flex flex-col lg:flex-row gap-20">
        <aside className="w-full lg:w-80 space-y-10">
          <div className="bg-white p-12 rounded-[4rem] shadow-2xl text-center border border-slate-50 animate-slide-up relative">
            {/* Identity Pulse Aura */}
            <div className="absolute top-12 left-1/2 -translate-x-1/2 w-32 h-32 bg-[#bc13fe]/10 rounded-full animate-aura blur-2xl"></div>
            
            <div className="w-28 h-28 bg-[#1a1a1a] rounded-full mx-auto flex items-center justify-center text-5xl font-serif text-[#b89150] mb-8 shadow-xl border-2 border-[#b89150]/20 relative group overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-tr from-[#b89150]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <span className="relative z-10">{user.name.charAt(0)}</span>
            </div>
            <h3 className="text-3xl font-serif font-bold text-[#1a1a1a]">{user.name}</h3>
            <p className="text-slate-400 text-sm italic mt-2">{user.email}</p>
            <button onClick={() => setUser(null)} className="mt-10 w-full py-5 text-red-400 text-[10px] font-bold uppercase tracking-[0.4em] border border-red-50 rounded-full hover:bg-red-50 transition-all active:scale-95">Sign Out</button>
          </div>
        </aside>

        <div className="flex-grow space-y-20">
          <OrderHistory orders={[]} />
          <WishlistSection />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;