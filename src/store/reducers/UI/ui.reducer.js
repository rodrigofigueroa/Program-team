import { combineReducers } from "redux";
import { clientState } from "./table/table.reducer";
import { modalState } from "./modal/modal.reducer";

export const uiReducer = combineReducers({
  client: clientState,
  modal: modalState
});
