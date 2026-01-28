
import React, { useState } from 'react';
import { User, Order, Review } from '../types';
import AuthForm from '../components/AuthForm';
import OrderHistory from '../components/OrderHistory';
import WishlistSection from '../components/WishlistSection';

interface DashboardProps {
  user: User | null;
  setUser: (user: User | null) => void;
  orders: Order[];
  reviews: Review[];
  addReview: (review: Review) => void;
}

const Dashboard: React.FC<DashboardProps> = ({ user, setUser, orders, reviews, addReview }) => {
  const [reviewingProduct, setReviewingProduct] = useState<{ id: string, name: string } | null>(null);
  const [reviewForm, setReviewForm] = useState({ rating: 5, comment: '' });

  const handleAuth = (name: string, email: string) => {
    const isAdmin = email.toLowerCase().includes('admin');
    setUser({
      id: Math.random().toString(36).substr(2, 9),
      name,
      email,
      phone: '01700000000',
      address: 'Gulshan-2, Dhaka',
      isAdmin: isAdmin
    });
  };

  const submitReview = () => {
    if (!user || !reviewingProduct) return;
    
    const newReview: Review = {
      id: Math.random().toString(36).substr(2, 9),
      productId: reviewingProduct.id,
      userId: user.id,
      userName: user.name,
      rating: reviewForm.rating,
      comment: reviewForm.comment,
      date: new Date().toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' })
    };
    
    addReview(newReview);
    setReviewingProduct(null);
    setReviewForm({ rating: 5, comment: '' });
    alert("Your aura feedback has been crystallized in our registry.");
  };

  if (!user) {
    return (
      <div className="min-h-screen pt-20 flex items-center justify-center bg-[#050505] relative overflow-hidden">
        <div className="absolute top-[-20%] left-[-10%] w-[1000px] h-[1000px] bg-[#bc13fe]/10 rounded-full blur-[150px] animate-pulse" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[800px] h-[800px] bg-[#b89150]/5 rounded-full blur-[150px] animate-pulse" style={{animationDelay: '3s'}} />
        
        <AuthForm onAuth={handleAuth} />
      </div>
    );
  }

  return (
    <div className="pt-48 pb-32 container mx-auto px-6 bg-[#fcfaf8] min-h-screen relative">
      <div className="flex flex-col lg:flex-row gap-20">
        <aside className="w-full lg:w-80 space-y-10">
          <div className="bg-white p-12 rounded-[4rem] shadow-2xl text-center border border-slate-50 animate-slide-up relative">
            <div className="absolute top-12 left-1/2 -translate-x-1/2 w-32 h-32 bg-[#bc13fe]/10 rounded-full animate-aura blur-2xl"></div>
            
            <div className="w-28 h-28 bg-[#1a1a1a] rounded-full mx-auto flex items-center justify-center text-5xl font-serif text-[#b89150] mb-8 shadow-xl border-2 border-[#b89150]/20 relative group overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-tr from-[#b89150]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <span className="relative z-10">{user.name.charAt(0)}</span>
            </div>
            <h3 className="text-3xl font-serif font-bold text-[#1a1a1a]">{user.name}</h3>
            <p className="text-slate-400 text-sm italic mt-2">{user.email}</p>
            
            {user.isAdmin && (
               <div className="mt-4 px-4 py-2 bg-[#b89150]/10 text-[#b89150] rounded-full text-[9px] uppercase tracking-widest font-black">
                 Admin Privileges
               </div>
            )}

            <div className="pt-10 space-y-4">
              <button onClick={() => setUser(null)} className="w-full py-5 text-red-400 text-[10px] font-bold uppercase tracking-[0.4em] border border-red-50 rounded-full hover:bg-red-50 transition-all active:scale-95">Sign Out</button>
            </div>
          </div>
        </aside>

        <div className="flex-grow space-y-20">
          <OrderHistory 
            orders={orders} 
            reviews={reviews} 
            onReviewProduct={(id, name) => setReviewingProduct({ id, name })} 
          />
          <WishlistSection />
        </div>
      </div>

      {/* Review Modal */}
      {reviewingProduct && (
        <div className="fixed inset-0 z-[500] flex items-center justify-center px-4">
          <div className="absolute inset-0 bg-black/80 backdrop-blur-xl" onClick={() => setReviewingProduct(null)} />
          <div className="relative bg-white w-full max-w-lg rounded-[4rem] shadow-2xl p-12 lg:p-16 animate-slide-up space-y-10">
            <div className="text-center space-y-2">
              <span className="text-[#b89150] text-[9px] uppercase tracking-[0.6em] font-black">Feedback Ritual</span>
              <h2 className="text-3xl font-serif font-bold text-[#1a1a1a]">Crystallize Experience</h2>
              <p className="text-slate-400 text-xs italic">Reviewing: {reviewingProduct.name}</p>
            </div>

            <div className="space-y-8">
              <div className="flex justify-center gap-4">
                {[1, 2, 3, 4, 5].map(star => (
                  <button 
                    key={star} 
                    onClick={() => setReviewForm({...reviewForm, rating: star})}
                    className={`text-4xl transition-all hover:scale-125 ${reviewForm.rating >= star ? 'text-[#b89150]' : 'text-slate-100'}`}
                  >
                    ★
                  </button>
                ))}
              </div>

              <div className="space-y-3">
                <label className="text-[10px] uppercase tracking-[0.4em] font-bold text-slate-400 ml-4">The Chronicler's Note</label>
                <textarea 
                  placeholder="Describe your ritual experience with this essence..."
                  value={reviewForm.comment}
                  onChange={(e) => setReviewForm({...reviewForm, comment: e.target.value})}
                  className="w-full h-40 p-6 bg-slate-50 border border-slate-100 rounded-[3rem] outline-none focus:border-[#b89150] transition-all text-sm font-medium italic"
                />
              </div>

              <button 
                onClick={submitReview}
                disabled={!reviewForm.comment}
                className="w-full bg-[#1a1a1a] text-[#b89150] py-6 rounded-full font-bold uppercase tracking-[0.6em] text-[10px] shadow-2xl disabled:opacity-50 hover:bg-black transition-all"
              >
                Submit Testimonial
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Dashboard;
