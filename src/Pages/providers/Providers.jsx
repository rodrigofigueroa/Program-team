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
