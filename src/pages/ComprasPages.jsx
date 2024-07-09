import React, { useEffect, useState } from "react";
import Card from "../componentes/navbar/Card";

const ComprasPages = () => {
  const [productos, setProductos] = useState([]);
  const fetchProductos = async () => {
    const response = await fetch("https://fakestoreapi.com/products");
    const data = await response.json();
    setProductos(data);
    console.log(data);
  };
  useEffect(() => {
    fetchProductos();
  }, []);

  return (
    <>
      <h1>Compras</h1>
      <hr />
      {productos.map((producto) => (
        <Card
          imagen={producto.image}
          categoria = {producto.category}
          titulo={producto.title}
          descripcion={producto.description}
          precio={producto.price}
          key={producto.id}
        ></Card>
      ))}
    </>
  );
};

export default ComprasPages;
