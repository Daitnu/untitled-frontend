import { IRequestAccountLogin, IRequestAccountRegister } from '@t/request';
import { BusinessErrorResponse, HTTPResponse, IResponseAccountLogin, IResponseAccountRegister } from '@t/response';
import Api from '~/libraries/api';
import API_PATH from '~/constants/path';

export default class AccountApi extends Api {
  constructor() {
    super();
  }

  public postAccountLogin(
    data: IRequestAccountLogin,
  ): Promise<HTTPResponse<IResponseAccountLogin> | BusinessErrorResponse> {
    return this.post<IResponseAccountLogin, IRequestAccountLogin>({
      url: API_PATH.ACCOUNT.LOGIN,
      data,
    });
  }

  public postAccountRegister(
    data: IRequestAccountRegister,
  ): Promise<HTTPResponse<IResponseAccountRegister> | BusinessErrorResponse> {
    return this.post<IResponseAccountRegister, IRequestAccountRegister>({
      url: API_PATH.ACCOUNT.REGISTER,
      data,
    });
  }
}
