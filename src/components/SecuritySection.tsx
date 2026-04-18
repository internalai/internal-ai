"use client";

import React from 'react';
import { ShieldAlert, Lock, Fingerprint, EyeOff, Check } from 'lucide-react';
import { Button } from "@/components/ui/button";

const SecuritySection = () => {
  return (
    <section className="py-24 px-4 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="inline-flex items-center gap-2 bg-red-50 text-red-600 px-4 py-1 rounded-full text-xs font-bold uppercase mb-6 border border-red-100">
              <ShieldAlert size={14} /> Security First
            </div>
            <h3 className="text-4xl font-black text-slate-900 mb-6">🔐 Аюулгүй байдал</h3>
            <p className="text-lg text-slate-600 mb-10 leading-relaxed font-medium">
              Бид цэргийн мэдээллийн онцгой нууцлалыг хангахын тулд дэлхийн жишигт нийцсэн хамгаалалтын технологийг ашигладаг.
            </p>
            
            <div className="space-y-6">
              {[
                { title: "Цэргийн зориулалттай өндөр хамгаалалт", icon: Lock },
                { title: "Хандалтын түвшний ухаалаг удирдлага", icon: Fingerprint },
                { title: "Дотоод мэдээллийн бүрэн нууцлал", icon: EyeOff }
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-4 group">
                  <div className="w-12 h-12 rounded-xl bg-slate-900 flex items-center justify-center text-white shrink-0 group-hover:scale-110 transition-transform">
                    <item.icon size={20} />
                  </div>
                  <span className="text-xl font-bold text-slate-800">{item.title}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="bg-slate-900 rounded-[40px] p-12 text-center relative z-10 shadow-2xl shadow-blue-900/20">
              <h4 className="text-3xl font-black text-white mb-6">Бэлэн үү?</h4>
              <p className="text-slate-400 mb-10 font-medium">
                Цэргийн байгууллагынхаа ирээдүйг өнөөдрөөс эхлэн сайжруул.
              </p>
              <div className="flex flex-col gap-4">
                <Button className="w-full bg-blue-600 hover:bg-blue-700 h-16 text-lg font-bold rounded-2xl shadow-lg shadow-blue-600/30">
                  <Check className="mr-2" /> Одоо нэвтэрч эхлэх
                </Button>
                <Button variant="ghost" className="w-full text-slate-400 hover:text-white hover:bg-slate-800 h-14 font-bold">
                  Демо хувилбартай танилцах
                </Button>
              </div>
            </div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-blue-500/10 rounded-full blur-[100px] pointer-events-none" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SecuritySection;