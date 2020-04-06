import { api_personal } from "../../../utils/apis";

export const vendedores = {
  component: {
    api: api_personal,
    catalogo: "personal",
    attrs: {
      _id: true,
      createAt: true,
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
      bloqueado: true,
      regimencontractual: true,
    },
    inputs: [
      {
        name: "_id",
        disabled: true,
        type: "text",
        required: true,
        regex: "[A-Za-z0-9 \\s]{0,}",
      },
      {
        name: "_id",
        disabled: false,
        type: "text",
        required: true,
        regex: "[A-Za-z0-9 \\s]{0,}",
      },
      {
        name: "createAt",
        disabled: false,
        type: "text",
        required: true,
        regex: "[A-Za-z0-9 \\s]{0,}",
      },
      {
        name: "empleado",
        disabled: false,
        type: "text",
        required: true,
        regex: "[A-Za-z0-9 \\s]{0,}",
      },
      {
        name: "tipo",
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
        name: "usuario",
        disabled: false,
        type: "text",
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
      {
        name: "usuhora00",
        disabled: false,
        type: "text",
        required: true,
        regex: "[A-Za-z0-9 \\s]{0,}",
      },
      {
        name: "horaentrada00",
        disabled: false,
        type: "text",
        required: true,
        regex: "[A-Za-z0-9 \\s]{0,}",
      },
      {
        name: "horasalida00",
        disabled: false,
        type: "text",
        required: true,
        regex: "[A-Za-z0-9 \\s]{0,}",
      },
      {
        name: "foto",
        disabled: false,
        type: "text",
        required: true,
        regex: "[A-Za-z0-9 \\s]{0,}".jpg,
      },
      {
        name: "pais",
        disabled: false,
        type: "text",
        required: true,
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
        name: "calle",
        disabled: false,
        type: "text",
        required: true,
        regex: "[A-Za-z0-9 \\s]{0,}",
      },
      {
        name: "numeroexterior",
        disabled: false,
        type: "text",
        required: true,
        regex: "[A-Za-z0-9 \\s]{0,}",
      },
      {
        name: "numerointerior",
        disabled: false,
        type: "text",
        required: true,
        regex: "[A-Za-z0-9 \\s]{0,}",
      },
      {
        name: "colonia",
        disabled: false,
        type: "text",
        required: true,
        regex: "[A-Za-z0-9 \\s]{0,}",
      },
      {
        name: "poblacion",
        disabled: false,
        type: "text",
        required: true,
        regex: "[A-Za-z0-9 \\s]{0,}",
      },
      {
        name: "ciudad",
        disabled: false,
        type: "text",
        required: true,
        regex: "[A-Za-z0-9 \\s]{0,}",
      },
      {
        name: "estado",
        disabled: false,
        type: "text",
        required: true,
        regex: "[A-Za-z0-9 \\s]{0,}",
      },
      {
        name: "telefono",
        disabled: false,
        type: "text",
        required: true,
        regex: "[A-Za-z0-9 \\s]{0,}",
      },
      {
        name: "rfc",
        disabled: false,
        type: "text",
        required: true,
        regex: "[A-Za-z0-9 \\s]{0,}",
      },
      {
        name: "curp",
        disabled: false,
        type: "text",
        required: true,
        regex: "[A-Za-z0-9 \\s]{0,}",
      },
      {
        name: "numeroseguridadsocial",
        disabled: false,
        type: "text",
        required: true,
        regex: "[A-Za-z0-9 \\s]{0,}",
      },
      {
        name: "departamento",
        disabled: false,
        type: "text",
        required: true,
        regex: "[A-Za-z0-9 \\s]{0,}",
      },
      {
        name: "puesto",
        disabled: false,
        type: "text",
        required: true,
        regex: "[A-Za-z0-9 \\s]{0,}",
      },
      {
        name: "banco",
        disabled: false,
        type: "text",
        required: true,
        regex: "[A-Za-z0-9 \\s]{0,}",
      },
      {
        name: "cuentabanco",
        disabled: false,
        type: "text",
        required: true,
        regex: "[A-Za-z0-9 \\s]{0,}",
      },
      {
        name: "inicioactividades",
        disabled: false,
        type: "text",
        required: true,
        regex: "[A-Za-z0-9 \\s]{0,}",
      },
      {
        name: "tipocontrato",
        disabled: false,
        type: "text",
        required: true,
        regex: "[A-Za-z0-9 \\s]{0,}",
      },
      {
        name: "tipojornada",
        disabled: false,
        type: "text",
        required: true,
        regex: "[A-Za-z0-9 \\s]{0,}",
      },
      {
        name: "pagodesalario",
        disabled: false,
        type: "text",
        required: true,
        regex: "[A-Za-z0-9 \\s]{0,}",
      },
      {
        name: "salariobasecotizacion",
        disabled: false,
        type: "text",
        required: true,
        regex: "[A-Za-z0-9 \\s]{0,}",
      },
      {
        name: "riesgopuesto",
        disabled: false,
        type: "text",
        required: true,
        regex: "[A-Za-z0-9 \\s]{0,}",
      },
      {
        name: "estadonomina",
        disabled: false,
        type: "text",
        required: true,
        regex: "[A-Za-z0-9 \\s]{0,}",
      },
      {
        name: "antiguedad",
        disabled: false,
        type: "text",
        required: true,
        regex: "[A-Za-z0-9 \\s]{0,}",
      },
      {
        name: "correo",
        disabled: false,
        type: "text",
        required: true,
        regex: "[A-Za-z0-9 \\s]{0,}",
      },
      {
        name: "salariodiariointegrado",
        disabled: false,
        type: "text",
        required: true,
        regex: "[A-Za-z0-9 \\s]{0,}",
      },
      {
        name: "observaciones",
        disabled: false,
        type: "text",
        required: true,
        regex: "[A-Za-z0-9 \\s]{0,}",
      },
      {
        name: "bloqueado",
        disabled: false,
        type: "text",
        required: true,
        regex: "[A-Za-z0-9 \\s]{0,}",
      },
      {
        name: "regimencontractual",
        disabled: false,
        type: "text",
        required: true,
        regex: "[A-Za-z0-9 \\s]{0,}",
      },
    ],
    id: "vendedores",
  },
  title: "Vendedores",
  selected: false,
};
