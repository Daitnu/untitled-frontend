import { IRequestAccountRegister } from '~/@types/request';
import { BusinessErrorResponse, HTTPResponse, IResponseAccountRegister } from '~/@types/response';
import Api from '~/libraries/api';
import API_PATH from '~/constants/path';

export default class AccountApi extends Api {
  constructor() {
    super();
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
