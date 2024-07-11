import React, { useContext } from "react";
import { CarritoContext } from "../context/CarritoContext";

const CarritoPages = () => {
  const {
    listaCompras,
    aumentarCantidad,
    disminuiirCantidad,
    eliminarCompra,
  } = useContext(CarritoContext);
  const calcularTotal = () => {
    return listaCompras
      .reduce((total, item) => total + item.price * item.cantidad, 0)
      .toFixed(2);
  };
  const handleImpresion = () => {
    print();
  };
  return (
    <>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Item N°</th>
            <th scope="col">Nombre</th>
            <th scope="col">Precio</th>
            <th scope="col">Cantidad</th>
            <th scope="col">Accion</th>
          </tr>
        </thead>
        <tbody>
          {listaCompras.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.title}</td>
              <td>{item.price}</td>
              <td>
                <div className="btn-group">
                  <button
                    className="btn btn-outline-primary"
                    onClick={() => disminuiirCantidad(item.id)}
                  >
                    -
                  </button>
                  <button className="btn btn-primary">{item.cantidad}</button>
                  <button
                    className="btn btn-outline-primary"
                    onClick={() => aumentarCantidad(item.id)}
                  >
                    +
                  </button>
                </div>
              </td>
              <td>
                <button
                  className="btn btn-danger"
                  onClick={() => eliminarCompra(item.id)}
                >
                  Eliminar
                </button>
              </td>
            </tr>
          ))}
          <th>
            <b>Total</b>
          </th>
          <td></td>
          <td></td>
          <td></td>
          <td>{calcularTotal()} Bs.</td>
        </tbody>
      </table>
      <div className="d-grid gap-2 mt-4" >
        <button className="btn btn-primary "onClick={handleImpresion} disabled={listaCompras.length<1}>COMPRAR</button>
      </div>
    </>
  );
};

export default CarritoPages;
