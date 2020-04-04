/****************************************************/
// Filename: Filter.jsx
// Created: Eduardo Monter Alonso | Ivan Figueroa | Andrés Arturo Olan
// Change history:
// 04.04.2020 / Eduardo Monter Alonso | Ivan Figeroa | Andrés Arturo Olan
/****************************************************/
/* Componente para filtrar las columnas de la tabla asignada a el */
/****************************************************/
// EOF:
/****************************************************/
import React from "react";
import { useDispatch } from "react-redux";

export const Filter = (props) => {
  const { attrs, catalogue, type } = props;
  const dispatch = useDispatch();

  /****************************************************/
  /*variable item:Object,
  /*variable dispatchFunc: Dispatch
  /*variable typeConst: string
  /****************************************************/
  /*funcion handleCheck(item, dispatchFunc, typeConst)*/
  /****************************************************/
  /*Dispara el cambio de estado de las columnasvisibles en la tabla
  /****************************************************/
  const handleCheck = (item, dispatchFunc, typeConst) => {
    dispatchFunc({
      type,
      payload: { state: (attrs[item] = !attrs[item]) },
    });
  };

  return (
    <div
      //se definen propiedades de estilo del filtro para agregar el scroll independiente
      className="card p-2"
      style={{
        maxHeight: "480px",
        overflowY: "auto",
        overflowX: "hidden",
      }}
    >
      <p className="">Filtro de: {catalogue}</p>

      {/* se mapean las columnas que tendrá el filtro */}
      {Object.keys(attrs).map((item, index) => {
        return (
          <div
            key={`keyItemList${index}`}
            className="custom-control custom-checkbox mr-sm-2"
          >
            <input
              name={item}
              id={item}
              className="custom-control-input"
              type="checkbox"
              checked={attrs[item]}
              //dispara la función handleCheck
              onChange={() => handleCheck(item, dispatch, type)}
            />
            {/* item es el objeto que representa la colmna de la tabla */}
            <label htmlFor={item} className="custom-control-label">
              {item}
            </label>
          </div>
        );
      })}
    </div>
  );
};
