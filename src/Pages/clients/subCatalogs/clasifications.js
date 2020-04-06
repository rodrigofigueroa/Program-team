import { api_clasificacionclientes } from "../../../utils/apis";

export const clasifications = {
  component: {
    api: api_clasificacionclientes,
    catalogo: "clasificacionclientes",
    attrs: {
      _id: true,
      clasificacion: true,
      descrip: true,
      usuario: true,
      usufecha: true,
      usuhora: true,
    },
    inputs: [
      {
        name: "_id",
        disabled: false,
        type: "text",
        required: true,
        regex: "[A-Za-z0-9 \\s]{0,}",
      },
      {
        name: "clasificacion",
        disabled: false,
        type: "select",
        required: true,
        regex: "[A-Za-z0-9 \\s]{0,}",
        api: `${api_clasificacionclientes}api/clasificacionclientes`,
        label: "clasificacion",
      },
      {
        name: "descrip",
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
    id: "clasificacionclientes",
  },
  title: "Clasificaciones",
  selected: true,
};
