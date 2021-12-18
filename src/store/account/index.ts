import { combineReducers } from 'redux';
import { all } from 'redux-saga/effects';
import { accountLoginPostSaga, accountLoginPostReducer, accountTokenReducer } from './login/accountLogin';
import { accountRegisterPostSaga, accountRegisterPostReducer } from './register/accountRegister';

export const account = combineReducers({
  login: accountLoginPostReducer,
  register: accountRegisterPostReducer,
  token: accountTokenReducer,
});

export default function* accountSaga() {
  yield all([accountRegisterPostSaga(), accountLoginPostSaga()]);
}
