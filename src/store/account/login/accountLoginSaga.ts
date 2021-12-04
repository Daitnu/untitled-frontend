import { all, takeLatest } from 'redux-saga/effects';
import sagaUtils from '~/libraries/sagaUtils';
import { ACCOUNT_LOGIN_POST_TYPES } from './accountLoginStore';
import AccountApi from '~/store/account/AccountApi';

const api = new AccountApi();

const accountLoginPost$ = sagaUtils.makeApiCallSagaFunc({
  type: ACCOUNT_LOGIN_POST_TYPES.DEFAULT,
  apiFunc: api.postAccountLogin.bind(api),
});

export function* accountLoginPostSaga() {
  yield all([takeLatest(ACCOUNT_LOGIN_POST_TYPES.REQUEST, accountLoginPost$)]);
}
