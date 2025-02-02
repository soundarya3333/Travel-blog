import { Profile } from '../types';

export const profileData: Profile = {
  name: "Soundarya",
  title: "Travel & Lifestyle Blog",
  bio: "Documenting life's adventures through words and photographs. Join me as I explore the world, one story at a time.",
  blogPosts: [
    {
      id: "1",
      title: "Finding Peace in the Mountains",
      content: "There's something magical about standing at the peak of a mountain...",
      excerpt: "A journey through the Rockies and the life lessons learned along the way.",
      category: "Travel",
      coverImage: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&h=800&q=80",
      date: "March 15, 2024",
      readTime: "5 min read"
    },
    {
      id: "2",
      title: "The Perfect Morning Brew",
      content: "The art of coffee making is a journey that never ends...",
      excerpt: "Discovering the secrets of artisanal coffee in hidden downtown cafes.",
      category: "Lifestyle",
      coverImage: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&h=800&q=80",
      date: "March 12, 2024",
      readTime: "4 min read"
    },
    {
      id: "3",
      title: "Sunset Photography Guide",
      content: "The golden hour is every photographer's dream...",
      excerpt: "Tips and tricks for capturing the perfect sunset photograph.",
      category: "Photography",
      coverImage: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&h=800&q=80",
      date: "March 10, 2024",
      readTime: "6 min read"
    }
  ],
  instagramFeed: [
    {
      id: "1",
      imageUrl: "https://images.unsplash.com/photo-1518098268026-4e89f1a2cd8e?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&h=500&q=80",
      caption: "Morning light in the mountains 🏔️ #adventure #photography",
      likes: 234,
      comments: 45,
      date: "2h"
    },
    {
      id: "2",
      imageUrl: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&h=500&q=80",
      caption: "Coffee moments ☕ #lifestyle #coffee",
      likes: 156,
      comments: 23,
      date: "5h"
    },
    {
      id: "3",
      imageUrl: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&h=500&q=80",
      caption: "Golden hour vibes 🌅 #sunset #beach",
      likes: 312,
      comments: 67,
      date: "1d"
    }
  ],
  categories: ["Travel", "Lifestyle", "Photography", "Food", "Adventure"],
  socialLinks: [
    { platform: "Instagram", url: "https://instagram.com" }
  ]
};