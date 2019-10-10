import React from "react";
import logo from "./logo.svg";
import "./App.css";

import Vista from "../src/VistaInicial/Vista_inicial";
import Boton1 from "./boton1";
import Boton2 from "./boton2";
import Boton3 from "./boton3";
import Login from './Login';

import { BrowserRouter, Route, Switch } from "react-router-dom";
import SignUp from "./SignUp";

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Vista} />
      <Route exact path="/LoBasico" component={Boton1} />
      <Route exact path="/SDK" component={Boton2} />
      <Route exact path="/Example" component={Boton3} />
      <Route exact path="/Login"  component={Login} />
      <Route exact path="/SignUp"  component={SignUp} />
    </Switch>
  </BrowserRouter>
);

export default App;
