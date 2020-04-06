import { api_clavesadicionales } from "../../../utils/apis";

export const inputsKeysAditionals = {
  component: {
    api: api_clavesadicionales,
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
    inputs: [
      { name: "_id", disabled: true, type: "text", required: true, regex: "[A-Za-z0-9 \\s]{0,}",},
      { name: "clave", disabled: false, type: "number", required: true, regex: "[A-Za-z0-9 \\s]{0,}",},
      { name: "descripcion", disabled: false, type: "textarea", required: true, regex: "[A-Za-z0-9 \\s]{0,}",},
      { name: "usuario", disabled: false, type: "text", required: true, regex: "[A-Za-z0-9 \\s]{0,}",},
      { name: "usufecha", disabled: false, type: "date", required: true, regex: "[A-Za-z0-9 \\s]{0,}",},
      { name: "usuhora", disabled: false, type: "time", required: true, regex: "[A-Za-z0-9 \\s]{0,}",},
      { name: "articulo", disabled: false, type: "text", required: true, regex: "[A-Za-z0-9 \\s]{0,}",},
      { name: "cantidad", disabled: false, type: "number", required: true, regex: "[A-Za-z0-9 \\s]{0,}",},
      { name: "unidad", disabled: false, type: "text", required: true, regex: "[A-Za-z0-9 \\s]{0,}",},
      { name: "existencia", disabled: false, type: "number", required: true, regex: "[A-Za-z0-9 \\s]{0,}",},
      { name: "precio", disabled: false, type: "number", required: true, regex: "[A-Za-z0-9 \\s]{0,}",},
      { name: "imagen", disabled: false, type: "text", required: true, regex: "[A-Za-z0-9 \\s]{0,}",},
    ],
    id: "clavesadicionales",
  },
  title: "Claves Adicionales",
  selected: true,
};