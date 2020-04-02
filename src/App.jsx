import React from "react";
import "./App.css";
import Client from "./Pages/clients/Client";
import { Provider } from "react-redux";
import { createStore } from "redux";
import { root } from "./store/reducers/root.reducer";

function App() {
  const store = createStore(root);
  return (
    <Provider store={store}>
      <Client /> ;
    </Provider>
  );
}

export default App;
