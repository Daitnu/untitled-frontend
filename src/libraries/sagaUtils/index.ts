import { call, put } from 'redux-saga/effects';
import { BusinessErrorResponse } from '@t/response';
import { ApiState, ApiCallSagaFunc } from '@t/store';
import { historyPush } from '../api';

/**
 * @param type product인지 coupon인지 등을 나타내는 상수
 * @param apiFunc Api 클래스의 상속을 받는 자식 클래스의 메소드
 * @param successCb payload(HTTPResponse)를 인자로 받는 cb
 * @param failCb err(BusinessErrorResponse)를 인자로 받는 cb
 */
export const makeApiCallSagaFunc = ({ type, apiFunc, successCb, failCb }: ApiCallSagaFunc) =>
  function* (action) {
    const [SUCCESS, FAILURE] = [`${type}_SUCCESS`, `${type}_FAILURE`];
    try {
      const payload = yield call(apiFunc, action.payload);
      yield put({ type: SUCCESS, payload });
      if (successCb !== undefined) {
        yield call(successCb, payload);
      }
    } catch (err) {
      yield put({ type: FAILURE, payload: err });
      if (err.status === 401) {
        yield call(historyPush, '/');
      }
      if (failCb !== undefined) {
        yield call(failCb, err);
      }
    }
  };

const initialState = { loading: false, response: null, error: null };

/**
 *
 * @param T API Response type
 * @param R API Request type
 * @param type product인지 coupon인지 등을 나타내는 상수
 */
export const makeApiReducer = <T, R = undefined>(type: string) => {
  const REQUEST = `${type}_REQUEST` as 'REQUEST';
  const SUCCESS = `${type}_SUCCESS` as 'SUCCESS';
  const FAILURE = `${type}_FAILURE` as 'FAILURE';
  const CLEAR = `${type}_CLEAR` as 'CLEAR';
  type Request = {
    type: typeof REQUEST;
    payload: R;
  };
  type Success = {
    type: typeof SUCCESS;
    payload: T;
  };
  type Failure = {
    type: typeof FAILURE;
    payload: BusinessErrorResponse;
  };
  type Clear = {
    type: typeof CLEAR;
  };
  type Action = Request | Success | Failure | Clear;

  return (state: ApiState<T> = initialState, action: Action): ApiState<T> => {
    switch (action.type) {
      case REQUEST:
        return {
          ...initialState,
          loading: true,
        };
      case SUCCESS:
        return {
          ...initialState,
          ...state,
          response: action.payload,
        };
      case FAILURE:
        return {
          ...initialState,
          ...state,
          error: action.payload,
        };
      case CLEAR:
        return {
          ...initialState,
        };
      default:
        return state;
    }
  };
};
