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

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/" exact render={(props) => <App {...props} />} />
      <Route
        path="/register"
        exact
        render={(props) => <Register {...props} />}
      />
      <Route
        path="/users/activate/:token"
        exact
        render={(props) => <Activate {...props} />}
      />
      <Route path="/login" exact render={(props) => <Login {...props} />} />
      <Route
        path="/users/password/forgot"
        exact
        render={(props) => <Forgot {...props} />}
      />
      <Route
        path="/users/password/reset/:token"
        exact
        render={(props) => <Reset {...props} />}
      />
    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);
