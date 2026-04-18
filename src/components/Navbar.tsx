"use client";

import React from 'react';
import { Search, Home, Users, Bell, MessageSquare, ShieldCheck, User, Cpu } from 'lucide-react';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useNavigate, useLocation } from 'react-router-dom';
import { toast } from 'sonner';

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleAction = (label: string) => {
    toast.success(`${label} хэсэг рүү шилжлээ`);
  };

  return (
    <nav className="sticky top-0 z-50 bg-slate-900 border-b border-slate-800 shadow-xl px-4 h-16 flex items-center justify-between">
      <div className="flex items-center gap-3 flex-1">
        <div 
          className="bg-blue-600 p-2 rounded-lg shadow-lg shadow-blue-500/20 cursor-pointer hover:bg-blue-500 transition-colors"
          onClick={() => navigate('/')}
        >
          <Cpu className="text-white" size={24} />
        </div>
        <div className="hidden md:block cursor-pointer" onClick={() => navigate('/')}>
          <h1 className="text-white font-bold text-lg leading-none tracking-tight">MILITARY AI</h1>
          <p className="text-blue-400 text-[10px] font-medium uppercase tracking-widest mt-1">Нэгдсэн Систем</p>
        </div>
        <div className="relative hidden lg:block max-w-[300px] w-full ml-4">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500" size={18} />
          <Input 
            placeholder="Системээс хайх..." 
            className="pl-10 bg-slate-800 border-none rounded-md h-10 text-white placeholder:text-slate-500 focus-visible:ring-1 focus-visible:ring-blue-500"
            onKeyDown={(e) => e.key === 'Enter' && toast('Хайлт хийж байна...')}
          />
        </div>
      </div>

      <div className="hidden lg:flex items-center justify-center flex-1 h-full max-w-[500px] gap-1">
        <Button 
          variant="ghost" 
          onClick={() => navigate('/')}
          className={`flex-1 h-full border-b-2 rounded-none transition-all ${location.pathname === '/' ? 'border-blue-500 text-blue-400 bg-blue-500/5' : 'border-transparent text-slate-400 hover:text-white hover:bg-slate-800'}`}
        >
          <Home size={22} className="mr-2" />
          <span className="font-semibold">Нүүр</span>
        </Button>
        <Button 
          variant="ghost" 
          onClick={() => handleAction('AI Туслах')}
          className="flex-1 h-full border-b-2 border-transparent rounded-none text-slate-400 hover:text-white hover:bg-slate-800 transition-all"
        >
          <MessageSquare size={22} className="mr-2" />
          <span className="font-semibold">AI Туслах</span>
        </Button>
        <Button 
          variant="ghost" 
          onClick={() => navigate('/feed')}
          className={`flex-1 h-full border-b-2 rounded-none transition-all ${location.pathname === '/feed' ? 'border-blue-500 text-blue-400 bg-blue-500/5' : 'border-transparent text-slate-400 hover:text-white hover:bg-slate-800'}`}
        >
          <Users size={22} className="mr-2" />
          <span className="font-semibold">Сүлжээ</span>
        </Button>
      </div>

      <div className="flex items-center justify-end gap-3 flex-1">
        <div 
          className="hidden xl:flex items-center bg-slate-800 rounded-md px-3 py-1.5 border border-slate-700 cursor-pointer hover:bg-slate-700 transition-colors"
          onClick={() => handleAction('Профайл')}
        >
          <div className="w-8 h-8 rounded bg-blue-600 flex items-center justify-center mr-3 shadow-inner">
            <User size={18} className="text-white" />
          </div>
          <div className="flex flex-col text-left">
            <span className="text-white font-bold text-xs">А. Бат-Эрдэнэ</span>
            <span className="text-blue-400 text-[10px] font-bold">Ахмад</span>
          </div>
        </div>
        <div className="flex gap-1">
          <Button 
            variant="ghost" 
            size="icon" 
            onClick={() => handleAction('Зурвас')}
            className="text-slate-400 hover:text-white hover:bg-slate-800 relative"
          >
            <MessageSquare size={20} />
            <span className="absolute top-2 right-2 w-2 h-2 bg-blue-500 rounded-full"></span>
          </Button>
          <Button 
            variant="ghost" 
            size="icon" 
            onClick={() => handleAction('Мэдэгдэл')}
            className="text-slate-400 hover:text-white hover:bg-slate-800 relative"
          >
            <Bell size={20} />
            <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full animate-pulse"></span>
          </Button>
          <Button 
            variant="ghost" 
            size="icon" 
            onClick={() => handleAction('Аюулгүй байдал')}
            className="text-slate-400 hover:text-white hover:bg-slate-800"
          >
            <ShieldCheck size={20} className="text-green-500" />
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;