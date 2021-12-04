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

export interface IActions<A, B> {
  REQUEST: (playload?: A) => void;
  SUCCESS: Function<B>;
  FAILURE: Function;
  CLEAR: Function;
}

export interface IActionAndTypes<A, B> {
  ACTIONS: IActions<A, B>;
  TYPES: ITypes;
}
