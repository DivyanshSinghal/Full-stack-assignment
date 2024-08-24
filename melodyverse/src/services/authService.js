// services/authService.js

import axios from 'axios';

// Base URL for API requests
const API_URL = 'http://localhost:5000/api/auth';

// Function to handle signup
export const signup = async (username, email, password) => {
  try {
    const response = await axios.post(`${API_URL}/signup`, { username, email, password });
    return response.data;
  } catch (error) {
    throw error;
  }
};

// Function to handle login
export const login = async (email, password) => {
  try {
    const response = await axios.post(`${API_URL}/login`, { email, password });
    return response.data;
  } catch (error) {
    throw error;
  }
};

// Function to handle email verification
export const verifyEmail = async (token) => {
  const response = await axios.get(`/api/auth/verify-email/${token}`);
  return response.data;
};

// Function to handle forgot password
export const forgotPassword = async (email) => {
  try {
    const response = await axios.post(`${API_URL}/forgot-password`, { email });
    return response.data;
  } catch (error) {
    throw error;
  }
};

// Function to handle password reset
export const resetPassword = async (token, password) => {
  try {
    const response = await axios.post(`${API_URL}/reset-password/${token}`, { password });
    return response.data;
  } catch (error) {
    throw error;
  }
};
