import { api_lineas } from "../../../utils/apis";

export const inputsLines = {
  component: {
    api: api_lineas,
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
    inputs: [
      { name: "_id", disabled: false, type: "text", required: true, regex: "[A-Za-z0-9 \\s]{0,}",},
      { name: "linea", disabled: false, type: "text", required: true, regex: "[A-Za-z0-9 \\s]{0,}",},
      { name: "descrip", disabled: false, type: "textarea", required: true, regex: "[A-Za-z0-9 \\s]{0,}",},
      { name: "usuario", disabled: false, type: "text", required: true, regex: "[A-Za-z0-9 \\s]{0,}",},
      { name: "usufecha", disabled: false, type: "date", required: true, regex: "[A-Za-z0-9 \\s]{0,}",},
      { name: "usuhora", disabled: false, type: "time", required: true, regex: "[A-Za-z0-9 \\s]{0,}",},
      { name: "numero", disabled: false, type: "number", required: true, regex: "[A-Za-z0-9 \\s]{0,}",},
    ],
    id: "lineas",
  },
  title: "Lineas",
  selected: false,
};