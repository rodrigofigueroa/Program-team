import React from "react";
import { useSelector } from "react-redux";

import { useEffect } from "react";
import { useState } from "react";

export default props => {
  const { children, colorBtn, api, catalogo, datos } = props;
  const modalState = useSelector(state => state.ui.modal);

  const onDelete = () => {};

  const onUpdate = () => {
    let form = document.querySelector("form");
    let inputs = form.querySelectorAll("input");
    let data = {};
    let error = false;

    for (const input of inputs) {
      data[input.name] = input.value;
      if (input.required && input.validity.valueMissing == true) {
        form.classList.add("was-validated");
        error = true;
      } else {
        if (input.type == "checkbox") {
          data[input.name] = input.checked;
        }
      }
    }

    if (!error) {
      (async () => {
        alert("no hay error");
        try {
          const response = await fetch(
            `${api}api/${catalogo}/${datos._id}/update`,
            {
              method: "POST",
              mode: "no-cors",
              body: JSON.stringify(data)
            }
          );
          if (!response.ok) {
            const error = await response.text();
            console.error(error);
          }
          const json = await response.json();
          console.log(json);
          // setResult(json);
        } catch (error) {
          console.error(error);
        }
      })();
    }
  };

  const onSave = () => {
    let form = document.querySelector("form");
    let inputs = form.querySelectorAll("input");
    let data = {};
    let error = false;

    for (const input of inputs) {
      data[input.name] = input.value;
      if (input.required && input.validity.valueMissing == true) {
        form.classList.add("was-validated");
        error = true;
      } else {
        if (input.type == "checkbox") {
          data[input.name] = input.checked;
        }
      }
    }

    if (!error) {
      const catalogoLength = String(catalogo).length;
      const splidseado = catalogo.slice(0, catalogoLength - 1);
      data.id =
        splidseado +
        Math.random()
          .toString(32)
          .slice(2);
      debugger;
      (async () => {
        alert("no hay error");
        try {
          const response = await fetch(`${api}api/${catalogo}/new`, {
            method: "POST",
            headers: {
              "Content-Type": "application/json"
            },
            mode: "cors",
            body: JSON.stringify(data)
          });
          if (!response.ok) {
            const error = await response.text();
            console.error(error);
          }
          const json = await response.json();
          console.log(json);
          // setResult(json);
        } catch (error) {
          console.error(error);
        }
      })();
    }
  };

  let toggleModal = () => null;
  const [typeButton, setTypeButton] = useState(false);
  useEffect(() => {
    toggleModal = event => {
      let modal = document.getElementById("modal" + props.idModal);
      if (modal.classList.value === "modal fade show") {
        modal.classList.remove("show");
        modal.style.display = "none";
      } else if (modal.classList.value === "modal fade") {
        modal.classList.add("show");
        modal.style.display = "block";
      }
    };
  });

  useEffect(() => {
    if (Object.keys(props.datos).length > 1) {
      setTypeButton(true);
    } else {
      setTypeButton(false);
    }
  }, [props.datos]);

  return (
    <>
      <button
        type="button"
        className={`btn ${colorBtn} mx-1`}
        onClick={e => toggleModal(e)}
      >
        {props.title}
      </button>

      <div
        // style={{maxHeight:calc(100% - )}}
        className={
          modalState["open" + props.idModal] ? "modal fade show" : "modal fade"
        }
        style={{
          display: modalState["open" + props.idModal] ? "block" : "none"
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
                Modal title
              </h5>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
                onClick={e => toggleModal(e)}
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div
              style={{ height: "350px", overflowY: "auto" }}
              className="modal-body"
            >
              {children}
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-dismiss="modal"
                onClick={e => toggleModal(e)}
              >
                Close
              </button>
              {typeButton ? (
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={() => {
                    onUpdate();
                  }}
                >
                  Actualizar
                </button>
              ) : (
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={() => {
                    onSave();
                  }}
                >
                  Guardar
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
