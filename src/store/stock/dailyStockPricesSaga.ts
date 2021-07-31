import { all, takeLatest } from 'redux-saga/effects';
import { makeApiCallSagaFunc } from '~/store/util';
import { STOCK_QUOTES_GET, STOCK_QUOTES_GET_REQUEST } from '~/store/stock';
import DailyStockPricesApi from '../util/request/DailyStockPricesApi';

const api = new DailyStockPricesApi();

const dailyStockPricesGet$ = makeApiCallSagaFunc({
  type: STOCK_QUOTES_GET,
  apiFunc: api.getStockQuotes.bind(api),
});

export function* dailyStockPricesGetsGetSaga() {
  yield all([takeLatest(STOCK_QUOTES_GET_REQUEST, dailyStockPricesGet$)]);
}
