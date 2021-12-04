import { IRequestAccountRegister } from '~/@types/request';
import { BusinessErrorResponse, HTTPResponse, IResponseAccountRegister } from '~/@types/response';
import sagaUtils from '~/libraries/sagaUtils';

export const {
  TYPES: ACCOUNT_REGISTER_POST_TYPES,
  ACTIONS: ACCOUNT_REGISTER_POST_ACTIONS,
} = sagaUtils.createActionAndTypes<IRequestAccountRegister, IResponseAccountRegister>('ACCOUNT_REGISTER_POST');

export const accountRegisterPostRequest = ACCOUNT_REGISTER_POST_ACTIONS.REQUEST;

export const accountRegisterPostSuccess = ACCOUNT_REGISTER_POST_ACTIONS.SUCCESS;

export const accountRegisterPostFailure = ACCOUNT_REGISTER_POST_ACTIONS.FAILURE;

export const accountRegisterPostClear = ACCOUNT_REGISTER_POST_ACTIONS.CLEAR;

// export const accountRegisterPostRequest = (payload: IRequestAccountRegister) => ({
//   type: ACCOUNT_REGISTER_POST_TYPES.REQUEST,
//   payload,
// });

// export const accountRegisterPostSuccess = (payload: HTTPResponse<IResponseAccountRegister>) => ({
//   type: ACCOUNT_REGISTER_POST_TYPES.SUCCESS,
//   payload,
// });

// export const accountRegisterPostFailure = (payload: BusinessErrorResponse) => ({
//   type: ACCOUNT_REGISTER_POST_TYPES.FAILURE,
//   payload,
// });

// export const accountRegisterPostClear = () => ({
//   type: ACCOUNT_REGISTER_POST_TYPES.CLEAR,
// });

const accountRegisterPostReducer = sagaUtils.makeApiReducer<IResponseAccountRegister, IRequestAccountRegister>(
  ACCOUNT_REGISTER_POST_TYPES.DEFAULT,
);

export default accountRegisterPostReducer;
