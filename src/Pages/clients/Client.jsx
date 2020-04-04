import React, { useState } from "react";
import { Filter } from "../../components/filter/Filter";
import { Table } from "../../components/table/Table";
import { useSelector } from "react-redux";

import Header from "../../components/header/Header";
import { UPDATE_VISIBLE_COLUMNS } from "../../store/actions/actions.vars";

export default props => {
  const attrs = useSelector(state => state.ui.client);
  const [search, setSearch] = useState("");
  const [searchAttr, setSearchAttr] = useState("_id");
  const subCatalogues = [
    {
      component: (
        <Table
          api="https://kapi-contactos-clientes-proveedores.now.sh/"
          catalogo={"contactos_clientes_proveedores"}
          showEyeButton={false}
          attrs={{ _id: true, nombre: true }}
          showTrashButton={false}
          id='contactos_clientes_proveedores'
        />
      ),
      title: "Contactos",
      selected: true
    },
    {
      component: (
        <Table
          api="https://kapi-clasificacionclientes.now.sh/"
          catalogo={"clasificacionclientes"}
          showEyeButton={false}
          attrs={{ _id: true, nombre: true }}
          showTrashButton={false}
          id='clasificacionclientes'
        />
      ),
      title: "Clasificacion",
      selected: false
    },
    {
      component: (
        <Table
          api="https://kapi-zonas.now.sh/"
          catalogo={"zonas"}
          showEyeButton={false}
          attrs={{ _id: true, nombre: true }}
          showTrashButton={false}
          id='zonas'
        />
      ),
      title: "Zonas",
      selected: false
    }
  ];
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
            searchAttr={searchAttr}
            search={search}
            id={"tableClients"}
            api={"https://kapi-clientes.now.sh/"}
            catalogo="clientes"
            attrs={attrs}
            subCatalogues={subCatalogues}
          />
        </div>
      </div>
    </div>
  );
};
