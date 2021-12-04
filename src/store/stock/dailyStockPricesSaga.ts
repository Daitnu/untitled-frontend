import { all, takeLatest } from 'redux-saga/effects';
import sagaUtils from '~/libraries/sagaUtils';
import { DAILY_STOCK_PRICES_GET_TYPES } from '../stock';
import DailyStockPricesApi from './DailyStockPricesApi';

const api = new DailyStockPricesApi();

const dailyStockPricesGet$ = sagaUtils.makeApiCallSagaFunc({
  type: DAILY_STOCK_PRICES_GET_TYPES.DEFAULT,
  apiFunc: api.getdailyStockPrices.bind(api),
});

export function* dailyStockPricesGetsGetSaga() {
  yield all([takeLatest(DAILY_STOCK_PRICES_GET_TYPES.REQUEST, dailyStockPricesGet$)]);
}
