import { BusinessErrorResponse } from '~/@types/response';

export interface ApiState<T> {
  loading: boolean;
  response: null | T;
  error: null | BusinessErrorResponse;
}
