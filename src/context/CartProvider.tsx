import {
  FC,
  ReactNode,
  useCallback,
  useMemo,
  useState
} from "react";

import {
  cartContext,
} from "./cartContext"

interface CartProviderProps {
  children: ReactNode;
}

const CartProvider: FC<CartProviderProps> = ({ children }) => {
  const [cartItem, setCartItem] = useState<CartItem[]>([]);
  
  const addItem = useCallback((product: Product) => {
    setCartItem(prev => {
      const index = prev.findIndex((item) => item.product.name === product.name);
      if (index !== -1) {
        prev[index].quantity += 1;
        return [...prev];
      }
      return [...prev, {product, quantity: 1}];
    });
  }, []);
  
  const removeItem = useCallback((product: Product) => {
    setCartItem(prev => {
      const index = prev.findIndex((item) => item.product.name === product.name);
      if (index !== -1) {
        prev[index].quantity -= 1;
        if (prev[index].quantity === 0) {
          prev.splice(index, 1);
        }
        return [...prev];
      }
      return [...prev];
    })
  }, []);
  
  const total = useMemo(() => {
    let result = 0;
    cartItem.forEach(item => {
      result += item.product.price * item.quantity;
    });
    return result;
  }, [cartItem]);
  
  return (
    <cartContext.Provider value={{
      items: cartItem,
      total,
      addItem,
      removeItem
    }}>
      {children}
    </cartContext.Provider>
  );
}

export default CartProvider;