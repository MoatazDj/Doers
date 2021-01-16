import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "react-toastify/dist/react-toastify.cjs.development";
import Home from "../Components/HomePage/HomePage";
import Login from "../Components/LoginPage/LoginPage";
import Register from "../Components/RegisterPage/RegisterPage";
import Forgot from "../Components/ForgotPage/ForgotPage";
import Activate from "../Components/ActivatePage/ActivatePage";
import Reset from "../Components/ResetPage/ResetPage";
import "../assets/main.css";

import Navbar from "../Components/Navbar/Navbar";

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
