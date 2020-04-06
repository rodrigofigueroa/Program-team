import { api_marcas } from "../../../utils/apis";

export const inputsBrands = {
  component: {
    api: api_marcas,
    catalogo: "marcas",
    attrs: {
      _id: true,
      marca: true,
      descrip: true,
      usuario: true,
      usufecha: true,
      usuhora: true,
      numero: true,
    },
    inputs: [
      { name: "_id", disabled: false, type: "text", required: true, regex: "[A-Za-z0-9 \\s]{0,}",},
      { name: "marca", disabled: false, type: "text", required: true, regex: "[A-Za-z0-9 \\s]{0,}",},
      { name: "descrip", disabled: false, type: "textarea", required: true, regex: "[A-Za-z0-9 \\s]{0,}",},
      { name: "usuario", disabled: false, type: "text", required: true, regex: "[A-Za-z0-9 \\s]{0,}",},
      { name: "usufecha", disabled: false, type: "date", required: true, regex: "[A-Za-z0-9 \\s]{0,}",},
      { name: "usuhora", disabled: false, type: "time", required: true, regex: "[A-Za-z0-9 \\s]{0,}",},
      { name: "numero", disabled: false, type: "number", required: true, regex: "[A-Za-z0-9 \\s]{0,}",},
    ],
    id: "marcas",
  },
  title: "Marcas",
  selected: false,
};