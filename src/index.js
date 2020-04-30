import React    from 'react';
import ReactDOM from 'react-dom';
import { HashRouter,
         Route,
         Redirect,
         Switch } from 'react-router-dom';
         
import * as serviceWorker from './serviceWorker';
import App                from './App';

const routes = (
    <HashRouter>      
      <Redirect exact from="/" to="/calendar" />
      <Switch>      
        <Route path="/" component={App} />
      </Switch>
    </HashRouter>
  );

ReactDOM.render(routes, document.getElementById("root"));

serviceWorker.unregister();
