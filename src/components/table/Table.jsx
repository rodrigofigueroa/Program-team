import React, { useState } from "react";
import "./table.scss";
import { useEffect } from "react";
import Modal from "../modal/Modal";
import Form from "../form/Form";
import { useSelector } from "react-redux";

export const Table = props => {
  const edit = useSelector(state => state.data.edit);
  const { attrs, data, api } = props;
  const [dataTable, setDataTable] = useState(data);

  useEffect(() => {
    setDataTable(props.data);
  }, [props.data]);

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
        await response.json();
        data.map((item, index) => {
          if (String(item._id) === String(id)) {
            delete newData[index];
          }
          return newData;
        });
        setDataTable(newData);
      } catch (error) {
        console.error(error);
      }
    })();
  };

  return (
    <>
      <div className="row py-2">
        <p className="col-sm-12 col-md-6">Total: {dataTable.length}</p>
        <div className="col-sm-12 col-md-6 ">
          <span className="float-right">
            {props.btnActions.map((btn, btnIndex) => {
              return (
                <React.Fragment key={`checkbox${btnIndex}`}>
                  <Modal
                    idModal={btn.idModal}
                    colorBtn="mx-1 btn btn-success"
                    title={btn.label}
                    datas={edit}
                    api={api}
                    catalogo={props.catalogo}
                  >
                    <Form
                      id={btn.idModal}
                      fields={btn.formulario}
                      datas={edit}
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
            {dataTable.map((client, i) => {
              return (
                <tr key={`datos${i}`}>
                  {Object.keys(attrs).map((attr, index) => {
                    return (
                      attrs[attr] && (
                        <td key={`data${index}`}>{client[attr]}</td>
                      )
                    );
                  })}
                  <td>
                    <span
                      className="text-danger m-1"
                      onClick={() => {
                        deleteItem(client._id);
                      }}
                    >
                      <i className="fas fa-trash-alt" />
                    </span>

                    <Modal
                      idModal={props.btnActions[0].idModal + i}
                      title={<i className="fas fa-edit text-info"></i>}
                      datas={client}
                      api={api}
                      catalogo={props.catalogo}
                    >
                      <Form
                        id={props.btnActions[0].idModal + i}
                        fields={props.btnActions[0].formulario}
                        datas={client}
                      />
                    </Modal>
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
