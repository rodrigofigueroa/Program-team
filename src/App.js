import React from "react";
import { Provider } from "react-redux";
import { createStore } from "redux";
import { root } from "./store/reducers/root.reducer";
import { Switch, Route } from "react-router-dom";
import Client from "./Pages/clients/Client";
import Products from "./Pages/products/Products";
import Providers from "./Pages/providers/Providers";
import ClavesAdicionales from './Pages/products/clavesadicionales/ClavesAdicionales';
import Lineas from './Pages/products/lineas/Lineas';
import Marcas  from './Pages/products/marcas/Marcas';
import Impuestos from './Pages/products/impuestos/Impuestos';
function App() {
  const store = createStore(root);
  return (
    <Provider store={store}>
      <Switch>
        <Route path="/proveedores">
          <Providers />
        </Route>
        <Route path="/productos">
          <Products />
        </Route>
        <Route path="/clientes">
          <Client />
        </Route>
        <Route path="/claves-adicionales">
          <ClavesAdicionales />
        </Route>
        <Route path="/lineas">
          <Lineas />
        </Route>
        <Route path="/marcas">
          <Marcas />
        </Route>
        <Route path="/impuestos">
          <Impuestos />
        </Route>
      </Switch>
    </Provider>
  );
}

export default App;
