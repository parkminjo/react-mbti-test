import { create } from "zustand";
import { persist } from "zustand/middleware";
import { immer } from "zustand/middleware/immer";

const useAuthStore = create(
  persist(
    immer((set) => {
      return {
        isAuthenticated: false,
        login: () => {},
        logout: () => {},
      };
    }),
    {
      name: "authStore",
    }
  )
);

export default useAuthStore;
