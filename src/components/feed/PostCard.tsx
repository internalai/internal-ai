"use client";

import React from 'react';
import { MoreHorizontal, X, ThumbsUp, MessageCircle, Share2, Globe, Heart } from 'lucide-react';
import { Button } from "@/components/ui/button";

interface PostProps {
  user: {
    name: string;
    image: string;
    time: string;
  };
  content: string;
  image?: string;
  likes: number;
  comments: number;
}

const PostCard = ({ user, content, image, likes, comments }: PostProps) => {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden mb-4">
      <div className="p-4">
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full overflow-hidden border">
              <img src={user.image} alt={user.name} className="w-full h-full object-cover" />
            </div>
            <div>
              <p className="font-semibold text-sm hover:underline cursor-pointer">{user.name}</p>
              <div className="flex items-center gap-1 text-gray-500 text-xs">
                <span>{user.time}</span>
                <span>•</span>
                <Globe size={12} />
              </div>
            </div>
          </div>
          <div className="flex gap-1">
            <Button variant="ghost" size="icon" className="h-8 w-8 rounded-full text-gray-500">
              <MoreHorizontal size={20} />
            </Button>
            <Button variant="ghost" size="icon" className="h-8 w-8 rounded-full text-gray-500">
              <X size={20} />
            </Button>
          </div>
        </div>

        <p className="text-[15px] mb-4 text-gray-900 leading-normal">{content}</p>
      </div>

      {image && (
        <div className="w-full max-h-[600px] overflow-hidden bg-gray-100">
          <img src={image} alt="Post content" className="w-full h-full object-contain mx-auto" />
        </div>
      )}

      <div className="px-4 py-2 border-b border-gray-100">
        <div className="flex items-center justify-between text-gray-500 text-[14px]">
          <div className="flex items-center gap-2">
            <div className="flex -space-x-1">
              <div className="bg-blue-500 p-1 rounded-full border-2 border-white">
                <ThumbsUp size={10} className="text-white fill-white" />
              </div>
              <div className="bg-red-500 p-1 rounded-full border-2 border-white">
                <Heart size={10} className="text-white fill-white" />
              </div>
            </div>
            <span>{likes}</span>
          </div>
          <div className="flex gap-3">
            <span>{comments} comments</span>
            <span>12 shares</span>
          </div>
        </div>
      </div>

      <div className="px-1 py-1 flex items-center justify-around">
        <Button variant="ghost" className="flex-1 gap-2 text-gray-500 font-semibold h-10">
          <ThumbsUp size={20} />
          <span>Like</span>
        </Button>
        <Button variant="ghost" className="flex-1 gap-2 text-gray-500 font-semibold h-10">
          <MessageCircle size={20} />
          <span>Comment</span>
        </Button>
        <Button variant="ghost" className="flex-1 gap-2 text-gray-500 font-semibold h-10">
          <Share2 size={20} />
          <span>Share</span>
        </Button>
      </div>
    </div>
  );
};

export default PostCard;