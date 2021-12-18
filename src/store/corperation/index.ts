import { combineReducers } from 'redux';
import { all } from 'redux-saga/effects';
import { corperationProfitPatchSaga, corperationProfitPatchReducer } from './patch';

export const corperation = combineReducers({ patch: corperationProfitPatchReducer });

export default function* corperationSaga() {
  yield all([corperationProfitPatchSaga()]);
}
