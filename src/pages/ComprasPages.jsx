import React, { useContext, useEffect, useState } from "react";
import Card from "../componentes/card/Card";
import { ProductosContext } from "../context/ProductosContext";
import { CarritoContext } from "../context/CarritoContext";
import { TemaContext } from "../context/TemaContext";
import "./compras.css";

const ComprasPages = () => {
  const { productos } = useContext(ProductosContext);
  const { tema } = useContext(TemaContext);
  const { agregarCompra, eliminarCompra } = useContext(CarritoContext);
  const handleAgregar = (compra) => {
    agregarCompra(compra);
  };
  const handleQuitar = (id) => {
    eliminarCompra(id);
  };
  {
    `container contenedor-lista-productos ${
      tema === "dark" ? "tema-dark" : "bg-body-tertiary"
    }`;
  }
  return (
    <>
      <div
        className={`container contenedor-lista-productos ${
          tema === "dark" && "tema-dark"
        }`}
      >
        <h1>Compras</h1>
        <hr />
        {productos.map((producto) => (
          <Card
            imagen={producto.image}
            categoria={producto.category}
            titulo={producto.title}
            descripcion={producto.description}
            precio={producto.price}
            id={producto.id}
            key={producto.id}
            handleAgregar={() => handleAgregar(producto)}
            handleQuitar={() => handleQuitar(producto.id)}
          ></Card>
        ))}
      </div>
    </>
  );
};

export default ComprasPages;
