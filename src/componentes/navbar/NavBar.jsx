import { ShoppingCart } from "@mui/icons-material";
import { Badge } from "@mui/material";
import React, { useContext, useState } from "react";
import { NavLink } from "react-router-dom";
import { CarritoContext } from "../../context/CarritoContext";
import "./style.css";
import { TemaContext } from "../../context/TemaContext";
const NavBar = () => {
  const { tema, cambiarTema } = useContext(TemaContext);
  const { listaCompras } = useContext(CarritoContext);
  return (
    <>
      <nav
        className={`navbar ${
          tema === "dark" ? "tema-dark" : "bg-body-tertiary"
        }`}
      >
        <div className="container-fluid d-flex justify-content-start ">
          <NavLink to="/" className="navbar-brand navbar-link">
            <img
              src="src/assets/logo.png"
              alt="Logo"
              width="35"
              height="30"
              className="d-inline-block align-text-top"
            />{" "}
            <span
              className={`titulo-app ${tema === "dark" && "tema-dark-titulo"}`}
            >
              Carrito de Compras
            </span>
          </NavLink>
          <div className="color-tema">
            {tema === "dark" ? (
              <a href="#" onClick={() => cambiarTema("ligth")}>
                <img src="src/assets/ligth.png" className="icono-ligth"></img>
              </a>
            ) : (
              <a href="#" onClick={() => cambiarTema("dark")}>
                <img src="src/assets/dark.png" className="icono-dark"></img>
              </a>
            )}
          </div>
          <NavLink to="/carrito" className="navbar-link "></NavLink>
          <NavLink to="/carrito" className="navbar-link carrito">
            <Badge badgeContent={listaCompras.length} color="secondary">
              <ShoppingCart color="action" />
            </Badge>
          </NavLink>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
