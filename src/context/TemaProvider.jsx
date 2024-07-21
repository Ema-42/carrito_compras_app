import { useEffect, useState } from "react";
import { TemaContext } from "./TemaContext";

const TemaProvider = ({ children }) => {
  const [tema, setTema] = useState("light");
  const cambiarTema = (eleccion) => {
    setTema(eleccion);
  };

  return (
    <TemaContext.Provider value={{ tema, cambiarTema }}>
      {children}
    </TemaContext.Provider>
  );
};

export default TemaProvider;
