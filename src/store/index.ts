import { combineReducers } from 'redux';
import { all } from 'redux-saga/effects';
import { dailyStockPricesGetsGetSaga } from './stock';
import dailyStockPrices from './stock/dailyStockPricesStore';
import { accountRegisterPostReducer } from './account/register';
import accountLogin from './account/login/accountLoginStore';
import accountSaga from '~/store/account';

const rootReducer = combineReducers({ dailyStockPrices, accountRegisterPostReducer, accountLogin });

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;

export function* rootSaga() {
  yield all([dailyStockPricesGetsGetSaga(), accountSaga()]);
}
