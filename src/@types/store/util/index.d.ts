import { IBusinessErrorResponse } from '~/@types/response';
import { IHTTPResponse } from '~/@types/response';
import { ApiState } from '..';

export interface ApiCallSagaFunc {
  type: string;
  apiFunc: (...args: any[]) => Promise<IHTTPResponse<any> | IBusinessErrorResponse>;
  successCb?: (arg: IHTTPResponse<any>) => Generator | Function;
  failCb?: (arg: IBusinessErrorResponse) => Generator | Function;
}

export interface ITypes {
  DEFAULT: string;
  REQUEST: string;
  SUCCESS: string;
  FAILURE: string;
  CLEAR: string;
}

interface IActionResponse<R> {
  type: string;
  payload: R;
}

interface IClearActionResponse {
  type: string;
}

type IAction = <T>(payload: T) => IActionResponse<T>;
type INoPayloadAction = () => IClearActionResponse;

export interface IActions<T, R> {
  REQUEST: IAction<R>;
  SUCCESS: IAction<T>;
  FAILURE: IAction<IBusinessErrorResponse>;
  CLEAR: INoPayloadAction;
}

export interface IActionAndTypes<T, R> {
  ACTIONS: IActions<T, R>;
  TYPES: ITypes;
}
