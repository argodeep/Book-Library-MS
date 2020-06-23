import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Login from "../components/login";

function PublicRoutes(props: any) {
  return (
    <Router>
      <Switch>
        <Route path="/login" exact={true} component={Login} />
        <Redirect from="/" to="/login" />
      </Switch>
    </Router>
  );
}

export default PublicRoutes;
