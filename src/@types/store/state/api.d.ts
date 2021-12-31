import { IBusinessErrorResponse } from '~/@types/response';

export interface ApiState<T> {
  loading: boolean;
  response: null | T;
  errors: null | IBusinessErrorResponse;
}
