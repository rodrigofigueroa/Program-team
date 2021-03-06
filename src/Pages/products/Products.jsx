import React, { useState } from "react";
import { Filter } from "../../components/filter/Filter";
import { Table } from "../../components/table/Table";
import { useSelector } from "react-redux";
import Header from "../../components/header/Header";
import { UPDATE_VISIBLE_PRODUCTS } from "../../store/actions/actions.vars";
import { inputsProductos } from "./subCatologs/inputsProductos";
import { subCatalogsProductos } from "./subCatologs/subCatalogs";
import { api_productos } from "../../utils/apis";

export default (props) => {
  const attrs = useSelector((state) => state.ui.products);
  const [search, setSearch] = useState("");
  const [searchAttr, setSearchAttr] = useState("_id");

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-12">
          <Header
            catalogo="Productos"
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
            catalogue="Productos"
            type={UPDATE_VISIBLE_PRODUCTS}
          />
        </div>
        <div className="col-sm-12 col-md-10">
          <Table
            searchAttr={searchAttr}
            search={search}
            id={"tableProductos"}
            api={api_productos}
            catalogo="productos"
            attrs={attrs}
            mainAttr="articulo"
            inputAttrs={inputsProductos}
            subCatalogues={subCatalogsProductos}
          />
        </div>
      </div>
    </div>
  );
};
