import React, { useState } from "react";
import { Filter } from "../../components/filter/Filter";
import { Table } from "../../components/table/Table";
import { useSelector } from "react-redux";

import Header from "../../components/header/Header";
import { UPDATE_VISIBLE_PROVIDERS } from "../../store/actions/actions.vars";

export default (props) => {
  const attrs = useSelector((state) => state.ui.providers);
  const [search, setSearch] = useState("");
  const [searchAttr, setSearchAttr] = useState("_id");

  const atributos = [
    { name: "_id", disabled: true, type: "text", required: true },
    { name: "proveedor", disabled: false, type: "text", required: true },
    { name: "nombre", disabled: false, type: "text", required: true },
    { name: "calle", disabled: false, type: "text", required: true },
    { name: "colonia", disabled: false, type: "select", required: true },
    { name: "pobla", disabled: false, type: "select", required: true },
    { name: "ciudad", disabled: false, type: "select", required: true },
    { name: "estado", disabled: false, type: "select", required: true },
    { name: "pais", disabled: false, type: "select", required: true },
    { name: "telefono", disabled: false, type: "text", required: true },
    { name: "dias", disabled: false, type: "text", required: true },
    { name: "credito", disabled: false, type: "text", required: true },
    { name: "des1", disabled: false, type: "text", required: true },
    { name: "contacto", disabled: false, type: "text", required: true },
    // { name: "alta", disabled: false, type: "text", required: true },
    { name: "rfc", disabled: false, type: "text", required: true },
    {
      name: "tipo",
      disabled: false,
      type: "text",
      required: true,
      opciones: ["productos", "servicios"],
    },
    { name: "cp", disabled: false, type: "text", required: true },
    {
      name: "diasrevicion",
      disabled: false,
      type: "text",
      required: true,
      dias: ["Lunes", "Martes", "Miercoles", "Jueves", "Viernes"],
    },
    { name: "obser", disabled: false, type: "text", required: true },
    {
      name: "zona",
      disabled: false,
      type: "select",
      required: true,
      api: "https://kapi-zonas.now.sh/api/zonas",
    },
    { name: "url", disabled: false, type: "url", required: true },
    { name: "mail", disabled: false, type: "email", required: true },
    { name: "saldo", disabled: false, type: "text", required: true },
    { name: "usuario", disabled: false, type: "text", required: true },
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
            api={"https://kapi-proveedores.now.sh/"}
            catalogo="proveedores"
            attrs={attrs}
            subCatalogues={subCatalogues}
          />
        </div>
      </div>
    </div>
  );
};
