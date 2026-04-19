// frontend/src/api/axios.js
import axios from 'axios';

// Use Render backend URL for production, localhost for development
const baseURL = process.env.NODE_ENV === 'production'
  ? 'https://thefolio-backend-81uo.onrender.com/api'
  : 'http://localhost:5000/api';

const instance = axios.create({
  baseURL,
});

// This interceptor runs before EVERY request.
// It reads the token from localStorage and adds it to the Authorization header.
instance.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default instance;