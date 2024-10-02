import {FC} from "react";
import {
  Route,
  Routes
} from "react-router-dom";

const Router: FC = () => {
  return (
    <Routes>
      <Route path="/" element={<div/>}/>
    </Routes>
  );
}

export default Router;