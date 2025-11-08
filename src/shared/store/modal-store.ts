import type { ReactNode } from "react";
import { create } from "zustand";

interface ModalConfig {
  animationType?: "none" | "slid" | "fade";
  transparent?: boolean;
  startBarTranslucent?: boolean;
}

interface ModalStore {
  isOpen: boolean;
  content: ReactNode | null;
  config: ModalConfig;
  open: (content: ReactNode, config: ModalConfig) => void;
}

export const useModalStore = create<ModalStore>((set, get) => ({
  isOpen: false,
  content: null,
  config: {
    animationType: "fade",
    transparent: true,
    startBarTranslucent: false,
  },
  open: (content: ReactNode, config: ModalConfig) =>
    set({ content, config: { ...get().config, ...config } }),
  close: () =>
    set({
      content: null,
      isOpen: false,
    }),
}));
