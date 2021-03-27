import React from 'react';
import { Route, Switch, Router } from 'react-router';
import { createBrowserHistory } from 'history';
import { ThemeProvider } from 'styled-components';
import { ResetCss } from '~/GlobalStyle';

import StockList from './pages/StockList';

export const history = createBrowserHistory();

export const theme = {
  colors: {
    primary: '#0070f3',
  },
};

const AppRouter: React.FC = () => (
  <>
    <ResetCss />
    <ThemeProvider theme={theme}>
      <Router history={history}>
        <Switch>
          <Route path="/" exact component={StockList} />
        </Switch>
      </Router>
    </ThemeProvider>
  </>
);

export default AppRouter;
