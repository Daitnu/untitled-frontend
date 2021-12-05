import { all, call, put, takeLatest } from 'redux-saga/effects';
import sagaUtils from '~/libraries/sagaUtils';
// import { ACCOUNT_REGISTER_POST_TYPES, ACCOUNT_REGISTER_POST_ACTIONS } from './accountRegisterStore';
import AccountApi from '~/store/account/AccountApi';
import { HTTPResponse, IResponseAccountRegister } from '@t/response';
import { historyPush } from '~/libraries/api';
import { PATH_URL } from '~/constants/path';
import StatusCodes from '~/libraries/httpStatus';
import { IRequestAccountRegister } from '~/@types/request';

const { TYPES: ACCOUNT_REGISTER_POST_TYPES, ACTIONS: ACCOUNT_REGISTER_POST_ACTIONS } = sagaUtils.createActionAndTypes<
  IRequestAccountRegister,
  IResponseAccountRegister
>('ACCOUNT_REGISTER_POST');

const api = new AccountApi();

const accountRegisterPostsuccessCb = function* ({ status }: HTTPResponse<IResponseAccountRegister>) {
  if (status === StatusCodes.CREATED) {
    yield call(historyPush, PATH_URL.LOGIN);
    yield put(ACCOUNT_REGISTER_POST_ACTIONS.CLEAR());
  }
};

const accountRegisterPost$ = sagaUtils.makeApiCallSagaFunc({
  type: ACCOUNT_REGISTER_POST_TYPES.DEFAULT,
  apiFunc: api.postAccountRegister.bind(api),
  successCb: accountRegisterPostsuccessCb,
});

export const accountRegisterPostRequest = ACCOUNT_REGISTER_POST_ACTIONS.REQUEST;

export const accountRegisterPostReducer = sagaUtils.makeApiReducer<IResponseAccountRegister, IRequestAccountRegister>(
  ACCOUNT_REGISTER_POST_TYPES.DEFAULT,
);

export function* accountRegisterPostSaga() {
  yield all([takeLatest(ACCOUNT_REGISTER_POST_TYPES.REQUEST, accountRegisterPost$)]);
}
