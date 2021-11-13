import { all } from 'redux-saga/effects';
import { accountRegisterPostSaga } from './register/accountRegisterSaga';

export default function* accountSaga() {
  yield all([accountRegisterPostSaga()]);
}

export * from './register';
