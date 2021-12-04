import { IRequestAccountLogin } from '~/@types/request';
import { IResponseAccountLogin } from '~/@types/response';
import sagaUtils from '~/libraries/sagaUtils';

export const { ACTIONS: ACCOUNT_LOGIN_POST_ACTIONS, TYPES: ACCOUNT_LOGIN_POST_TYPES } = sagaUtils.createActionAndTypes<
  IRequestAccountLogin,
  IResponseAccountLogin
>('ACCOUNT_LOGIN_POST');

export const accountLoginPostRequest = ACCOUNT_LOGIN_POST_ACTIONS.REQUEST;

export const accountLoginPostSuccess = ACCOUNT_LOGIN_POST_ACTIONS.SUCCESS;

export const accountLoginPostFailure = ACCOUNT_LOGIN_POST_ACTIONS.FAILURE;

export const accountLoginPostClear = ACCOUNT_LOGIN_POST_ACTIONS.CLEAR;

// export const accountLoginPostRequest = (payload: IRequestAccountLogin) => ({
//   type: ACCOUNT_LOGIN_POST_TYPES.REQUEST,
//   payload,
// });

// export const accountLoginPostSuccess = (payload: HTTPResponse<IResponseAccountLogin>) => ({
//   type: ACCOUNT_LOGIN_POST_TYPES.SUCCESS,
//   payload,
// });

// export const accountLoginPostFailure = (payload: BusinessErrorResponse) => ({
//   type: ACCOUNT_LOGIN_POST_TYPES.FAILURE,
//   payload,
// });

// export const accountLoginPostClear = () => ({
//   type: ACCOUNT_LOGIN_POST_TYPES.CLEAR,
// });

const accountLoginPostReducer = sagaUtils.makeApiReducer<IResponseAccountLogin, IRequestAccountLogin>(
  ACCOUNT_LOGIN_POST_TYPES.DEFAULT,
);

export default accountLoginPostReducer;
