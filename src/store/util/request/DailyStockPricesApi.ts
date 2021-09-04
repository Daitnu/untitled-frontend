import { BusinessErrorResponse, HTTPResponse } from '~/@types/response';
import { IResponseDailyStockPrices } from '~/@types/data/';
import { URL } from '~/libs';
import Api from './Api';

export default class StockQuoteApi extends Api {
  constructor() {
    super();
  }

  public async getdailyStockPrices(): Promise<HTTPResponse<IResponseDailyStockPrices> | BusinessErrorResponse> {
    return this.get<IResponseDailyStockPrices>({ url: URL.STOCK_QUOTE });
  }
}
