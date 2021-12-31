import { IRequestAccountLogin, IRequestAccountRegister, IRequestParam } from '@t/request';
import { IBusinessErrorResponse, IHTTPResponse, IResponseAccountLogin, IResponseAccountRegister } from '@t/response';
import Api from '~/libraries/api';
import API_PATH from '~/constants/path';

export default class AccountApi extends Api {
  constructor() {
    super();
  }

  public postAccountLogin({
    data,
  }: IRequestParam<IRequestAccountLogin>): Promise<IHTTPResponse<IResponseAccountLogin> | IBusinessErrorResponse> {
    return this.post<IResponseAccountLogin, IRequestAccountLogin>({
      url: API_PATH.ACCOUNT.LOGIN,
      data,
    });
  }

  public postAccountRegister({
    data,
  }: IRequestParam<IRequestAccountRegister>): Promise<
    IHTTPResponse<IResponseAccountRegister> | IBusinessErrorResponse
  > {
    return this.post<IResponseAccountRegister, IRequestAccountRegister>({
      url: API_PATH.ACCOUNT.REGISTER,
      data,
    });
  }
}
