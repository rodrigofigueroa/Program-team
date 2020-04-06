import { api_lineas, api_listaprecios, api_marcas } from "../../../utils/apis";

export const inputsProductos = [
    { name: "_id", disabled: true, type: "text", required: true,regex:"[A-Za-z0-9 \\s]{0,}" },
    { name: "articulo", disabled: false, type: "text", required: true,regex:"[A-Za-z0-9 \\s]{0,}" },
    { name: "descrip", disabled: false, type: "text", required: true,regex:"[A-Za-z0-9 \\s]{0,}" },
    { name: "tipo", disabled: false, type: "select", required: true,regex:"[A-Za-z0-9 \\s]{0,}" ,options:[{tipo:"prodcuto"},{tipo:"servicio"}],label:"tipo"},
    { name: "linea", disabled: false, type: "select", required: true,regex:"[A-Za-z0-9 \\s]{0,}" ,api:api_lineas+"api/lineas",label:"linea"},
    { name: "marca", disabled: false, type: "select", required: true,regex:"[A-Za-z0-9 \\s]{0,}" ,api:api_marcas+"api/marcas",label:"marca"},
    { name: "precio1", disabled: false, type: "select", required: true,regex:"[A-Za-z0-9 \\s]{0,}" ,api:api_listaprecios+"api/listaprecios",label:"marca"},
    { name: "existencia", disabled: false, type: "number", required: true,regex:"[A-Za-z0-9 \\s]{0,}" },
    { name: "costo_u", disabled: false, type: "number", required: true,regex:"[A-Za-z0-9 \\s]{0,}" },
    { name: "costo", disabled: false, type: "number", required: true,regex:"[A-Za-z0-9 \\s]{0,}" },
    { name: "unidades_med", disabled: false, type: "select", required: true,regex:"[A-Za-z0-9 \\s]{0,}" },
    { name: "por_recib", disabled: false, type: "number", required: true,regex:"[A-Za-z0-9 \\s]{0,}" },
    { name: "por_surt", disabled: false, type: "number", required: true,regex:"[A-Za-z0-9 \\s]{0,}" },
    { name: "impuesto", disabled: false, type: "number", required: true,regex:"[A-Za-z0-9 \\s]{0,}" },
    { name: "minimo", disabled: false, type: "number", required: true,regex:"[A-Za-z0-9 \\s]{0,}" },
    { name: "maximo", disabled: false, type: "number", required: true,regex:"[A-Za-z0-9 \\s]{0,}" },
    { name: "observ", disabled: false, type: "textarea", required: true,regex:"[A-Za-z0-9 \\s]{0,}" },
    { name: "costo_std", disabled: false, type: "number", required: true,regex:"[A-Za-z0-9 \\s]{0,}" },
    { name: "kit", disabled: false, type: "checkbox", required: true,regex:"[A-Za-z0-9 \\s]{0,}" },
    { name: "serie", disabled: false, type: "checkbox", required: true,regex:"[A-Za-z0-9 \\s]{0,}" },
    { name: "lote", disabled: false, type: "checkbox", required: true,regex:"[A-Za-z0-9 \\s]{0,}" },
    { name: "invent", disabled: false, type: "checkbox", required: true,regex:"[A-Za-z0-9 \\s]{0,}" },
    { name: "imagen", disabled: false, type: "text", required: true,regex:"[A-Za-z0-9 \\s]{0,}" },
    { name: "paraventa", disabled: false, type: "checkbox", required: true,regex:"[A-Za-z0-9 \\s]{0,}" },
    { name: "usuario", disabled: false, type: "text", required: true,regex:"[A-Za-z0-9 \\s]{0,}" },
    { name: "usuhora", disabled: false, type: "time", required: true,regex:"[A-Za-z0-9 \\s]{0,}" },
    { name: "usufecha", disabled: false, type: "date", required: true,regex:"[A-Za-z0-9 \\s]{0,}" },
    { name: "exportado", disabled: false, type: "checkbox", required: false,regex:"[A-Za-z0-9 \\s]{0,}" },
    { name: "granel", disabled: false, type: "checkbox", required: true,regex:"[A-Za-z0-9 \\s]{0,}" },
    { name: "peso", disabled: false, type: "number", required: true,regex:"[A-Za-z0-9 \\s]{0,}" },
    { name: "bloqueado", disabled: false, type: "text", required: false,regex:"[A-Za-z0-9 \\s]{0,}" },
    { name: "u1", disabled: false, type: "number", required: true,regex:"[A-Za-z0-9 \\s]{0,}" },
    { name: "ubicacion", disabled: false, type: "select", required: true,regex:"[A-Za-z0-9 \\s]{0,}" },
    { name: "etiquetas", disabled: false, type: "number", required: true,regex:"[A-Za-z0-9 \\s]{0,}" },
    { name: "oferta", disabled: false, type: "checkbox", required: false,regex:"[A-Za-z0-9 \\s]{0,}" },
    { name: "costopeps", disabled: false, type: "number", required: true,regex:"[A-Za-z0-9 \\s]{0,}" },
    { name: "costoueps", disabled: false, type: "number", required: true,regex:"[A-Za-z0-9 \\s]{0,}" },
    { name: "autor", disabled: false, type: "select", required: true,regex:"[A-Za-z0-9 \\s]{0,}" },
    { name: "tema", disabled: false, type: "select", required: true,regex:"[A-Za-z0-9 \\s]{0,}" },
    { name: "editorial", disabled: false, type: "select", required: true,regex:"[A-Za-z0-9 \\s]{0,}" },
    { 
      name: "fabricante", disabled: false, type: "select", required: true,regex:"[A-Za-z0-9 \\s]{0,}", api: "https://kapi-fabricantes.now.sh/api/fabricantes",
      label: "fabricante"
    },
    { name: "preciousd", disabled: false, type: "number", required: true,regex:"[A-Za-z0-9 \\s]{0,}" },
    { name: "costousd", disabled: false, type: "number", required: true,regex:"[A-Za-z0-9 \\s]{0,}" },
    { name: "claveprodserv", disabled: false, type: "select", required: true,regex:"[A-Za-z0-9 \\s]{0,}" },
    { name: "claveunidad", disabled: false, type: "select", required: true,regex:"[A-Za-z0-9 \\s]{0,}" },
    { name: "hash", disabled: false, type: "text", required: true,regex:"[A-Za-z0-9 \\s]{0,}" },
  ];