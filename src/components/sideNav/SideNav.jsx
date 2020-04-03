import React, { useState } from "react";
import { Link } from "react-router-dom";

export default props => {
  const { routes } = props;
  const [routesState, setRoutes] = useState(routes);

  const onDropDwon = (v, i, setState) => {
    let aux = v.map(item => item);
    aux.map(item => (item.selected = false));
    aux[i].selected = true;
    setState(aux);
  };

  const onLeave = (v, i, setState) => {
    let aux = v.map(item => item);
    aux.map(item => (item.selected = false));
    setState(aux);
  };
  return (
    <nav className="fixed-top navbar navbar-expand-lg navbar-light bg-light">
      <Link to="/" className="navbar-brand">
        Navbar
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navBar">
        <ul className="navbar-nav mr-auto">
          {routes.map((route, i) => {
            if (route.dropDown !== undefined) {
              return (
                <li
                  key={`li${i}`}
                  className={
                    route.selected
                      ? "nav-item dropdown show"
                      : "nav-item dropdown"
                  }
                  onMouseOver={() => onDropDwon(routesState, i, setRoutes)}
                  onMouseLeave={() => onLeave(routesState, i, setRoutes)}
                >
                  <Link
                    to={route.route}
                    className="nav-link dropdown-toggle"
                    id={route.title}
                    role="button"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded={route.selected}
                  >
                    {route.title}
                  </Link>
                  <div
                    className={
                      routes.selected ? "dropdown-menu show" : "dropdown-menu"
                    }
                    style={{ display: route.selected ? "block" : "none" }}
                    aria-labelledby={route.title}
                  >
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
                  <Link to={route.route}>
                    <a className="nav-link" href="#">
                      {route.title} <span className="sr-only">(current)</span>
                    </a>
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
