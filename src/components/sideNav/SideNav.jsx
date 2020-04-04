/****************************************************/
// Filename: sideNav.jsx
// Created: Eduardo Monter Alonso | Ivan Figueroa | Andrés Arturo Olan
// Change history:
// 04.04.2020 / Eduardo Monter Alonso | Ivan Figeroa | Andrés Arturo Olan
/****************************************************/
/* Componente para el manejo de la navegación entre páginas*/
/****************************************************/
// EOF:
/****************************************************/
import React, { useState } from "react";
import { Link } from "react-router-dom";

export default (props) => {
  const { routes } = props;
  const [routesState, setRoutes] = useState(routes);

  /****************************************************/
  /*variable views:Object,
  /*variable index: int
  /*variable setState: React.Dispatch
  /****************************************************/
  /*funcion onDropDown(views, index, setState)*/
  /****************************************************/
  /*Dispara el el cambio de estado de los dropdown buttons para desplegar su contenido
  /****************************************************/
  const onDropDwon = (views, index, setState) => {
    let aux = views.map((item) => item);
    aux.map((item) => (item.selected = false));
    aux[index].selected = true;
    setState(aux);
  };
  /****************************************************/
  /*variable views:Object,
  /*variable setState: React.Dispatch
  /****************************************************/
  /*funcion onDropDown(views, setState)*/
  /****************************************************/
  /*Dispara el el cambio de estado de los dropdown buttons para ocultar su contenido
  /****************************************************/
  const onLeave = (views, setState) => {
    let aux = views.map((item) => item);
    aux.map((item) => (item.selected = false));
    setState(aux);
  };

  return (
    <nav className="fixed-top navbar navbar-expand-lg navbar-light bg-light">
      <Link to="/" className="navbar-brand">
        Kuhni
      </Link>
      <button className="navbar-toggler" type="button">
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navBar">
        <ul className="navbar-nav ml-auto">
          {/* mapea el arreglo de rutas para definir los enlaces de los dropdown */}
          {routes.map((route, i) => {
            if (route.dropDown !== undefined) {
              //route.selected define el dropdwon activado
              return (
                <li
                  key={`li${i}`}
                  className={
                    route.selected
                      ? "nav-item dropdown show"
                      : "nav-item dropdown"
                  }
                  //llama a la función onDropDwon
                  onMouseOver={() => onDropDwon(routesState, i, setRoutes)}
                  //llama a la función onLeave
                  onMouseLeave={() => onLeave(routesState, setRoutes)}
                >
                  <Link
                    //route.route define el enlace hacia donde se hará el redireccionamiento
                    to={route.route}
                    className="nav-link dropdown-toggle"
                    //route.title muestra el titulo del enlace
                    id={route.title}
                    role="button"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    //route.selected define el dropdwon activado
                    aria-expanded={route.selected}
                  >
                    {route.title}
                  </Link>
                  <div
                    className={
                      // routes.selected define el menú que está visible que fué disparado por la acción route.selected
                      routes.selected ? "dropdown-menu show" : "dropdown-menu"
                    }
                    // define el estilo para mostrar u ocultar el dropDown menu activo
                    style={{ display: route.selected ? "block" : "none" }}
                    //route.title muestra el titulo del enlace
                    aria-labelledby={route.title}
                  >
                    {/* mapea el arreglo de rutas para definir los enlaces de los dropdown */}
                    {route.dropDown.map((item, index) => {
                      return (
                        <Link
                          key={`link${index}`}
                          to={item.route}
                          className="dropdown-item"
                        >
                          {item.title}
                        </Link>
                      );
                    })}
                  </div>
                </li>
              );
            } else {
              return (
                <li className="nav-item">
                  {/* route.route define el enlace común hacia donde se hará el redireccionamiento */}
                  <Link to={route.route} className="nav-link">
                    {route.title} <span className="sr-only">(current)</span>
                  </Link>
                </li>
              );
            }
          })}
        </ul>
      </div>
    </nav>
  );
};
