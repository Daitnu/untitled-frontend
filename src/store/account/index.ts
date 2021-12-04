import { all } from 'redux-saga/effects';
import { accountLoginPostSaga } from './login/accountLoginSaga';
import { accountRegisterPostSaga } from './register/accountRegisterSaga';

export default function* accountSaga() {
  yield all([accountRegisterPostSaga(), accountLoginPostSaga()]);
}

export * from './register';
