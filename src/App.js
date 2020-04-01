import React from "react";
import "./App.sass";
import Products from "./components/Products";
import { Provider } from "react-redux";
import { createStore } from "redux";
import { root } from "./store/reducers/root.reducer";
import Clientes from "./Pages/clientes/Clientes";

function App() {
  const store = createStore(root);
  return (
    <Provider store={store}>
      <Clientes /> ;
    </Provider>
  );
}

export default App;
