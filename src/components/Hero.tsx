"use client";

import React from 'react';
import { Button } from "@/components/ui/button";
import { ChevronRight, Shield, Zap, Lock } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'sonner';

const Hero = () => {
  const navigate = useNavigate();

  const scrollToFeatures = () => {
    const element = document.getElementById('features-section');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    } else {
      toast('Системтэй танилцаж эхэллээ...');
    }
  };

  return (
    <section className="relative py-20 px-4 overflow-hidden bg-slate-900 border-b border-slate-800">
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(37,99,235,0.1),transparent)] pointer-events-none" />
      
      <div className="max-w-6xl mx-auto text-center relative z-10">
        <div className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/20 px-4 py-1.5 rounded-full mb-8">
          <Lock size={14} className="text-blue-400" />
          <span className="text-blue-400 text-xs font-bold uppercase tracking-widest">Цэргийн зориулалттай AI систем</span>
        </div>
        
        <h1 className="text-4xl md:text-6xl font-black text-white mb-6 leading-tight">
          Цэргийн дотоод үйл ажиллагааг шинэ түвшинд хүргэх <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-500">Нэгдсэн AI Платформ</span>
        </h1>
        
        <p className="text-xl text-slate-400 mb-10 max-w-3xl mx-auto leading-relaxed">
          Офицер, ахлагч, байлдагч бүрт зориулсан ухаалаг систем — ажлын бүтээмж, сахилга бат, мэдээллийн урсгалыг нэг дороос удирдана.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button 
            onClick={() => navigate('/login')}
            className="bg-blue-600 hover:bg-blue-700 text-white px-10 py-6 text-lg font-bold rounded-lg shadow-xl shadow-blue-600/20 transition-all hover:scale-105"
          >
            Нэвтрэх <ChevronRight className="ml-2" />
          </Button>
          <Button 
            variant="outline" 
            onClick={scrollToFeatures}
            className="border-slate-700 text-slate-300 hover:bg-slate-800 px-10 py-6 text-lg font-bold rounded-lg transition-all"
          >
            Системтэй танилцах
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20">
          <div className="bg-slate-800/50 p-6 rounded-2xl border border-slate-700 text-left cursor-default hover:border-blue-500/50 transition-colors">
            <div className="w-12 h-12 bg-blue-600/20 rounded-lg flex items-center justify-center mb-4 border border-blue-600/30">
              <Zap className="text-blue-400" />
            </div>
            <h3 className="text-white font-bold mb-2">Шуурхай шийдэл</h3>
            <p className="text-slate-500 text-sm">Хиймэл оюун ухаан нь мэдээллийг хэдхэн секундэд боловсруулж, оновчтой шийдвэр гаргахад тусална.</p>
          </div>
          <div className="bg-slate-800/50 p-6 rounded-2xl border border-slate-700 text-left cursor-default hover:border-indigo-500/50 transition-colors">
            <div className="w-12 h-12 bg-indigo-600/20 rounded-lg flex items-center justify-center mb-4 border border-indigo-600/30">
              <Shield className="text-indigo-400" />
            </div>
            <h3 className="text-white font-bold mb-2">Өндөр нууцлал</h3>
            <p className="text-slate-500 text-sm">Мэдээллийн аюулгүй байдлын цэргийн түвшний стандартыг бүрэн хангасан аюулгүй бүтэц.</p>
          </div>
          <div className="bg-slate-800/50 p-6 rounded-2xl border border-slate-700 text-left cursor-default hover:border-emerald-500/50 transition-colors">
            <div className="w-12 h-12 bg-emerald-600/20 rounded-lg flex items-center justify-center mb-4 border border-emerald-600/30">
              <Lock className="text-emerald-400" />
            </div>
            <h3 className="text-white font-bold mb-2">Хандалтын хяналт</h3>
            <p className="text-slate-500 text-sm">Албан тушаал, нэгж бүрээр ангилагдсан уян хатан хандалтын эрхийн удирдлага.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;