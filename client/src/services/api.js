// services/api.js
import axios from 'axios';

// Create axios instance
const API = axios.create({
    baseURL: 'http://localhost:5000/api', // your backend URL
});

// Add token automatically for protected routes
export const setAuthToken = (token) => {
    if (token) {
        API.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    } else {
        delete API.defaults.headers.common['Authorization'];
    }
};

// Register user
export const registerUser = async (userData) => {
    const response = await API.post('/register', userData);
    return response.data;
};

// Login user
export const loginUser = async (userData) => {
    const response = await API.post('/login', userData);
    return response.data;
};

// Example: Fetch profile (protected route)
export const getProfile = async () => {
    const response = await API.get('/register/profile'); // update endpoint if needed
    return response.data;
};
