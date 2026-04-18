"use client";

import React from 'react';
import { Plus } from 'lucide-react';

const StoryCard = ({ image, userImage, userName, isCreate = false }: { image?: string, userImage?: string, userName?: string, isCreate?: boolean }) => (
  <div className="relative w-28 h-48 md:w-32 md:h-56 rounded-xl overflow-hidden shadow-sm hover:brightness-90 cursor-pointer group transition-all shrink-0">
    {isCreate ? (
      <div className="flex flex-col h-full bg-white">
        <div className="h-3/4 overflow-hidden">
          <img src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=200&h=300&fit=crop" alt="User" className="w-full h-full object-cover group-hover:scale-105 transition-transform" />
        </div>
        <div className="h-1/4 relative flex flex-col items-center justify-end pb-2">
          <div className="absolute top-0 -translate-y-1/2 bg-blue-600 p-1.5 rounded-full border-4 border-white text-white">
            <Plus size={20} strokeWidth={3} />
          </div>
          <span className="text-[12px] font-semibold text-black">Create story</span>
        </div>
      </div>
    ) : (
      <>
        <img src={image} alt="Story" className="w-full h-full object-cover group-hover:scale-105 transition-transform" />
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="absolute top-3 left-3 w-10 h-10 rounded-full border-4 border-blue-600 overflow-hidden z-10">
          <img src={userImage} alt="User" className="w-full h-full object-cover" />
        </div>
        <div className="absolute bottom-3 left-3 right-3 z-10">
          <span className="text-white text-[13px] font-semibold line-clamp-2 leading-tight">{userName}</span>
        </div>
      </>
    )}
  </div>
);

const Stories = () => {
  const stories = [
    { userName: "Sarah Williams", image: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=200&h=300&fit=crop", userImage: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop" },
    { userName: "Michael Chen", image: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=200&h=300&fit=crop", userImage: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop" },
    { userName: "Emma Davis", image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=200&h=300&fit=crop", userImage: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop" },
    { userName: "James Wilson", image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=200&h=300&fit=crop", userImage: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop" },
  ];

  return (
    <div className="flex gap-3 overflow-x-auto pb-4 custom-scrollbar-hide select-none">
      <StoryCard isCreate />
      {stories.map((story, i) => (
        <StoryCard key={i} {...story} />
      ))}
    </div>
  );
};

export default Stories;