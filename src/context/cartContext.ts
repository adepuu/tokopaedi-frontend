import {createContext} from "react";

export interface CartContextValue extends Cart {
  addItem: (product: Product) => void;
  removeItem: (product: Product) => void;
}

export const initialValue: CartContextValue = {
  items: [],
  total: 0,
  addItem: () => {},
  removeItem: () => {}
};

export const cartContext = createContext<CartContextValue>(initialValue);