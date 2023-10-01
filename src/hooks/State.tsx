import { ReactElement } from "react";
import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";
import Settings from "../apps/settings/Settings";
import Showcase from "../apps/Showcase";

interface App {
  isOpen: boolean;
  content: ReactElement;
}

export interface WindowState {
  settings: App;
  news: App;
}

export type WindowKey = keyof WindowState;
interface GlobalState {
  window: WindowState;
  open: (key: WindowKey) => void;
  close: (key: WindowKey) => void;
  active: boolean;
  setActive: (bool: boolean) => void;
}

interface LocalState {
  backgroundImage: string;
  setBackgroundImage: (img: string) => void;
}

export const GlobalState = create<GlobalState>((set) => ({
  window: {
    settings: {
      isOpen: true,
      content: <Settings />,
    },
    news: {
      isOpen: false,
      content: <Showcase />,
    },
  },
  open: (key: WindowKey) =>
    set((state) => ({
      window: {
        ...state.window,
        [key]: {
          ...state.window[key],
          isOpen: true,
        },
      },
    })),
  close: (key: WindowKey) =>
    set((state) => ({
      window: {
        ...state.window,
        [key]: {
          ...state.window[key],
          isOpen: false,
        },
      },
    })),
  active: true,
  setActive: (bool) => set(() => ({ active: bool })),
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
