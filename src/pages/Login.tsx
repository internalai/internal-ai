"use client";

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Cpu, Lock, ShieldCheck, ArrowRight } from 'lucide-react';
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
      toast.success("Системд амжилттай нэвтэрлээ. Тавтай морил!");
      navigate('/feed');
    } catch (error: any) {
      toast.error("Нэвтрэхэд алдаа гарлаа: " + (error.message || "Мэдээллээ шалгана уу"));
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 flex items-center justify-center p-4 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(37,99,235,0.05),transparent)] pointer-events-none" />
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl" />
      <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-indigo-600/10 rounded-full blur-3xl" />

      <div className="w-full max-w-md relative z-10">
        <div className="bg-slate-900/50 backdrop-blur-xl border border-slate-800 rounded-3xl p-8 shadow-2xl">
          <div className="flex flex-col items-center mb-8">
            <div className="bg-blue-600 p-3 rounded-2xl shadow-lg shadow-blue-500/20 mb-4">
              <Cpu className="text-white" size={32} />
            </div>
            <h1 className="text-2xl font-black text-white tracking-tight">MILITARY AI SYSTEM</h1>
            <p className="text-slate-500 text-sm font-medium uppercase tracking-wider mt-1">Нэвтрэх хэсэг</p>
          </div>

          <form onSubmit={handleLogin} className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="email" className="text-slate-400 text-xs font-bold uppercase tracking-wider ml-1">И-мэйл хаяг</Label>
              <Input 
                id="email"
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="bat.erdene@mil.mn"
                className="bg-slate-800 border-slate-700 text-white placeholder:text-slate-600 h-12 rounded-xl focus:ring-blue-500"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="pass" className="text-slate-400 text-xs font-bold uppercase tracking-wider ml-1">Нууц үг</Label>
              <div className="relative">
                <Input 
                  id="pass"
                  type="password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  className="bg-slate-800 border-slate-700 text-white placeholder:text-slate-600 h-12 rounded-xl focus:ring-blue-500"
                />
                <Lock className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-600" size={18} />
              </div>
            </div>

            <Button 
              type="submit" 
              disabled={isLoading}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white h-12 rounded-xl font-bold text-lg shadow-lg shadow-blue-600/20 transition-all active:scale-95"
            >
              {isLoading ? "Шалгаж байна..." : (
                <span className="flex items-center gap-2">
                  Системд нэвтрэх <ArrowRight size={20} />
                </span>
              )}
            </Button>
          </form>

          <div className="mt-8 pt-6 border-t border-slate-800/50 flex flex-col items-center gap-4">
            <div className="flex items-center gap-2 text-emerald-500/80 bg-emerald-500/5 px-4 py-2 rounded-full border border-emerald-500/10">
              <ShieldCheck size={16} />
              <span className="text-[10px] font-black uppercase tracking-tighter">Дэмо горим</span>
            </div>
            <p className="text-slate-500 text-xs text-center">Бүх и-мэйл, нууц үгийн хослол ашиглаж болно</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;