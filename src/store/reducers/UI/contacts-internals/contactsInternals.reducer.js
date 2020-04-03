import { updateVisibleColumns } from "../../../actions/table.action";
import { UPDATE_VISIBLE_CONTACTS_INTERNALS } from "../../../actions/actions.vars";

const initialTableState = {
    _id: true,
    empleado: false,
    tipo: false,
    nombre: false,
    usuario: false,
    usufecha: false,
    usuhora: false,
    horaentrada: false,
    horasalida: false,
    foto: false,
    pais: false,
    cp: false,
    calle: false,
    numeroexterior: false,
    numerointerior: false,
    colonia: false,
    poblacion: false,
    ciudad: false,
    estado: false,
    telefono: false,
    rfc: false,
    curp: false,
    numeroseguridadsocial: false,
    departamento: false,
    puesto: false,
    banco: false,
    cuentabanco: false,
    inicioactividades: false,
    tipocontrato: false,
    tipojornada: false,
    pagodesalario: false,
    salariobasecotizacion: false,
    riesgopuesto: false,
    estadonomina: false,
    antiguedad: false,
    correo: false,
    salariodiariointegrado: false,
    observaciones: false,
    bloqueado: false,
    regimencontractual: false,
    actions: true
};

export const contactsInternalsState = (state = initialTableState, action) => {
  switch (action.type) {
    case UPDATE_VISIBLE_CONTACTS_INTERNALS:
      return updateVisibleColumns(state, action.payload);
    default:
      return state;
  }
};