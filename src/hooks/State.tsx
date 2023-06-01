import { ReactElement } from "react";
import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

interface WindowState {
  settings: boolean;
  canvas: boolean;
}

interface GlobalState {
  window: WindowState;
  openSettings: (element?: ReactElement) => void;
  closeSettings: () => void;
  content: ReactElement;
}

interface LocalState {
  backgroundImage: string;
  setBackgroundImage: (img: string) => void;
}

export const GlobalState = create<GlobalState>()((set) => ({
  window: { settings: false, canvas: false },
  openSettings: (element?: ReactElement) =>
    set((state) => ({
      content: element || <section>Page in construction</section>,
      window: { ...state.window, settings: true },
    })),
  closeSettings: () =>
    set((state) => ({
      window: { ...state.window, settings: false },
    })),
  content: <section key='default-content'>Default content</section>,
}));

const localStatePersist = persist<LocalState>(
  (set) => ({
    backgroundImage: "/wallpapers/01.jpg",
    setBackgroundImage: (img) => set(() => ({ backgroundImage: img })),
  }),
  {
    name: "local-state",
    storage: createJSONStorage(() => localStorage),
  }
);

export const LocalState = create<LocalState>(localStatePersist as any);
