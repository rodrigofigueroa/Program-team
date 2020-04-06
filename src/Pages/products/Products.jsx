import React, { useState } from "react";
import { Filter } from "../../components/filter/Filter";
import { Table } from "../../components/table/Table";
import { useSelector } from "react-redux";

import Header from "../../components/header/Header";
import { UPDATE_VISIBLE_PRODUCTS } from "../../store/actions/actions.vars";
export default (props) => {
  const attrs = useSelector((state) => state.ui.products);
  const [search, setSearch] = useState("");
  const [searchAttr, setSearchAttr] = useState("_id");

  const atributos = [
    { name: "_id", disabled: true, type: "text", required: true },
    { name: "articulo", disabled: false, type: "text", required: true },
    { name: "descrip", disabled: false, type: "text", required: true },
    { name: "tipo", disabled: false, type: "text", required: true },
    { name: "linea", disabled: false, type: "text", required: true },
    { name: "marca", disabled: false, type: "text", required: true },
    { name: "precio1", disabled: false, type: "text", required: true },
    { name: "existencia", disabled: false, type: "text", required: true },
    { name: "costo_u", disabled: false, type: "text", required: true },
    { name: "costo", disabled: false, type: "text", required: true },
    { name: "unidades_med", disabled: false, type: "select", required: true },
    { name: "por_recib", disabled: false, type: "text", required: true },
    { name: "por_surt", disabled: false, type: "text", required: true },
    { name: "impuesto", disabled: false, type: "text", required: true },
    { name: "minimo", disabled: false, type: "text", required: true },
    { name: "maximo", disabled: false, type: "text", required: true },
    { name: "observ", disabled: false, type: "text", required: true },
    { name: "costo_std", disabled: false, type: "text", required: true },
    { name: "kit", disabled: false, type: "checkbox", required: true },
    { name: "serie", disabled: false, type: "text", required: true },
    { name: "lote", disabled: false, type: "text", required: true },
    { name: "invent", disabled: false, type: "text", required: true },
    { name: "imagen", disabled: false, type: "text", required: true },
    { name: "paraventa", disabled: false, type: "text", required: true },
    { name: "usuario", disabled: false, type: "text", required: true },
    // { name: "usuhora", disabled: false, type: "text", required: true },
    // { name: "usufecha", disabled: false, type: "text", required: true },
    { name: "exportado", disabled: false, type: "checkbox", required: true },
    { name: "granel", disabled: false, type: "checkbox", required: true },
    { name: "peso", disabled: false, type: "text", required: true },
    { name: "bloqueado", disabled: false, type: "text", required: true },
    { name: "u1", disabled: false, type: "text", required: true },
    { name: "ubicacion", disabled: false, type: "select", required: true },
    { name: "etiquetas", disabled: false, type: "text", required: true },
    { name: "oferta", disabled: false, type: "checkbox", required: true },
    { name: "costopeps", disabled: false, type: "text", required: true },
    { name: "costoueps", disabled: false, type: "text", required: true },
    { name: "autor", disabled: false, type: "select", required: true },
    { name: "tema", disabled: false, type: "select", required: true },
    { name: "editorial", disabled: false, type: "select", required: true },
    {
      name: "fabricante",
      disabled: false,
      type: "select",
      required: true,
      api: "https://kapi-fabricantes/api/fabricantes",
    },
    { name: "preciousd", disabled: false, type: "text", required: true },
    { name: "costousd", disabled: false, type: "text", required: true },
    { name: "claveprodserv", disabled: false, type: "select", required: true },
    { name: "claveunidad", disabled: false, type: "select", required: true },
    { name: "hash", disabled: false, type: "select", required: true },
  ];

  const subCatalogues = [
    {
      component: {
        api: "https://kapi-clavesadicionales.now.sh/",
        catalogo: "clavesadicionales",
        attrs: {
          _id: true,
          clave: true,
          descripcion: true,
          usuario: true,
          usufecha: true,
          usuhora: true,
          articulo: true,
          cantidad: true,
          unidad: true,
          existencia: true,
          precio: true,
          imagen: true,
        },
        id: "clavesadicionales",
      },
      title: "Claves Adicionales",
      selected: true,
    },
    {
      component: {
        api: "https://kapi-lineas.now.sh/",
        catalogo: "lineas",
        attrs: {
          _id: true,
          linea: true,
          descrip: true,
          usuario: true,
          usufecha: true,
          usuhora: true,
          numero: true,
        },
        id: "lineas",
      },
      title: "Lineas",
      selected: false,
    },
    {
      component: {
        api: "https://kapi-marcas.now.sh/",
        catalogo: "marcas",
        attrs: {
          _id: true,
          marca: true,
          descrip: true,
          usuario: true,
          usufecha: true,
          usuhora: true,
          numero: true,
        },
        id: "marcas",
      },
      title: "Marcas",
      selected: false,
    },
    {
      component: {
        api: "https://kapi-impuestos.now.sh/",
        catalogo: "impuestos",
        attrs: {
          _id: true,
          impuesto: true,
          descrip: true,
          valor: true,
          usuario: true,
          usufecha: true,
          usuhora: true,
        },
        id: "impuestos",
      },
      title: "Impuestos",
      selected: false,
    },
    {
      component: {
        api: "https://kapi-fabricantes.now.sh/",
        catalogo: "fabricantes",
        attrs: {
          _id: true,
          fabricante: true,
          nombre: true,
          usuario: true,
          usuhora: true,
          usufecha: true,
        },
        id: "fabricantes",
      },
      title: "Fabricantes",
      selected: false,
    },
    {
      component: {
        api: "https://kapi-listaprecios.now.sh/",
        catalogo: "listaprecios",
        attrs: {
          _id: true,
          id_precio: true,
          nombre: true,
          usuario: true,
          usufecha: true,
          usuhora: true,
        },
        id: "listaprecios",
      },
      title: "Lista Precios",
      selected: false,
    },
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
            api={"https://kapi-productos.now.sh/"}
            catalogo="productos"
            attrs={attrs}
            inputAttrs={atributos}
            subCatalogues={subCatalogues}
          />
        </div>
      </div>
    </div>
  );
};
