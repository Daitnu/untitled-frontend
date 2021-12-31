import { all, takeLatest } from 'redux-saga/effects';
import { IResponseDailyStockPrices } from '~/@types/data';
import { IHTTPResponse } from '~/@types/response';
import sagaUtils from '~/libraries/sagaUtils';
import DailyStockPricesApi from '../DailyStockPricesApi';

export const {
  ACTIONS: DAILY_STOCK_PRICES_GET_ACTIONS,
  TYPES: DAILY_STOCK_PRICES_GET_TYPES,
} = sagaUtils.createActionAndTypes<IResponseDailyStockPrices, null>('DAILY_STOCK_PRICES_GET');

export const dailyStockPricesGetRequest = DAILY_STOCK_PRICES_GET_ACTIONS.REQUEST;

export const dailyStockPricesGetSuccess = DAILY_STOCK_PRICES_GET_ACTIONS.SUCCESS;

export const dailyStockPricesGetFailure = DAILY_STOCK_PRICES_GET_ACTIONS.FAILURE;

export const dailyStockPricesGetReducer = sagaUtils.makeApiReducer<IHTTPResponse<IResponseDailyStockPrices>>(
  DAILY_STOCK_PRICES_GET_TYPES.DEFAULT,
);

const api = new DailyStockPricesApi();

const dailyStockPricesGet$ = sagaUtils.makeApiCallSagaFunc({
  type: DAILY_STOCK_PRICES_GET_TYPES.DEFAULT,
  apiFunc: api.getdailyStockPrices.bind(api),
});

export function* dailyStockPricesGetsGetSaga() {
  yield all([takeLatest(DAILY_STOCK_PRICES_GET_TYPES.REQUEST, dailyStockPricesGet$)]);
}
