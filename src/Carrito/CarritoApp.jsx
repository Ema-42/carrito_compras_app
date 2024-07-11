import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import NavBar from "../componentes/navbar/NavBar";
import ComprasPages from "../pages/ComprasPages";
import CarritoPages from "../pages/CarritoPages";
import "./Carrito.css";
import ProductosProvider from "../context/ProductosProvider";
import CarritoProvider from "../context/CarritoProvider";
const CarritoApp = () => {
  return (
    <ProductosProvider>
      <CarritoProvider>
        <NavBar></NavBar>
        <div className="container ">
          <Routes>
            <Route path="/" element={<ComprasPages></ComprasPages>}></Route>
            <Route
              path="/carrito"
              element={<CarritoPages></CarritoPages>}
            ></Route>
            <Route path="/*" element={<Navigate to={"/"}></Navigate>}></Route>
          </Routes>
        </div>
      </CarritoProvider>
    </ProductosProvider>
  );
};

export default CarritoApp;
