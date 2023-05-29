import { create } from "zustand";

interface State {
  backgroundImage: string;
  setBackgroundImage: (img: string) => void;
}

export const useSettings = create<State>()((set) => ({
  backgroundImage: "/wallpapers/01.jpg",
  setBackgroundImage: (img) => set(() => ({ backgroundImage: img })),
}));
