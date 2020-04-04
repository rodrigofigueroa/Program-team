import React, {useState} from "react";
import { Filter } from "../../components/filter/Filter";
import { Table } from "../../components/table/Table";
import { useSelector } from "react-redux";

import Header from "../../components/header/Header";
import {UPDATE_VISIBLE_PRODUCTS} from '../../store/actions/actions.vars';
export default props => {  
  const attrs = useSelector(state => state.ui.products);
  const [search, setSearch] = useState("");
  const [searchAttr, setSearchAttr] = useState("_id");

  const subCatalogues = [
    {
      component: {
          api:"https://kapi-clavesadicionales.now.sh/",
          catalogo:"clavesadicionales",
          attrs:{ _id: true},
          id:'clavesadicionales'
      },
      title: "Claves Adicionales",
      selected: true
    },
    {
      component: {
          api:"https://kapi-lineas.now.sh/",
          catalogo:"lineas",
          attrs:{ _id: true, descrip : true, usuario : true, usufecha : true, usuhora : true, numero : true, },
          id:'lineas'
      },
      title: "Lineas",
      selected: false
    },
    {
      component: {
          api:"https://kapi-marcas.now.sh/",
          catalogo:"marcas",
          attrs:{ _id: true, descrip: true , usuario: true , usufecha: true , usuhora: true , numero: true ,},
          id:'marcas'
      },
      title: "Marcas",
      selected: false
    },
    {
      component: {
          api:"https://kapi-impuestos.now.sh/",
          catalogo:"impuestos",
          attrs:{ _id: true, impuesto: true, descrip: true, valor: true, usuario: true, usufecha: true, usuhora: true, 
          },
          id:'impuestos'
      },
      title: "Impuestos",
      selected: false
    },
    {
      component: {
          api:"https://kapi-fabricantes.now.sh/",
          catalogo:"fabricantes",
          attrs:{ _id: true, nombre: true,usuario: true,usuhora: true,usufecha: true,},
          id:'fabricantes'
      },
      title: "Fabricantes",
      selected: false
    },
    {
      component: {
          api:"https://kapi-listaprecios.now.sh/",
          catalogo:"listaprecios",
          attrs:{ _id: true, id_precio: true , nombre : true, usuario : true, usufecha : true, usuhora             : true,
          },
          id:'Lista Precios'
      },
      title: "Lista Precios",
      selected: false
    }
  ];

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
          <Filter attrs={attrs} catalogue="Productos" type={UPDATE_VISIBLE_PRODUCTS} />
        </div>
        <div className="col-sm-12 col-md-10">
          <Table
            searchAttr={searchAttr}
            search={search}
            id={"tableProductos"}
            api={"https://kapi-productos.now.sh/"}
            catalogo="productos"
            attrs={attrs}
            subCatalogues={subCatalogues}
          />
        </div>
      </div>
    </div>
  );
};
