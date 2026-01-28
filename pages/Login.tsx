
import React from 'react';
import { useNavigate } from 'react-router-dom';
import AuthForm from '../components/AuthForm';
import { User } from '../types';

interface LoginPageProps {
  setUser: (user: User | null) => void;
}

const LoginPage: React.FC<LoginPageProps> = ({ setUser }) => {
  const navigate = useNavigate();

  const handleAuth = (name: string, email: string) => {
    setUser({
      id: Math.random().toString(36).substr(2, 9),
      name,
      email,
      phone: '01700000000',
      isAdmin: email.toLowerCase().includes('admin')
    });
    navigate('/dashboard');
  };

  return (
    <div className="min-h-screen pt-20 flex items-center justify-center bg-[#050505] relative overflow-hidden">
      <div className="absolute top-[-20%] left-[-10%] w-[1000px] h-[1000px] bg-[#bc13fe]/10 rounded-full blur-[150px] animate-pulse" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[800px] h-[800px] bg-[#b89150]/5 rounded-full blur-[150px] animate-pulse" style={{animationDelay: '3s'}} />
      <AuthForm onAuth={handleAuth} />
    </div>
  );
};

export default LoginPage;
