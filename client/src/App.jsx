import React from "react";
import "./App.css";
import Routes from "./routes";

import { Provider } from "react-redux";
import store from "./data/store";
function App() {
  return (
    <Provider store={store}>
      <Routes></Routes>
    </Provider>
  );
}

export default App;
