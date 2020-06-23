import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import ListBooks from "../components/listBook";
import EditBook from "../components/EditBook";
import Viewook from "../components/ViewBook";
import AddBooK from "../components/AddBook";
import NotFound from "../components/notFound";

function PrivateRoutes(props: any) {
  return (
    <Router>
      <Switch>
        <Redirect from="/login" to="/list" />
        <Route path="/list" exact={true} component={ListBooks} />
        <Route path="/books/add" exact={true} component={AddBooK} />
        <Route path="/books/:id" exact={true} component={Viewook} />
        <Route path="/books/:id/edit" exact={true} component={EditBook} />
        <Redirect from="/" to="/list" />
        <Route path="*" exact={true} component={NotFound} />
      </Switch>
    </Router>
  );
}

export default PrivateRoutes;
