import { makeApiReducer, createActionTypes } from '~/libraries/sagaUtils';
import { BusinessErrorResponse, HTTPResponse } from '@t/response';

const CORPERATION_PROFIT21_ACTIONS = createActionTypes('CORPERATION_PROFIT21');

export const corperationProfitPatchRequest = () => ({
  type: CORPERATION_PROFIT21_ACTIONS.REQUEST,
});

export const corperationProfitPatchSuccess = (payload: HTTPResponse<null>) => ({
  type: CORPERATION_PROFIT21_ACTIONS.SUCCESS,
  payload,
});

export const corperationProfitPatchFailure = (payload: BusinessErrorResponse) => ({
  type: CORPERATION_PROFIT21_ACTIONS.FAILURE,
  payload,
});

const corperationPoriftPutReducer = makeApiReducer<HTTPResponse<null>>(CORPERATION_PROFIT21_ACTIONS.DEFAULT);

export default corperationPoriftPutReducer;
