import sagaUtils from '~/libraries/sagaUtils';
import { BusinessErrorResponse, HTTPResponse } from '@t/response';

export const {
  ACTIONS: CORPERATION_PROFIT21_ACTIONS,
  TYPES: CORPERATION_PROFIT21_TYPES,
} = sagaUtils.createActionAndTypes<null, null>('CORPERATION_PROFIT21');

export const corperationProfitPatchRequest = CORPERATION_PROFIT21_ACTIONS.REQUEST;

export const corperationProfitPatchSuccess = CORPERATION_PROFIT21_ACTIONS.SUCCESS;

export const corperationProfitPatchFailure = CORPERATION_PROFIT21_ACTIONS.FAILURE;

// export const corperationProfitPatchRequest = () => ({
//   type: CORPERATION_PROFIT21_TYPES.REQUEST,
// });

// export const corperationProfitPatchSuccess = (payload: HTTPResponse<null>) => ({
//   type: CORPERATION_PROFIT21_TYPES.SUCCESS,
//   payload,
// });

// export const corperationProfitPatchFailure = (payload: BusinessErrorResponse) => ({
//   type: CORPERATION_PROFIT21_TYPES.FAILURE,
//   payload,
// });

const corperationPoriftPutReducer = sagaUtils.makeApiReducer<HTTPResponse<null>>(CORPERATION_PROFIT21_TYPES.DEFAULT);

export default corperationPoriftPutReducer;
