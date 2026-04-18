"use client";

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Cpu, ArrowRight } from "lucide-react";
import { toast } from "sonner";
import { signUp } from "@/lib/api";

const Register = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fullName, setFullName] = useState("");
  const [rank, setRank] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    try {
      await signUp(email, password, fullName, rank);
      toast.success("Бүртгэл амжилттай! И-мэйлээ шалгана уу.");
      navigate("/login");
    } catch (error: any) {
      toast.error(error.message || "Бүртгүүлэхэд алдаа гарлаа");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 flex items-center justify-center p-4">
      <div className="w-full max-w-md bg-slate-900/50 backdrop-blur-xl border border-slate-800 rounded-3xl p-8 shadow-2xl">
        <div className="flex flex-col items-center mb-8">
          <div className="bg-blue-600 p-3 rounded-2xl mb-4">
            <Cpu className="text-white" size={32} />
          </div>
          <h1 className="text-2xl font-black text-white">Бүртгүүлэх</h1>
        </div>

        <form onSubmit={handleRegister} className="space-y-4">
          <div className="space-y-1">
            <Label className="text-slate-400">Email</Label>
            <Input value={email} onChange={(e) => setEmail(e.target.value)} className="bg-slate-800 border-slate-700 text-white" required />
          </div>
          <div className="space-y-1">
            <Label className="text-slate-400">Full Name</Label>
            <Input value={fullName} onChange={(e) => setFullName(e.target.value)} className="bg-slate-800 border-slate-700 text-white" required />
          </div>
          <div className="space-y-1">
            <Label className="text-slate-400">Rank (Цэргийн цол)</Label>
            <Input value={rank} onChange={(e) => setRank(e.target.value)} className="bg-slate-800 border-slate-700 text-white" required />
          </div>
          <div className="space-y-1">
            <Label className="text-slate-400">Password</Label>
            <Input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="bg-slate-800 border-slate-700 text-white" required />
          </div>
          <Button disabled={isLoading} className="w-full bg-blue-600 mt-4">
            {isLoading ? "Бүртгэж байна..." : "Бүртгүүлэх"}
          </Button>
        </form>
        
        <p className="mt-6 text-center text-slate-500 text-sm">
          Аль хэдийн бүртгэлтэй юу? <button onClick={() => navigate('/login')} className="text-blue-400 font-bold hover:underline">Нэвтрэх</button>
        </p>
      </div>
    </div>
  );
};

export default Register;