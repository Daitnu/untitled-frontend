import { BusinessErrorResponse } from '~/@types/response';
import { HTTPResponse } from '~/@types/response';
import { ApiState } from '..';

export interface ApiCallSagaFunc {
  type: string;
  apiFunc: (...args: any[]) => Promise<HTTPResponse<any> | BusinessErrorResponse>;
  successCb?: (arg: HTTPResponse<any>) => Generator | Function;
  failCb?: (arg: BusinessErrorResponse) => Generator | Function;
}

export interface ITypes {
  DEFAULT: string;
  REQUEST: string;
  SUCCESS: string;
  FAILURE: string;
  CLEAR: string;
}

interface IActionResponse<T> {
  type: string;
  payload: T;
}

interface IClearActionResponse {
  type: string;
}

type IAction = <T>(payload: T) => IActionResponse<T>;
type INoPayloadAction = () => IClearActionResponse;

export interface IActions<A, B> {
  REQUEST: IAction<A>;
  SUCCESS: IAction<B>;
  FAILURE: IAction<BusinessErrorResponse>;
  CLEAR: INoPayloadAction;
}

export interface IActionAndTypes<A, B> {
  ACTIONS: IActions<A, B>;
  TYPES: ITypes;
}
