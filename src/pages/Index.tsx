"use client";

import React from 'react';
import Navbar from '@/components/Navbar';
import Sidebar from '@/components/Sidebar';
import RightSidebar from '@/components/RightSidebar';
import Stories from '@/components/Stories';
import CreatePost from '@/components/CreatePost';
import PostCard from '@/components/PostCard';

const Index = () => {
  const feedPosts = [
    {
      user: {
        name: "Jessica Taylor",
        image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&h=100&fit=crop",
        time: "2h"
      },
      content: "Just finished building my first React app with Dyad! The speed is incredible. 🚀 #webdev #dyad #react",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&q=80",
      likes: 142,
      comments: 24
    },
    {
      user: {
        name: "David Miller",
        image: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=100&h=100&fit=crop",
        time: "5h"
      },
      content: "Thinking about the next mountain to climb. Any recommendations for trails in the Pacific Northwest?",
      image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=800&q=80",
      likes: 89,
      comments: 15
    },
    {
      user: {
        name: "Michael Chen",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop",
        time: "10h"
      },
      content: "Great dinner with the team tonight! Grateful for everyone's hard work this quarter.",
      likes: 56,
      comments: 8
    }
  ];

  return (
    <div className="min-h-screen bg-gray-100 font-sans">
      <Navbar />
      
      <div className="flex justify-between w-full max-w-[1920px] mx-auto">
        {/* Left Sidebar */}
        <Sidebar />

        {/* Feed Center */}
        <main className="flex-1 flex justify-center py-6 px-4 md:px-8">
          <div className="w-full max-w-[680px]">
            <Stories />
            <CreatePost />
            
            <div className="space-y-4 pb-10">
              {feedPosts.map((post, index) => (
                <PostCard key={index} {...post} />
              ))}
            </div>
          </div>
        </main>

        {/* Right Sidebar */}
        <RightSidebar />
      </div>
    </div>
  );
};

export default Index;