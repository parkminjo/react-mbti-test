import { authClient } from "./authClient";

export const register = async (userData) => {
  const response = await authClient.post("/register", userData);
  console.log(response);
  return response.data;
};

export const login = async (userData) => {};

export const getUserProfile = async (token) => {};

export const updateProfile = async (formData) => {};
