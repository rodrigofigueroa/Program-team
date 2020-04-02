import React from "react";
import "./App.css";
import { Provider } from "react-redux";
import { createStore } from "redux";
import { root } from "./store/reducers/root.reducer";
import { Switch, Route } from "react-router-dom";
import Client from "./Pages/clients/Client";
import Products from "./Pages/products/Products";
import Providers from "./Pages/providers/Providers";

function App() {
  const store = createStore(root);
  return (
    <Provider store={store}>
      <Switch>
        <Route path="/proveedores">
          <Providers /> ;
        </Route>
        <Route path="/productos">
          <Products /> ;
        </Route>
        <Route path="/clientes">
          <Client /> ;
        </Route>
      </Switch>
    </Provider>
  );
}

export default App;
