import { create } from "zustand";
import { persist } from "zustand/middleware";
import { immer } from "zustand/middleware/immer";

const useAuthStore = create(
  persist(
    immer((set) => {
      return {
        accessToken: localStorage.getItem("accessToken"),
        isLogin: false,
        setIsLogin: (value) => set({ isLogin: value }),
      };
    }),
    {
      name: "authStore",
    }
  )
);

export default useAuthStore;
