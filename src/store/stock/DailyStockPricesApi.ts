import { BusinessErrorResponse, HTTPResponse } from '~/@types/response';
import { IResponseDailyStockPrices } from '~/@types/data/';
import Api from '~/libraries/api';
import API_PATH from '~/constants/path';

export default class DailyStockPriceApi extends Api {
  constructor() {
    super();
  }

  public async getdailyStockPrices(): Promise<HTTPResponse<IResponseDailyStockPrices> | BusinessErrorResponse> {
    const fullPath = API_PATH.STOCK + '/';
    return this.get<IResponseDailyStockPrices>({ url: fullPath });
  }
}
