import { IRequestAccountRegister } from '~/@types/request';
import { BusinessErrorResponse, HTTPResponse, IResponseAccountRegister } from '~/@types/response';
import { makeApiReducer } from '~/libraries/sagaUtils';

export const ACCOUNT_REGISTER_POST = 'ACCOUNT_REGISTER_POST' as const;
export const ACCOUNT_REGISTER_POST_REQUEST = 'ACCOUNT_REGISTER_POST_REQUEST' as const;
export const ACCOUNT_REGISTER_POST_SUCCESS = 'ACCOUNT_REGISTER_POST_SUCCESS' as const;
export const ACCOUNT_REGISTER_POST_FAILURE = 'ACCOUNT_REGISTER_POST_FAILURE' as const;
export const ACCOUNT_REGISTER_POST_CLEAR = 'ACCOUNT_REGISTER_POST_CLEAR' as const;

export const accountRegisterPostRequest = (payload: IRequestAccountRegister) => ({
  type: ACCOUNT_REGISTER_POST_REQUEST,
  payload,
});

export const accountRegisterPostSuccess = (payload: HTTPResponse<IResponseAccountRegister>) => ({
  type: ACCOUNT_REGISTER_POST_SUCCESS,
  payload,
});

export const accountRegisterPostFailure = (payload: BusinessErrorResponse) => ({
  type: ACCOUNT_REGISTER_POST_FAILURE,
  payload,
});

export const accountRegisterPostClear = () => ({
  type: ACCOUNT_REGISTER_POST_CLEAR,
});

const accountRegisterPostReducer = makeApiReducer<IResponseAccountRegister, IRequestAccountRegister>(
  ACCOUNT_REGISTER_POST,
);

export default accountRegisterPostReducer;
