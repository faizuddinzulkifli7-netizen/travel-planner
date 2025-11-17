'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import BlogPostForm from '../components/BlogPostForm';
import { API_ENDPOINTS } from '@/lib/api';

export default function NewBlogPage() {
  const router = useRouter();

  const handleSubmit = async (formData: any) => {
    try {
      // Convert imageUrl to image_url for backend API
      const payload = {
        ...formData,
        image_url: formData.imageUrl,
      };
      delete payload.imageUrl;

      const response = await fetch(API_ENDPOINTS.blogs, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        const error = await response.json();
        throw new Error(error.detail || error.error || 'Failed to create blog post');
      }

      router.push('/blogs');
    } catch (error) {
      alert(error instanceof Error ? error.message : 'Failed to create blog post');
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
          Create New Blog Post
        </h1>
        <BlogPostForm onSubmit={handleSubmit} />
      </div>
    </div>
  );
}

