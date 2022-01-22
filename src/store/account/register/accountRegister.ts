import { all, call, put, takeLatest } from 'redux-saga/effects';
import sagaUtils from '~/libraries/sagaUtils';
import AccountApi from '~/store/account/AccountApi';
import { IHTTPResponse, IResponseAccountRegister } from '@t/response';
import { historyPush } from '~/libraries/api';
import { PATH_URL } from '~/constants/path';
import HTTP_STATUS from '~/libraries/httpStatus';
import { IRequestAccountRegister } from '~/@types/request';

const { TYPES: ACCOUNT_REGISTER_POST_TYPES, ACTIONS: ACCOUNT_REGISTER_POST_ACTIONS } = sagaUtils.createActionAndTypes<
  IResponseAccountRegister,
  IRequestAccountRegister
>('ACCOUNT_REGISTER_POST');

const api = new AccountApi();

const accountRegisterPostsuccessCb = function* ({ status }: IHTTPResponse<IResponseAccountRegister>) {
  if (status === HTTP_STATUS.CREATED) {
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
