import React from "react";
import logo from "./logo.svg";
import "./App.css";

import Vista from "../src/VistaInicial/Vista_inicial";
import Boton1 from "./boton1";
import Boton2 from "./boton2";
import Boton3 from "./boton3";

import { BrowserRouter, Route, Switch } from "react-router-dom";

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Vista} />
      <Route exact path="/boton1" component={Boton1} />
      <Route exact path="/boton2" component={Boton2} />
      <Route exact path="/boton3" component={Boton3} />
    </Switch>
  </BrowserRouter>
);

export default App;
