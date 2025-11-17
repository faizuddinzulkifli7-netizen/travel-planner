// Backend API configuration
const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000/api/v1';

export const API_ENDPOINTS = {
  blogs: `${API_BASE_URL}/blogs`,
  blog: (id: string) => `${API_BASE_URL}/blogs/${id}`,
};

export default API_BASE_URL;

