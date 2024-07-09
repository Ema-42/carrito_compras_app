import React, { useState } from "react";
import "../../styles/card.css";

const Card = ({ imagen, categoria, titulo, descripcion, precio }) => {
  const [added, setAdded] = useState(false);
  return (
    <>
      <div className="tarjeta">
        <div className="img-container">
          <img src={imagen} alt={titulo} className="tarjeta-imagen" />
        </div>
        <div className="tarjeta-contenido">
          <h3 className="tarjeta-titulo"> {titulo}</h3>
          <p className="tarjeta-cat">Categoria: <span className="tarjeta-categoria">{categoria}</span></p>
          <p className="tarjeta-descripcion"> {descripcion}</p>
          <p className="tarjeta-precio">{precio}</p>
          {!added ? (
            <button type="button" className="boton-agregar boton-accion">
              Agregar al carrito 🛒
            </button>
          ) : (
            <button type="button" className="boton-quitar boton-accion">
              Quitar ❌
            </button>
          )}
        </div>
      </div>
    </>
  );
};

export default Card;
