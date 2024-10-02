import {FC} from "react";
import {
  Route,
  Routes
} from "react-router-dom";
import Home from "./pages/Home.tsx";

const Router: FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Home/>} />
    </Routes>
  );
}

export default Router;