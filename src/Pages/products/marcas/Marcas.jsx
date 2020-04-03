import React,{useState} from 'react';
import { Filter } from "../../../components/filter/Filter";
import { Table } from "../../../components/table/Table";
import { useSelector } from "react-redux";

import Header from "../../../components/header/Header";

export default props  => {
    const attrs = useSelector(state => state.ui.marcas);
  const [search, setSearch] = useState("");
  const [searchAttr, setSearchAttr] = useState("_id");
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-12">
          <Header
            catalogo="Marcas"
            setSearchAttr={setSearchAttr}
            attrs={attrs}
            setSearch={setSearch}
          />
        </div>
      </div>

      <div className="row">
        <div className="col-sm-12 col-md-2">
          <Filter attrs={attrs} catalogue="Marcas" />
        </div>
        <div className="col-sm-12 col-md-10">
          <Table
            searchAttr={searchAttr}
            search={search}
            id={"tableMarcas"}
            api={"https://kapi-marcas.now.sh/"}
            catalogo="marcas"
            attrs={attrs}
          />
        </div>
      </div>
    </div>
  );
}