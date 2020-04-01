import { combineReducers } from "redux";
import { clientState } from "./table/table.reducer";

export const uiReducer = combineReducers({
  client: clientState
});
