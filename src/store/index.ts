import { combineReducers } from 'redux';
import { all } from 'redux-saga/effects';
import { stockQuotesGetsGetSaga } from './stock';
import stockQuotes from './stock/stockQuoteStore';

const rootReducer = combineReducers({ stockQuotes });

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;

export function* rootSaga() {
  yield all([stockQuotesGetsGetSaga()]);
}
