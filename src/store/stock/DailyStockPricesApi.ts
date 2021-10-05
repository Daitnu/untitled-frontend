import { BusinessErrorResponse, HTTPResponse } from '~/@types/response';
import { IResponseDailyStockPrices } from '~/@types/data/';
import { URL } from '~/constants';
import Api from '~/libraries/api';

export default class DailyStockPriceApi extends Api {
  constructor() {
    super();
  }

  public async getdailyStockPrices(): Promise<HTTPResponse<IResponseDailyStockPrices> | BusinessErrorResponse> {
    const fullPath = URL.STOCK + '/';
    return this.get<IResponseDailyStockPrices>({ url: fullPath });
  }
}
