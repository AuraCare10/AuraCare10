import React, { useState } from 'react';

interface AuthFormProps {
  onAuth: (name: string, email: string) => void;
}

const AuthForm: React.FC<AuthFormProps> = ({ onAuth }) => {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onAuth(name || 'Sarah Khan', email);
  };

  const socialLogins = [
    { name: 'Google', color: '#EA4335', icon: 'https://cdn-icons-png.flaticon.com/512/300/300221.png' },
    { name: 'Apple', color: '#000000', icon: 'https://cdn-icons-png.flaticon.com/512/0/747.png' },
    { name: 'Facebook', color: '#1877F2', icon: 'https://cdn-icons-png.flaticon.com/512/5968/5968764.png' },
    { name: 'GitHub', color: '#24292e', icon: 'https://cdn-icons-png.flaticon.com/512/25/25231.png' }
  ];

  return (
    <div className="w-full max-w-[1250px] min-h-[750px] md:h-[880px] bg-white rounded-[5rem] shadow-[0_120px_250px_rgba(0,0,0,0.5)] overflow-hidden flex flex-col md:flex-row z-10 border-2 neon-border-animate animate-slide-up relative">
      
      {/* Left Side: Neon Muse Sanctuary */}
      <div className="w-full md:w-[50%] relative overflow-hidden bg-[#020202] group">
        
        {/* Cyber Scanner Overlay */}
        <div className="cyber-scan"></div>

        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1614850523296-d8c1af93d400?auto=format&fit=crop&q=80&w=1200" 
            alt="Neon Vibe" 
            className="w-full h-full object-cover opacity-30 mix-blend-screen scale-110 group-hover:scale-105 transition-transform duration-[12000ms]"
          />
          <div className="absolute inset-0 bg-gradient-to-tr from-[#bc13fe]/40 via-transparent to-[#00f2ff]/30 animate-drift"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-[#020202] via-[#020202]/50 to-transparent"></div>
        </div>

        {/* The Neon Muse Animation */}
        <div className="absolute inset-0 flex items-center justify-center z-10 pointer-events-none">
          {/* Neon Aura Rings */}
          <div className="absolute w-[400px] h-[400px] rounded-full bg-[#bc13fe]/20 animate-aura border border-[#bc13fe]/30"></div>
          <div className="absolute w-[500px] h-[500px] rounded-full bg-[#00f2ff]/10 animate-aura border border-[#00f2ff]/20" style={{ animationDelay: '-2s' }}></div>
          
          {/* Stylized Girl with Neon Accents */}
          <div className="relative w-full h-full flex items-center justify-center overflow-hidden">
            <div className="relative animate-float">
                {/* stylized female silhouette integration */}
                <div className="relative w-[320px] h-[550px] flex items-center justify-center">
                    {/* Character Visual - High Quality Stylized Illustration */}
                    <img 
                        src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExMmdrZXRqbmxncWp6Zmt6bmxreHRhZHR0czNnYjY5bWFqM2szYyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/L8K8v4565Yx9u/giphy.gif"
                        className="w-full h-full object-contain opacity-80 mix-blend-lighten filter contrast-125 saturate-150 drop-shadow-[0_0_40px_rgba(188,19,254,0.6)]"
                        alt="Neon Muse"
                    />
                    
                    {/* Floating Neon Fragments */}
                    <div className="absolute -top-10 -right-10 w-24 h-24 border-2 border-[#bc13fe] rounded-full opacity-40 animate-pulse"></div>
                    <div className="absolute top-1/2 -left-20 w-16 h-16 border border-[#00f2ff] rotate-45 opacity-30 animate-float"></div>
                    <div className="absolute bottom-10 right-20 w-32 h-1 bg-gradient-to-r from-[#bc13fe] to-transparent opacity-50 shadow-[0_0_15px_#bc13fe]"></div>
                </div>
            </div>
          </div>
        </div>

        {/* Content Overlay */}
        <div className="absolute inset-0 z-20 p-16 flex flex-col justify-between">
          <div className="flex items-center gap-5">
            <div className="w-16 h-16 bg-white/5 backdrop-blur-3xl rounded-3xl flex items-center justify-center border border-white/20 shadow-[0_0_40px_rgba(188,19,254,0.5)]">
              <span className="text-[#bc13fe] text-4xl font-serif font-bold neon-text-purple">A</span>
            </div>
            <div className="flex flex-col">
              <span className="text-white text-base font-bold uppercase tracking-[0.8em]">AuraCare</span>
              <span className="text-[#b89150] text-[10px] uppercase tracking-[0.5em] font-extrabold">Neural Sanctuary</span>
            </div>
          </div>

          <div className="max-w-md space-y-8 relative">
            <h2 className="text-6xl lg:text-7xl font-serif font-bold text-white tracking-tighter leading-tight drop-shadow-[0_0_30px_rgba(0,0,0,0.8)]">
              Step Into <br />
              <span className="text-[#00f2ff] italic neon-text-blue animate-chromatic">Reality 2.0</span>
            </h2>
            <p className="text-slate-300/80 text-sm font-light italic leading-relaxed backdrop-blur-xl bg-black/40 p-8 rounded-[3rem] border border-white/10 shadow-2xl">
              Establish your identity in the neural registry. Experience beauty curated by synthetic intelligence and ancient rituals.
            </p>
          </div>
          
          <div className="flex items-center gap-5">
             <div className="w-4 h-4 rounded-full bg-[#00f2ff] shadow-[0_0_30px_#00f2ff] animate-pulse"></div>
             <div className="h-px w-20 bg-gradient-to-r from-[#00f2ff] to-transparent"></div>
             <span className="text-white/70 text-[10px] uppercase tracking-[0.8em] font-bold">Aura-Core Locked</span>
          </div>
        </div>
      </div>

      {/* Right Side: Identity Portal */}
      <div className="w-full md:w-[50%] bg-white p-10 lg:p-24 flex flex-col justify-center relative overflow-hidden overflow-y-auto">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#bc13fe]/10 blur-[150px] rounded-full"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#00f2ff]/10 blur-[150px] rounded-full"></div>

        <div className="mb-14 text-center relative z-10">
          <h1 className="text-4xl lg:text-6xl font-serif font-bold text-[#1a1a1a] mb-4">
            {isLogin ? 'Synchronize' : 'Assemble'}
          </h1>
          <div className="h-1.5 w-32 bg-gradient-to-r from-[#bc13fe] via-[#00f2ff] to-[#bc13fe] rounded-full mx-auto shadow-[0_0_20px_rgba(0,242,255,0.6)]"></div>
          <p className="text-slate-400 text-[11px] font-bold uppercase tracking-[0.5em] mt-6">
            Digital Identity Gateway
          </p>
        </div>

        <form className="space-y-6 relative z-10" onSubmit={handleSubmit}>
          {!isLogin && (
            <div className="space-y-3 animate-slide-up stagger-1">
              <label className="text-[10px] uppercase tracking-[0.4em] font-bold text-slate-400 ml-6">Registry Label</label>
              <input 
                type="text" placeholder="Full Human Name" required 
                value={name} onChange={(e) => setName(e.target.value)}
                className="w-full p-6 bg-slate-50 border border-slate-100 rounded-[2.5rem] outline-none focus:border-[#bc13fe] focus:shadow-[0_0_30px_rgba(188,19,254,0.2)] transition-all text-sm font-semibold tracking-wide"
              />
            </div>
          )}

          <div className="space-y-3 animate-slide-up stagger-2">
            <label className="text-[10px] uppercase tracking-[0.4em] font-bold text-slate-400 ml-6">Neural Linkage</label>
            <input 
              type="email" placeholder="email@sanctuary.id" required 
              value={email} onChange={(e) => setEmail(e.target.value)}
              className="w-full p-6 bg-slate-50 border border-slate-100 rounded-[2.5rem] outline-none focus:border-[#00f2ff] focus:shadow-[0_0_30px_rgba(0,242,255,0.2)] transition-all text-sm font-semibold tracking-wide"
            />
          </div>

          <div className="space-y-3 animate-slide-up stagger-3">
            <label className="text-[10px] uppercase tracking-[0.4em] font-bold text-slate-400 ml-6">Encryption Key</label>
            <input 
              type="password" placeholder="••••••••" required 
              value={password} onChange={(e) => setPassword(e.target.value)}
              className="w-full p-6 bg-slate-50 border border-slate-100 rounded-[2.5rem] outline-none focus:border-[#bc13fe] focus:shadow-[0_0_30px_rgba(188,19,254,0.2)] transition-all text-sm font-semibold tracking-wide"
            />
          </div>

          <div className="pt-8">
            <button 
              type="submit" 
              className="w-full bg-[#1a1a1a] text-white py-7 rounded-full font-bold uppercase tracking-[0.8em] text-[12px] shadow-[0_30px_60px_rgba(188,19,254,0.4)] hover:bg-[#bc13fe] hover:shadow-[0_30px_80px_rgba(188,19,254,0.6)] transition-all duration-700 relative group overflow-hidden active:scale-95"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-[800ms] ease-out"></div>
              <span className="relative z-10">{isLogin ? 'Initiate Link' : 'Forge Entity'}</span>
            </button>
          </div>

          {/* Social Suite */}
          <div className="pt-12 space-y-8">
            <div className="flex items-center gap-6">
              <div className="flex-grow h-px bg-slate-100"></div>
              <span className="text-[9px] uppercase tracking-[0.6em] font-bold text-slate-300">Third-Party Protocols</span>
              <div className="flex-grow h-px bg-slate-100"></div>
            </div>

            <div className="grid grid-cols-4 gap-6">
              {socialLogins.map((social) => (
                <button 
                  key={social.name}
                  type="button"
                  className="group relative flex items-center justify-center p-6 bg-white border border-slate-100 rounded-[2rem] shadow-sm hover:shadow-2xl transition-all duration-500 hover:-translate-y-3"
                >
                  <div className="absolute inset-0 rounded-[2rem] opacity-0 group-hover:opacity-15 transition-opacity" style={{ backgroundColor: social.color }}></div>
                  <img src={social.icon} alt={social.name} className="w-6 h-6 object-contain filter group-hover:brightness-125 transition-transform group-hover:scale-110" />
                  
                  {/* Neon Glow on Hover */}
                  <div className="absolute -inset-0.5 rounded-[2rem] opacity-0 group-hover:opacity-40 blur-md transition-all duration-500" style={{ backgroundColor: social.color }}></div>
                </button>
              ))}
            </div>
          </div>

          <div className="text-center pt-10">
            <button 
              type="button" 
              onClick={() => setIsLogin(!isLogin)}
              className="text-[#bc13fe] text-[10px] font-extrabold uppercase tracking-[0.5em] border-b-2 border-transparent hover:border-[#00f2ff] hover:text-[#00f2ff] transition-all py-1"
            >
              {isLogin ? 'Switch to Neural Forging' : 'Return to Linkage'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AuthForm;