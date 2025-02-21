import { create } from "zustand";
import { persist } from "zustand/middleware";
import { immer } from "zustand/middleware/immer";

const useAuthStore = create(
  persist(
    immer((set) => {
      return {
        accessToken: localStorage.getItem("accessToken"),
      };
    }),
    {
      name: "authStore",
    }
  )
);

export default useAuthStore;
