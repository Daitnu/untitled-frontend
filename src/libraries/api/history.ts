import { createBrowserHistory } from 'history';
export const history = createBrowserHistory();

export const historyPush = (url: string) => {
  history.push(url);
};
