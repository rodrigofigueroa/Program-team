import React from "react";
import "./App.css";
import Clientes from "./Pages/clientes/Clientes";
import { Provider } from "react-redux";
import { createStore } from "redux";
import { root } from "./store/reducers/root.reducer";

function App() {
  const store = createStore(root);
  return (
    <Provider store={store}>
      <Clientes /> ;
    </Provider>
  );
}

export default App;
