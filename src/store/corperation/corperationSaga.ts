import { all, takeEvery } from 'redux-saga/effects';
import { makeApiCallSagaFunc } from '~/libraries/sagaUtils';
import { CORPERATION_PROFIT21_ACTION_TYPES } from './corperationStore';
import corperationApi from './CorperationApi';

const corperationProfitPut$ = makeApiCallSagaFunc({
  type: CORPERATION_PROFIT21_ACTION_TYPES.DEFAULT,
  apiFunc: corperationApi.updateCoperationProfit,
});

export function* corperationProfitPutSaga() {
  yield all([takeEvery(CORPERATION_PROFIT21_ACTION_TYPES.REQUEST, corperationProfitPut$)]);
}
