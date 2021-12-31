import { IBusinessErrorResponse, IHTTPResponse } from '~/@types/response';
import { IResponseDailyStockPrices } from '~/@types/data/';
import Api from '~/libraries/api';
import API_PATH from '~/constants/path';
import { IRequestParam } from '~/@types/request';

export default class DailyStockPriceApi extends Api {
  constructor() {
    super();
  }

  public async getdailyStockPrices({
    token,
  }: IRequestParam<null>): Promise<IHTTPResponse<IResponseDailyStockPrices> | IBusinessErrorResponse> {
    console.log('getdailyStockPrices!!!', token);
    const fullPath = API_PATH.STOCK + '/';
    return this.get<IResponseDailyStockPrices>({ url: fullPath, token });
  }
}
