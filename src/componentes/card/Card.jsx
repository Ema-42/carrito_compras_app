import React, { useContext, useState } from "react";
import "../../styles/card.css";
import { CarritoContext } from "../../context/CarritoContext";

const Card = ({
  imagen,
  categoria,
  titulo,
  descripcion,
  precio,
  id,
  handleAgregar,
  handleQuitar,
}) => {
  const [added, setAdded] = useState(false);
  const clickAgregar = () => {
    handleAgregar();
    setAdded(true);
  };
  const clickQuitar = () => {
    handleQuitar();
    setAdded(false);
  };
  const { listaCompras } = useContext(CarritoContext);
  return (
    <>
      <div className="tarjeta">
        <div className="img-container">
          <img src={imagen} alt={titulo} className="tarjeta-imagen" />
        </div>
        <div className="tarjeta-contenido">
          <h3 className="tarjeta-titulo"> {titulo}</h3>
          <p className="tarjeta-cat">
            Categoria: <span className="tarjeta-categoria">{categoria}</span>
          </p>
          <p className="tarjeta-descripcion"> {descripcion}</p>
          <p className="tarjeta-precio">{precio}</p>
          {!listaCompras.find((item) => item.id === id) ? (
            <button
              type="button"
              className="boton-agregar boton-accion"
              onClick={clickAgregar}
            >
              Agregar al carrito 🛒
            </button>
          ) : (
            <button
              type="button"
              className="boton-quitar boton-accion"
              onClick={clickQuitar}
            >
              Quitar del carrito❌
            </button>
          )}
        </div>
      </div>
    </>
  );
};

export default Card;
