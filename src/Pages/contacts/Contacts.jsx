import React, { useState } from "react";
import { useSelector } from "react-redux";
import Header from "../../components/header/Header";
import { Filter } from "../../components/filter/Filter";
import { Table } from "../../components/table/Table";
import { UPDATE_VISIBLE_CONTACT } from "../../store/actions/actions.vars";
export default props => {
  const attrs = useSelector(state => state.ui.contact);
  const [search, setSearch] = useState("");
  const [searchAttr, setSearchAttr] = useState("_id");
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
            type={UPDATE_VISIBLE_CONTACT}
          />
        </div>
        <div className="col-sm-12 col-md-10">
          <Table
            searchAttr={searchAttr}
            search={search}
            id={"tableClients"}
            api={"https://kapi-contactos-clientes-proveedores.now.sh/"}
            catalogo="contactos_clientes_proveedores"
            attrs={attrs}
          />
        </div>
      </div>
    </div>
  );
};
