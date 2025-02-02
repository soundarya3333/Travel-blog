import React from 'react';
import Header from './components/Header';
import BlogPosts from './components/BlogPosts';
import InstagramFeed from './components/InstagramFeed';
import Categories from './components/Categories';
import { profileData } from './data/profile';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header profile={profileData} />
      <main className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          <div className="lg:col-span-8">
            <BlogPosts posts={profileData.blogPosts} />
          </div>
          <aside className="lg:col-span-4 space-y-8">
            <Categories categories={profileData.categories} />
            <InstagramFeed posts={profileData.instagramFeed} />
          </aside>
        </div>
      </main>
    </div>
  );
}

export default App;