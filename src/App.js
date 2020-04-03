import React from "react";
import { Provider } from "react-redux";
import { createStore } from "redux";
import { root } from "./store/reducers/root.reducer";
import { Switch, Route } from "react-router-dom";
import Client from "./Pages/clients/Client";
import Products from "./Pages/products/Products";
import Providers from "./Pages/providers/Providers";
import Kits from './Pages/kits/Kits';
import Contacts from './Pages/contacts/Contacts';

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
