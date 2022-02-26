import React from 'react';
import { Route, Switch, Router } from 'react-router';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import logger from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
import { ThemeProvider } from 'styled-components';

import { history } from './libraries/api';
import rootReducer, { rootSaga } from './store';
import { ResetCss } from '~/globalStyles/';
import { StockListPage, NotFoundPage, CorperateInfomationPage, LoginPage, RegisterPage } from './pages';
import Test from './pages/Test';
import LogoutPage from './pages/Account/Logout/Logout';
import { PATH_URL } from './constants';

export const theme = {
  colors: {
    primary: '#0070f3',
  },
};

const sagaMiddleware = createSagaMiddleware();
const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(sagaMiddleware, logger)));

sagaMiddleware.run(rootSaga);

const AppRouter: React.FC = () => (
  <>
    <ResetCss />
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <Router history={history}>
          <Switch>
            <Route path={PATH_URL.HOME} exact component={StockListPage} />
            <Route path={PATH_URL.CORP_CORPCODE} exact component={CorperateInfomationPage} />
            <Route path={PATH_URL.LOGIN} component={LoginPage} />
            <Route path={PATH_URL.LOGOUT} component={LogoutPage} />
            <Route path={PATH_URL.REGISTER} component={RegisterPage} />
            <Route path="/test" component={Test} />
            <Route path="*" component={NotFoundPage} />
          </Switch>
        </Router>
      </Provider>
    </ThemeProvider>
  </>
);

export default AppRouter;
