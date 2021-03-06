import { all, call, put, takeLatest } from 'redux-saga/effects';
import sagaUtils from '~/libraries/sagaUtils';
import AccountApi from '~/store/account/AccountApi';
import { IRequestAccountLogin } from '~/@types/request';
import { IHTTPResponse, IAccontToken, IResponseAccountLogin } from '~/@types/response';
import { historyPush } from '~/libraries/api';
import { PATH_URL } from '~/constants';
import HTTP_STATUS from '~/libraries/httpStatus';

export const { ACTIONS: ACCOUNT_LOGIN_POST_ACTIONS, TYPES: ACCOUNT_LOGIN_POST_TYPES } = sagaUtils.createActionAndTypes<
  IResponseAccountLogin,
  IRequestAccountLogin
>('ACCOUNT_LOGIN_POST');

export const accountLoginPostRequest = ACCOUNT_LOGIN_POST_ACTIONS.REQUEST;

export const accountLoginPostSuccess = ACCOUNT_LOGIN_POST_ACTIONS.SUCCESS;

export const accountLoginPostFailure = ACCOUNT_LOGIN_POST_ACTIONS.FAILURE;

export const accountLoginPostClear = ACCOUNT_LOGIN_POST_ACTIONS.CLEAR;

const api = new AccountApi();

const successCb = function* ({ status, data }: IHTTPResponse<IResponseAccountLogin>) {
  if (status === HTTP_STATUS.OK) {
    const { accessToken, grantType }: IResponseAccountLogin = data;
    localStorage.setItem('accessToken', accessToken);
    localStorage.setItem('grantType', grantType);
    const event = new Event('accessTokenChanged');
    window.dispatchEvent(event);
    yield call(historyPush, PATH_URL.HOME);
    yield put(accountLoginPostClear());
  }
};

const accountLoginPost$ = sagaUtils.makeApiCallSagaFunc({
  type: ACCOUNT_LOGIN_POST_TYPES.DEFAULT,
  apiFunc: api.postAccountLogin.bind(api),
  successCb,
});

export const accountLoginPostReducer = sagaUtils.makeApiReducer<IResponseAccountLogin, IRequestAccountLogin>(
  ACCOUNT_LOGIN_POST_TYPES.DEFAULT,
);

export function* accountLoginPostSaga() {
  yield all([takeLatest(ACCOUNT_LOGIN_POST_TYPES.REQUEST, accountLoginPost$)]);
}
