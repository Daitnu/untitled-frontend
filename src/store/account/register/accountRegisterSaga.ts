import { all, call, put, takeLatest } from 'redux-saga/effects';
import { makeApiCallSagaFunc } from '~/libraries/sagaUtils';
import { ACCOUNT_REGISTER_POST, ACCOUNT_REGISTER_POST_REQUEST, accountRegisterPostClear } from './accountRegisterStore';
import AccountApi from '~/store/account/register/AccountApi';
import { HTTPResponse, IResponseAccountRegister } from '@t/response';
import { historyPush } from '~/libraries/api';
import { PATH_URL } from '~/constants/path';

const api = new AccountApi();

const successCb = function* ({ status }: HTTPResponse<IResponseAccountRegister>) {
  if (status === 200) {
    yield call(historyPush, PATH_URL.LOGIN);
    yield put(accountRegisterPostClear());
  }
};

const accountRegisterPost$ = makeApiCallSagaFunc({
  type: ACCOUNT_REGISTER_POST,
  apiFunc: api.postAccountRegister.bind(api),
  successCb,
});

export function* accountRegisterPostSaga() {
  yield all([takeLatest(ACCOUNT_REGISTER_POST_REQUEST, accountRegisterPost$)]);
}
