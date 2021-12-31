import axios, { AxiosInstance, AxiosError } from 'axios';
import { HTTPResponse, IBusinessErrorResponse } from '@t/response';
import { IRequestParam } from '@t/request';
import HTTP_STATUS from '../httpStatus';
export * from './history';

const API_SERVER: string = process.env.REACT_APP_API_BASE_URL || '';
const API_TIME_OUT: number = Number(process.env.REACT_APP_API_TIME_OUT) || 0;
const MEDIA_TYPE = {
  JSON: 'application/json' as const,
};

export default class Api {
  private axiosInstance: AxiosInstance;

  constructor() {
    this.axiosInstance = axios.create({
      baseURL: API_SERVER,
      headers: {
        'Content-Type': `${MEDIA_TYPE.JSON}; charset=utf-8`,
        Accept: MEDIA_TYPE.JSON,
      },
      timeout: API_TIME_OUT,
      withCredentials: false,
    });

    this.axiosInstance.interceptors.response.use(
      ({ data, headers, status }: { data: any; headers: any; status: any }) => ({
        data,
        headers,
        status,
      }),
      (error: AxiosError<IBusinessErrorResponse>) => {
        let errResponse: IBusinessErrorResponse;
        if (!error.response) {
          const message =
            error.message === 'Network Error' ? '인터넷 상태가 안좋습니다. 랜선을 확인해주세요.' : error.message;
          errResponse = {
            status: HTTP_STATUS.INTERNAL_SERVER_ERROR,
            message,
            code: null,
            errors: [],
            isError: true,
          };
        } else {
          const { status, message, code } = error.response.data;
          errResponse = { status, message, code, errors: error.response.data.errors, isError: true };
        }
        return Promise.reject(errResponse);
      },
    );
  }

  /**
   * @method
   * @template T Response Type
   * @template D Request Type. default: undefined
   * @param {RequestParam<D>} param - { url: string, data: D | undefined, token: string }: RequestParam<D>
   * @returns {Promise<HTTPResponse<T>>}
   */
  public get<T, D = undefined>({
    url,
    data,
    token,
    options,
    headers,
  }: IRequestParam<D>): Promise<HTTPResponse<T> | IBusinessErrorResponse> {
    return this.axiosInstance.get(url, { params: data, headers: { Authorization: token, ...headers }, ...options });
  }

  /**
   * @method
   * @template T Response Type
   * @template D Request Type. default: undefined
   * @param {RequestParam<D>} param - { url: string, data: D | undefined, token: string }: RequestParam<D>
   * @returns {Promise<HTTPResponse<T>>}
   */
  public post<T, D = undefined>({
    url,
    data,
    token,
  }: IRequestParam<D>): Promise<HTTPResponse<T> | IBusinessErrorResponse> {
    return this.axiosInstance.post(url, data, { headers: { Authorization: token } });
  }

  /**
   * @method
   * @template T Response Type
   * @template D Request Type. default: undefined
   * @param {RequestParam<D>} param - { url: string, data: D | undefined, token: string }: RequestParam<D>
   * @returns {Promise<HTTPResponse<T>>}
   */
  public patch<T, D = undefined>({
    url,
    data,
    token,
  }: IRequestParam<D>): Promise<HTTPResponse<T> | IBusinessErrorResponse> {
    return this.axiosInstance.patch(url, data, { headers: { Authorization: token } });
  }

  /**
   * @method
   * @template T Response Type
   * @template D Request Type. default: undefined
   * @param {RequestParam<D>} param - { url: string, data: D | undefined, token: string }: RequestParam<D>
   * @returns {Promise<HTTPResponse<T>>}
   */
  public delete<T, D = undefined>({
    url,
    data,
    token,
  }: IRequestParam<D>): Promise<HTTPResponse<T> | IBusinessErrorResponse> {
    return this.axiosInstance.delete(url, { data, headers: { Authorization: token } });
  }

  public download = async ({ url }: { url: string }) => {
    const headers: object = {
      'Content-Disposition': 'attachment; filename=test.xlxs',
      'Content-Type': 'application/octet-stream',
    };

    const options: object = {
      responseType: 'blob',
    };

    return this.get({ url, headers, options });
    // const response = await this.get({ url, headers, options });

    // if (response.isError) {
    //   return response;

    // const name: string = response.headers['content-disposition'].split('filename=')[1];
    // const newName = decodeURIComponent(name);

    // const fileURL = window.URL.createObjectURL(
    //   new Blob([new Uint8Array([0xef, 0xbb, 0xbf]), response.data], { type: response.headers['content-type'] }),
    // );
    // const link = document.createElement('a');
    // link.href = fileURL;
    // link.setAttribute('download', newName);
    // document.body.appendChild(link);
    // link.click();

    // return response;
  };
}

export const apiInstance = new Api();
