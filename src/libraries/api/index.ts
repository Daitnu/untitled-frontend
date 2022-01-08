import axios, { AxiosInstance, AxiosError } from 'axios';
import { IHTTPResponse, IBusinessErrorResponse } from '@t/response';
import { IRequestParam } from '@t/request';
import HTTP_STATUS from '../httpStatus';
import API_PATH from '~/constants/path';
export * from './history';

const API_SERVER: string = process.env.REACT_APP_API_BASE_URL || '';
const API_TIME_OUT: number = Number(process.env.REACT_APP_API_TIME_OUT) || 0;
const MEDIA_TYPE = {
  JSON: 'application/json' as const,
  OCTET: 'application/octet-stream' as const,
};
const config = {
  baseURL: API_SERVER,
  headers: {
    'Content-Type': `${MEDIA_TYPE.JSON}; charset=utf-8`,
    Accept: MEDIA_TYPE.JSON,
  },
  timeout: API_TIME_OUT,
  withCredentials: false,
};

export default class Api {
  private axiosInstance: AxiosInstance;

  constructor() {
    this.axiosInstance = axios.create(config);

    this.axiosInstance.interceptors.response.use(
      ({ data, headers, status, config }: { data: any; headers: any; status: any; config: any }) => ({
        data,
        headers,
        status,
        config,
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
          // if (error.response.status === 401) {
          // TODO: reissue api call

          // return Promise.reject(this.get({ url: API_PATH.ACCOUNT.REISSUE }));
          // }
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
   * @returns {Promise<IHTTPResponse<T>>}
   */
  public get<T, D = undefined>({
    url,
    data,
    token,
    options,
    headers,
  }: IRequestParam<D>): Promise<IHTTPResponse<T> | IBusinessErrorResponse> {
    return this.axiosInstance.get(url, { params: data, headers: { Authorization: token, ...headers }, ...options });
  }

  /**
   * @method
   * @template T Response Type
   * @template D Request Type. default: undefined
   * @param {RequestParam<D>} param - { url: string, data: D | undefined, token: string }: RequestParam<D>
   * @returns {Promise<IHTTPResponse<T>>}
   */
  public post<T, D = undefined>({
    url,
    data,
    token,
  }: IRequestParam<D>): Promise<IHTTPResponse<T> | IBusinessErrorResponse> {
    return this.axiosInstance.post(url, data, { headers: { Authorization: token } });
  }

  /**
   * @method
   * @template T Response Type
   * @template D Request Type. default: undefined
   * @param {RequestParam<D>} param - { url: string, data: D | undefined, token: string }: RequestParam<D>
   * @returns {Promise<IHTTPResponse<T>>}
   */
  public patch<T, D = undefined>({
    url,
    data,
    token,
  }: IRequestParam<D>): Promise<IHTTPResponse<T> | IBusinessErrorResponse> {
    return this.axiosInstance.patch(url, data, { headers: { Authorization: token } });
  }

  /**
   * @method
   * @template T Response Type
   * @template D Request Type. default: undefined
   * @param {RequestParam<D>} param - { url: string, data: D | undefined, token: string }: RequestParam<D>
   * @returns {Promise<IHTTPResponse<T>>}
   */
  public delete<T, D = undefined>({
    url,
    data,
    token,
  }: IRequestParam<D>): Promise<IHTTPResponse<T> | IBusinessErrorResponse> {
    return this.axiosInstance.delete(url, { data, headers: { Authorization: token } });
  }

  public download = async (url: string, fileName?: string) => {
    const headers: object = {
      'content-disposition': `attachment; filename=${encodeURI(fileName || '')}`,
      Accept: `${MEDIA_TYPE.OCTET}, ${MEDIA_TYPE.JSON}`,
    };

    if (!fileName) {
      delete headers['content-disposition'];
    }

    const options: object = {
      responseType: 'blob',
    };

    const response = await this.get<Blob>({ url, headers, options });
    if ('isError' in response) {
      return response;
    }
    const fileNameHeader = response.config.headers['content-disposition'] ? response.config.headers : response.headers;
    const name: string = fileNameHeader['content-disposition'].split('filename=')[1];
    const newName = decodeURIComponent(name);

    const fileURL = window.URL.createObjectURL(
      new Blob([new Uint8Array([0xef, 0xbb, 0xbf]), response.data], { type: response.headers['content-type'] }),
    );
    const link = document.createElement('a');
    link.href = fileURL;
    link.setAttribute('download', newName);
    document.body.appendChild(link);
    link.click();

    return response;
  };
}

export const apiInstance = new Api();
