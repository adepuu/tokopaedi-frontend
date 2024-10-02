import {
  FC,
} from "react";
import CartIcon from "../../assets/cart.svg";
import {useAppSelector} from "../../hooks/useSelector.ts";

const Cart: FC = () => {
  const cart = useAppSelector(state => state.cart);
  
  return <div className="w-6 h-6 relative">
    <img src={CartIcon} alt="Cart" className="w-full h-full object-scale-down fill-white"/>
    {!cart.items.length ? null : (
      <div
        className="absolute -top-2 -right-2 rounded-full bg-red-500 text-white text-[10px] w-4 h-4 aspect-square text-center font-bold">
        {cart.items.length}
      </div>
    )}
  </div>;
}

export default Cart;