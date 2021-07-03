import { all, takeLatest } from 'redux-saga/effects';
import { makeApiCallSagaFunc } from '~/store/util';
import { STOCK_QUOTES_GET, STOCK_QUOTES_GET_REQUEST } from '~/store/stock';
import StockQuoteApi from '../util/request/StockQuoteApi';

const api = new StockQuoteApi();

const stockQuotesGet$ = makeApiCallSagaFunc({
  type: STOCK_QUOTES_GET,
  apiFunc: api.getStockQuotes.bind(api),
});

export function* stockQuotesGetsGetSaga() {
  yield all([takeLatest(STOCK_QUOTES_GET_REQUEST, stockQuotesGet$)]);
}
