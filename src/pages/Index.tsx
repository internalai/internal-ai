"use client";

import React from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import Goals from '@/components/Goals';
import SecuritySection from '@/components/SecuritySection';
import { MadeWithDyad } from '@/components/made-with-dyad';

const Index = () => {
  return (
    <div className="min-h-screen bg-white font-sans selection:bg-blue-600 selection:text-white">
      {/* Top Navigation */}
      <Navbar />
      
      {/* Main Content Sections */}
      <main>
        {/* 1. Hero Section */}
        <Hero />

        {/* 2. Core Features Section */}
        <Features />

        {/* 3. Mission & Goals Section */}
        <Goals />

        {/* 4. Security & Call to Action Section */}
        <SecuritySection />

        {/* 5. Statistics/Why section can be added later if needed */}
        <section className="py-20 px-4 bg-slate-50 border-t border-slate-100">
          <div className="max-w-7xl mx-auto text-center">
            <h3 className="text-3xl font-black text-slate-900 mb-12">📊 Яагаад энэ систем вэ?</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                "Нэг дороос бүх үйл ажиллагааг удирдах",
                "Цаг хэмнэх, алдааг бууруулах",
                "Байгууллагын уялдаа холбоог сайжруулах",
                "Орчин үеийн технологийг бодитоор ашиглах"
              ].map((reason, i) => (
                <div key={i} className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200">
                  <div className="w-10 h-10 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center font-black mb-4 mx-auto">
                    {i + 1}
                  </div>
                  <p className="text-slate-800 font-bold leading-snug">{reason}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      {/* Footer / Bottom Info */}
      <footer className="py-12 bg-slate-900 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 flex flex-col items-center">
          <div className="flex items-center gap-2 mb-6">
            <div className="bg-blue-600 p-1 rounded-md">
              <span className="text-white font-black text-xs uppercase">Mil AI</span>
            </div>
            <span className="text-slate-400 font-bold text-sm tracking-widest">UNIT 001 - CENTRAL COMMAND</span>
          </div>
          <p className="text-slate-600 text-xs mb-8">© 2024 Цэргийн Нэгдсэн AI Платформ. Бүх эрх хуулиар хамгаалагдсан.</p>
          <MadeWithDyad />
        </div>
      </footer>
    </div>
  );
};

export default Index;