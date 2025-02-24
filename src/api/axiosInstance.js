import axios from "axios";

export const authAPI = axios.create({
  baseURL: import.meta.env.VITE_AUTH_SERVER_URL,
});

authAPI.interceptors.request.use((config) => {
  const token = localStorage.getItem("accessToken");
  if (token) {
    config.headers["Authorization"] = `Bearer ${token}`;
  }

  return config;
});

export const jsonAPI = axios.create({
  baseURL: import.meta.env.VITE_JSON_SERVER_URL,
});
