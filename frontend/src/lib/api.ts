import axios from "axios";

const API_URL = "http://localhost:8000"; // Update if your FastAPI backend runs elsewhere

export const loginUser = async (credentials: { username: string; password: string }) => {
  const params = new URLSearchParams();
  Object.entries(credentials).forEach(([key, value]) => params.append(key, value));

  const response = await axios.post(`${API_URL}/auth/token`, params, {
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
  });

  return response.data;
};

export const registerUser = async (userData: { username: string; email: string; password: string }) => {
  return axios.post(`${API_URL}/auth/register`, userData);
};

export const fetchUserProfile = async (token: string) => {
  const response = await axios.get(`${API_URL}/users/me/`, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return response.data;
};
