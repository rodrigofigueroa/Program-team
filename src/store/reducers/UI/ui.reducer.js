import { combineReducers } from "redux";
import { clientState } from "./table/table.reducer";
import { modalState } from "./modal/modal.reducer";
import { providersState } from "./providers/providers.reducer";

export const uiReducer = combineReducers({
  client: clientState,
  modal: modalState,
  providers: providersState,
});
