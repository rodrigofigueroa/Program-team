import React from "react";
import { Route, Link } from "react-router-dom";

export default props => {
  const { icon, title, route } = props;
  return (
    <Link to={route}>
      <div style={{ height: "100%" }} className="card">
        <div className="cardBody text-center">
          <i className={icon} />
          <h4 className>{title}</h4>
        </div>
      </div>
    </Link>
  );
};
