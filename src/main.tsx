import { createRoot } from 'react-dom/client'
import './index.css'
import {Provider} from "react-redux";
import {BrowserRouter} from "react-router-dom";
import Router from "./Router";
import {store} from "./store";

createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <Provider store={store}>
      <Router />
    </Provider>
  </BrowserRouter>
)
