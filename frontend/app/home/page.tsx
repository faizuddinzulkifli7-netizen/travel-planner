'use client';

import { useState } from 'react';
import ChatPanel from '../components/ChatPanel';
import HotelCard from '../components/HotelCard';

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  date: string;
  category: string;
  imageUrl: string;
}

interface Hotel {
  id: string;
  name: string;
  description: string;
  location: {
    address: string;
    city: string;
    country: string;
    lat: number;
    lng: number;
  };
  imageUrl: string;
  price?: string;
  rating?: number;
}

// Mock hotel data generator - In a real app, this would call an API
const generateMockHotels = (query: string): Hotel[] => {
  // This is a simplified mock - in production, you'd call an AI service or API
  const mockHotels: Hotel[] = [
    {
      id: '1',
      name: 'Grand Plaza Hotel',
      description: 'A luxurious hotel located in the heart of the city, offering world-class amenities, elegant rooms, and exceptional service. Perfect for both business and leisure travelers.',
      location: {
        address: '123 Main Street',
        city: 'Paris',
        country: 'France',
        lat: 48.8566,
        lng: 2.3522
      },
      imageUrl: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&h=600&fit=crop',
      price: '$250/night',
      rating: 4.8
    },
    {
      id: '2',
      name: 'Oceanview Resort',
      description: 'Beautiful beachfront resort with stunning ocean views, infinity pool, spa facilities, and direct beach access. Ideal for a relaxing vacation.',
      location: {
        address: '456 Beach Boulevard',
        city: 'Miami',
        country: 'USA',
        lat: 25.7617,
        lng: -80.1918
      },
      imageUrl: 'https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=800&h=600&fit=crop',
      price: '$320/night',
      rating: 4.9
    },
    {
      id: '3',
      name: 'City Center Business Hotel',
      description: 'Modern business hotel in downtown area with conference facilities, high-speed internet, and convenient access to business districts and transportation.',
      location: {
        address: '789 Business Avenue',
        city: 'Tokyo',
        country: 'Japan',
        lat: 35.6762,
        lng: 139.6503
      },
      imageUrl: 'https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=800&h=600&fit=crop',
      price: '$180/night',
      rating: 4.6
    },
    {
      id: '4',
      name: 'Mountain View Lodge',
      description: 'Cozy mountain lodge surrounded by nature, offering hiking trails, hot springs, and breathtaking mountain views. Perfect for nature enthusiasts.',
      location: {
        address: '321 Mountain Road',
        city: 'Switzerland',
        country: 'Switzerland',
        lat: 46.5197,
        lng: 6.6323
      },
      imageUrl: 'https://images.unsplash.com/photo-1564501049412-61c2a3083791?w=800&h=600&fit=crop',
      price: '$200/night',
      rating: 4.7
    }
  ];

  // Filter or return hotels based on query (simplified logic)
  // In a real app, this would be handled by an AI service
  return mockHotels.slice(0, 3); // Return 3 hotels for demo
};

const BLOG_POSTS: BlogPost[] = [
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
  },
  {
    id: '3',
    title: 'Family-Friendly Hotels: What to Look For When Traveling with Kids',
    excerpt: 'Planning a family vacation? Learn what amenities and features make a hotel truly family-friendly.',
    content: 'Traveling with children requires special considerations when choosing accommodations. This article outlines essential features of family-friendly hotels, including kid-friendly pools, connecting rooms, play areas, and dining options. We also provide tips on booking strategies, safety considerations, and how to ensure both parents and children have an enjoyable stay.',
    author: 'Emily Rodriguez',
    date: '2024-01-05',
    category: 'Family Travel',
    imageUrl: 'https://images.unsplash.com/photo-1564501049412-61c2a3083791?w=800&h=600&fit=crop'
  },
  {
    id: '4',
    title: 'Business Hotels: Maximizing Productivity on the Road',
    excerpt: 'Essential features every business traveler should look for in a hotel, from high-speed internet to meeting facilities.',
    content: 'Business travel demands specific hotel amenities to ensure productivity and comfort. This guide covers the must-have features for business hotels, including reliable Wi-Fi, work-friendly rooms, business centers, and convenient locations. We also discuss loyalty programs, expense management, and how to maintain work-life balance while traveling for business.',
    author: 'David Kim',
    date: '2023-12-28',
    category: 'Business Travel',
    imageUrl: 'https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=800&h=600&fit=crop'
  },
  {
    id: '5',
    title: 'Romantic Getaways: Hotels Perfect for Couples',
    excerpt: 'Create unforgettable memories with our selection of romantic hotels featuring stunning views and intimate settings.',
    content: 'Whether celebrating an anniversary, honeymoon, or just a romantic escape, choosing the right hotel sets the tone for your special time together. This article highlights hotels known for their romantic ambiance, from overwater bungalows to mountain retreats. We cover amenities like couples\' spas, private balconies, and fine dining experiences that make these properties perfect for romance.',
    author: 'Jessica Martinez',
    date: '2023-12-20',
    category: 'Romantic Travel',
    imageUrl: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&h=600&fit=crop'
  },
  {
    id: '6',
    title: 'Pet-Friendly Hotels: Traveling with Your Furry Friends',
    excerpt: 'Don\'t leave your pets behind! Discover hotels that welcome your four-legged family members with open arms.',
    content: 'More hotels than ever are becoming pet-friendly, recognizing that pets are part of the family. This guide explores what makes a hotel truly pet-friendly, from pet amenities and policies to nearby parks and services. Learn about pet fees, size restrictions, and how to prepare your pet for hotel stays. We\'ve also included tips for ensuring a comfortable experience for both you and your pet.',
    author: 'Robert Taylor',
    date: '2023-12-15',
    category: 'Pet Travel',
    imageUrl: 'https://images.unsplash.com/photo-1564501049412-61c2a3083791?w=800&h=600&fit=crop'
  }
];

export default function HomePage() {
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
  };
  const [hotels, setHotels] = useState<Hotel[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [hasSearched, setHasSearched] = useState(false);

  const handleSendMessage = async (message: string) => {
    setIsLoading(true);
    setHasSearched(true);
    
    // Simulate API call delay
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    // Generate mock hotel recommendations
    const recommendedHotels = generateMockHotels(message);
    setHotels(recommendedHotels);
    
    setIsLoading(false);
  };

  return (
    <div 
      className="min-h-screen transition-colors"
      style={{ backgroundColor: 'var(--background)', color: 'var(--foreground)' }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="max-w-6xl mx-auto">
          {/* Header Section */}
          <div className="text-center mb-12">
            <h1 
              className="text-4xl md:text-5xl font-bold mb-4 transition-colors"
              style={{ color: 'var(--foreground)' }}
            >
              Hotel Recommendation AI
            </h1>
            <p 
              className="text-lg mb-8 transition-colors"
              style={{ color: 'var(--card-text-secondary)' }}
            >
              Describe your ideal hotel and let our AI find the perfect match for you
            </p>
          </div>

          {/* Chat Panel */}
          <div className="mb-12">
            <ChatPanel onSendMessage={handleSendMessage} isLoading={isLoading} />
          </div>

          {/* Loading State */}
          {isLoading && (
            <div className="text-center py-12">
              <div className="inline-block">
                <svg className="animate-spin h-12 w-12" style={{ color: 'var(--secondary-blue)' }} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
              </div>
              <p 
                className="mt-4 transition-colors"
                style={{ color: 'var(--card-text-secondary)' }}
              >
                Finding the perfect hotels for you...
              </p>
            </div>
          )}

          {/* Hotel Results */}
          {!isLoading && hasSearched && hotels.length > 0 && (
            <div>
              <h2 
                className="text-2xl font-bold mb-6 transition-colors"
                style={{ color: 'var(--foreground)' }}
              >
                Recommended Hotels
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {hotels.map((hotel) => (
                  <HotelCard key={hotel.id} hotel={hotel} />
                ))}
              </div>
            </div>
          )}

          {/* No Results State */}
          {!isLoading && hasSearched && hotels.length === 0 && (
            <div className="text-center py-12">
              <p 
                className="text-lg transition-colors"
                style={{ color: 'var(--card-text-secondary)' }}
              >
                No hotels found. Try a different search query.
              </p>
            </div>
          )}

          {/* Blog Section - Always visible */}
          <div className="mt-16">
            <div className="text-center mb-12">
              <h2 
                className="text-3xl md:text-4xl font-bold mb-4 transition-colors"
                style={{ color: 'var(--foreground)' }}
              >
                Hotel Travel Blog
              </h2>
              <p 
                className="text-lg mb-8 transition-colors"
                style={{ color: 'var(--card-text-secondary)' }}
              >
                Expert tips, guides, and insights to help you find the perfect hotel for your next adventure
              </p>
            </div>

            {/* Blog Posts Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {BLOG_POSTS.map((post) => (
                <article
                  key={post.id}
                  className="rounded-lg shadow-lg overflow-hidden transition-all hover:shadow-xl"
                  style={{
                    backgroundColor: 'var(--card-bg)',
                    borderColor: 'var(--card-border)',
                    borderWidth: '1px',
                    borderStyle: 'solid'
                  }}
                >
                  {/* Blog Image */}
                  <div className="relative h-48 w-full overflow-hidden">
                    <img
                      src={post.imageUrl}
                      alt={post.title}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.style.display = 'none';
                        if (target.parentElement) {
                          target.parentElement.style.backgroundColor = 'var(--secondary-blue)';
                        }
                      }}
                    />
                  </div>

                  {/* Blog Content */}
                  <div className="p-6">
                    <div className="mb-3">
                      <span
                        className="inline-block px-3 py-1 rounded-full text-xs font-medium"
                        style={{
                          backgroundColor: 'var(--accent-teal)',
                          color: '#ffffff'
                        }}
                      >
                        {post.category}
                      </span>
                    </div>

                    <h3 
                      className="text-xl font-bold mb-2 transition-colors line-clamp-2"
                      style={{ color: 'var(--card-text)' }}
                    >
                      {post.title}
                    </h3>

                    <p 
                      className="text-sm mb-4 transition-colors line-clamp-3"
                      style={{ color: 'var(--card-text-secondary)' }}
                    >
                      {post.excerpt}
                    </p>

                    <div className="flex items-center justify-between text-xs mb-4">
                      <span style={{ color: 'var(--card-text-secondary)' }}>
                        {post.author}
                      </span>
                      <span style={{ color: 'var(--card-text-secondary)' }}>
                        {formatDate(post.date)}
                      </span>
                    </div>

                    <button
                      className="w-full py-2 rounded-lg font-medium transition-all hover:scale-105"
                      style={{
                        backgroundColor: 'var(--secondary-blue)',
                        color: '#ffffff'
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.backgroundColor = 'var(--button-hover)';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.backgroundColor = 'var(--secondary-blue)';
                      }}
                    >
                      Read More
                    </button>
                  </div>
                </article>
              ))}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

