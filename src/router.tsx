import React from 'react';
import { Route, Switch, Router } from 'react-router';
import { createBrowserHistory } from 'history';
import { ThemeProvider } from 'styled-components';
import { ResetCss } from '~/GlobalStyle';
import { GroupPage, Mypage, NewsPage, RankingPage, StockListPage, NotFoundPage } from './pages';

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
          <Route path="/" exact component={StockListPage} />
          <Route path="/news" exact component={NewsPage} />
          <Route path="/group" component={GroupPage} />
          <Route path="/ranking" component={RankingPage} />
          <Route path="/mypage" component={Mypage} />
          <Route path="*" component={NotFoundPage} />
        </Switch>
      </Router>
    </ThemeProvider>
  </>
);

export default AppRouter;
