"use client";

import React from 'react';
import { Users, Bookmark, History, Calendar, Heart, ChevronDown, User, UserGroup } from 'lucide-react';

const SidebarItem = ({ icon: Icon, label, color = "text-blue-500" }: { icon: any, label: string, color?: string }) => (
  <div className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-200 cursor-pointer transition-colors">
    <Icon className={color} size={28} />
    <span className="font-medium text-[15px]">{label}</span>
  </div>
);

const Sidebar = () => {
  return (
    <div className="hidden xl:block w-[360px] p-2 sticky top-14 h-[calc(100vh-56px)] overflow-y-auto custom-scrollbar">
      <div className="space-y-1">
        <div className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-200 cursor-pointer transition-colors">
          <div className="w-9 h-9 rounded-full overflow-hidden">
             <img src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=100&h=100&fit=crop" alt="Profile" className="w-full h-full object-cover" />
          </div>
          <span className="font-semibold text-[15px]">Alex Johnson</span>
        </div>
        <SidebarItem icon={Users} label="Friends" color="text-blue-600" />
        <SidebarItem icon={History} label="Memories" color="text-blue-500" />
        <SidebarItem icon={Bookmark} label="Saved" color="text-purple-600" />
        <SidebarItem icon={UserGroup} label="Groups" color="text-blue-600" />
        <SidebarItem icon={MonitorPlay} label="Video" color="text-blue-500" />
        <SidebarItem icon={Calendar} label="Events" color="text-red-500" />
        <SidebarItem icon={Heart} label="Fundraisers" color="text-pink-500" />
        
        <div className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-200 cursor-pointer transition-colors">
          <div className="w-9 h-9 rounded-full bg-gray-200 flex items-center justify-center">
            <ChevronDown size={20} />
          </div>
          <span className="font-medium text-[15px]">See more</span>
        </div>
      </div>
      
      <div className="mt-4 pt-4 border-t border-gray-300">
        <h3 className="px-2 font-semibold text-gray-500 mb-2">Your shortcuts</h3>
        <div className="space-y-1">
           {/* Shortcut placeholders */}
           <div className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-200 cursor-pointer">
             <div className="w-9 h-9 rounded-lg bg-blue-100 flex items-center justify-center text-blue-600 font-bold">W</div>
             <span className="font-medium text-[15px]">Web Developers Group</span>
           </div>
           <div className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-200 cursor-pointer">
             <div className="w-9 h-9 rounded-lg bg-green-100 flex items-center justify-center text-green-600 font-bold">G</div>
             <span className="font-medium text-[15px]">Gaming Community</span>
           </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;