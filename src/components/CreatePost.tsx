"use client";

import React, { useState } from 'react';
import { Video, Image as ImageIcon, Smile } from 'lucide-react';
import { Button } from "@/components/ui/button";

interface CreatePostProps {
  onPostCreate: (content: string, imageUrl?: string) => void;
}

const CreatePost = ({ onPostCreate }: CreatePostProps) => {
  const [content, setContent] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = () => {
    if (!content.trim()) return;
    
    setIsSubmitting(true);
    onPostCreate(content);
    setContent('');
    setIsSubmitting(false);
  };

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-4 mb-4">
      <div className="flex items-center gap-2 mb-4">
        <div className="w-10 h-10 rounded-full overflow-hidden border flex-shrink-0">
          <img src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=100&h=100&fit=crop" alt="Profile" className="w-full h-full object-cover" />
        </div>
        <div className="flex-1 bg-gray-100 hover:bg-gray-200 cursor-pointer rounded-full h-10 flex items-center px-4 transition-colors">
          <span className="text-gray-500">What's on your mind, Alex?</span>
        </div>
      </div>
      
      <div className="h-[1px] bg-gray-200 mb-1" />
      
      <div className="flex items-center justify-around pt-1">
        <Button variant="ghost" className="flex-1 gap-2 text-gray-500 font-semibold h-10">
          <Video className="text-red-500" size={24} />
          <span className="hidden sm:inline">Live video</span>
        </Button>
        <Button variant="ghost" className="flex-1 gap-2 text-gray-500 font-semibold h-10">
          <ImageIcon className="text-green-500" size={24} />
          <span className="hidden sm:inline">Photo/video</span>
        </Button>
        <Button variant="ghost" className="flex-1 gap-2 text-gray-500 font-semibold h-10">
          <Smile className="text-yellow-500" size={24} />
          <span className="hidden sm:inline">Feeling/activity</span>
        </Button>
      </div>
      
      <div className="mt-4 flex justify-end">
        <Button 
          onClick={handleSubmit}
          disabled={!content.trim() || isSubmitting}
          className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg"
        >
          {isSubmitting ? "Posting..." : "Post"}
        </Button>
      </div>
    </div>
  );
};

export default CreatePost;