import axios from "axios";

export const authAPI = axios.create({
  baseURL: import.meta.env.VITE_SERVER_URL,
});
