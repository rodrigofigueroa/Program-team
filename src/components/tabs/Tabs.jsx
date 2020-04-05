/****************************************************/
// Filename: Tabs.jsx
// Created: Eduardo Monter Alonso | Ivan Figueroa | Andrés Arturo Olan
// Change history:
// 04.04.2020 / Eduardo Monter Alonso | Ivan Figeroa | Andrés Arturo Olan
/****************************************************/
/* Componente Menú estilo pestañas para navegar entre las vistas de la selección */
/****************************************************/
// EOF:
/****************************************************/
import React, { useState } from "react";
import { Table } from "../table/Table";

export default (props) => {
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
  /* variable: v es la parte de las vistas : views
  /* variable: i es el index 
  /* setState: es el estado
  /*******************************/
  /* cuando da click en algun tab (<i>) se activa el evento onClick y llama a changeTab  
  /* mapea el arreglo que viene de props y a todos los pone en falos y al final el que diste 
  /* click en verdadeo y muestra la vista
  /*******************************/
  const changeTab = (v, i, setState) => {
    let aux = v.map((item) => item);
    aux.map((item) => (item.selected = false));

    aux[i].selected = true;
    setState(aux);
  };
  return (
    <div>
      <ul className="nav nav-justified nav-tabs" id="myTab" role="tablist">
        {/*Se hace un mapeo del array y lo muestra*/}
        {/* Se crea una condicion si view.selected esta seleccionado le agregue la clase active para que se muestre*/}
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
        {/* Se mapea views para mostrar el contenido tambien como el componente Table, se le ingresa index,view */}
        {/* Se crea una condicion si view.selected esta seleccionado le agregue la clase active para que se muestre*/}
        {views.map((view, index) => {
          return (
            <div
              key={"tabContent" + index}
              className={`tab-pane ${view.selected ? "active" : ""}`}
              id={"tabContent" + index}
              role="tabpanel"
              aria-labelledby="home-tab"
            >
              {/* El componente Table se esta renderizando pero no es del componente Tabs se esta reutilizando */}
              <Table
                api={view.component.api}
                catalogo={view.component.catalogo}
                showEyeButton={false}
                attrs={view.component.attrs}
                showTrashButton={false}
                id={props.idTabs + view.component.id + index}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};
