import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Login, Dashboard, New } from "./pages";

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Login}></Route>
        <Route path="/dashboard" component={Dashboard}></Route>
        <Route path="/new" component={New}></Route>
      </Switch>
    </BrowserRouter>
  );
}
