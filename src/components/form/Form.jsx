/****************************************************/
// Filename: Form.jsx
// Created: Eduardo Monter Alonso | Ivan Figueroa | Andrés Arturo Olan
// Change history:
// 04.04.2020 / Eduardo Monter Alonso | Ivan Figeroa | Andrés Arturo Olan
/****************************************************/
/* Componente tipo formulario para modificar información de la api */
/****************************************************/
// EOF:
/****************************************************/
import React, { useState } from "react";
import { useEffect } from "react";
export default (props) => {
  const { fields = [], datas = {}, id } = props;
  const [dataForm, setDataForm] = useState(datas);
  //useEffect para escuchar el ciclo de vida
  useEffect(() => {
    setDataForm(datas);
  }, [datas]);
  return (
    //define el id del formulario al del padre
    <form id={props.id} autoComplete="off">
      <div className="row">
        {/* mapea lo obtenido en la doc de la api */}
        {fields.map((column, index) => {
          return (
            <div key={`columna${index}`} className={column.size}>
              {/* mapea cada columna de la doc*/}
              {column.inputs.map((input, i) => {
                // validación para regresar un checkbox en caso de ser necesario
                if (input.type === "checkbox")
                  return (
                    <div key={`checkbox${i}`}>
                      <input
                        //input.name es el nombre del input
                        name={input.name}
                        // se define como id una concatenación del id del componente padre, el nombre del input y el indice de la columna
                        id={id + input.name + index + i}
                        type="checkbox"
                        //define si la casilla debe o no estar marcada por defecto
                        defaultChecked={dataForm[input.name] || false}
                      />
                      {/* crea una etiqueta con el nombre del input */}
                      <label htmlFor={input.name}>{input.name}</label>
                    </div>
                  );
                let regex = input.regex;
                // valida si el regex de ese input esta definido
                if (typeof regex !== "undefined") {
                  regex = regex.replace("\\b", "");
                  regex = regex.replace("/", "");
                  regex = regex.replace("$/", "");
                  regex = regex.replace("(/^)", "");
                }
                // excluye a los inputs del id y _id del renderizado
                return input.name === "id" || input.name === "_id" ? null : (
                  <div className="form-group" key={`input${i}`}>
                    <label htmlFor={input.name}>{input.name}</label>
                    <input
                      // concate los indices al id del padre y al nombre del input para crear un nuevo id
                      id={id + input.name + index + i}
                      // valida que se cumpla el regex en el input
                      pattern={regex ? String(regex) : "[a-zA-Z0-9]{0,}"}
                      // define el nombre del input
                      name={input.name}
                      // define el valor por defecto
                      defaultValue={dataForm[input.name] || ""}
                      autoComplete="off"
                      // define el tipo de input
                      type={input.type}
                      // define el placeholder del input
                      placeholder={input.placeholder}
                      className="form-control"
                      aria-describedby="emailHelp"
                      // define si el input es requerido
                      required={input.required}
                    />
                  </div>
                );
              })}
            </div>
          );
        })}
      </div>
    </form>
  );
};
