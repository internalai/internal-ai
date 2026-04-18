"use client";

import React from 'react';
import { Search, Home, Users, MonitorPlay, ShoppingCart, UserGroup, Bell, MessageCircle, Menu, User } from 'lucide-react';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  return (
    <nav className="sticky top-0 z-50 bg-white border-b shadow-sm px-4 h-14 flex items-center justify-between">
      <div className="flex items-center gap-2 flex-1">
        <div className="bg-blue-600 p-1.5 rounded-full">
          <span className="text-white font-bold text-xl leading-none">f</span>
        </div>
        <div className="relative hidden md:block max-w-[240px] w-full">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
          <Input 
            placeholder="Search Facebook" 
            className="pl-10 bg-gray-100 border-none rounded-full h-10 focus-visible:ring-1 focus-visible:ring-blue-500"
          />
        </div>
        <Button variant="ghost" size="icon" className="md:hidden">
          <Search size={20} />
        </Button>
      </div>

      <div className="hidden lg:flex items-center justify-center flex-1 h-full max-w-[600px]">
        <Button variant="ghost" className="flex-1 h-full border-b-4 border-blue-600 rounded-none text-blue-600">
          <Home size={28} />
        </Button>
        <Button variant="ghost" className="flex-1 h-full border-b-4 border-transparent rounded-none text-gray-500 hover:bg-gray-100">
          <Users size={28} />
        </Button>
        <Button variant="ghost" className="flex-1 h-full border-b-4 border-transparent rounded-none text-gray-500 hover:bg-gray-100">
          <MonitorPlay size={28} />
        </Button>
        <Button variant="ghost" className="flex-1 h-full border-b-4 border-transparent rounded-none text-gray-500 hover:bg-gray-100">
          <ShoppingCart size={28} />
        </Button>
        <Button variant="ghost" className="flex-1 h-full border-b-4 border-transparent rounded-none text-gray-500 hover:bg-gray-100">
          <UserGroup size={28} />
        </Button>
      </div>

      <div className="flex items-center justify-end gap-2 flex-1">
        <div className="hidden xl:flex items-center bg-gray-100 rounded-full pr-3 pl-1 py-1 cursor-pointer hover:bg-gray-200 transition-colors">
          <div className="w-8 h-8 rounded-full bg-gray-300 flex items-center justify-center mr-2">
            <User size={20} className="text-gray-600" />
          </div>
          <span className="font-semibold text-sm">Alex</span>
        </div>
        <Button variant="ghost" size="icon" className="bg-gray-100 rounded-full hover:bg-gray-200">
          <Menu size={20} />
        </Button>
        <Button variant="ghost" size="icon" className="bg-gray-100 rounded-full hover:bg-gray-200">
          <MessageCircle size={20} />
        </Button>
        <Button variant="ghost" size="icon" className="bg-gray-100 rounded-full hover:bg-gray-200">
          <Bell size={20} />
        </Button>
        <div className="w-10 h-10 rounded-full bg-gray-300 flex items-center justify-center cursor-pointer overflow-hidden border">
           <img src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=100&h=100&fit=crop" alt="Profile" className="w-full h-full object-cover" />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;