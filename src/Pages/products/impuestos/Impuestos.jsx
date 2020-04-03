import React,{useState} from 'react';
import { Filter } from "../../../components/filter/Filter";
import { Table } from "../../../components/table/Table";
import { useSelector } from "react-redux";

import Header from "../../../components/header/Header";

export default props  => {
    const attrs = useSelector(state => state.ui.impuestos);
  const [search, setSearch] = useState("");
  const [searchAttr, setSearchAttr] = useState("_id");
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-12">
          <Header
            catalogo="Impuestos"
            setSearchAttr={setSearchAttr}
            attrs={attrs}
            setSearch={setSearch}
          />
        </div>
      </div>

      <div className="row">
        <div className="col-sm-12 col-md-2">
          <Filter attrs={attrs} catalogue="Impuestos" />
        </div>
        <div className="col-sm-12 col-md-10">
          <Table
            searchAttr={searchAttr}
            search={search}
            id={"tableImpuestos"}
            api={"https://kapi-impuestos.now.sh/"}
            catalogo="impuestos"
            attrs={attrs}
          />
        </div>
      </div>
    </div>
  );
}