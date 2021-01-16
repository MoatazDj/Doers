import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "react-toastify/dist/react-toastify.cjs.development";
import Home from "./Screens/Home";
import Login from "./Screens/Login.jsx";
import Register from "./Screens/Register";
import Forgot from "./Screens/Forgot";
import Activate from "./Screens/Activate";
import Reset from "./Screens/Reset";
import "./assets/main.css";

import Navbar from "../Navbar/Navbar";

const Routes = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route path="/" exact render={(props) => <Home {...props} />} />
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
    </BrowserRouter>
  );
};

export default Routes;