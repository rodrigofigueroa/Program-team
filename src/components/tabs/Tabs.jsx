import React, { useState } from "react";
import {Table} from '../table/Table';

export default props => {
  /*******************************/
  /* variable: props
  /* destructuring: viewProps 
  /*******************************/
  const { viewsProps } = props;
  /*******************************/
  /* Usamos useState() Hook para insertar un array en el estado
  /* setViews: para actualizar el stado
  /* variable: views
  /*******************************/
  const [views, setViews] = useState(viewsProps);
  
  /*******************************/
  
  /*******************************/
  const changeTab = (v, i, setState) => {
    let aux = v.map(item => item);
    aux.map(item => (item.selected = false));

    aux[i].selected = true;
    setState(aux);
  };
  return (
    <div>
      <ul className="nav nav-justified nav-tabs" id="myTab" role="tablist">
        {views.map((view, index) => {
          return (
            <li
              key={`ul${index}`}
              onClick={() => changeTab(views, index, setViews)}
              className="nav-item"
            >
              <a
                className={`nav-link ${view.selected ? "active" : ""}`}
                id="home-tab"
                data-toggle="tab"
                href="#home"
                role="tab"
                aria-controls="home"
                aria-selected="true"
              >
                {view.title}
              </a>
            </li>
          );
        })}
      </ul>

      <div className="tab-content" id="myTabContent">
        {views.map((view, index) => {
          return (
            <div
              key={"tabContent" + index}
              className={`tab-pane ${view.selected ? "active" : ""}`}
              id={"tabContent" + index}
              role="tabpanel"
              aria-labelledby="home-tab"
            >
              <Table
                api={view.component.api}
                catalogo={view.component.catalogo}
                showEyeButton={false}
                attrs={view.component.attrs}
                showTrashButton={false}
                id={props.idTabs+view.component.id}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};
