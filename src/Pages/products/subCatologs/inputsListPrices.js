import { api_clavesadicionales, api_listaprecios } from "../../../utils/apis";

export const inputsListPrices = {
  component: {
    api: api_listaprecios,
    catalogo: "listaprecios",
    attrs: {
      _id: true,
      id_precio: true,
      nombre: true,
      usuario: true,
      usufecha: true,
      usuhora: true,
    },
    inputs: [
      { name: "_id", disabled: true, type: "text", required: true, regex: "[A-Za-z0-9 \\s]{0,}",},
      { name: "id_precio", disabled: false, type: "number", required: true, regex: "[A-Za-z0-9 \\s]{0,}",},
      { name: "nombre", disabled: false, type: "text", required: true, regex: "[A-Za-z0-9 \\s]{0,}",},
      { name: "usuario", disabled: false, type: "text", required: true, regex: "[A-Za-z0-9 \\s]{0,}",},
      { name: "usufecha", disabled: false, type: "date", required: true, regex: "[A-Za-z0-9 \\s]{0,}",},
      { name: "usuhora", disabled: false, type: "time", required: true, regex: "[A-Za-z0-9 \\s]{0,}",},
    ],
    id: "listaprecios",
  },
  title: "Lista de precios",
  selected: false,
};