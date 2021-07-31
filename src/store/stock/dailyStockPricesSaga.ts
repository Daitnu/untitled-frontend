import { all, takeLatest } from 'redux-saga/effects';
import { makeApiCallSagaFunc } from '~/store/util';
import { DAILY_STOCK_PRICES_GET, DAILY_STOCK_PRICES_GET_REQUEST } from '~/store/stock';
import DailyStockPricesApi from '../util/request/DailyStockPricesApi';

const api = new DailyStockPricesApi();

const dailyStockPricesGet$ = makeApiCallSagaFunc({
  type: DAILY_STOCK_PRICES_GET,
  apiFunc: api.getdailyStockPrices.bind(api),
});

export function* dailyStockPricesGetsGetSaga() {
  yield all([takeLatest(DAILY_STOCK_PRICES_GET_REQUEST, dailyStockPricesGet$)]);
}
