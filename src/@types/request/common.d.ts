export interface IRequestParam<T> {
  url: string;
  data?: T;
  token?: string;
  options?: object;
  headers?: object;
}
