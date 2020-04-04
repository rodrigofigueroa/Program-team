/****************************************************/
// Filename: Shortcuts.jsx
// Created: Eduardo Monter Alonso | Ivan Figueroa | Andrés Arturo Olan
// Change history:
// 04.04.2020 / Eduardo Monter Alonso | Ivan Figeroa | Andrés Arturo Olan
/****************************************************/
/* Componente tipo cabezera con busqueda*/
/****************************************************/
// EOF:
/****************************************************/
import React from "react";

export default (props) => {
  const { catalogo, setSearchAttr, attrs, setSearch } = props;
  /****************************************************/
  /*variable event:HTMLInputEvent,
  /****************************************************/
  /*funcion handleSearch(event)*/
  /****************************************************/
  /*Dispara la el cambio de columna para la busqueda 
  /****************************************************/
  const handleSearch = (event) => {
    setSearchAttr(event.target.value);
  };
  /****************************************************/
  /*variable event:HTMLInputEvent,
  /****************************************************/
  /*funcion handleEnter(event)*/
  /****************************************************/
  /*Dispara la busqueda al precionar la tecla Enter en el input
  /****************************************************/
  const handleEnter = (event) => {
    if (e.key === "Enter") {
      setSearch(event.target.value);
    }
  };

  return (
    <div className="card p-2 my-2 bg-info">
      <div className="row">
        <div className="col-3">
          {/* el titulo del catalogo */}
          <h2 className="text-white">{catalogo}</h2>
        </div>
        <div className="col-3">
          <select
            //dispara la función handleSearch
            onChangeCapture={(e) => handleSearch(e)}
            id="searchSelect"
            name="searchSelect"
            autoComplete="off"
            type="select"
            className="form-control"
            aria-describedby="emailHelp"
          >
            {/* mapeo de las opciones de la columna por la que se buscara */}
            {Object.keys(attrs).map((option, index) => {
              // option es el nombre de la columna en el select
              return <option key={`option${index}`}>{option}</option>;
            })}
          </select>
        </div>
        <div className="col-6">
          <input
            //dispara el evento handleEnter
            onKeyPress={(event) => handleEnter(event)}
            id="searchInput"
            name="searchInput"
            defaultValue=""
            autoComplete="off"
            type="search"
            placeholder="buscar"
            className="form-control"
            aria-describedby="emailHelp"
          />
        </div>
      </div>
    </div>
  );
};
