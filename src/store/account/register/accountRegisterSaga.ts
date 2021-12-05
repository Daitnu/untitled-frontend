import { all, call, put, takeLatest } from 'redux-saga/effects';
import sagaUtils from '~/libraries/sagaUtils';
import { ACCOUNT_REGISTER_POST_TYPES, accountRegisterPostClear } from './accountRegisterStore';
import AccountApi from '~/store/account/AccountApi';
import { HTTPResponse, IResponseAccountRegister } from '@t/response';
import { historyPush } from '~/libraries/api';
import { PATH_URL } from '~/constants/path';
import StatusCodes from '~/libraries/http-status';

const api = new AccountApi();

const successCb = function* ({ status }: HTTPResponse<IResponseAccountRegister>) {
  if (status === StatusCodes.CREATED) {
    yield call(historyPush, PATH_URL.LOGIN);
    yield put(accountRegisterPostClear());
  }
};

const accountRegisterPost$ = sagaUtils.makeApiCallSagaFunc({
  type: ACCOUNT_REGISTER_POST_TYPES.DEFAULT,
  apiFunc: api.postAccountRegister.bind(api),
  successCb,
});

export function* accountRegisterPostSaga() {
  yield all([takeLatest(ACCOUNT_REGISTER_POST_TYPES.REQUEST, accountRegisterPost$)]);
}
