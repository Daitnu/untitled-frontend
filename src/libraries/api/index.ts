import axios, { AxiosInstance, AxiosError } from 'axios';
import { HTTPResponse, BusinessErrorResponse } from '@t/response';
import { RequestParam } from '@t/request';
export * from './history';

const API_SERVER = 'http://localhost:8080';
const MEDIA_TYPE = {
  JSON: 'application/json' as const,
};

export default class Api {
  private axiosInstance: AxiosInstance;

  constructor() {
    this.axiosInstance = axios.create({
      baseURL: API_SERVER,
      headers: {
        'Content-Type': MEDIA_TYPE.JSON,
        Accept: MEDIA_TYPE.JSON,
      },
      timeout: 5000,
      withCredentials: false,
    });

    this.axiosInstance.interceptors.response.use(
      (response) => response,
      (error: AxiosError<BusinessErrorResponse>) => {
        let errResponse: BusinessErrorResponse;
        if (!error.response) {
          errResponse = {
            status: 500,
            message: error.message,
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
  public get<T, D = undefined>({ url, data, token, options }: RequestParam<D>): Promise<HTTPResponse<T>> {
    return this.axiosInstance.get(url, { params: data, headers: { Authorization: token }, ...options });
  }

  /**
   * @method
   * @template T Response Type
   * @template D Request Type. default: undefined
   * @param {RequestParam<D>} param - { url: string, data: D | undefined, token: string }: RequestParam<D>
   * @returns {Promise<HTTPResponse<T>>}
   */
  public post<T, D = undefined>({ url, data, token }: RequestParam<D>): Promise<HTTPResponse<T>> {
    return this.axiosInstance.post(url, data, { headers: { Authorization: token } });
  }

  /**
   * @method
   * @template T Response Type
   * @template D Request Type. default: undefined
   * @param {RequestParam<D>} param - { url: string, data: D | undefined, token: string }: RequestParam<D>
   * @returns {Promise<HTTPResponse<T>>}
   */
  public patch<T, D = undefined>({ url, data, token }: RequestParam<D>): Promise<HTTPResponse<T>> {
    return this.axiosInstance.patch(url, data, { headers: { Authorization: token } });
  }

  /**
   * @method
   * @template T Response Type
   * @template D Request Type. default: undefined
   * @param {RequestParam<D>} param - { url: string, data: D | undefined, token: string }: RequestParam<D>
   * @returns {Promise<HTTPResponse<T>>}
   */
  public delete<T, D = undefined>({ url, data, token }: RequestParam<D>): Promise<HTTPResponse<T>> {
    return this.axiosInstance.delete(url, { data, headers: { Authorization: token } });
  }
}

export const apiInstance = new Api();
