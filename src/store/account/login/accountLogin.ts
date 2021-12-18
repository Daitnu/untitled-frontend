import { all, call, put, takeLatest } from 'redux-saga/effects';
import sagaUtils from '~/libraries/sagaUtils';
import storage from '~/libraries/store';
import AccountApi from '~/store/account/AccountApi';
import { IRequestAccountLogin } from '~/@types/request';
import { HTTPResponse, IAccontToken, IResponseAccountLogin } from '~/@types/response';
import { historyPush } from '~/libraries/api';
import { PATH_URL } from '~/constants';
import HTTP_STATUS from '~/libraries/httpStatus';

export const { ACTIONS: ACCOUNT_LOGIN_POST_ACTIONS, TYPES: ACCOUNT_LOGIN_POST_TYPES } = sagaUtils.createActionAndTypes<
  IResponseAccountLogin,
  IRequestAccountLogin
>('ACCOUNT_LOGIN_POST');

export const { ACTIONS: ACCOUNT_TOKEN_ACTIONS, TYPES: ACCOUNT_TOKEN_TYPES } = sagaUtils.createActionAndTypes<
  null,
  IAccontToken
>('ACCOUNT_TOKEN');

export const accountLoginPostRequest = ACCOUNT_LOGIN_POST_ACTIONS.REQUEST;

export const accountLoginPostSuccess = ACCOUNT_LOGIN_POST_ACTIONS.SUCCESS;

export const accountLoginPostFailure = ACCOUNT_LOGIN_POST_ACTIONS.FAILURE;

export const accountLoginPostClear = ACCOUNT_LOGIN_POST_ACTIONS.CLEAR;

const api = new AccountApi();

const successCb = function* ({ status, data }: HTTPResponse<IResponseAccountLogin>) {
  if (status === HTTP_STATUS.OK) {
    const { refreshToken, accessToken, accessTokenExpiresIn, grantType }: IResponseAccountLogin = data;
    storage.local.set('refreshToken', refreshToken);
    yield put(ACCOUNT_TOKEN_ACTIONS.SUCCESS(data));
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

export const accountTokenReducer = sagaUtils.makeApiReducer<null, IAccontToken>(ACCOUNT_TOKEN_TYPES.DEFAULT);

export function* accountLoginPostSaga() {
  yield all([takeLatest(ACCOUNT_LOGIN_POST_TYPES.REQUEST, accountLoginPost$)]);
}
