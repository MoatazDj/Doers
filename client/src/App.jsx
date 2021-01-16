import React from "react";
import "./App.css";
import Routes from "./Routes/routes";

import { Provider } from "react-redux";
import store from "./Redux/store";
function App() {
  return (
    <Provider store={store}>
      <Routes></Routes>
    </Provider>
  );
}

export default App;
