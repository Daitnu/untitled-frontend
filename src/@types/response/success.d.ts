export interface IHTTPResponse<R> {
  status: number;
  data: R;
  headers: any;
  config: any;
}
