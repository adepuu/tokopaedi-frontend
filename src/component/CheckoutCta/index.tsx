import {
  FC,
  useContext
} from "react";
import { cartContext } from "../../context/cartContext.ts";

const CheckoutCta: FC = () => {
  const { total, items } = useContext(cartContext);
  
  if (!items.length) {
    return null;
  }
  
  return (
    <div className="w-full px-4 pb-4 pointer-events-none fixed bottom-0 left-0 z-20">
      <button className="w-full py-2 bg-gray-800 text-white rounded-xl flex justify-between px-4">
        <span>Checkout</span>
        <span>${total}</span>
      </button>
    </div>
  );
}

export default CheckoutCta;