import { BusinessErrorResponse, HTTPResponse } from '~/@types/response';
import { URL } from '~/libs';
import { Api } from '../apiUtil';

export default class CorperationApi extends Api {
  constructor() {
    super();
  }

  public async putCoperationProfit(path: string, data: Object): Promise<HTTPResponse<null> | BusinessErrorResponse> {
    const fullPath = URL.CORPERATION_CONSENSUS + path;
    return this.patch<null>({ url: fullPath, ...data });
  }
}
