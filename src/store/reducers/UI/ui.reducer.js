import { combineReducers } from "redux";
import { clientState } from "./table/table.reducer";
import { modalState } from "./modal/modal.reducer";
import { ProductsState } from './table/table.reducer.productos';
import { ClavesState } from './table/table.reducer.claves';
import { LineasState } from './table/table.reducer.lineas';
import { MarcasState } from './table/table.reducer.marcas';
import { ImpuestosState } from './table/table.reducer.impuestos';
import { providersState } from "./providers/providers.reducer";
import { contactState } from "./contact/contact.reducer";
import { contactsInternalsState } from "./contacts-internals/contactsInternals.reducer";
import { FabricantesState }  from './table/table.reducer.fabricantes';

export const uiReducer = combineReducers({
  fabricantes: FabricantesState,
  impuestos: ImpuestosState,
  marcas: MarcasState,
  lineas: LineasState,
  claves: ClavesState,
  products: ProductsState,
  client: clientState,
  modal: modalState,
  providers: providersState,
  contact: contactState,
  contactsInternals: contactsInternalsState
});
