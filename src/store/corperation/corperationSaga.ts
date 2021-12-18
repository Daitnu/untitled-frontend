import { all, takeEvery } from 'redux-saga/effects';
import sagaUtils from '~/libraries/sagaUtils';
import { CORPERATION_PROFIT21_TYPES } from './corperationStore';
import corperationApi from './CorperationApi';

const corperationProfitPatch$ = sagaUtils.makeApiCallSagaFunc({
  type: CORPERATION_PROFIT21_TYPES.DEFAULT,
  apiFunc: corperationApi.updateCoperationProfit,
});

export function* corperationProfitPatchSaga() {
  yield all([takeEvery(CORPERATION_PROFIT21_TYPES.REQUEST, corperationProfitPatch$)]);
}
