import { create } from "zustand";
//Load balancer 
const useLoaderStore = create((set) => ({
  isLoading: false,

  startLoading: () =>
    set({ isLoading: true }),

  stopLoading: () =>
    set({ isLoading: false }),
}));

export default useLoaderStore;