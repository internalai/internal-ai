"use client";

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Cpu, Lock, ArrowRight } from 'lucide-react';
import { toast } from 'sonner';
import { signIn } from '@/lib/api';

const Login = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    try {
      await signIn(email, password);
      toast.success("Амжилттай нэвтэрлээ!");
      navigate('/feed');
    } catch (error: any) {
      toast.error(error.message || "Нэвтрэхэд алдаа гарлаа");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 flex items-center justify-center p-4 relative overflow-hidden">
      <div className="w-full max-w-md relative z-10">
        <div className="bg-slate-900/50 backdrop-blur-xl border border-slate-800 rounded-3xl p-8 shadow-2xl">
          <div className="flex flex-col items-center mb-8">
            <div className="bg-blue-600 p-3 rounded-2xl shadow-lg shadow-blue-500/20 mb-4">
              <Cpu className="text-white" size={32} />
            </div>
            <h1 className="text-2xl font-black text-white tracking-tight">INTERNAL AI</h1>
          </div>

          <form onSubmit={handleLogin} className="space-y-6">
            <div className="space-y-2">
              <Label className="text-slate-400">Email</Label>
              <Input 
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="bg-slate-800 border-slate-700 text-white"
              />
            </div>
            <div className="space-y-2">
              <Label className="text-slate-400">Password</Label>
              <Input 
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="bg-slate-800 border-slate-700 text-white"
              />
            </div>
            <Button disabled={isLoading} className="w-full bg-blue-600 h-12 rounded-xl">
              {isLoading ? "Уншиж байна..." : "Нэвтрэх"}
            </Button>
          </form>
          
          <p className="mt-6 text-center text-slate-500 text-sm">
            Бүртгэлгүй юу? <button onClick={() => navigate('/register')} className="text-blue-400 font-bold hover:underline">Бүртгүүлэх</button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;