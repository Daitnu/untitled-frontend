import { IRequestAccountLogin, IRequestAccountRegister, IRequestParam } from '@t/request';
import { IBusinessErrorResponse, HTTPResponse, IResponseAccountLogin, IResponseAccountRegister } from '@t/response';
import Api from '~/libraries/api';
import API_PATH from '~/constants/path';

export default class AccountApi extends Api {
  constructor() {
    super();
  }

  public postAccountLogin({
    data,
  }: IRequestParam<IRequestAccountLogin>): Promise<HTTPResponse<IResponseAccountLogin> | IBusinessErrorResponse> {
    return this.post<IResponseAccountLogin, IRequestAccountLogin>({
      url: API_PATH.ACCOUNT.LOGIN,
      data,
    });
  }

  public postAccountRegister({
    data,
  }: IRequestParam<IRequestAccountRegister>): Promise<HTTPResponse<IResponseAccountRegister> | IBusinessErrorResponse> {
    return this.post<IResponseAccountRegister, IRequestAccountRegister>({
      url: API_PATH.ACCOUNT.REGISTER,
      data,
    });
  }
}
