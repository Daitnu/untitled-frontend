import { IRequestAccountRegister } from '~/@types/request';
import { BusinessErrorResponse, HTTPResponse, IResponseAccountRegister } from '~/@types/response';
import Api from '~/libraries/api/index';
import API_URL from '~/libraries/api/apiUrl';

export default class AccountApi extends Api {
  constructor() {
    super();
  }

  public postAccountRegister(
    data: IRequestAccountRegister,
  ): Promise<HTTPResponse<IResponseAccountRegister> | BusinessErrorResponse> {
    return this.post<IResponseAccountRegister, IRequestAccountRegister>({
      url: API_URL.ACCOUNT.REGISTER,
      data,
    });
  }
}
