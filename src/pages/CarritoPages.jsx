import React, { useContext } from "react";
import { CarritoContext } from "../context/CarritoContext";

const CarritoPages = () => {
  const { listaCompras, aumentarCantidad, disminuiirCantidad, eliminarCompra } =
    useContext(CarritoContext);
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
      <div className="table-responsive">
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
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      class="bi bi-trash-fill"
                      viewBox="0 0 16 16"
                    >
                      <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5M8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5m3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0"></path>
                    </svg>
                  </button>
                </td>
              </tr>
            ))}
            <tr>
              <th>
                <b>Total</b>
              </th>
              <td></td>
              <td></td>
              <td></td>
              <td>{calcularTotal()} Bs.</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="d-grid gap-2 mt-4">
        <button
          className="btn btn-primary"
          onClick={handleImpresion}
          disabled={listaCompras.length < 1}
        >
          COMPRAR
        </button>
      </div>
    </>
  );
};

export default CarritoPages;
