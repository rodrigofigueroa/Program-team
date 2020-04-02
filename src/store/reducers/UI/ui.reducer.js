import { combineReducers } from "redux";
import { clientState } from "./table/table.reducer";
import { modalState } from "./modal/modal.reducer";
import { contactState } from "./contact/contact.reducer";

export const uiReducer = combineReducers({
  client: clientState,
  contact: contactState,
  modal: modalState
});
