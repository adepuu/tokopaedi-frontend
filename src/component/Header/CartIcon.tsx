import {
  FC,
  useContext
} from "react";
import CartIcon from "../../assets/cart.svg";
import { cartContext } from "../../context/cartContext.ts";

const Cart: FC = () => {
  const { items } = useContext(cartContext);
  return <div className="w-6 h-6 relative">
    <img src={CartIcon} alt="Cart" className="w-full h-full object-scale-down fill-white"/>
    {!items.length ? null : (
      <div
        className="absolute -top-2 -right-2 rounded-full bg-red-500 text-white text-[10px] w-4 h-4 aspect-square text-center font-bold">
        {items.length}
      </div>
    )}
  </div>;
}

export default Cart;