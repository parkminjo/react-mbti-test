import axios from "axios";

/** 회원가입/로그인을 위한 API */
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

/** 테스트 결과 관리를 위한 API */
export const jsonAPI = axios.create({
  baseURL: import.meta.env.VITE_JSON_SERVER_URL,
});
