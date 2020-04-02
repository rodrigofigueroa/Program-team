import React, { useState } from "react";
import { Filter } from "../../components/filter/Filter";
import { Table } from "../../components/table/Table";
import { useSelector } from "react-redux";

export default props => {
  const attrs = useSelector(state => state.ui.client);
  const [search, setSearch] = useState("");
  const [searchAttr, setSearchAttr] = useState("_id");
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-12">
          <div className="card p-2 my-2 bg-info">
            <div className="row">
              <div className="col-3">
                <h2 className="text-white">Clientes</h2>
              </div>
              <div className="col-3">
                <select
                  onChangeCapture={e => {
                    console.log(e.target.value);
                    setSearchAttr(e.target.value);
                  }}
                  id="searchSelect"
                  name="searchSelect"
                  autoComplete="off"
                  type="select"
                  className="form-control"
                  aria-describedby="emailHelp"
                >
                  {Object.keys(attrs).map((option, index) => {
                    return <option key={`option${index}`}>{option}</option>;
                  })}
                </select>
              </div>
              <div className="col-6">
                <input
                  onKeyPress={e => {
                    if (e.key === "Enter") {
                      setSearch(e.target.value);
                    }
                  }}
                  id="searchInput"
                  name="searchInput"
                  defaultValue=""
                  autoComplete="off"
                  type="search"
                  placeholder="buscar"
                  className="form-control"
                  aria-describedby="emailHelp"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col-sm-12 col-md-2">
          <Filter attrs={attrs} catalogue="Clientes" />
        </div>
        <div className="col-sm-12 col-md-10">
          <Table
            searchAttr={searchAttr}
            search={search}
            id={"tableClients"}
            api={"https://kapi-clientes.now.sh/"}
            catalogo="clientes"
            attrs={attrs}
          />
        </div>
      </div>
    </div>
  );
};
