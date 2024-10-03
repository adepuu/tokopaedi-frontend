import {FC} from "react";
import {
  Route,
  Routes
} from "react-router-dom";
import Home from "./pages/Home.tsx";
import InternalProducts from "./pages/internal/Products.tsx";

const Router: FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/internal/products" element={<InternalProducts/>} />
    </Routes>
  );
}

export default Router;