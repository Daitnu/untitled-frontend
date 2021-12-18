import { combineReducers } from 'redux';
import { all } from 'redux-saga/effects';
import dailyStockPricesSaga, { dailyStockPrices } from './stock';
import accountSaga, { account } from './account';
import corperationSaga, { corperation } from './corperation';

const rootReducer = combineReducers({ dailyStockPrices, account, corperation });

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;

export function* rootSaga() {
  yield all([dailyStockPricesSaga(), accountSaga(), corperationSaga()]);
}
