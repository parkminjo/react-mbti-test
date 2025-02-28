import { create } from "zustand";
import { persist } from "zustand/middleware";
import { immer } from "zustand/middleware/immer";

const useAuthStore = create(
  persist(
    immer((set) => {
      return {
        isLogin: !!localStorage.getItem("accessToken"),
        userInfo: null,
        actions: {
          setIsLogin: (value) => set({ isLogin: value }),
          setUserInfo: (value) => {
            set((state) => {
              state.userInfo = { ...state.userInfo, ...value };
            });
          },
        },
      };
    }),
    {
      name: "authStore",
    }
  )
);

export default useAuthStore;
