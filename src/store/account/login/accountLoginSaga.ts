import { all, takeLatest } from 'redux-saga/effects';
import { makeApiCallSagaFunc } from '~/libraries/sagaUtils';
import { ACCOUNT_LOGIN_POST, ACCOUNT_LOGIN_POST_REQUEST } from './accountLoginStore';
import AccountApi from '~/store/account/AccountApi';

const api = new AccountApi();

const accountLoginPost$ = makeApiCallSagaFunc({
  type: ACCOUNT_LOGIN_POST,
  apiFunc: api.postAccountLogin.bind(api),
});

export function* accountLoginPostSaga() {
  yield all([takeLatest(ACCOUNT_LOGIN_POST_REQUEST, accountLoginPost$)]);
}
