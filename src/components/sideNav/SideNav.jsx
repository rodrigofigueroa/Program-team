import React from "react";
import { Link } from "react-router-dom";

export default props => {
  const { routes } = props;
  return (
    <nav className="fixed-top navbar navbar-expand-lg navbar-light bg-light">
      <a className="navbar-brand" href="#">
        Navbar
      </a>
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
          {routes.map(route => {
            if (route.dropDown !== undefined) {
              return (
                <li class="nav-item dropdown">
                  <Link
                    className="nav-link dropdown-toggle"
                    id={route.title}
                    role="button"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    {route.title}
                  </Link>
                  <div class="dropdown-menu" aria-labelledby={route.title}>
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
