import React from "react";
import "./App.sass";

import { Provider } from "react-redux";
import { createStore } from "redux";
import { root } from "./store/reducers/root.reducer";
import Client from "./Pages/clients/Client";

function App() {
  const store = createStore(root);
  return (
    <Provider store={store}>
      <Client /> ;
    </Provider>
  );
}

export default App;
