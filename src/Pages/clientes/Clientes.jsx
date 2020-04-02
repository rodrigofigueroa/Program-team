import React from "react";
import { Filter } from "../../components/filter/Filter";
import { Table } from "../../components/table/Table";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { useState } from "react";

export default props => {
  const attrs = useSelector(state => state.ui.client);
  const [data, setData] = useState([]);
  const [inputFields, setInputFields] = useState([]);
  const editar = useSelector(state => state.data.editar);
  const btnActions = [
    {
      idModal: "addCliente",
      label: "agregar cliente",
      formulario: inputFields,
      datos: editar
    },
    { idModal: "addProducto", label: "agregar producto", formulario: [] }
  ];
  useEffect(() => {
    try {
      const response = fetch("https://kapi-clientes.now.sh/api/clientes/", {
        method: "GET",
        mode: "cors"
        //body: JSON.stringify(data)
      });
      response.then(res => res.json()).then(resp => setData(resp.results));
    } catch (error) {
      console.log(error);
    }

    fetch("https://kapi-clientes.now.sh/api/clientes/docs")
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
  }, []);
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-12">
          <div className="card p-2 my-2 bg-info">
            <h2 className="text-white">Clientes</h2>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-sm-12 col-md-2">
          <Filter attrs={attrs} catalogo="Clientes" />
        </div>
        <div className="col-sm-12 col-md-10">
          <Table
            api={"https://kapi-clientes.now.sh/"}
            catalogo="clientes"
            btnActions={btnActions}
            attrs={attrs}
            data={data}
            fields={inputFields}
          />
        </div>
      </div>
    </div>
  );
};
