import { call, put } from 'redux-saga/effects';
import { IBusinessErrorResponse, IHTTPResponse } from '@t/response';
import { ApiState, ApiCallSagaFunc, IActionAndTypes, IActions, ITypes } from '@t/store';

/**
 * @param type Action type
 * @param apiFunc Api 클래스의 상속을 받는 자식 클래스의 메소드
 * @param successCb payload(IHTTPResponse)를 인자로 받는 cb
 * @param failCb err(IBusinessErrorResponse)를 인자로 받는 cb
 */
const makeApiCallSagaFunc = ({ type, apiFunc, successCb, failCb }: ApiCallSagaFunc) => {
  return function* (action) {
    const [SUCCESS, FAILURE] = [`${type}_SUCCESS`, `${type}_FAILURE`];
    try {
      const accessToken = localStorage.getItem('accessToken');
      const grantType = localStorage.getItem('grantType');
      const authorizationHeader = accessToken ? `${grantType} ${accessToken}` : null;
      const payload = yield call(apiFunc, { data: action.payload, token: authorizationHeader });
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
 * @param R API Response type
 * @param T API Request type
 * @param type Action type
 */
const makeApiReducer = <R, T = undefined>(type: string) => {
  const REQUEST = (`${type}_REQUEST` as string) as 'REQUEST';
  const SUCCESS = (`${type}_SUCCESS` as string) as 'SUCCESS';
  const FAILURE = (`${type}_FAILURE` as string) as 'FAILURE';
  const CLEAR = (`${type}_CLEAR` as string) as 'CLEAR';

  type Request = {
    type: typeof REQUEST;
    payload: T;
  };

  type Success = {
    type: typeof SUCCESS;
    payload: R;
  };

  type Failure = {
    type: typeof FAILURE;
    payload: IBusinessErrorResponse;
  };

  type Clear = {
    type: typeof CLEAR;
  };

  type Action = Request | Success | Failure | Clear;

  return (state: ApiState<R> = initialState, action: Action): ApiState<R> => {
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

/**
 * @param R Response Success Action Payload Type
 * @param T Request Action Payload Type
 * @param action Action String
 * @returns Action + Types
 */
const createActionAndTypes = <R = undefined, T = undefined>(action: string): IActionAndTypes<R, T> => {
  const types: ITypes = {
    DEFAULT: action,
    REQUEST: action + '_REQUEST',
    SUCCESS: action + '_SUCCESS',
    FAILURE: action + '_FAILURE',
    CLEAR: action + '_CLEAR',
  };

  const actions: IActions<R, T> = {
    REQUEST: (payload?: T) => {
      return {
        type: types.REQUEST,
        payload,
      };
    },
    SUCCESS: (payload?: IHTTPResponse<R>) => {
      return {
        type: types.SUCCESS,
        payload,
      };
    },
    FAILURE: (payload: IBusinessErrorResponse) => {
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
