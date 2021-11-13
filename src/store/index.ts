import { combineReducers } from 'redux';
import { all } from 'redux-saga/effects';
import { dailyStockPricesGetsGetSaga } from './stock';
import dailyStockPrices from './stock/dailyStockPricesStore';
import accountRegister from './account/register/accountRegisterStore';
import accountSaga from '~/store/account';

const rootReducer = combineReducers({ dailyStockPrices, accountRegister });

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;

export function* rootSaga() {
  yield all([dailyStockPricesGetsGetSaga(), accountSaga()]);
}
