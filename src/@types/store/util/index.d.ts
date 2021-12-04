import { BusinessErrorResponse } from '~/@types/response';
import { HTTPResponse } from '~/@types/response';

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

export interface IActions {
  DEFAULT: Function;
  REQUEST: Function;
  SUCCESS: Function;
  FAILURE: Function;
  CLEAR: Function;
}

export interface IActionAndTypes {
  ACTIONS: IActions;
  TYPES: ITypes;
}
