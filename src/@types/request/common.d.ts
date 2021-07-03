export interface RequestParam<T> {
  url: string;
  data?: T;
  token: string;
  options?: object;
}
