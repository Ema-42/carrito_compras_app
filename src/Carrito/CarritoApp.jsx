import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import NavBar from "../componentes/navbar/NavBar";
import ComprasPages from "../pages/ComprasPages";
import CarritoPages from "../pages/CarritoPages";
import './Carrito.css'
const CarritoApp = () => {
  return (
    <>
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
    </>
  );
};

export default CarritoApp;
