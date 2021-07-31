import { combineReducers } from 'redux';
import { all } from 'redux-saga/effects';
import { dailyStockPricesGetsGetSaga } from './stock';
import dailyStockPrices from './stock/dailyStockPricesStore';

const rootReducer = combineReducers({ dailyStockPrices });

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;

export function* rootSaga() {
  yield all([dailyStockPricesGetsGetSaga()]);
}
