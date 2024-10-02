import { createRoot } from 'react-dom/client'
import './index.css'
import {BrowserRouter} from "react-router-dom";
import CartProvider from "./context/CartProvider.tsx";
import Router from "./Router.tsx";

createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <CartProvider>
      <Router />
    </CartProvider>
  </BrowserRouter>
)
