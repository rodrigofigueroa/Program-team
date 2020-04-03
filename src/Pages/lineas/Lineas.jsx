import React,{useState} from 'react';
import { Filter } from "../../components/filter/Filter";
import { Table } from "../../components/table/Table";
import { useSelector } from "react-redux";

import Header from "../../components/header/Header";
import {UPDATE_VISIBLE_LINEAS} from '../../store/actions/actions.vars';

export default props  => {
    const attrs = useSelector(state => state.ui.lineas);
  const [search, setSearch] = useState("");
  const [searchAttr, setSearchAttr] = useState("_id");
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-12">
          <Header
            catalogo="Lineas"
            setSearchAttr={setSearchAttr}
            attrs={attrs}
            setSearch={setSearch}
          />
        </div>
      </div>

      <div className="row">
        <div className="col-sm-12 col-md-2">
          <Filter attrs={attrs} catalogue="Lineas" type={UPDATE_VISIBLE_LINEAS}/>
        </div>
        <div className="col-sm-12 col-md-10">
          <Table
            searchAttr={searchAttr}
            search={search}
            id={"tableLineas"}
            api={"https://kapi-lineas.now.sh/"}
            catalogo="lineas"
            attrs={attrs}
          />
        </div>
      </div>
    </div>
  );
}