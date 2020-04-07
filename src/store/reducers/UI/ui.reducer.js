import { combineReducers } from "redux";
import { clientState } from "./table/table.reducer";
import { modalState } from "./modal/modal.reducer";
import { ProductsState } from "./table/table.reducer.productos";
import { providersState } from "./providers/providers.reducer";
import { swalState } from "./swal/swal.reducer";

export const uiReducer = combineReducers({
  products: ProductsState,
  client: clientState,
  modal: modalState,
  providers: providersState,
  swal: swalState,
});
