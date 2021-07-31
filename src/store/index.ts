import { combineReducers } from 'redux';
import { all } from 'redux-saga/effects';
import { dailyStockPricesGetsGetSaga } from './stock';
import stockQuotes from './stock/dailyStockPricesStore';

const rootReducer = combineReducers({ stockQuotes });

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;

export function* rootSaga() {
  yield all([dailyStockPricesGetsGetSaga()]);
}
