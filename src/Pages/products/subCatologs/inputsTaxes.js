import { api_impuestos } from "../../../utils/apis";

export const inputsTaxes = {
  component: {
    api: api_impuestos,
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
    inputs: [
      { name: "_id", disabled: false, type: "text", required: true, regex: "[A-Za-z0-9 \\s]{0,}",},
      { name: "impuesto", disabled: false, type: "text", required: true, regex: "[A-Za-z0-9 \\s]{0,}",},
      { name: "descrip", disabled: false, type: "textarea", required: true, regex: "[A-Za-z0-9 \\s]{0,}",},
      { name: "valor", disabled: false, type: "text", required: true, regex: "[A-Za-z0-9 \\s]{0,}",},
      { name: "usuario", disabled: false, type: "text", required: true, regex: "[A-Za-z0-9 \\s]{0,}",},
      { name: "usufecha", disabled: false, type: "date", required: true, regex: "[A-Za-z0-9 \\s]{0,}",},
      { name: "usuhora", disabled: false, type: "time", required: true, regex: "[A-Za-z0-9 \\s]{0,}",},
    ],
    id: "impuestos",
  },
  title: "Impuestos",
  selected: false,
};