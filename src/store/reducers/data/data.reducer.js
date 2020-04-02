import { combineReducers } from "redux";
import { editState } from "./btnActions/editar.reducer";
export const dataReducer = combineReducers({
  edit: editState
});
