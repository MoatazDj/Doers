import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "react-toastify/dist/react-toastify.cjs.development";
import App from "./App";
import Login from "./screens/Login.jsx";
import Register from "./screens/Register";
import Forgot from "./screens/Forgot";
import Activate from "./screens/Activate";
import Reset from "./screens/Reset";
import "./assets/main.css";
import Navbar from "./navbar/navbar";
import { Provider } from "react-redux";
import store from "./data/store";

ReactDOM.render(
  <Provider store={store}></Provider>,

  document.getElementById("root")
);
