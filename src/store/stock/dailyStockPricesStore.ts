import { BusinessErrorResponse, HTTPResponse, IResponseDailyStockPrices } from '~/@types/response';
import { makeApiReducer } from '../util';

export const DAILY_STOCK_PRICES_GET = 'DAILY_STOCK_PRICES_GET' as const;
export const DAILY_STOCK_PRICES_GET_REQUEST = 'DAILY_STOCK_PRICES_GET_REQUEST' as const;
export const DAILY_STOCK_PRICES_GET_SUCCESS = 'DAILY_STOCK_PRICES_GET_SUCCESS' as const;
export const DAILY_STOCK_PRICES_GET_FAILURE = 'DAILY_STOCK_PRICES_GET_FAILURE' as const;

export const dailyStockPricesGetRequest = () => ({
  type: DAILY_STOCK_PRICES_GET_REQUEST,
});

export const dailyStockPricesGetSuccess = (payload: HTTPResponse<IResponseDailyStockPrices[]>) => ({
  type: DAILY_STOCK_PRICES_GET_SUCCESS,
  payload,
});

export const dailyStockPricesGetFailure = (payload: BusinessErrorResponse) => ({
  type: DAILY_STOCK_PRICES_GET_FAILURE,
  payload,
});

const dailyStockPricesGetReducer = makeApiReducer<HTTPResponse<IResponseDailyStockPrices[]>>(DAILY_STOCK_PRICES_GET);

export default dailyStockPricesGetReducer;
