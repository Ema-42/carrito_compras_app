import React, { useContext } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import NavBar from "../componentes/navbar/NavBar";
import ComprasPages from "../pages/ComprasPages";
import CarritoPages from "../pages/CarritoPages";
import "./Carrito.css";
import ProductosProvider from "../context/ProductosProvider";
import CarritoProvider from "../context/CarritoProvider";
import TemaProvider from "../context/TemaProvider";
const CarritoApp = () => {
  return (
    <TemaProvider>
      <ProductosProvider>
        <CarritoProvider>
          <div>
            <NavBar></NavBar>
            <div className="container ">
              <Routes>
                <Route path="/" element={<ComprasPages></ComprasPages>}></Route>
                <Route
                  path="/carrito"
                  element={<CarritoPages></CarritoPages>}
                ></Route>
                <Route
                  path="/*"
                  element={<Navigate to={"/"}></Navigate>}
                ></Route>
              </Routes>
            </div>
          </div>
        </CarritoProvider>
      </ProductosProvider>
    </TemaProvider>
  );
};

export default CarritoApp;
