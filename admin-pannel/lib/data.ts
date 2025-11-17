import { BlogPost } from './types';
import fs from 'fs';
import path from 'path';

const DATA_FILE = path.join(process.cwd(), 'data', 'blog-posts.json');

// Ensure data directory exists
const ensureDataDirectory = () => {
  const dataDir = path.join(process.cwd(), 'data');
  if (!fs.existsSync(dataDir)) {
    fs.mkdirSync(dataDir, { recursive: true });
  }
};

// Initialize with default data if file doesn't exist
const getDefaultPosts = (): BlogPost[] => [
  {
    id: '1',
    title: 'Top 10 Luxury Hotels in Paris for Your Dream Vacation',
    excerpt: 'Discover the most luxurious accommodations in the City of Light, from historic palaces to modern boutique hotels.',
    content: 'Paris, the City of Light, offers some of the world\'s most luxurious hotel experiences. From the iconic Ritz Paris to modern boutique hotels, this guide covers the top 10 luxury hotels that combine elegance, exceptional service, and prime locations. Each hotel offers unique amenities, from Michelin-starred restaurants to world-class spas, ensuring an unforgettable stay in the French capital.',
    author: 'Sarah Johnson',
    date: '2024-01-15',
    category: 'Luxury Travel',
    imageUrl: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&h=600&fit=crop'
  },
  {
    id: '2',
    title: 'Budget-Friendly Beach Hotels: Your Guide to Affordable Coastal Stays',
    excerpt: 'Enjoy stunning ocean views without breaking the bank. Our curated list of budget-friendly beach hotels offers comfort and location.',
    content: 'Traveling to the beach doesn\'t have to be expensive. This comprehensive guide features budget-friendly hotels near popular beaches worldwide. We\'ve selected properties that offer great value, clean accommodations, and proximity to the water. From Southeast Asia to the Mediterranean, discover affordable options that don\'t compromise on the beach experience.',
    author: 'Michael Chen',
    date: '2024-01-10',
    category: 'Budget Travel',
    imageUrl: 'https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=800&h=600&fit=crop'
  }
];

export const getBlogPosts = (): BlogPost[] => {
  ensureDataDirectory();
  
  if (!fs.existsSync(DATA_FILE)) {
    const defaultPosts = getDefaultPosts();
    saveBlogPosts(defaultPosts);
    return defaultPosts;
  }
  
  try {
    const fileContent = fs.readFileSync(DATA_FILE, 'utf-8');
    return JSON.parse(fileContent);
  } catch (error) {
    console.error('Error reading blog posts:', error);
    return getDefaultPosts();
  }
};

export const saveBlogPosts = (posts: BlogPost[]): void => {
  ensureDataDirectory();
  
  try {
    fs.writeFileSync(DATA_FILE, JSON.stringify(posts, null, 2), 'utf-8');
  } catch (error) {
    console.error('Error saving blog posts:', error);
    throw error;
  }
};

export const getBlogPostById = (id: string): BlogPost | undefined => {
  const posts = getBlogPosts();
  return posts.find(post => post.id === id);
};

export const createBlogPost = (post: Omit<BlogPost, 'id'>): BlogPost => {
  const posts = getBlogPosts();
  const newPost: BlogPost = {
    ...post,
    id: Date.now().toString(),
  };
  posts.push(newPost);
  saveBlogPosts(posts);
  return newPost;
};

export const updateBlogPost = (id: string, updates: Partial<BlogPost>): BlogPost | null => {
  const posts = getBlogPosts();
  const index = posts.findIndex(post => post.id === id);
  
  if (index === -1) {
    return null;
  }
  
  posts[index] = { ...posts[index], ...updates };
  saveBlogPosts(posts);
  return posts[index];
};

export const deleteBlogPost = (id: string): boolean => {
  const posts = getBlogPosts();
  const filteredPosts = posts.filter(post => post.id !== id);
  
  if (filteredPosts.length === posts.length) {
    return false; // Post not found
  }
  
  saveBlogPosts(filteredPosts);
  return true;
};

