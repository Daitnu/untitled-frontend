import { IRequestAccountRegister } from '~/@types/request';
import { BusinessErrorResponse, HTTPResponse, IResponseAccountRegister } from '~/@types/response';
import { createActionTypes, makeApiReducer } from '~/libraries/sagaUtils';

export const ACCOUNT_REGISTER_POST_ACTION_TYPES = createActionTypes('ACCOUNT_REGISTER_POST');

export const accountRegisterPostRequest = (payload: IRequestAccountRegister) => ({
  type: ACCOUNT_REGISTER_POST_ACTION_TYPES.REQUEST,
  payload,
});

export const accountRegisterPostSuccess = (payload: HTTPResponse<IResponseAccountRegister>) => ({
  type: ACCOUNT_REGISTER_POST_ACTION_TYPES.SUCCESS,
  payload,
});

export const accountRegisterPostFailure = (payload: BusinessErrorResponse) => ({
  type: ACCOUNT_REGISTER_POST_ACTION_TYPES.FAILURE,
  payload,
});

export const accountRegisterPostClear = () => ({
  type: ACCOUNT_REGISTER_POST_ACTION_TYPES.CLEAR,
});

const accountRegisterPostReducer = makeApiReducer<IResponseAccountRegister, IRequestAccountRegister>(
  ACCOUNT_REGISTER_POST_ACTION_TYPES.DEFAULT,
);

export default accountRegisterPostReducer;
