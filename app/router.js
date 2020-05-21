import React, { Fragment } from "react";
import { ConnectedRouter } from "react-router-redux";
import { Switch, Route } from "react-router-dom";
import BasicLayout from "./layouts/BasicLayout";

import Form from "./pages/Masters/Form"



function RouterConfig({ history }) {
  return (
    <Fragment>
      <ConnectedRouter history={history}>
        <Switch>
          <Route path="/" component={Form} />

          
        </Switch>
      </ConnectedRouter>
    </Fragment>
  );
}

export default RouterConfig;
