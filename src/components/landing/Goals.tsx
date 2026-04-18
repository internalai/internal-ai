"use client";

import React from 'react';
import { BarChart, Zap, Shield, Target, CheckCircle2 } from 'lucide-react';

const GoalItem = ({ title, points }: { title: string, points: string[] }) => (
  <div className="bg-slate-900 p-8 rounded-2xl border border-slate-800">
    <h4 className="text-xl font-bold text-white mb-6 flex items-center gap-3">
      <Target className="text-blue-500" />
      {title}
    </h4>
    <div className="space-y-4">
      {points.map((p, i) => (
        <div key={i} className="flex items-start gap-3">
          <CheckCircle2 size={20} className="text-emerald-500 mt-1 shrink-0" />
          <p className="text-slate-400 font-medium">{p}</p>
        </div>
      ))}
    </div>
  </div>
);

const Goals = () => {
  return (
    <section className="py-24 px-4 bg-slate-950">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-blue-500 font-black tracking-widest uppercase text-sm mb-4">Our Mission</h2>
            <h3 className="text-4xl md:text-5xl font-black text-white mb-0">🚀 Бидний зорилго</h3>
          </div>
          <p className="text-slate-500 text-lg font-medium max-w-sm">
            Бид цэргийн байгууллагын үр ашгийг технологиор дамжуулан шинэ түвшинд гаргахаар ажиллаж байна.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <GoalItem 
            title="Ажлын бүтээмжийг нэмэгдүүлэх шийдлүүд"
            points={[
              "Гар ажиллагааг багасгаж, автоматжуулалтыг нэмэгдүүлнэ",
              "Мэдээллийн хүртээмж болон шуурхай байдлыг сайжруулна"
            ]}
          />
          <GoalItem 
            title="Өдөр тутмын үйл ажиллагааг сайжруулах санаанууд"
            points={[
              "Шуурхай харилцаа, мэдээллийн урсгалыг хурдасгана",
              "Алба хаагч бүрийн оролцоо, хариуцлагыг нэмэгдүүлнэ"
            ]}
          />
          <GoalItem 
            title="Дэвшилтэт технологийн шийдлүүд"
            points={[
              "AI болон орчин үеийн системүүдийг бодит практикт нэвтрүүлэх",
              "Өгөгдөлд суурилсан оновчтой шийдвэр гаргалтыг дэмжих"
            ]}
          />
          <GoalItem 
            title="Дотоод зохион байгуулалт, сахилга бат"
            points={[
              "Ил тод, хяналттай удирдлагын систем",
              "Хариуцлага, сахилгын тогтолцоог технологиор бэхжүүлэх"
            ]}
          />
        </div>
      </div>
    </section>
  );
};

export default Goals;