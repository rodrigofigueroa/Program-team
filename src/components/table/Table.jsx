import React from "react";
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
  useEffect(() => {
    console.log(editar);
  }, [editar]);
  return (
    <>
      <div className="row py-2">
        <p className="col-sm-12 col-md-6">Total: {data.length}</p>
        <div className="col-sm-12 col-md-6 ">
          {/* <button className="btn btn-success">Agregar</button> */}
          <span className="float-right">
            {props.btnActions.map((btn, btnIndex) => {
              return (
                <React.Fragment key={`checkbox${btnIndex}`}>
                  <Modal
                    idModal={btn.idModal}
                    colorBtn="btn-success"
                    title={btn.label}
                    datos={editar}
                    api={api}
                    catalogo={props.catalogo}
                  >
                    <Form fields={btn.formulario} datos={editar} />
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
            {data.map((cliente, i) => {
              return (
                <tr key={`datos${i}`}>
                  {Object.keys(attrs).map((attr, index) => {
                    return (
                      <td key={`data${index}`}>
                        {attrs[attr] && cliente[attr]}
                      </td>
                    );
                  })}
                  <td>
                    <span className="text-danger m-1" onClick={() => {}}>
                      <i className="fas fa-trash-alt" />
                    </span>
                    <span
                      className="text-info m-1"
                      onClick={() => {
                        dispatch({ type: EDIT, payload: cliente });
                      }}
                    >
                      <i className="fas fa-edit" />
                    </span>
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
