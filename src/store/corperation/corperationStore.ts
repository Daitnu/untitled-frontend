import { makeApiReducer, createActionTypes } from '~/libraries/sagaUtils';
import { BusinessErrorResponse, HTTPResponse } from '@t/response';

export const CORPERATION_PROFIT21_ACTION_TYPES = createActionTypes('CORPERATION_PROFIT21');

export const corperationProfitPatchRequest = () => ({
  type: CORPERATION_PROFIT21_ACTION_TYPES.REQUEST,
});

export const corperationProfitPatchSuccess = (payload: HTTPResponse<null>) => ({
  type: CORPERATION_PROFIT21_ACTION_TYPES.SUCCESS,
  payload,
});

export const corperationProfitPatchFailure = (payload: BusinessErrorResponse) => ({
  type: CORPERATION_PROFIT21_ACTION_TYPES.FAILURE,
  payload,
});

const corperationPoriftPutReducer = makeApiReducer<HTTPResponse<null>>(CORPERATION_PROFIT21_ACTION_TYPES.DEFAULT);

export default corperationPoriftPutReducer;
