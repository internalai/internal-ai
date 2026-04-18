"use client";

import React from 'react';
import { Search, MoreHorizontal, Video } from 'lucide-react';
import { Button } from "@/components/ui/button";

const Contact = ({ name, image, online = true }: { name: string, image: string, online?: boolean }) => (
  <div className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-200 cursor-pointer transition-colors relative">
    <div className="relative">
      <div className="w-9 h-9 rounded-full overflow-hidden border">
        <img src={image} alt={name} className="w-full h-full object-cover" />
      </div>
      {online && (
        <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-white rounded-full"></div>
      )}
    </div>
    <span className="font-medium text-[15px]">{name}</span>
  </div>
);

const RightSidebar = () => {
  const contacts = [
    { name: "Sarah Williams", image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop" },
    { name: "Michael Chen", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop" },
    { name: "Emma Davis", image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop" },
    { name: "James Wilson", image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop" },
    { name: "Jessica Taylor", image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&h=100&fit=crop" },
    { name: "David Miller", image: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=100&h=100&fit=crop" },
  ];

  return (
    <div className="hidden lg:block w-[360px] p-2 sticky top-14 h-[calc(100vh-56px)] overflow-y-auto custom-scrollbar">
      <div className="mb-4">
        <h3 className="px-2 font-semibold text-gray-500 mb-2">Sponsored</h3>
        <div className="flex items-center gap-4 p-2 rounded-lg hover:bg-gray-100 cursor-pointer">
          <div className="w-24 h-24 rounded-lg bg-gray-200 overflow-hidden">
             <img src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=200&h=200&fit=crop" className="w-full h-full object-cover" alt="Ad" />
          </div>
          <div>
            <p className="font-semibold text-sm">NextGen Watch</p>
            <p className="text-xs text-gray-500">nextgen.com</p>
          </div>
        </div>
      </div>

      <div className="pt-4 border-t border-gray-300">
        <div className="flex items-center justify-between px-2 mb-2">
          <h3 className="font-semibold text-gray-500">Contacts</h3>
          <div className="flex gap-2">
            <Button variant="ghost" size="icon" className="h-8 w-8 rounded-full">
              <Video size={16} />
            </Button>
            <Button variant="ghost" size="icon" className="h-8 w-8 rounded-full">
              <Search size={16} />
            </Button>
            <Button variant="ghost" size="icon" className="h-8 w-8 rounded-full">
              <MoreHorizontal size={16} />
            </Button>
          </div>
        </div>
        <div className="space-y-1">
          {contacts.map((contact, i) => (
            <Contact key={i} {...contact} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default RightSidebar;