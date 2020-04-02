import React, { useState } from "react";
import "./table.scss";
import { useEffect } from "react";
import Modal from "../modal/Modal";
import Form from "../form/Form";
import { useDispatch, useSelector } from "react-redux";
import { EDIT } from "../../store/actions/actions.vars";

export const Table = props => {
  const dispatch = useDispatch();
  const editar = useSelector(state => state.data.editar);
  const { attrs, data, api } = props;
  const [dataTable, setDataTable] = useState(data);

  const deleteItem = id => {
    let newData = [];
    dataTable.map(datos => newData.push(datos));
    (async () => {
      try {
        const response = await fetch(
          "https://kapi-clientes.now.sh/api/clientes/" + id + "/remove",
          {
            method: "POST",
            mode: "cors"
          }
        );
        if (!response.ok) {
          const error = await response.text();
          console.error(error);
        }
        const json = await response.json();
        data.map((item, index) => {
          console.log(id, item._id);
          if (String(item._id) === String(id)) {
            delete newData[index];
          }
          return newData;
        });
        setDataTable(newData);
        console.log(json);
      } catch (error) {
        console.error(error);
      }
    })();
  };

  useEffect(() => {
    console.log(data);
    setDataTable(props.data);
  }, [props.data]);
  return (
    <>
      <div className="row py-2">
        <p className="col-sm-12 col-md-6">Total: {dataTable.length}</p>
        <div className="col-sm-12 col-md-6 ">
          {/* <button className="btn btn-success">Agregar</button> */}
          <span className="float-right">
            {props.btnActions.map((btn, btnIndex) => {
              return (
                <React.Fragment key={`checkbox${btnIndex}`}>
                  <Modal
                    idModal={btn.idModal}
                    colorBtn="mx-1 btn btn-success"
                    title={btn.label}
                    datos={editar}
                    api={api}
                    catalogo={props.catalogo}
                  >
                    <Form
                      id={btn.idModal}
                      fields={btn.formulario}
                      datos={editar}
                    />
                  </Modal>
                </React.Fragment>
              );
            })}
          </span>
        </div>
      </div>
      <div className="table-responsive">
        <table className="table table-hover border" style={{ width: "100%" }}>
          <thead>
            <tr>
              {Object.keys(attrs).map((item, index) => {
                if (item) {
                  if (attrs[item])
                    return <th key={`dataTable${index}`}>{item}</th>;
                }

                return null;
              })}
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {dataTable.map((cliente, i) => {
              return (
                <tr key={`datos${i}`}>
                  {Object.keys(attrs).map((attr, index) => {
                    return (
                      attrs[attr] && (
                        <td key={`data${index}`}>{cliente[attr]}</td>
                      )
                    );
                  })}
                  <td>
                    <span
                      className="text-danger m-1"
                      onClick={() => {
                        deleteItem(cliente._id);
                      }}
                    >
                      <i className="fas fa-trash-alt" />
                    </span>

                    <Modal
                      idModal={props.btnActions[0].idModal + i}
                      title={<i className="fas fa-edit text-info"></i>}
                      datos={cliente}
                      api={api}
                      catalogo={props.catalogo}
                    >
                      <Form
                        id={props.btnActions[0].idModal + i}
                        fields={props.btnActions[0].formulario}
                        datos={cliente}
                      />
                    </Modal>

                    {/* <span
                      className="text-info m-1"
                      onClick={() => {
                        dispatch({ type: EDIT, payload: cliente });
                      }}
                    >
                      <i className="fas fa-edit" />
                    </span> */}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
};
