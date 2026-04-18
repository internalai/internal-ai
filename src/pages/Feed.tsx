"use client";

import React from 'react';
import Navbar from '@/components/Navbar';
import Sidebar from '@/components/Sidebar';
import RightSidebar from '@/components/RightSidebar';
import Stories from '@/components/Stories';
import CreatePost from '@/components/CreatePost';
import PostCard from '@/components/PostCard';

const Feed = () => {
  const feedPosts = [
    {
      user: {
        name: "А. Бат-Эрдэнэ",
        image: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=100&h=100&fit=crop",
        time: "10мин"
      },
      content: "Өнөөдрийн сургуулилалт амжилттай боллоо. AI системийн тусламжтайгаар тактик боловсруулах хугацаа 40%-иар буурсан байна. 🎖️ #MilitaryAI #Efficiency",
      image: "https://images.unsplash.com/photo-1590483734724-383b85ad0590?w=800&q=80",
      likes: 42,
      comments: 5
    },
    {
      user: {
        name: "Д. Сүхбаатар",
        image: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=100&h=100&fit=crop",
        time: "2ц"
      },
      content: "Шинэ дүрэм журмын сан баяжлаа. AI туслахаас асуултаа асууж, шуурхай хариулт аваарай.",
      likes: 28,
      comments: 2
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50 font-sans">
      <Navbar />
      
      <div className="flex justify-between w-full max-w-[1920px] mx-auto">
        <Sidebar />

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

        <RightSidebar />
      </div>
    </div>
  );
};

export default Feed;