import { combineReducers } from 'redux';
import { all } from 'redux-saga/effects';
import { dailyStockPricesGetsGetSaga, dailyStockPricesGetReducer } from './dailyStockPrices';

export const dailyStockPrices = combineReducers({ get: dailyStockPricesGetReducer });

export default function* dailyStockPricesSaga() {
  yield all([dailyStockPricesGetsGetSaga()]);
}
