import React from "react";
import { Link } from "react-router-dom";

export default props => {
  const { icon, title, route,links = [] } = props;
  return (
    
      <Link to={route} className="card">
        <div className="card-body text-center">
          <i className={icon+' m-4'} style={{fontSize:'80px',color:'#293542'}}/>
          <h4>{title}</h4>
        </div>
        {
          links.length > 0
          ?
          <div className='card-footer'>
            {links.map((link,keyLink) => {
              return(
                <Link to={link.route}>
                  <button className='btn btn-success btn-block m-2'>
                    {link.title}
                  </button>
                </Link>
              );
            })}
          </div> : null
        }
      </Link>
  );
};
