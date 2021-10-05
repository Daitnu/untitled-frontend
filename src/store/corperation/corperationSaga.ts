import { all, takeEvery } from 'redux-saga/effects';
import { makeApiCallSagaFunc } from '~/libraries/sagaUtils';
import { CORPERATION_PROFIT21_PUT, CORPERATION_PROFIT21_PUT_REQUEST } from '.';
import corperationApi from './CorperationApi';

const corperationProfitPut$ = makeApiCallSagaFunc({
  type: CORPERATION_PROFIT21_PUT,
  apiFunc: corperationApi.updateCoperationProfit,
});

export function* corperationProfitPutSaga() {
  yield all([takeEvery(CORPERATION_PROFIT21_PUT_REQUEST, corperationProfitPut$)]);
}
