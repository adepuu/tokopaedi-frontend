import {
  FC,
} from "react";
import {addItem} from "../../features/cart/cartSlice.ts";
import {
  useAppDispatch,
} from "../../hooks/useSelector.ts";

interface CardProps {
  name: string;
  price: number;
}

const Card: FC<CardProps> = ({ name, price }) => {
  const dispatch = useAppDispatch();
  
  const handleAddToCart = () => {
    dispatch(addItem({name, price, stock: 1}));
  }
  
  return (
    <div className="flex flex-col gap-4 text-center p-2 border border-gray-500 rounded">
      <div>{name}</div>
      <div>IDR {price}</div>
      <button onClick={handleAddToCart} className="w-full py-2 border border-black rounded">
        Add To Cart
      </button>
    </div>
  );
}

export default Card;