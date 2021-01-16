import React from "react";
import "./App.css";
import Routes from "./Components/Routes/routes";

import { Provider } from "react-redux";
import store from "./Redux/data/store";
function App() {
  return (
    <Provider store={store}>
      <Routes></Routes>
    </Provider>
  );
}

export default App;
