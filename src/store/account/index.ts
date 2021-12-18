import { combineReducers } from 'redux';
import { all } from 'redux-saga/effects';
import { accountLoginPostSaga, accountLoginPostReducer } from './login/accountLogin';
import { accountRegisterPostSaga, accountRegisterPostReducer } from './register/accountRegister';

export const account = combineReducers({ login: accountLoginPostReducer, register: accountRegisterPostReducer });

export default function* accountSaga() {
  yield all([accountRegisterPostSaga(), accountLoginPostSaga()]);
}
