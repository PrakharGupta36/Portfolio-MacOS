import { ReactElement } from "react";
import { create } from "zustand";
import { persist } from "zustand/middleware";

interface State {
  backgroundImage: string;
  setBackgroundImage: (img: string) => void;
  window: boolean;
  openWindow: (element?: ReactElement) => void;
  closeWindow: () => void;
  content: ReactElement;
}

export const GlobalState = create<State>()(
  persist(
    (set) => ({
      backgroundImage: "/wallpapers/01.jpg",
      setBackgroundImage: (img) => set(() => ({ backgroundImage: img })),
      window: false,
      openWindow: (element?: ReactElement) =>
        set(() => ({
          content: element || <section>Page in construction</section>,
          window: true,
        })),
      closeWindow: () => set(() => ({ window: false })),
      content: <> </>,
    }),
    {
      name: "app-state",
      getStorage: () => localStorage,
    }
  )
);
