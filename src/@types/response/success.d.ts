export interface HTTPResponse<R> {
  status: number;
  data: R;
  headers: any;
}
