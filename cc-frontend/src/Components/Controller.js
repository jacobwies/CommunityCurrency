import React, { useState } from "react";
import Login from "./Login";
import Settings from "./Settings";
import Dashboard from "./Dashboard";
import CollectionBoxesPage from "./CollectionBoxesPage";
import { BrowserRouter as BrowserRouter, Router, Switch, Route, Link } from "react-router-dom";

export default function Controller(props) {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Switch>
        <Route path="/dashboard">
          <Dashboard />
        </Route>
        <Route path="/settings">
          <Settings />
        </Route>
        <Route path="/boxes">
          <CollectionBoxesPage api={props.api} />
        </Route>
        <Route path="/">
          <Login />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}
