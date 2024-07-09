import React from "react";
import ReactDOM from "react-dom/client";
import CarritoApp from "./Carrito/CarritoApp.jsx";
import { BrowserRouter } from "react-router-dom";


ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <React.StrictMode>
      <CarritoApp></CarritoApp>
    </React.StrictMode>
    
  </BrowserRouter>
);
