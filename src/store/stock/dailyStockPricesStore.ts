import { BusinessErrorResponse, HTTPResponse, IResponseDailyStockPrices } from '~/@types/response';
import { makeApiReducer } from '../util';

export const STOCK_QUOTES_GET = 'STOCK_QUOTES_GET' as const;
export const STOCK_QUOTES_GET_REQUEST = 'STOCK_QUOTES_GET_REQUEST' as const;
export const STOCK_QUOTES_GET_SUCCESS = 'STOCK_QUOTES_GET_SUCCESS' as const;
export const STOCK_QUOTES_GET_FAILURE = 'STOCK_QUOTES_GET_FAILURE' as const;

export const dailyStockPricesGetRequest = () => ({
  type: STOCK_QUOTES_GET_REQUEST,
});

export const dailyStockPricesGetSuccess = (payload: HTTPResponse<IResponseDailyStockPrices[]>) => ({
  type: STOCK_QUOTES_GET_SUCCESS,
  payload,
});

export const dailyStockPricesGetFailure = (payload: BusinessErrorResponse) => ({
  type: STOCK_QUOTES_GET_FAILURE,
  payload,
});

const dailyStockPricesGetReducer = makeApiReducer<HTTPResponse<IResponseDailyStockPrices[]>>(STOCK_QUOTES_GET);

export default dailyStockPricesGetReducer;
