import React, { useState } from "react";
import "./table.scss";
import { useEffect } from "react";
import Modal from "../modal/Modal";
import Form from "../form/Form";
import { useSelector } from "react-redux";

export const Table = props => {
  const edit = useSelector(state => state.data.edit);
  const { attrs, api } = props;
  const [inputFields, setInputFields] = useState([]);
  const [dataTable, setDataTable] = useState([]);

  useEffect(() => {
    loadTableFormApi(api, props.catalogo);
  }, [props.catalogo, api]);

  useEffect(() => {
    if (props.search === "") {
      loadTableFormApi(api, props.catalogo);
    }
    let auxArr = [];
    dataTable.map(dataSet => {
      if (String(dataSet[props.searchAttr]) === String(props.search)) {
        auxArr.push(dataSet);
      }
      setDataTable(auxArr);
      return auxArr;
    });
  }, [props.search, props.catalogo, api, props.searchAttr]);

  useEffect(() => {
    fetch(`${api}api/${props.catalogo}/docs`)
      .then(response => response.json())
      .then(response => {
        let newFields = [
          {
            name: "_id",
            type: "number",
            placerholder: "id producto",
            required: true
          }
        ];
        let typeField = "";
        Object.keys(response.fields).map(field => {
          if (response.fields[field].type === "string") {
            typeField = "text";
          } else if (response.fields[field].type === "boolean") {
            typeField = "checkbox";
          } else if (response.fields[field].type === "id") {
            typeField = "text";
          } else {
            typeField = response.fields[field].type;
          }

          return newFields.push({
            name: field,
            type: typeField,
            placeholder: field,
            required: response.fields[field].required
          });
        });
        const length = newFields.length;

        let fields = [];

        if (length > 0 && length <= 10) {
          fields = [{ size: "col-md-12", inputs: newFields }];
        } else if (length > 10 && length <= 20) {
          fields = [
            { size: "col-md-6 col-sm-12", inputs: newFields.slice(0, 10) },
            { size: "col-md-6 col-sm-12", inputs: newFields.slice(10, 20) }
          ];
        } else if (length > 20 && length <= 30) {
          fields = [
            { size: "col-md-4 col-sm-12", inputs: newFields.slice(0, 10) },
            { size: "col-md-4 col-sm-12", inputs: newFields.slice(10, 20) },
            { size: "col-md-4 col-sm-12", inputs: newFields.slice(20, 30) }
          ];
        } else if (length > 30 && length <= 40) {
          fields = [
            { size: "col-md-3 col-sm-12", inputs: newFields.slice(0, 10) },
            { size: "col-md-3 col-sm-12", inputs: newFields.slice(10, 20) },
            { size: "col-md-3 col-sm-12", inputs: newFields.slice(20, 30) },
            { size: "col-md-3 col-sm-12", inputs: newFields.slice(30, 40) }
          ];
        } else if (length > 40 && length <= 50) {
          fields = [
            { size: "col-md-3 col-sm-12", inputs: newFields.slice(0, 13) },
            { size: "col-md-3 col-sm-12", inputs: newFields.slice(13, 26) },
            { size: "col-md-3 col-sm-12", inputs: newFields.slice(26, 39) },
            { size: "col-md-3 col-sm-12", inputs: newFields.slice(39, 50) }
          ];
        }
        setInputFields(fields);
      })
      .catch(error => console.error(error));
  }, [api, props.catalogo]);

  const loadTableFormApi = (api, catalogo) => {
    try {
      const response = fetch(`${api}api/${catalogo}`, {
        method: "GET",
        mode: "cors"
        //body: JSON.stringify(data)
      });
      response
        .then(async res => await res.json())
        .then(resp => setDataTable(resp.results));
    } catch (error) {
      console.log(error);
    }
  };

  const deleteItem = id => {
    let newData = [];
    dataTable.map(datos => newData.push(datos));
    (async () => {
      try {
        const response = await fetch(
          `${api}api/${props.catalogo}/` + id + "/remove",
          {
            method: "POST",
            mode: "cors",
            headers: {
              "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8"
            }
          }
        );
        await response.json();
        dataTable.map((item, index) => {
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
            <Modal
              idModal={props.id}
              colorBtn="mx-1 btn btn-success"
              btnLabel={
                <span>
                  <i className="fas fa-plus"></i>{" "}
                  {String(
                    props.catalogo.slice(0, String(props.catalogo).length - 1)
                  ).toUpperCase()}
                </span>
              }
              datas={edit}
              api={api}
              catalogo={props.catalogo}
            >
              <Form id={props.id} fields={inputFields} datas={edit} />
            </Modal>
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
                      idModal={props.id + i}
                      btnLabel={<i className="fas fa-edit text-info"></i>}
                      datas={client}
                      api={api}
                      catalogo={props.catalogo}
                    >
                      <Form
                        id={props.id + i}
                        fields={inputFields}
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
