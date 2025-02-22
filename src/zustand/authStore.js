import { create } from "zustand";
import { persist } from "zustand/middleware";
import { immer } from "zustand/middleware/immer";

const useAuthStore = create(
  persist(
    immer((set) => {
      return {
        accessToken: null,
        setAccessToken: (value) => set({ accessToken: value }),
        isLogin: !!localStorage.getItem("accessToken"),
        setIsLogin: (value) => set({ isLogin: value }),
        userInfo: null,
        setUser: (value) => {
          set({ userInfo: value });
        },
      };
    }),
    {
      name: "authStore",
    }
  )
);

export default useAuthStore;
