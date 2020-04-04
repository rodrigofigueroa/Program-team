/****************************************************/
// Filename: Shortcuts.jsx
// Created: Eduardo Monter Alonso | Ivan Figueroa | Andrés Arturo Olan
// Change history:
// 04.04.2020 / Eduardo Monter Alonso | Ivan Figeroa | Andrés Arturo Olan
/****************************************************/
/* Componente tipo tarjeta con función de enlace o redireccionamiento*/
/****************************************************/
// EOF:
/****************************************************/
import React from "react";
import { Link } from "react-router-dom";

export default (props) => {
  const { icon, title, route } = props;
  return (
    //route contiene el enlace al cual sera redireccionado
    <Link to={route} className="card">
      <div className="card-body text-center">
        <i
          //icono de tarjeta
          className={icon + " m-4"}
          //tamaño del icono de tarjeta
          style={{ fontSize: "80px", color: "#293542" }}
        />
        {/* titulo de la tarjeta */}
        <h4>{title}</h4>
      </div>
    </Link>
  );
};
