import { all, takeLatest } from 'redux-saga/effects';
import { makeApiCallSagaFunc } from '../apiUtil';
import { CORPERATION_PROFIT21_PUT, CORPERATION_PROFIT21_PUT_REQUEST } from '../corperation';

import CorperationApi from './CorperationApi';

const api = new CorperationApi();

const corperationProfitPut$ = makeApiCallSagaFunc({
  type: CORPERATION_PROFIT21_PUT,
  apiFunc: api.putCoperationProfit.bind(api),
});

export function* dailyStockPricesGetsGetSaga() {
  yield all([takeLatest(CORPERATION_PROFIT21_PUT_REQUEST, corperationProfitPut$)]);
}
