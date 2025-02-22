import { toast } from "react-toastify";
import { ERROR_MESSAGES } from "../constants/errorMessages";
import { INFO_MESSAGES } from "../constants/infoMessages";
import { authAPI } from "./axiosInstance";

/**
 * 회원가입
 * @param {*} userData
 * @returns response.data.success
 */
export const register = async (userData) => {
  /** 유효성 검증 */
  if (userData.id === "") {
    toast.error(ERROR_MESSAGES.ID_REQUIRED_MESSAGE);
    return;
  }
  if (userData.password === "") {
    toast.error(ERROR_MESSAGES.PASSWORD_REQUIRED_MESSAGE);
    return;
  }
  if (userData.passwordCheck === "") {
    toast.error(ERROR_MESSAGES.PASSWORD_CHECK_REQUIRED_MESSAGE);
    return;
  }
  if (userData.passwordCheck !== userData.password) {
    toast.error(ERROR_MESSAGES.PASSWORD_CHECK);
    return;
  }
  if (userData.nickname === "") {
    toast.error(ERROR_MESSAGES.NICKNAME_REQUIRED_MESSAGE);
    return;
  }

  /** 회원가입 진행 */
  try {
    const response = await authAPI.post("/register", userData);
    toast.info(response.data.message);
    return response.data.success;
  } catch (error) {
    toast.error(error.response.data.message);
  }
};

/**
 * 로그인
 * @param {*} userData
 * @returns response.data.success
 */
export const login = async (userData) => {
  /** 유효성 검증 */
  if (userData.id === "") {
    toast.error(ERROR_MESSAGES.ID_REQUIRED_MESSAGE);
    return;
  }
  if (userData.password === "") {
    toast.error(ERROR_MESSAGES.PASSWORD_REQUIRED_MESSAGE);
    return;
  }

  /** 로그인 진행 */
  try {
    const response = await authAPI.post("/login", userData);
    if (response.data.success) {
      localStorage.setItem("accessToken", response.data.accessToken);
      toast.info(INFO_MESSAGES.LOGIN_SUCCESS);
      return response.data.success;
    }
  } catch (error) {
    toast.error(error.response.data.message);
  }
};

export const getUserProfile = async (token) => {
  try {
    const response = await authAPI.get("/user", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    console.log(response);
  } catch (error) {
    toast.error(error.response.data.message);
  }
};

export const updateProfile = async (formData) => {
  try {
    const response = await authAPI.patch("/profile", formData);
    console.log(response);
  } catch (error) {
    toast.error(error.response.data.message);
  }
};
