import { api_zonas } from "../../../utils/apis";

export const zones = {
  component: {
    api: api_zonas,
    catalogo: "zonas",
    attrs: {
      _id: true,
      zona: true,
      descrip: true,
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
        name: "zona",
        disabled: false,
        type: "select",
        required: true,
        regex: "[A-Za-z0-9 \\s]{0,}",
        api: `${api_zonas}api/zonas`,
        label: "zona",
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
  title: "Zonas",
  selected: false,
};
