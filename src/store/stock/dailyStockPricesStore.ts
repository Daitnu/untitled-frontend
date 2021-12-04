import { createActionTypes, makeApiReducer } from '~/libraries/sagaUtils';
import { BusinessErrorResponse, HTTPResponse } from '@t/response';
import { IResponseDailyStockPrices } from '@t/data';

export const DAILY_STOCK_PRICES_GET_ACTION_TYPES = createActionTypes('DAILY_STOCK_PRICES_GET');

export const dailyStockPricesGetRequest = () => ({
  type: DAILY_STOCK_PRICES_GET_ACTION_TYPES.REQUEST,
});

export const dailyStockPricesGetSuccess = (payload: HTTPResponse<IResponseDailyStockPrices>) => ({
  type: DAILY_STOCK_PRICES_GET_ACTION_TYPES.SUCCESS,
  payload,
});

export const dailyStockPricesGetFailure = (payload: BusinessErrorResponse) => ({
  type: DAILY_STOCK_PRICES_GET_ACTION_TYPES.FAILURE,
  payload,
});

const dailyStockPricesGetReducer = makeApiReducer<HTTPResponse<IResponseDailyStockPrices>>(
  DAILY_STOCK_PRICES_GET_ACTION_TYPES.DEFAULT,
);

export default dailyStockPricesGetReducer;
