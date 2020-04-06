import React, { useState } from "react";
import { Filter } from "../../components/filter/Filter";
import { Table } from "../../components/table/Table";
import { useSelector, useDispatch } from "react-redux";

import Header from "../../components/header/Header";
import { UPDATE_VISIBLE_COLUMNS } from "../../store/actions/actions.vars";
import { subCatalogs } from "./subCatalogs/subCatalogs";
import { atributes } from "./subCatalogs/atributes";
export default () => {
  const attrs = useSelector((state) => state.ui.client);
  const [search, setSearch] = useState("");
  const [searchAttr, setSearchAttr] = useState("_id");
  const dispatch = useDispatch();
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-12">
          <Header
            catalogo="Clientes"
            setSearchAttr={setSearchAttr}
            attrs={attrs}
            setSearch={setSearch}
          />
        </div>
      </div>

      <div className="row">
        <div className="col-sm-12 col-md-2">
          <Filter
            attrs={attrs}
            catalogue="Clientes"
            type={UPDATE_VISIBLE_COLUMNS}
          />
        </div>
        <div className="col-sm-12 col-md-10">
          <Table
            api={"https://kapi-clientes.now.sh/"}
            catalogo="clientes"
            id="tableClients"
            attrs={attrs}
            inputAttrs={atributes}
            mainAttr="cliente"
            searchAttr={searchAttr}
            search={search}
            subCatalogues={subCatalogs}
          />
        </div>
      </div>
    </div>
  );
};
