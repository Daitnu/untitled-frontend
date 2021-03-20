import React from 'react';
import { Route, Switch, Router } from 'react-router';
import { createBrowserHistory } from 'history';
import App from './App';

export const history = createBrowserHistory();

const AppRouter: React.FC = () => (
  <Router history={history}>
    <Switch>
      <Route path="/" exact component={App} />
    </Switch>
  </Router>
);

export default AppRouter;
