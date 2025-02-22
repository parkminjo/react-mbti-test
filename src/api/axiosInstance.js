import axios from "axios";

export const authAPI = axios.create({
  baseURL: import.meta.env.VITE_AUTH_SERVER_URL,
});

export const jsonAPI = axios.create({
  baseURL: import.meta.env.VITE_JSON_SERVER_URL,
});
