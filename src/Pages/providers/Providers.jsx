import React, { useState } from "react";
import { Filter } from "../../components/filter/Filter";
import { Table } from "../../components/table/Table";
import { useSelector } from "react-redux";

import Header from "../../components/header/Header";
import { UPDATE_VISIBLE_PROVIDERS } from "../../store/actions/actions.vars";
import {api_proveedores} from '../../utils/apis';

import { atributos } from './subCatalogos/attributes';
import { subCatalogues } from './subCatalogos/subCatalogs';

export default (props) => {
  const attrs = useSelector((state) => state.ui.providers);
  const [search, setSearch] = useState("");
  const [searchAttr, setSearchAttr] = useState("_id");
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-12">
          <Header
            catalogo="proveedores"
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
            catalogue="proveedores"
            type={UPDATE_VISIBLE_PROVIDERS}
          />
        </div>
        <div className="col-sm-12 col-md-10">
          <Table
            searchAttr={searchAttr}
            search={search}
            inputAttrs={atributos}
            id={"proveedores"}
            api={api_proveedores}
            catalogo="proveedores"
            attrs={attrs}
            subCatalogues={subCatalogues}
          />
        </div>
      </div>
    </div>
  );
};
