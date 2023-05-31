import { create } from "zustand";

interface State {
  window: boolean;
  openWindow: () => void;
  closeWindow: () => void;
  payload: object;
}

export const GlobalState = create<State>()((set) => ({
  window: false,
  openWindow: () => set(() => ({ window: true })),
  closeWindow: () =>
    set(() => ({
      window: false,
    })),
  payload: {},
}));
