import { makeApiReducer } from '../apiUtil';
import { BusinessErrorResponse, HTTPResponse } from '@t/response';
import { IResponseDailyStockPrices } from '@t/data/';

export const CORPERATION_PROFIT21_PUT = 'CORPERATION_PROFIT21_PUT' as const;
export const CORPERATION_PROFIT21_PUT_REQUEST = 'CORPERATION_PROFIT21_PUT_REQUEST' as const;
export const CORPERATION_PROFIT21_PUT_SUCCESS = 'CORPERATION_PROFIT21_PUT_SUCCESS' as const;
export const CORPERATION_PROFIT21_PUT_FAILURE = 'CORPERATION_PROFIT21_PUT_FAILURE' as const;

export const corperationProfitPatchRequest = () => ({
  type: CORPERATION_PROFIT21_PUT,
});

export const corperationProfitPatchSuccess = (payload: HTTPResponse<IResponseDailyStockPrices>) => ({
  type: CORPERATION_PROFIT21_PUT,
  payload,
});

export const corperationProfitPatchFailure = (payload: BusinessErrorResponse) => ({
  type: CORPERATION_PROFIT21_PUT,
  payload,
});

const corperationPoriftPutReducer = makeApiReducer<HTTPResponse<null>>(CORPERATION_PROFIT21_PUT);

export default corperationPoriftPutReducer;
