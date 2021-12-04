import { IRequestAccountLogin } from '~/@types/request';
import { BusinessErrorResponse, HTTPResponse, IResponseAccountLogin } from '~/@types/response';
import { makeApiReducer } from '~/libraries/sagaUtils';

export const ACCOUNT_LOGIN_POST = 'ACCOUNT_LOGIN_POST' as const;
export const ACCOUNT_LOGIN_POST_REQUEST = 'ACCOUNT_LOGIN_POST_REQUEST' as const;
export const ACCOUNT_LOGIN_POST_SUCCESS = 'ACCOUNT_LOGIN_POST_SUCCESS' as const;
export const ACCOUNT_LOGIN_POST_FAILURE = 'ACCOUNT_LOGIN_POST_FAILURE' as const;
export const ACCOUNT_LOGIN_POST_CLEAR = 'ACCOUNT_LOGIN_POST_CLEAR' as const;

export const accountLoginPostRequest = (payload: IRequestAccountLogin) => ({
  type: ACCOUNT_LOGIN_POST_REQUEST,
  payload,
});

export const accountLoginPostSuccess = (payload: HTTPResponse<IResponseAccountLogin>) => ({
  type: ACCOUNT_LOGIN_POST_SUCCESS,
  payload,
});

export const accountLoginPostFailure = (payload: BusinessErrorResponse) => ({
  type: ACCOUNT_LOGIN_POST_FAILURE,
  payload,
});

export const accountLoginPostClear = () => ({
  type: ACCOUNT_LOGIN_POST_CLEAR,
});

const accountLoginPostReducer = makeApiReducer<IResponseAccountLogin, IRequestAccountLogin>(ACCOUNT_LOGIN_POST);

export default accountLoginPostReducer;
