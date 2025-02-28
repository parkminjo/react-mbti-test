import { create } from "zustand";
import { persist } from "zustand/middleware";
import { immer } from "zustand/middleware/immer";
import { ACCESS_TOKEN } from "../constants/constants";

const useAuthStore = create(
  persist(
    immer((set) => {
      return {
        isLogin: !!localStorage.getItem(ACCESS_TOKEN),
        userInfo: null,
        setIsLogin: (value) => set({ isLogin: value }),
        setUserInfo: (newUserInfo) => {
          set((state) => {
            state.userInfo = { ...state.userInfo, ...newUserInfo };
          });
        },
      };
    }),
    {
      name: "authStore",
    }
  )
);

export default useAuthStore;
