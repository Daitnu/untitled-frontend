import { all, call, put, takeLatest } from 'redux-saga/effects';
import sagaUtils from '~/libraries/sagaUtils';
import storage from '~/libraries/store';
import { ACCOUNT_LOGIN_POST_TYPES } from './accountLoginStore';
import AccountApi from '~/store/account/AccountApi';
import { HTTPResponse, IResponseAccountLogin } from '~/@types/response';
import { historyPush } from '~/libraries/api';
import { PATH_URL } from '~/constants';
import { accountLoginPostClear } from '.';
import StatusCodes from '~/libraries/httpStatus';

const api = new AccountApi();

const successCb = function* ({ status, data }: HTTPResponse<IResponseAccountLogin>) {
  if (status === StatusCodes.OK) {
    const { refreshToken, accessToken, accessTokenExpiresIn, grantType }: IResponseAccountLogin = data;
    storage.local.set('refreshToken', refreshToken);
    yield call(historyPush, PATH_URL.HOME);
    yield put(accountLoginPostClear());
  }
};

const accountLoginPost$ = sagaUtils.makeApiCallSagaFunc({
  type: ACCOUNT_LOGIN_POST_TYPES.DEFAULT,
  apiFunc: api.postAccountLogin.bind(api),
  successCb,
});

export function* accountLoginPostSaga() {
  yield all([takeLatest(ACCOUNT_LOGIN_POST_TYPES.REQUEST, accountLoginPost$)]);
}
