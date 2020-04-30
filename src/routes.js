import React from "react";
import { Calendar }   from './components';

const routes = (
  <HashRouter>
    <Switch>
      <Route path="/" component={Calendar} />
      <Redirect from="/" to="/calendar" />
    </Switch>
  </HashRouter>
);

export default routes;
