"use client";

import React from 'react';
import { MessageSquare, Layout, ShieldCheck, Settings, Users } from 'lucide-react';
import { toast } from 'sonner';

const FeatureCard = ({ icon: Icon, title, desc, items }: { icon: any, title: string, desc: string, items: string[] }) => (
  <div 
    className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 hover:shadow-xl transition-all duration-300 group cursor-pointer"
    onClick={() => toast.info(`${title} хэсгийн дэлгэрэнгүй`)}
  >
    <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-blue-600 transition-colors">
      <Icon className="text-blue-600 group-hover:text-white transition-colors" size={32} />
    </div>
    <h3 className="text-2xl font-black text-slate-900 mb-3">{title}</h3>
    <p className="text-slate-500 mb-6 leading-relaxed">{desc}</p>
    <ul className="space-y-3">
      {items.map((item, i) => (
        <li key={i} className="flex items-center text-slate-700 text-sm font-medium">
          <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-3" />
          {item}
        </li>
      ))}
    </ul>
  </div>
);

const Features = () => {
  return (
    <section id="features-section" className="py-24 px-4 bg-slate-50 scroll-mt-16">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-blue-600 font-black tracking-widest uppercase text-sm mb-4">Core Capabilities</h2>
          <h3 className="text-4xl md:text-5xl font-black text-slate-900 mb-6">🧠 Системийн гол боломжууд</h3>
          <p className="text-lg text-slate-500 max-w-2xl mx-auto font-medium">
            Манай платформ нь хиймэл оюун ухаанд суурилсан чатбот, дотоод мэдээллийн сүлжээ, албаны хэрэгцээт хэрэгслүүдийг нэгтгэсэн цогц шийдэл юм.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <FeatureCard 
            icon={MessageSquare}
            title="🤖 AI Туслах"
            desc="Цэргийн дүрэм, журамд суурилсан шуурхай зөвлөх."
            items={["Шуурхай хариулт", "Бичиг баримт боловсруулах", "Ухаалаг сургалт"]}
          />
          <FeatureCard 
            icon={Layout}
            title="📢 Мэдээллийн Сүлжээ"
            desc="Facebook-тэй төстэй дотоод мэдээ хуваалцах систем."
            items={["Пост, мэдээ хуваалцах", "Нэгж хоорондын харилцаа", "Захирамж төвлөрүүлэх"]}
          />
          <FeatureCard 
            icon={Users}
            title="👤 Бүртгэлийн Систем"
            desc="Албан тушаал, нэгжээр ангилагдсан аюулгүй бүтэц."
            items={["Хэрэглэгчийн профайл", "Хандалтын удирдлага", "Хариуцлагын бүртгэл"]}
          />
          <FeatureCard 
            icon={Settings}
            title="🛠️ Ажлын Хэрэгслүүд"
            desc="Өдөр тутмын үйл ажиллагааг автоматжуулах хэрэгслүүд."
            items={["Тайлан автоматжуулалт", "Төлөвлөгөө гаргах", "Үүрэг даалгаврын удирдлага"]}
          />
        </div>
      </div>
    </section>
  );
};

export default Features;