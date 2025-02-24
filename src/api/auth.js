import { toast } from "react-toastify";
import { ERROR_MESSAGES } from "../constants/errorMessages";
import { INFO_MESSAGES } from "../constants/infoMessages";
import { authAPI } from "./axiosInstance";
import {
  LOGIN_END_POINT,
  PROFILE_END_POINT,
  SIGNUP_END_POINT,
  USER_END_POINT,
} from "../constants/authConstants";

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
    const response = await authAPI.post(SIGNUP_END_POINT, userData);
    const isSignupSuccess = response.data.success;

    toast.info(response.data.message);

    return isSignupSuccess;
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
    const response = await authAPI.post(LOGIN_END_POINT, userData);
    const isLoginSuccess = response.data.success;

    if (isLoginSuccess) {
      localStorage.setItem("accessToken", response.data.accessToken);

      toast.info(INFO_MESSAGES.LOGIN_SUCCESS);

      return isLoginSuccess;
    }
  } catch (error) {
    toast.error(error.response.data.message);
  }
};

/**
 * 사용자 정보 가져오기
 * @param {*} token
 * @returns response.data
 */
export const getUserProfile = async (token) => {
  try {
    const response = await authAPI.get(USER_END_POINT, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    return response.data;
  } catch (error) {
    toast.error(error.response.data.message);
  }
};

/**
 * 사용자 프로필 업데이트
 * @param {*} formData
 */
export const updateProfile = async ({ token, nickname }) => {
  try {
    const response = await authAPI.patch(
      PROFILE_END_POINT,
      { nickname },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    toast.info(response.data.message);
  } catch (error) {
    toast.error(error.response.data.message);
  }
};
