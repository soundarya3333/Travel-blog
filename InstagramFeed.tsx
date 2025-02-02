import React from 'react';
import { InstagramPost } from '../types';
import { Heart, MessageCircle, Instagram } from 'lucide-react';

interface InstagramFeedProps {
  posts: InstagramPost[];
}

const InstagramFeed: React.FC<InstagramFeedProps> = ({ posts }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-bold">Instagram Feed</h2>
        <a
          href="https://instagram.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-pink-600 hover:text-pink-700 transition-colors"
        >
          <Instagram className="w-6 h-6" />
        </a>
      </div>
      <div className="grid grid-cols-2 gap-4">
        {posts.map((post) => (
          <div key={post.id} className="relative group">
            <img
              src={post.imageUrl}
              alt={post.caption}
              className="w-full h-40 object-cover rounded-lg"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity rounded-lg flex items-center justify-center space-x-4">
              <div className="flex items-center text-white">
                <Heart className="w-4 h-4 mr-1" />
                {post.likes}
              </div>
              <div className="flex items-center text-white">
                <MessageCircle className="w-4 h-4 mr-1" />
                {post.comments}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default InstagramFeed;