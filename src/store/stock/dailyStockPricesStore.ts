import sagaUtils from '~/libraries/sagaUtils';
import { BusinessErrorResponse, HTTPResponse } from '@t/response';
import { IResponseDailyStockPrices } from '@t/data';

export const {
  ACTIONS: DAILY_STOCK_PRICES_GET_ACTIONS,
  TYPES: DAILY_STOCK_PRICES_GET_TYPES,
} = sagaUtils.createActionAndTypes<null, IResponseDailyStockPrices>('DAILY_STOCK_PRICES_GET');

export const dailyStockPricesGetRequest = DAILY_STOCK_PRICES_GET_ACTIONS.REQUEST;

export const dailyStockPricesGetSuccess = DAILY_STOCK_PRICES_GET_ACTIONS.SUCCESS;

export const dailyStockPricesGetFailure = DAILY_STOCK_PRICES_GET_ACTIONS.FAILURE;

const dailyStockPricesGetReducer = sagaUtils.makeApiReducer<HTTPResponse<IResponseDailyStockPrices>>(
  DAILY_STOCK_PRICES_GET_TYPES.DEFAULT,
);

// export const dailyStockPricesGetRequest = () => ({
//   type: DAILY_STOCK_PRICES_GET_TYPES.REQUEST,
// });

// export const dailyStockPricesGetSuccess = (payload: HTTPResponse<IResponseDailyStockPrices>) => ({
//   type: DAILY_STOCK_PRICES_GET_TYPES.SUCCESS,
//   payload,
// });

// export const dailyStockPricesGetFailure = (payload: BusinessErrorResponse) => ({
//   type: DAILY_STOCK_PRICES_GET_TYPES.FAILURE,
//   payload,
// });

// const dailyStockPricesGetReducer = sagaUtils.makeApiReducer<HTTPResponse<IResponseDailyStockPrices>>(
//   DAILY_STOCK_PRICES_GET_TYPES.DEFAULT,
// );

export default dailyStockPricesGetReducer;
