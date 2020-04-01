import { combineReducers } from "redux";
import { uiReducer } from "./UI/ui.reducer";

export const root = combineReducers({
  ui: uiReducer
});
