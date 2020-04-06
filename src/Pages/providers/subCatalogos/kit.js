import { api_kitelementos } from "../../../utils/apis";
import { api_productos } from "../../../utils/apis";
import { api_clasificacionclientes } from "../../../utils/apis";

export const kit = {
  component: {
    api: api_kitelementos,
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
    inputs: [
      {
        name: "_id",
        disabled: true,
        type: "text",
        required: true,
        regex: "[A-Za-z0-9 \\s]{0,}",
      },
      {
        name: "articulo",
        disabled: false,
        type: "text",
        required: true,
        regex: "[A-Za-z0-9 \\s]{0,}"
      },
      {
        name: "componente",
        disabled: false,
        type: "select",
        required: true,
        regex: "[A-Za-z0-9 \\s]{0,}",
        api: `${api_productos}api/productos`,
        label : "articulo"
      },
      {
        name: "cantidad",
        disabled: false,
        type: "number",
        required: true,
        regex: "[A-Za-z0-9 \\s]{0,}",
      },
      {
        name: "almacen",
        disabled: false,
        type: "text",
        required: true,
        regex: "[A-Za-z0-9 \\s]{0,}",
      },
      {
        name: "observ",
        disabled: false,
        type: "text",
        required: true,
        regex: "[A-Za-z0-9 \\s]{0,}",
      },
      {
        name: 'idpartida',
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
        name: "usufecha",
        disabled: false,
        type: "text",
        required: true,
        regex: "[A-Za-z0-9 \\s]{0,}",
      },
      {
        name: "usuhora",
        disabled: false,
        type: "text",
        required: true,
        regex: "[A-Za-z0-9 \\s]{0,}",
      },
    ],
    id: "kitelementos",
  },
  title: "Kit Elementos",
  selected: false,
};