import React from "react";
import { Provider } from "react-redux";
import { createStore } from "redux";
import { root } from "./store/reducers/root.reducer";
import { Switch, Route } from "react-router-dom";
import Client from "./Pages/clients/Client";
import Products from "./Pages/products/Products";
import Providers from "./Pages/providers/Providers";
import SideNav from "./components/sideNav/SideNav";
import Shortcuts from "./components/shortcuts/Shortcuts";
const routes = [
  {
    title: "Catalogos",
    selected: false,
    route: "/",
    dropDown: [
      { route: "/clientes", title: "Clientes" },
      { route: "/productos", title: "Productos" },
      { route: "/proveedores", title: "Proveedores" },
    ]
  },
];

const shortcuts = [
  { 
    title: "Clientes",
    icon:"fas fa-users", 
    route:"/clientes",
    links:[
      { route: "/clasificacion", title: "Clientes" },
      { route: "/contactos", title: "Productos" },
      { route: "/zonas", title: "Zonas" },
      { route: "/vendedores", title: "Vendedores" },
    ]
  },
  { 
    title: "Productos",
    icon:"fas fa-boxes",
    route:"/productos",
    links:[
      { route: "/claves-adicionales", title: "Clientes" },
      { route: "/lineas", title: "Productos" },
      { route: "/marcas", title: "Zonas" },
      { route: "/impuestos", title: "Vendedores" },
      { route: "/fabricantes", title: "Clientes" },
      { route: "/precios", title: "Productos" },
      { route: "/lista-precios", title: "Productos" },
    ]
  },
  { 
    title: "Proveedores",
    icon:"fas fa-truck",
    route:"/proveedores",
    links:[
      { route: "/clasificacion", title: "Clientes" },
      { route: "/contactos-internos", title: "Productos" },
      { route: "/kits", title: "Zonas" },
    ] 
  }
];

function App() {
  const store = createStore(root);
  return (
    <Provider store={store}>
      <SideNav routes={routes} />
      <Switch>
        <Route exact path="/">
          <div className="container-fluid">
            <div className='row'>
                {shortcuts.map((card,keyCard) => {
                  return(
                    <div key={keyCard} className='col'>
                      <Shortcuts icon={card.icon} title={card.title} route={card.route}/>
                    </div>
                  )
                })}
            </div>
          </div>
        </Route>
        <Route exact path="/productos">
          <Products />
        </Route>
        <Route exact path="/clientes">
          <Client />
        </Route>
        <Route exact path="/proveedores">
          <Providers />
        </Route>
      </Switch>
    </Provider>
  );
}

export default App;
