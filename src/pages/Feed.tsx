"use client";

import React, { useEffect, useState } from 'react';
import Navbar from '@/components/Navbar';
import Sidebar from '@/components/feed/Sidebar';
import RightSidebar from '@/components/feed/RightSidebar';
import Stories from '@/components/feed/Stories';
import CreatePost from '@/components/feed/CreatePost';
import PostCard from '@/components/feed/PostCard';
import { getPosts, createPost } from '@/lib/api';
import { toast } from 'sonner';

const Feed = () => {
  const [posts, setPosts] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const data = await getPosts();
        setPosts(data || []);
      } catch (error) {
        toast.error("Мэдээлэл татахад алдаа гарлаа");
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  const handleCreatePost = async (content: string, imageUrl?: string) => {
    try {
      await createPost(content, imageUrl);
      toast.success("Мэдээлэл амжилттай нийтлэгдлээ");
      const data = await getPosts();
      setPosts(data || []);
    } catch (error) {
      toast.error("Мэдээлэл нийтлэхэд алдаа гарлаа");
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 font-sans">
      <Navbar />
      
      <div className="flex justify-between w-full max-w-[1920px] mx-auto">
        <Sidebar />

        <main className="flex-1 flex justify-center py-6 px-4 md:px-8">
          <div className="w-full max-w-[680px]">
            <Stories />
            <CreatePost onPostCreate={handleCreatePost} />
            
            {loading ? (
              <div className="flex justify-center py-10">
                <div className="animate-spin rounded-full h-10 w-10 border-b-2 border-blue-600"></div>
              </div>
            ) : (
              <div className="space-y-4 pb-10">
                {posts.map((post, index) => (
                  <PostCard 
                    key={post.id || index} 
                    user={{
                      name: post.profiles?.username || "Алба хаагч",
                      image: post.profiles?.avatar_url || "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=100&h=100&fit=crop",
                      time: new Date(post.created_at).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
                    }}
                    content={post.content}
                    image={post.image_url}
                    likes={0}
                    comments={0}
                  />
                ))}
                {posts.length === 0 && (
                  <div className="text-center py-20 bg-white rounded-xl border border-dashed border-slate-300">
                    <p className="text-slate-500 font-medium">Одоогоор нийтлэгдсэн мэдээлэл байхгүй байна.</p>
                  </div>
                )}
              </div>
            )}
          </div>
        </main>

        <RightSidebar />
      </div>
    </div>
  );
};

export default Feed;