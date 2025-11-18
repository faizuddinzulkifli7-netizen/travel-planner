// Backend API configuration
// Supports both development (full URL) and production (relative path through nginx)
const getApiBaseUrl = () => {
  const envUrl = process.env.NEXT_PUBLIC_API_URL;
  if (envUrl) {
    // If it starts with /, it's a relative path (production with nginx)
    // If it starts with http, it's a full URL (development)
    return envUrl;
  }
  // Default to development URL
  return 'http://localhost:8000/api/v1';
};

const API_BASE_URL = getApiBaseUrl();

export const API_ENDPOINTS = {
  blogs: `${API_BASE_URL}/blogs`,
  blog: (id: string) => `${API_BASE_URL}/blogs/${id}`,
};

export default API_BASE_URL;

