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
  FAILURE: IAction<BusinessErrorResponse>;
  CLEAR: INoPayloadAction;
}

export interface IActionAndTypes<T, R> {
  ACTIONS: IActions<T, R>;
  TYPES: ITypes;
}
