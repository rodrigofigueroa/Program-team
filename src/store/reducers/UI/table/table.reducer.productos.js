import { UPDATE_VISIBLE_COLUMNS } from "../../../actions/actions.vars";
import { updateVisibleColumns } from "../../../actions/table.action";

const initialValuesProductos = {

    _id: true,
    createAt: false,
    articulo: true,
    descrip: true,
    tipo: true,
    linea: true,
    marca: true,
    precio1: false,
    existencia: false,
    costo_u: false,
    costo: false,
    unidades_med: false,
    por_recib: false,
    por_surt: false,
    impuesto: false,
    minimo: false,
    maximo: false,
    observ: false,
    costo_std: false,
    kit: false,
    serie: false,
    lote: false,
    invent: false,
    imagen: false,
    paraventa: false,
    usuario: false,
    usuhora: false,
    usufecha: false,
    exportado: false,
    granel: false,
    peso: false,
    bloqueado: false,
    u1: false,
    ubicacion: false,
    etiquetas: false,
    oferta: false,
    costopeps: false,
    costoueps: false,
    autor: false,
    tema: false,
    editorial: false,
    fabricante: false,
    preciousd: false,
    costousd: false,
    claveprodserv: false,
    claveunidad: false,
    hash: false,
}

export const ProductsState = (state = initialValuesProductos, action) => {
    switch (action.type) {
      case UPDATE_VISIBLE_COLUMNS:
        return updateVisibleColumns(state, action.payload);
      default:
        return state;
    }
  };