export interface Profile {
  name: string;
  title: string;
  bio: string;
  blogPosts: BlogPost[];
  instagramFeed: InstagramPost[];
  categories: string[];
  socialLinks: SocialLink[];
}

export interface BlogPost {
  id: string;
  title: string;
  content: string;
  excerpt: string;
  category: string;
  coverImage: string;
  date: string;
  readTime: string;
}

export interface InstagramPost {
  id: string;
  imageUrl: string;
  caption: string;
  likes: number;
  comments: number;
  date: string;
}

export interface SocialLink {
  platform: string;
  url: string;
}