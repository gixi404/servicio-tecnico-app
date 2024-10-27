import { StoreApi, UseBoundStore } from "zustand";

type Component = React.JSX.Element;

type Store = UseBoundStore<StoreApi<any>>;

type Order = {
  id: number;
  clientName: string;
  phoneNumber: string;
  piece: string;
  symptoms: string;
};

export type { Component, Store, Order };
