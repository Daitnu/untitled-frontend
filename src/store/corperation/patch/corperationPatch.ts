import { all, takeEvery } from 'redux-saga/effects';
import { HTTPResponse } from '~/@types/response';
import sagaUtils from '~/libraries/sagaUtils';
import corperationApi from '../CorperationApi';

export const {
  ACTIONS: CORPERATION_PROFIT21_ACTIONS,
  TYPES: CORPERATION_PROFIT21_TYPES,
} = sagaUtils.createActionAndTypes<null, null>('CORPERATION_PROFIT21');

export const corperationProfitPatchRequest = CORPERATION_PROFIT21_ACTIONS.REQUEST;

export const corperationProfitPatchSuccess = CORPERATION_PROFIT21_ACTIONS.SUCCESS;

export const corperationProfitPatchFailure = CORPERATION_PROFIT21_ACTIONS.FAILURE;

export const corperationProfitPatchClear = CORPERATION_PROFIT21_ACTIONS.CLEAR;

const corperationProfitPatch$ = sagaUtils.makeApiCallSagaFunc({
  type: CORPERATION_PROFIT21_TYPES.DEFAULT,
  apiFunc: corperationApi.updateCoperationProfit,
});

export const corperationProfitPatchReducer = sagaUtils.makeApiReducer<HTTPResponse<null>>(
  CORPERATION_PROFIT21_TYPES.DEFAULT,
);

export function* corperationProfitPatchSaga() {
  yield all([takeEvery(CORPERATION_PROFIT21_TYPES.REQUEST, corperationProfitPatch$)]);
}
