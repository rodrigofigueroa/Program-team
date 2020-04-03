import React from "react";
import { Provider } from "react-redux";
import { createStore } from "redux";
import { root } from "./store/reducers/root.reducer";
import { Switch, Route } from "react-router-dom";
import Client from "./Pages/clients/Client";
import Products from "./Pages/products/Products";
import Providers from "./Pages/providers/Providers";
import ClavesAdicionales from './Pages/clavesadicionales/ClavesAdicionales';

import Lineas from './Pages/lineas/Lineas';
import Marcas  from './Pages/marcas/Marcas';
import Impuestos from './Pages/impuestos/Impuestos';
import Contacts from "./Pages/contacts/Contacts";
import Fabricantes from  './Pages/fabricantes/Fabricantes';
import Kits from './Pages/kits/Kits';

function App() {
  const store = createStore(root);
  return (
    <Provider store={store}>
      <Switch>
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
        <Route path="/fabricantes">
            <Fabricantes />
        </Route>
        <Route path="/proveedores">
          <Providers />
        </Route>
        <Route path="/kits">
          <Kits />
        </Route>
        <Route path="/contactos">
          <Contacts />
        </Route>
      </Switch>
    </Provider>
  );
}

export default App;
