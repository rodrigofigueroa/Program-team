/****************************************************/
// Filename: Modal.jsx
// Created: Eduardo Monter Alonso | Ivan Figueroa | Andrés Arturo Olan
// Change history:
// 04.04.2020 / Eduardo Monter Alonso | Ivan Figeroa | Andrés Arturo Olan
/****************************************************/
/*Componente tipo ventana emergente para Mostrar información sobre el contenido seleccionado*/
/****************************************************/
// EOF:
/****************************************************/
import React from "react";
import { useSelector } from "react-redux";

import { useEffect } from "react";
import { useState } from "react";

export default (props) => {
  const {
    children,
    colorBtn,
    api,
    catalogo,
    datas = {},
    showActionButton = true,
    setDataTable,
    dataTable,
  } = props;
  const modalState = useSelector((state) => state.ui.modal);
  const [typeButton, setTypeButton] = useState(false);
  //useEffect para escuchar el ciclo de vida
  useEffect(() => {
    if (Object.keys(props.datas).length > 1) {
      setTypeButton(true);
    } else {
      setTypeButton(false);
    }
  }, [props.datas]);
  /****************************************************/
  /*funcion loadTableFormApi()*/
  /****************************************************/
  /*dispara la carga de información a la table desde una consulta a la API
  /****************************************************/
  const onUpdate = () => {
    let form = document.querySelector("form[id=" + props.idModal + "]");
    let inputs = form.querySelectorAll("input");
    let data = new URLSearchParams();
    let error = false;
    let dataSuplice = {};
    //recorrido para mapear los inputs
    for (const input of inputs) {
      //recorrido para mapear el data
      data.append(input.name, input.value);
      //dataSuplice almacena los valores de los inputs
      dataSuplice[input.name] = input.value;
      //condición para saber si el formulario cumple con el tipo de dato
      if (input.validity.patternMismatch) {
        form.classList.add("was-validated");
        error = true;
      } else {
        //condición para validar campos requeridos
        if (input.validity.valueMissing) {
          form.classList.add("was-validated");
          error = true;
        }
        //condición para validar si el input es un checkbox
        if (input.type === "checkbox") {
          dataSuplice[input.name] = input.checked;
          data.append(input.name, input.checked);
        }
      }
    }
    //validación si el ervidor contesto la petición sin errores
    if (!error) {
      let newData = [];
      let auxData = [];
      dataTable.map((datos) => newData.push(datos));
      (async () => {
        try {
          const response = await fetch(
            `${api}api/${catalogo}/${datas._id}/update`,
            {
              method: "POST",
              mode: "cors",
              headers: {
                "Content-Type":
                  "application/x-www-form-urlencoded;charset=UTF-8",
              },
              body: data,
            }
          );
          //validación si el ervidor contesto la petición con un error
          if (!response.ok) {
            const error = await response.text();
            console.error(error);
          }
          await response.json();
          //mapeo de la información
          newData.map((item) => {
            if (String(item._id) === String(datas._id)) {
              item = dataSuplice;
              item._id = datas._id;
            }
            return auxData.push(item);
          });
          setDataTable(auxData);
        } catch (error) {
          console.error(error);
        }
      })();
    }
  };
  /****************************************************/
  /*funcion onSave()*/
  /****************************************************/
  /*dispara el guardado de información en la api
  /****************************************************/
  const onSave = () => {
    let form = document.querySelector("form");
    let inputs = form.querySelectorAll("input");
    let data = {};
    let error = false;
    let newData = [];
    //copia del arreglo del estado de la tabla
    dataTable.map((datos) => newData.push(datos));
    //iteración de los inputs del formulario
    for (const input of inputs) {
      data[input.name] = input.value;
      //validación del cumplimiento de rege
      if (input.validity.patternMismatch) {
        form.classList.add("was-validated");
        error = true;
      } else {
        //validación de campos requeridos llenos
        if (input.validity.valueMissing) {
          form.classList.add("was-validated");
          error = true;
        }
        //validación de input checkbox
        if (input.type === "checkbox") {
          data[input.name] = input.checked;
        }
      }
    }
    //validación de repueta del servidor sin error
    if (!error) {
      data.id = catalogo[0] + Math.random().toString(32).slice(2);
      (async () => {
        alert("agregando");
        try {
          const response = await fetch(`${api}api/${catalogo}/new`, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            mode: "cors",
            body: JSON.stringify(data),
          });
          //validación de respuesta del servidor con error
          if (!response.ok) {
            const error = await response.text();
            console.error(error);
          }
          await response.json();
          newData.unshift({ ...data, _id: data.id });

          setDataTable(newData);
        } catch (error) {
          console.error(error);
        }
      })();
    }
  };
  /****************************************************/
  /*funcion toggleModal()*/
  /****************************************************/
  /*dispara el cambio de estado de mostrar modal
  /****************************************************/
  const toggleModal = () => {
    let modal = document.getElementById("modal" + props.idModal);
    //validación si el modal se está mostrando
    if (modal.classList.value === "modal fade show") {
      modal.classList.remove("show");
      modal.style.display = "none";
      //validación si el modal está oculto
    } else if (modal.classList.value === "modal fade") {
      modal.classList.add("show");
      modal.style.display = "block";
    }
  };

  return (
    <>
      {/* disparo de la función toggleModal*/}
      {/* colorBtn color del botón que lanzará el modal*/}
      {/* props.btnLabel etiqueta del botón que lanzará el modal*/}
      <span className={colorBtn} onClick={(e) => toggleModal(e)}>
        {props.btnLabel}
      </span>
      {/* props.idModal propaga el id del padre*/}
      <div
        className={
          modalState["open" + props.idModal] ? "modal fade show" : "modal fade"
        }
        //modalState define el estado del modal para ser mostrado o no
        style={{
          display: modalState["open" + props.idModal] ? "block" : "none",
        }}
        id={"modal" + props.idModal}
        tabIndex="-1"
        role="dialog"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-xl" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                {/* props.catalogo imprime el nombre del catalogo*/}
                {String(props.catalogo).toUpperCase()}
              </h5>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
                onClick={(e) => toggleModal(e)}
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div
              style={{ height: "350px", overflowY: "auto" }}
              className="modal-body"
            >
              {/* children es el componente wrappeado en el modal */}
              {children}
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-danger"
                data-dismiss="modal"
                onClick={(e) => toggleModal(e)}
              >
                Close
              </button>
              {/* showActionButton  define si debe mostrarse o no el botón de acción*/}
              {showActionButton && (
                <>
                  {typeButton ? (
                    <button
                      type="button"
                      className="btn btn-success"
                      // dispara la función onUpdate
                      onClick={() => onUpdate()}
                    >
                      Actualizar
                    </button>
                  ) : (
                    <button
                      type="button"
                      className="btn btn-primary"
                      // dispara la función onSave
                      onClick={() => onSave()}
                    >
                      Guardar
                    </button>
                  )}
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
