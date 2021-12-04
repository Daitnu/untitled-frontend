import { IRequestAccountLogin } from '~/@types/request';
import { BusinessErrorResponse, HTTPResponse, IResponseAccountLogin } from '~/@types/response';
import sagaUtils from '~/libraries/sagaUtils';

export const ACCOUNT_LOGIN_POST_ACTION_TYPES = sagaUtils.createActionTypes('ACCOUNT_LOGIN_POST');

export const accountLoginPostRequest = (payload: IRequestAccountLogin) => ({
  type: ACCOUNT_LOGIN_POST_ACTION_TYPES.REQUEST,
  payload,
});

export const accountLoginPostSuccess = (payload: HTTPResponse<IResponseAccountLogin>) => ({
  type: ACCOUNT_LOGIN_POST_ACTION_TYPES.SUCCESS,
  payload,
});

export const accountLoginPostFailure = (payload: BusinessErrorResponse) => ({
  type: ACCOUNT_LOGIN_POST_ACTION_TYPES.FAILURE,
  payload,
});

export const accountLoginPostClear = () => ({
  type: ACCOUNT_LOGIN_POST_ACTION_TYPES.CLEAR,
});

const accountLoginPostReducer = sagaUtils.makeApiReducer<IResponseAccountLogin, IRequestAccountLogin>(
  ACCOUNT_LOGIN_POST_ACTION_TYPES.DEFAULT,
);

export default accountLoginPostReducer;
