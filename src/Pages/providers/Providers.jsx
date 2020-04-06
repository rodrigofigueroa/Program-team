import React, { useState } from "react";
import { Filter } from "../../components/filter/Filter";
import { Table } from "../../components/table/Table";
import { useSelector } from "react-redux";

import Header from "../../components/header/Header";
import { UPDATE_VISIBLE_PROVIDERS } from "../../store/actions/actions.vars";
import {api_proveedores} from '../../utils/apis';

export default (props) => {
  const attrs = useSelector((state) => state.ui.providers);
  const [search, setSearch] = useState("");
  const [searchAttr, setSearchAttr] = useState("_id");

  const atributos = [
    { 
      name: "_id", 
      disabled: true, 
      type: "text", 
      required: true,
      regex: "[A-Za-z0-9 \\s]{0,}",
    },
    { 
      name: "proveedor", 
      disabled: false, 
      type: "text", 
      required: true,
      regex: "[A-Za-z0-9 \\s]{0,}",
    },
    { 
      name: "nombre", 
      disabled: false, 
      type: "text", 
      required: true,
      regex: "[A-Za-z0-9 \\s]{0,}",

    },
    { 
      name: "calle", 
      disabled: false, 
      type: "text", 
      required: true ,
      regex: "[A-Za-z0-9 \\s]{3,70}",
    },
    { 
      name: "colonia", 
      disabled: false, 
      type: "select", 
      required: true ,
      regex: "[A-Za-z0-9 \\s]{3,25}",
    },
    { 
      name: "pobla", 
      disabled: false, 
      type: "select", 
      required: true,
      regex: "[A-Za-z0-9 \\s]{3,25}",
    },
    { 
      name: "ciudad", 
      disabled: false, 
      type: "select", 
      required: true ,
      regex: "[A-Za-z0-9 \\s]{3,25}",
    },
    { 
      name: "estado", 
      disabled: false, 
      type: "select", 
      required: true ,
      regex: "[A-Za-z0-9 \\s]{3,25}",
    },
    { 
      name: "pais", 
      disabled: false, 
      type: "select", 
      required: true,
      regex: "[A-Za-z0-9 \\s]{3,25}",
    },
    { 
      name: "telefono", 
      disabled: false, 
      type: "text", 
      required: true,
      regex: "[0-9]{10,12}", 
    },
    { 
      name: "dias", 
      disabled: false, 
      type: "text", 
      required: true ,
      regex: "^([1-9][0-9][0-9][0-9]?|10000)",
    },
    { 
      name: "credito", 
      disabled: false, 
      type: "text", 
      required: true,
      regex: "[0-9](?:\\.\\d{1,2})?|100000000", 
    },
    { 
      name: "des1", 
      disabled: false, 
      type: "text", 
      required: true ,
      regex: "[0-9]?|100",
    },
    { 
      name: "contacto", 
      disabled: false, 
      type: "text", 
      required: true 
    },
    // { name: "alta", disabled: false, type: "text", required: true },
    { 
      name: "rfc", 
      disabled: false, 
      type: "text", 
      required: true,
      regex: "[A-Z0-9]{13,15}",
    },
    {
      name: "tipo",
      disabled: false,
      type: "select",
      required: true,
      options: [
        { tipo: 'Productos'},
        { tipo: 'Servicios'}
      ],
      regex: "[A-Za-z0-9 \\s]{0,}",
      label: "tipo",
    },
    { 
      name: "cp", 
      disabled: false, 
      type: "text", 
      required: true,
      regex: "[A-Za-z0-9 \\s]{0,}",
    },
    {
      name: "diasrevicion",
      disabled: false,
      type: "select",
      required: true,
      options: [
        { dia: "Lunes" },
        { dia: "Martes" },
        { dia: "Miercoles" },
        { dia: "Jueves" },
        { dia: "Viernes" },
      ],
      regex: "[A-Za-z0-9 \\s]{0,}",
      label: "dia",
    },
    { 
      name: "observ", 
      disabled: false, 
      type: "text", 
      required: true ,
      regex: "[A-Za-z0-9 \\s]{0,}",
    },
    {
      name: "zona",
      disabled: false,
      type: "select",
      required: true,
      api: "https://kapi-zonas.now.sh/api/zonas",
      regex: "[A-Za-z0-9 \\s]{0,}",
      label: "zona",
      value: "_id",
    },
    { 
      name: "url",
      disabled: false,
      type: "text",
      required: true,
      regex: "^(http:\\/\\/www\\.|https:\\/\\/www.|http:\\/\\/|https:\\/\\/)?[a-z0-9]+([\\-\\.]{1}[a-z0-9]+)\\.[a-z]{2,5}(:[0-9]{1,5})?(\\/.)?",
    },
    { 
      name: "mail", 
      disabled: false, 
      type: "text", 
      required: true ,
      regex:
        "^[a-zA-Z0-9.!#$%&'+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\\.[a-zA-Z0-9-]+)",
    },
    { 
      name: "saldo",
      disabled: false, 
      type: "text", 
      required: true,
      regex: "[A-Za-z0-9 \\s]{0,}" 
    },
    { 
      name: "usuario", 
      disabled: false, 
      type: "text", 
      required: true,
      regex: "[A-Za-z0-9 \\s]{0,}",
    },
    // { name: "usuHora", disabled: false, type: "text", required: true },
    // { name: "usuFech", disabled: false, type: "text", required: true },
  ];

  const subCatalogues = [
    {
      component: {
        api: "https://kapi-clasificacionclientes.now.sh/",
        catalogo: "clasificacionclientes",
        attrs: {
          _id: true,
          clasificacion: true,
          descrip: true,
          usuario: true,
          usufecha: true,
          usuhora: true,
        },
        id: "clasificacionclientes",
      },
      title: "Clasificación de Clientes",
      selected: true,
    },
    {
      component: {
        api: "https://kapi-personal.now.sh/",
        catalogo: "personal",
        attrs: {
          _id: true,
          empleado: true,
          tipo: true,
          nombre: true,
          usuario: true,
          usufecha: true,
          usuhora: true,
          horaentrada: true,
          horasalida: true,
          foto: true,
          pais: true,
          cp: true,
          calle: true,
          numeroexterior: true,
          numerointerior: true,
          colonia: true,
          poblacion: true,
          ciudad: true,
          estado: true,
          telefono: true,
          rfc: true,
          curp: true,
          numeroseguridadsocial: true,
          departamento: true,
          puesto: true,
          banco: true,
          cuentabanco: true,
          inicioactividades: true,
          tipocontrato: true,
          tipojornada: true,
          pagodesalario: true,
          salariobasecotizacion: true,
          riesgopuesto: true,
          estadonomina: true,
          antiguedad: true,
          correo: true,
          salariodiariointegrado: true,
          observaciones: true,
          regimencontractual: true,
        },
        id: "Personal",
      },
      title: "Personal",
      selected: false,
    },
    {
      component: {
        api: "https://kapi-kitelementos.now.sh/",
        catalogo: "kitelementos",
        attrs: {
          _id: true,
          articulo: true,
          componente: true,
          cantidad: true,
          almacen: true,
          observ: true,
          idpartida: true,
          usuario: true,
          usufecha: true,
          usuhora: true,
        },
        id: "kitelementos",
      },
      title: "Kitelementos",
      selected: false,
    },
  ];

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
