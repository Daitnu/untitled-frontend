import { BusinessErrorResponse, HTTPResponse, IResponseStockQuoteList } from '~/@types/response';
import { makeApiReducer } from '../util';

export const STOCK_QUOTES_GET = 'STOCK_QUOTES_GET' as const;
export const STOCK_QUOTES_GET_REQUEST = 'STOCK_QUOTES_GET_REQUEST' as const;
export const STOCK_QUOTES_GET_SUCCESS = 'STOCK_QUOTES_GET_SUCCESS' as const;
export const STOCK_QUOTES_GET_FAILURE = 'STOCK_QUOTES_GET_FAILURE' as const;

export const stockQuotesGetRequest = () => ({
  type: STOCK_QUOTES_GET_REQUEST,
});

export const stockQuotesGetSuccess = (payload: HTTPResponse<IResponseStockQuoteList>) => ({
  type: STOCK_QUOTES_GET_SUCCESS,
  payload,
});

export const stockQuotesGetFailure = (payload: BusinessErrorResponse) => ({
  type: STOCK_QUOTES_GET_FAILURE,
  payload,
});

const stockQuotesGetReducer = makeApiReducer<HTTPResponse<IResponseStockQuoteList>>(STOCK_QUOTES_GET);

export default stockQuotesGetReducer;
