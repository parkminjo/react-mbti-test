import { toast } from "react-toastify";
import { authClient } from "./authClient";
import { INFO_MESSAGES } from "../constants/infoMessages";

export const register = async (userData) => {
  try {
    const response = await authClient.post("/register", userData);
    toast.info(response.data.message);
    return response.data.success;
  } catch (error) {
    toast.error(error.response.data.message);
  }
};

export const login = async (userData) => {
  try {
    const response = await authClient.post("/login", userData);
    if (response.data.success) {
      toast.info(INFO_MESSAGES.LOGIN_SUCCESS);
    }
    return response.data.success;
  } catch (error) {
    toast.error(error.response.data.message);
  }
};

export const updateProfile = async (formData) => {};
