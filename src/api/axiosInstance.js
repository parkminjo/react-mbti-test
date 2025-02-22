import axios from "axios";

export const authAPI = axios.create({
  baseURL: import.meta.env.AUTH_SERVER_URL,
});

export const jsonAPI = axios.create({
  baseURL: "http://localhost:4000/testResults",
});
