import React from 'react';
import { BlogPost } from '../types';
import { Clock, Calendar } from 'lucide-react';

interface BlogPostsProps {
  posts: BlogPost[];
}

const BlogPosts: React.FC<BlogPostsProps> = ({ posts }) => {
  return (
    <div className="space-y-8">
      {posts.map((post) => (
        <article key={post.id} className="bg-white rounded-lg shadow-md overflow-hidden">
          <img
            src={post.coverImage}
            alt={post.title}
            className="w-full h-64 object-cover"
          />
          <div className="p-6">
            <div className="flex items-center space-x-4 mb-4">
              <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">
                {post.category}
              </span>
              <div className="flex items-center text-gray-500 text-sm">
                <Calendar className="w-4 h-4 mr-1" />
                {post.date}
              </div>
              <div className="flex items-center text-gray-500 text-sm">
                <Clock className="w-4 h-4 mr-1" />
                {post.readTime}
              </div>
            </div>
            <h2 className="text-2xl font-bold mb-3">{post.title}</h2>
            <p className="text-gray-600 mb-4">{post.excerpt}</p>
            <button className="text-blue-600 font-semibold hover:text-blue-800 transition-colors">
              Read More →
            </button>
          </div>
        </article>
      ))}
    </div>
  );
};

export default BlogPosts;