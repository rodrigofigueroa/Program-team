import { api_fabricantes } from "../../../utils/apis";

export const inputsManufacturers = {
  component: {
    api: api_fabricantes,
    catalogo: "fabricantes",
    attrs: {
      _id: true,
      fabricante: true,
      nombre: true,
      usuario: true,
      usufecha: true,
      usuhora: true,
    },
    inputs: [
      { name: "_id", disabled: true, type: "text", required: true, regex: "[A-Za-z0-9 \\s]{0,}",},
      { name: "fabricante", disabled: false, type: "text", required: true, regex: "[A-Za-z0-9 \\s]{0,}",},
      { name: "nombre", disabled: false, type: "text", required: true, regex: "[A-Za-z0-9 \\s]{0,}",},
      { name: "usuario", disabled: false, type: "text", required: true, regex: "[A-Za-z0-9 \\s]{0,}",},
      { name: "usufecha", disabled: false, type: "date", required: true, regex: "[A-Za-z0-9 \\s]{0,}",},
      { name: "usuhora", disabled: false, type: "time", required: true, regex: "[A-Za-z0-9 \\s]{0,}",},
    ],
    id: "fabricantes",
  },
  title: "Fabricantes",
  selected: false,
};