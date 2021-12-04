import { call, put } from 'redux-saga/effects';
import { BusinessErrorResponse, HTTPResponse } from '@t/response';
import { ApiState, ApiCallSagaFunc, IActionAndTypes } from '@t/store';
import { historyPush } from '../api';

/**
 * @param type Action type
 * @param apiFunc Api 클래스의 상속을 받는 자식 클래스의 메소드
 * @param successCb payload(HTTPResponse)를 인자로 받는 cb
 * @param failCb err(BusinessErrorResponse)를 인자로 받는 cb
 */
const makeApiCallSagaFunc = ({ type, apiFunc, successCb, failCb }: ApiCallSagaFunc) => {
  return function* (action) {
    const [SUCCESS, FAILURE] = [`${type}_SUCCESS`, `${type}_FAILURE`];
    try {
      const payload = yield call(apiFunc, action.payload);
      yield put({ type: SUCCESS, payload });
      if (successCb !== undefined) {
        yield call(successCb, payload);
      }
    } catch (error: any) {
      yield put({ type: FAILURE, payload: error });
      // if (error.status === 401) {
      //   yield call(historyPush, '/');
      // }
      if (failCb !== undefined) {
        yield call(failCb, error);
      }
    }
  };
};
const initialState = { loading: false, response: null, errors: null };

/**
 *
 * @param T API Response type
 * @param R API Request type
 * @param type Action type
 */
const makeApiReducer = <T, R = undefined>(type: string) => {
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
          ...state,
          loading: false,
          response: action.payload,
          errors: null,
        };
      case FAILURE:
        return {
          ...state,
          loading: false,
          response: null,
          errors: action.payload,
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

// const convert = (string: string): string => {
//   const splited = string.split('_');

//   const camels: string[] = [];
//   for (let i = 0; i < splited.length; i++) {
//     const firstAlphabet = splited[i].substr(0, 1);
//     const first = i === 0 ? firstAlphabet.toLowerCase() : firstAlphabet.toUpperCase();
//     const camel = first + splited[i].substr(1).toLowerCase();
//     camels.push(camel);
//   }
//   return camels.join('');
// };

const createActionAndTypes = <A = undefined, B = undefined>(action: string): IActionAndTypes<A, B> => {
  const types = {
    DEFAULT: action,
    REQUEST: action + '_REQUEST',
    SUCCESS: action + '_SUCCESS',
    FAILURE: action + '_FAILURE',
    CLEAR: action + '_CLEAR',
  };

  const actions = {
    REQUEST: (payload?: A) => {
      return {
        type: types.REQUEST,
        payload,
      };
    },
    SUCCESS: (payload?: HTTPResponse<B>) => {
      return {
        type: types.SUCCESS,
        payload,
      };
    },
    FAILURE: (payload: BusinessErrorResponse) => {
      return {
        type: types.FAILURE,
        payload,
      };
    },
    CLEAR: () => {
      return {
        type: types.CLEAR,
      };
    },
  };

  return {
    TYPES: types,
    ACTIONS: actions,
  };
};

export default {
  makeApiCallSagaFunc,
  makeApiReducer,
  createActionAndTypes,
};
