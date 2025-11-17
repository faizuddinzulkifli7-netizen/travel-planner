'use client';

import { useState, useEffect } from 'react';
import { useRouter, useParams } from 'next/navigation';
import BlogPostForm from '../../components/BlogPostForm';
import { BlogPost } from '@/lib/types';
import { API_ENDPOINTS } from '@/lib/api';

export default function EditBlogPage() {
  const router = useRouter();
  const params = useParams();
  const [post, setPost] = useState<BlogPost | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (params.id) {
      fetchPost(params.id as string);
    }
  }, [params.id]);

  const fetchPost = async (id: string) => {
    try {
      const response = await fetch(API_ENDPOINTS.blog(id));
      if (!response.ok) throw new Error('Failed to fetch post');
      const data = await response.json();
      // Convert image_url to imageUrl for frontend
      const post = {
        ...data,
        imageUrl: data.image_url || data.imageUrl,
      };
      setPost(post);
    } catch (error) {
      alert(error instanceof Error ? error.message : 'Failed to fetch post');
      router.push('/blogs');
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async (formData: any) => {
    try {
      // Convert imageUrl to image_url for backend API
      const payload = {
        ...formData,
        image_url: formData.imageUrl,
      };
      delete payload.imageUrl;

      const response = await fetch(API_ENDPOINTS.blog(params.id as string), {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        const error = await response.json();
        throw new Error(error.detail || error.error || 'Failed to update blog post');
      }

      router.push('/blogs');
    } catch (error) {
      alert(error instanceof Error ? error.message : 'Failed to update blog post');
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-lg">Loading...</div>
      </div>
    );
  }

  if (!post) {
    return null;
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
          Edit Blog Post
        </h1>
        <BlogPostForm onSubmit={handleSubmit} initialData={post} />
      </div>
    </div>
  );
}

