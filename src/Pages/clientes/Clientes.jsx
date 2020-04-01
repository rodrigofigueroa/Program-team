import React from "react";
import "./clientes.scss";
import { AttrTable } from "../../components/attrTable/attrTable";
import { DataTable } from "../../components/DataTable/dataTable";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { useState } from "react";

export default () => {
  const attrs = useSelector(state => state.ui.client);
  const [data, setData] = useState([]);
  useEffect(() => {
    try {
      const response = fetch("api/clientes/", {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
        },
        mode: "cors"
        //body: JSON.stringify(data)
      });
      response.then(res => res.json()).then(resp => setData(resp.results));
    } catch (error) {
      console.log(error);
    }
  }, []);
  return (
    <div className="wrapperClientes">
      <div className="titleClientes">
        <h1>Módulo de Clientes</h1>
      </div>
      <div className="bodyClientes">
        <div className="bodyClientes__left">
          <AttrTable attrs={attrs} />
        </div>
        <div className="bodyClientes__right">
          <DataTable attrs={attrs} data={data} />
        </div>
      </div>
    </div>
  );
};
