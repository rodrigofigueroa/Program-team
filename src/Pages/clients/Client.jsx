import React, { useState } from "react";
import { Filter } from "../../components/filter/Filter";
import { Table } from "../../components/table/Table";
import { useSelector } from "react-redux";

import Header from "../../components/header/Header";
import { UPDATE_VISIBLE_COLUMNS } from "../../store/actions/actions.vars";

export default (props) => {
  const attrs = useSelector((state) => state.ui.client);
  const [search, setSearch] = useState("");
  const [searchAttr, setSearchAttr] = useState("_id");
  const atributos = [
    {
      name: "_id",
      disabled: true,
      type: "text",
      required: false,
      regex: "[A-Za-z0-9 \\s]{0,}",
    },
    {
      name: "cliente",
      disabled: false,
      type: "text",
      required: true,
      regex: "Client+[0-9]{1,30}",
    },
    {
      name: "nombre_fis",
      disabled: false,
      type: "text",
      required: true,
      regex: "[A-Za-z0-9 \\s]{3,70}",
    },
    {
      name: "calle",
      disabled: false,
      type: "text",
      required: true,
      regex: "[A-Za-z0-9 \\s]{3,70}",
    },
    {
      name: "colonia",
      disabled: false,
      type: "select",
      required: true,
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
      required: true,
      regex: "[A-Za-z0-9 \\s]{3,25}",
    },
    {
      name: "estado",
      disabled: false,
      type: "select",
      required: true,
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
      type: "number",
      required: true,
      regex: "^([1-9][0-9][0-9][0-9]?|10000)",
    },
    {
      name: "credito",
      disabled: false,
      type: "number",
      required: true,
      regex: "[0-9](?:\\.\\d{1,2})?|100000000",
    },
    {
      name: "desc1",
      disabled: false,
      type: "number",
      required: true,
      regex: "[0-9]?|100",
    },
    {
      name: "rfc",
      disabled: false,
      type: "text",
      required: true,
      regex: "[A-Z0-9]{13,15}",
    },
    {
      name: "clasificacion",
      disabled: false,
      type: "select",
      required: true,
      api:
        "https://kapi-clasificacionclientes.now.sh/api/clasificacionclientes",
      regex: "[A-Za-z0-9 \\s]{3,15}",
      label: "clasificacion",
      value: "_id",
    },
    {
      name: "contacto",
      disabled: false,
      type: "text",
      required: true,
      regex: "[A-Za-z0-9 \\s]{3,50}",
    },
    {
      name: "cobrador",
      disabled: false,
      type: "text",
      required: true,
      regex: "Cobr+[0-9]{1,30}",
    },
    {
      name: "vend",
      disabled: false,
      type: "text",
      required: true,
      regex: "Vend+[0-9]{1,30}",
    },
    {
      name: "precio",
      disabled: false,
      type: "number",
      required: true,
      label: "",
      value: "",
      api: "https://kapi-listaprecios.now.sh/api/listaprecios",
      regex: "[A-Za-z0-9 \\s]{0,}",
    },
    {
      name: "cp",
      disabled: false,
      type: "text",
      required: true,
      regex: "[A-Za-z0-9 \\s]{0,}",
    },
    {
      name: "diasrevision",
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
      type: "textarea",
      required: true,
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
      name: "correo",
      disabled: false,
      type: "text",
      required: true,
      regex:
        "^[a-zA-Z0-9.!#$%&'+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\\.[a-zA-Z0-9-]+)",
    },
    {
      name: "url",
      disabled: false,
      type: "text",
      required: true,
      regex:
        "^(http:\\/\\/www\\.|https:\\/\\/www.|http:\\/\\/|https:\\/\\/)?[a-z0-9]+([\\-\\.]{1}[a-z0-9]+)\\.[a-z]{2,5}(:[0-9]{1,5})?(\\/.)?",
    },
    {
      name: "saldo",
      disabled: false,
      type: "number",
      required: true,
      regex: "[A-Za-z0-9 \\s]{0,}",
    },
    {
      name: "usuario",
      disabled: false,
      type: "text",
      required: true,
      regex: "[A-Za-z0-9 \\s]{0,}",
    },
    {
      name: "diascobro",
      disabled: false,
      type: "number",
      required: true,
      regex: "[0-9]{1,10000}",
    },
    {
      name: "bloqueado",
      disabled: false,
      type: "checkbox",
      required: false,
      regex: "[A-Za-z0-9 \\s]{0,}",
    },
    {
      name: "web",
      disabled: false,
      type: "text",
      required: true,
      regex:
        "^(http:\\/\\/www\\.|https:\\/\\/www.|http:\\/\\/|https:\\/\\/)?[a-z0-9]+([\\-\\.]{1}[a-z0-9]+)\\.[a-z]{2,5}(:[0-9]{1,5})?(\\/.)?",
    },
    {
      name: "emailcobranza",
      disabled: false,
      type: "text",
      required: true,
      regex:
        "^[a-zA-Z0-9.!#$%&'+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\\.[a-zA-Z0-9-]+)",
    },
    {
      name: "foto",
      disabled: false,
      type: "text",
      required: true,
      regex: "[A-Za-z0-9 \\s]{0,}",
    },
    {
      name: "puntos",
      disabled: false,
      type: "number",
      required: true,
      regex: "[A-Za-z0-9 \\s]{0,}",
    },
    {
      name: "recomendado",
      disabled: false,
      type: "select",
      required: true,
      api: "https://kapi-clientes.now.sh/api/clientes",
      label: "cliente",
      value: "_id",
      regex: "[A-Za-z0-9 \\s]{0,}",
    },
    {
      name: "numerointerior",
      disabled: false,
      type: "number",
      required: true,
      regex: "[A-Za-z0-9 \\s]{0,}",
    },
    {
      name: "numeroexterior",
      disabled: false,
      type: "number",
      required: true,
      regex: "[A-Za-z0-9 \\s]{0,}",
    },
    {
      name: "uso",
      disabled: false,
      type: "select",
      required: true,
      regex: "[A-Za-z0-9 \\s]{0,}",
    },
    {
      name: "paiscomextrecep",
      disabled: false,
      type: "select",
      required: true,
      regex: "[A-Za-z0-9 \\s]{0,}",
    },
    {
      name: "municipiocomextrecep",
      disabled: false,
      type: "select",
      required: true,
      regex: "[A-Za-z0-9 \\s]{0,}",
    },
    {
      name: "localidadcomextrecep",
      disabled: false,
      type: "select",
      required: true,
      regex: "[A-Za-z0-9 \\s]{0,}",
    },
    {
      name: "estadocomextrecep",
      disabled: false,
      type: "select",
      required: true,
      regex: "[A-Za-z0-9 \\s]{0,}",
    },
    {
      name: "coloniacomextrecep",
      disabled: false,
      type: "select",
      required: true,
      regex: "[A-Za-z0-9 \\s]{0,}",
    },
    {
      name: "residenciafiscal",
      disabled: false,
      type: "select",
      required: true,
      regex: "[A-Za-z0-9 \\s]{0,}",
    },
    {
      name: "numregidtrib",
      disabled: false,
      type: "select",
      required: true,
      regex: "[A-Za-z0-9 \\s]{0,}",
    },
    {
      name: "complementoexterior",
      disabled: false,
      type: "number",
      required: true,
      regex: "[A-Za-z0-9 \\s]{0,}",
    },
    {
      name: "usuhora",
      disabled: false,
      type: "time",
      required: true,
      regex: "[A-Za-z0-9 \\s]{0,}",
    },
    {
      name: "usufecha",
      disabled: false,
      type: "date",
      required: true,
      regex: "[A-Za-z0-9 \\s]{0,}",
    },
  ];
  const subCatalogues = [
    {
      component: {
        atributos: [
          {
            _id: "_id",
            disabled: true,
            type: "text",
            required: false,
            regex: "[A-Za-z0-9 \\s]{0,}",
          },
          {
            uid: "_id",
            disabled: true,
            type: "text",
            required: false,
            regex: "[A-Za-z0-9 \\s]{0,}",
          },
          {
            cliente: "_id",
            disabled: true,
            type: "text",
            required: false,
            regex: "[A-Za-z0-9 \\s]{0,}",
          },
          {
            proveedor: "_id",
            disabled: true,
            type: "text",
            required: false,
            regex: "[A-Za-z0-9 \\s]{0,}",
          },
          {
            nombre: "_id",
            disabled: true,
            type: "text",
            required: false,
            regex: "[A-Za-z0-9 \\s]{0,}",
          },
          {
            puesto: "_id",
            disabled: true,
            type: "text",
            required: false,
            regex: "[A-Za-z0-9 \\s]{0,}",
          },
          {
            email: "_id",
            disabled: true,
            type: "text",
            required: false,
            regex: "[A-Za-z0-9 \\s]{0,}",
          },
          {
            telefono: "_id",
            disabled: true,
            type: "text",
            required: false,
            regex: "[A-Za-z0-9 \\s]{0,}",
          },
          {
            celular: "_id",
            disabled: true,
            type: "text",
            required: false,
            regex: "[A-Za-z0-9 \\s]{0,}",
          },
          {
            f_nacimiento: "_id",
            disabled: true,
            type: "text",
            required: false,
            regex: "[A-Za-z0-9 \\s]{0,}",
          },
        ],
        api: "https://kapi-contactos-clientes-proveedores.now.sh/",
        catalogo: "contactos_clientes_proveedores",
        attrs: {
          _id: true,
          uid: true,
          cliente: true,
          proveedor: true,
          nombre: true,
          puesto: true,
          email: true,
          telefono: true,
          celular: true,
          f_nacimiento: true,
        },
        id: "contactos_clientes_proveedores",
      },
      inputs: [
        { _id: true, disabled: true, type: "string" },
        { uid: true, disabled: true, type: "string" },
        { cliente: true, disabled: true, type: "string" },
        { proveedor: true },
        { nombre: true },
        { puesto: true },
        { email: true },
        { telefono: true },
        { celular: true },
        { f_nacimiento: true },
      ],
      title: "Contactos Clientes Proveedores",
      selected: true,
    },
    {
      component: {
        api: "https://kapi-clasificacionclientes.now.sh/",
        catalogo: "clasificacionclientes",
        attrs: {
          _id: true,
          descrip: true,
          usuario: true,
          usufecha: true,
          usuhora: true,
        },
        id: "clasificacionclientes",
      },
      title: "Clasificación de Clientes",
      selected: false,
    },
    {
      component: {
        api: "https://kapi-zonas.now.sh/",
        catalogo: "zonas",
        attrs: {
          _id: true,
          zona: true,
          descrip: true,
          usuario: true,
          usufecha: true,
          usuhora: true,
        },
        id: "zonas",
      },

      title: "Zonas",
      selected: false,
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
          salariobasecotizacion: false,
          riesgopuesto: true,
          estadonomina: true,
          antiguedad: true,
          correo: true,
          salariodiariointegrado: false,
          observaciones: true,
          bloqueado: false,
          regimencontractual: true,
        },
        id: "personal",
      },
      title: "Vendedores",
      selected: false,
    },
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
            id="tableClients"
            api={"https://kapi-clientes.now.sh/"}
            catalogo="clientes"
            attrs={attrs}
            inputAttrs={atributos}
            subCatalogues={subCatalogues}
          />
        </div>
      </div>
    </div>
  );
};
