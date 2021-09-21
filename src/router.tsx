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
import Header from './components/Header';
import Footer from './components/Footer';

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
          <Header />
          <Switch>
            <Route path="/" exact component={StockListPage} />
            <Route path="/corp/:code" exact component={CorperateInfomationPage} />
            <Route path="/login" component={LoginPage} />
            <Route path="/register" component={RegisterPage} />
            <Route path="*" component={NotFoundPage} />
          </Switch>
          <Footer />
        </Router>
      </Provider>
    </ThemeProvider>
  </>
);

export default AppRouter;
