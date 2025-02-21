import { toast } from "react-toastify";
import { ERROR_MESSAGES } from "../constants/errorMessages";
import { INFO_MESSAGES } from "../constants/infoMessages";
import { authAPI } from "./axiosInstance";

export const register = async (userData) => {
  try {
    if (userData.passwordCheck !== userData.password) {
      toast.error(ERROR_MESSAGES.PASSWORD_CHECK);
      return;
    }

    const response = await authAPI.post("/register", userData);
    toast.info(response.data.message);
    return response.data.success;
  } catch (error) {
    toast.error(error.response.data.message);
  }
};

export const login = async (userData) => {
  try {
    if (userData.id === "") {
      toast.error(ERROR_MESSAGES.ID_REQUIRED_MESSAGE);
      return;
    }
    if (userData.password === "") {
      toast.error(ERROR_MESSAGES.PASSWORD_REQUIRED_MESSAGE);
      return;
    }

    const response = await authAPI.post("/login", userData);
    if (response.data.success) {
      toast.info(INFO_MESSAGES.LOGIN_SUCCESS);
      localStorage.setItem("accessToken", response.data.accessToken);
      return response.data.success;
    }
  } catch (error) {
    toast.error(error.response.data.message);
  }
};

export const updateProfile = async (formData) => {};
