const API_URL = 'http://localhost:3001/api';

// Helper function to get headers with token
const getHeaders = (): HeadersInit => {
  const token = localStorage.getItem('token');
  return {
    'Content-Type': 'application/json',
    ...(token && { Authorization: `Bearer ${token}` })
  };
};

// Auth functions
export const signIn = async (email: string, password: string) => {
  const response = await fetch(`${API_URL}/auth/login`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email, password })
  });
  const data = await response.json();
  if (!response.ok) {
    throw new Error(data.error || 'Login failed');
  }
  localStorage.setItem('token', data.token);
  return data;
};

export const signUp = async (email: string, password: string, full_name: string, rank: string) => {
  const response = await fetch(`${API_URL}/auth/register`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email, password, full_name, rank })
  });
  const data = await response.json();
  if (!response.ok) {
    throw new Error(data.error || 'Registration failed');
  }
  localStorage.setItem('token', data.token);
  return data;
};

// Post functions
export const getPosts = async () => {
  const response = await fetch(`${API_URL}/posts`, {
    headers: getHeaders()
  });
  const data = await response.json();
  if (!response.ok) {
    throw new Error(data.error || 'Failed to fetch posts');
  }
  return data;
};

export const createPost = async (content: string, imageUrl?: string) => {
  const response = await fetch(`${API_URL}/posts`, {
    method: 'POST',
    headers: getHeaders(),
    body: JSON.stringify({ content, image_url: imageUrl })
  });
  const data = await response.json();
  if (!response.ok) {
    throw new Error(data.error || 'Failed to create post');
  }
  return data;
};