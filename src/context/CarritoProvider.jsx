import { useReducer } from "react";
import { CarritoContext } from "./CarritoContext";

const initialState = [];
const CarritoProvider = ({ children }) => {
  const comprasReducer = (state = initialState, action = {}) => {
    switch (action.type) {
      case "[CARRITO] agregar compra":
        return [...state, action.payload];
      case "[CARRITO] aumentar cantidad compra":
        return state.map((item) => {
          const cant = item.cantidad + 1;
          if (item.id == action.payload)
            return {
              ...item,
              cantidad: cant,
            };
          return item;
        });
      case "[CARRITO] disminuir cantidad compra":
        return state.map((item) => {
          const cant = item.cantidad - 1;
          if (item.id == action.payload && item.cantidad > 1)
            return {
              ...item,
              cantidad: cant,
            };
          return item;
        });
      case "[CARRITO] eliminar compra":
        return state.filter((compra) => compra.id !== action.payload);

      default:
        return state;
    }
  };
  const [listaCompras, dispatch] = useReducer(comprasReducer, initialState);
  const agregarCompra = (compra) => {
    compra.cantidad = 1;
    const action = {
      type: "[CARRITO] agregar compra",
      payload: compra,
    };
    dispatch(action);
  };
  const aumentarCantidad = (id) => {
    const action = {
      type: "[CARRITO] aumentar cantidad compra",
      payload: id,
    };
    dispatch(action);
  };
  const disminuiirCantidad = (id) => {
    const action = {
      type: "[CARRITO] disminuir cantidad compra",
      payload: id,
    };
    dispatch(action);
  };
  const eliminarCompra = (id) => {
    const action = {
      type: "[CARRITO] eliminar compra",
      payload: id,
    };
    dispatch(action);
  };

  return (
    <CarritoContext.Provider
      value={{
        listaCompras,
        agregarCompra,
        aumentarCantidad,
        disminuiirCantidad,
        eliminarCompra,
      }}
    >
      {children}
    </CarritoContext.Provider>
  );
};

export default CarritoProvider;
