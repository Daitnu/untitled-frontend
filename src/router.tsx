import React from 'react';
import { Route, Switch, Router } from 'react-router';
import { createBrowserHistory } from 'history';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { ThemeProvider } from 'styled-components';
import { ResetCss } from '~/GlobalStyle';
import {
  GroupPage,
  Mypage,
  NewsPage,
  RankingPage,
  StockListPage,
  NotFoundPage,
  CorperateInfomationPage,
} from './pages';
import Header from './components/Header';
import Footer from './components/Footer';

const counterReducer = (state = { value: 0 }, action) => {
  switch (action.type) {
    case 'counter/incremented':
      return { value: state.value + 1 };
    case 'counter/decremented':
      return { value: state.value - 1 };
    default:
      return state;
  }
};

export const history = createBrowserHistory();
const store = createStore(counterReducer);
export const theme = {
  colors: {
    primary: '#0070f3',
  },
};

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
            <Route path="/news" exact component={NewsPage} />
            <Route path="/group" component={GroupPage} />
            <Route path="/ranking" component={RankingPage} />
            <Route path="/mypage" component={Mypage} />
            <Route path="*" component={NotFoundPage} />
          </Switch>
          <Footer />
        </Router>
      </Provider>
    </ThemeProvider>
  </>
);

export default AppRouter;
