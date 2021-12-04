import { all, takeLatest } from 'redux-saga/effects';
import { makeApiCallSagaFunc } from '~/libraries/sagaUtils';
import { ACCOUNT_LOGIN_POST_ACTION_TYPES } from './accountLoginStore';
import AccountApi from '~/store/account/AccountApi';

const api = new AccountApi();

const accountLoginPost$ = makeApiCallSagaFunc({
  type: ACCOUNT_LOGIN_POST_ACTION_TYPES.DEFAULT,
  apiFunc: api.postAccountLogin.bind(api),
});

export function* accountLoginPostSaga() {
  yield all([takeLatest(ACCOUNT_LOGIN_POST_ACTION_TYPES.REQUEST, accountLoginPost$)]);
}
