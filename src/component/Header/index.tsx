import {FC} from "react";
import Cart from "./CartIcon.tsx";

const Header: FC = () => {
  return (
    <div className="w-full flex justify-between items-center p-4 bg-gray-800 text-white fixed top-0 left-0">
      <div>Tokopaedi</div>
      <Cart />
    </div>
  );
}

export default Header;