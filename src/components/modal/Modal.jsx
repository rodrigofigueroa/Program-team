import React from "react";
import { useSelector } from "react-redux";

import { useEffect } from "react";
import { useState } from "react";

export default props => {
  const {
    children,
    colorBtn,
    api,
    catalogo,
    datas = {},
    showActionButton = true,
    setDataTable,
    dataTable
  } = props;
  const modalState = useSelector(state => state.ui.modal);
  const [typeButton, setTypeButton] = useState(false);

  useEffect(() => {
    if (Object.keys(props.datas).length > 1) {
      setTypeButton(true);
    } else {
      setTypeButton(false);
    }
  }, [props.datas]);

  const onUpdate = () => {
    let form = document.querySelector("form[id=" + props.idModal + "]");
    let inputs = form.querySelectorAll("input");
    let data = new URLSearchParams();
    let error = false;
    let dataSuplice = {};
    for (const input of inputs) {
      data.append(input.name, input.value);
      dataSuplice[input.name] = input.value;
      if (input.validity.patternMismatch) {
        form.classList.add("was-validated");
        error = true;
      } else {
        if (input.validity.valueMissing) {
          form.classList.add("was-validated");
          error = true;
        }
        if (input.type === "checkbox") {
          dataSuplice[input.name] = input.checked;
          data.append(input.name, input.checked);
        }
      }
    }

    if (!error) {
      let newData = [];
      let auxData = [];
      dataTable.map(datos => newData.push(datos));
      (async () => {
        try {
          const response = await fetch(
            `${api}api/${catalogo}/${datas._id}/update`,
            {
              method: "POST",
              mode: "cors",
              headers: {
                "Content-Type":
                  "application/x-www-form-urlencoded;charset=UTF-8"
              },
              body: data
            }
          );
          if (!response.ok) {
            const error = await response.text();
            console.error(error);
          }
          await response.json();
          newData.map(item => {
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

  const onSave = () => {
    let form = document.querySelector("form");
    let inputs = form.querySelectorAll("input");
    let data = {};
    let error = false;
    let newData = [];
    dataTable.map(datos => newData.push(datos));

    for (const input of inputs) {
      data[input.name] = input.value;
      if (input.validity.patternMismatch) {
        form.classList.add("was-validated");
        error = true;
      } else {
        if (input.validity.valueMissing) {
          form.classList.add("was-validated");
          error = true;
        }
        if (input.type === "checkbox") {
          data[input.name] = input.checked;
        }
      }
    }

    if (!error) {
      data.id =
        catalogo[0] +
        Math.random()
          .toString(32)
          .slice(2);
      (async () => {
        alert("agregando");
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
          await response.json();
          newData.unshift({ ...data, _id: data.id });

          setDataTable(newData);
        } catch (error) {
          console.error(error);
        }
      })();
    }
  };

  const toggleModal = () => {
    let modal = document.getElementById("modal" + props.idModal);
    if (modal.classList.value === "modal fade show") {
      modal.classList.remove("show");
      modal.style.display = "none";
    } else if (modal.classList.value === "modal fade") {
      modal.classList.add("show");
      modal.style.display = "block";
    }
  };

  return (
    <>
      <span className={colorBtn} onClick={e => toggleModal(e)}>
        {props.btnLabel}
      </span>

      <div
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
                {String(props.catalogo).toUpperCase()}
              </h5>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
                onClick={e => {
                  toggleModal(e);
                }}
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
              {showActionButton && (
                <>
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
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
