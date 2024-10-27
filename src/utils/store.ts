import { create } from "zustand";
import type { Order, Store } from "../utils/types";

export const useStore: Store = create((set: any) => ({
  order: {
    id: 0,
    clientName: "",
    phoneNumber: "",
    piece: "",
    symptoms: "",
  },
  setOrder: (order: Order) => set({ order }),
  resetOrder: () =>
    set({
      order: {
        id: 0,
        clientName: "",
        phoneNumber: "",
        piece: "",
        symptoms: "",
      },
    }),
}));
