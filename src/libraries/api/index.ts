import axios, { AxiosInstance } from 'axios';
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
      (error) => {
        let errResponse: BusinessErrorResponse = { status: 0, message: '', code: '', errors: [], isError: true };
        if (!error.response) {
          errResponse = {
            status: 500,
            message: error.message,
            code: null,
            errors: null,
            isError: error.isAxiosError,
          };
          throw errResponse;
        }
        const { status, message, code } = error.response.data.errorCode;
        errResponse = { status, message, code, errors: error.response.data.fieldErrors, isError: true };
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
  public async get<T, D = undefined>({ url, data, token, options }: RequestParam<D>): Promise<HTTPResponse<T>> {
    return this.axiosInstance.get(url, { params: data, headers: { Authorization: token }, ...options });
  }

  /**
   * @method
   * @template T Response Type
   * @template D Request Type. default: undefined
   * @param {RequestParam<D>} param - { url: string, data: D | undefined, token: string }: RequestParam<D>
   * @returns {Promise<HTTPResponse<T>>}
   */
  public async post<T, D = undefined>({ url, data, token }: RequestParam<D>): Promise<HTTPResponse<T>> {
    return this.axiosInstance.post(url, data, { headers: { Authorization: token } });
  }

  /**
   * @method
   * @template T Response Type
   * @template D Request Type. default: undefined
   * @param {RequestParam<D>} param - { url: string, data: D | undefined, token: string }: RequestParam<D>
   * @returns {Promise<HTTPResponse<T>>}
   */
  public async patch<T, D = undefined>({ url, data, token }: RequestParam<D>): Promise<HTTPResponse<T>> {
    return this.axiosInstance.patch(url, data, { headers: { Authorization: token } });
  }

  /**
   * @method
   * @template T Response Type
   * @template D Request Type. default: undefined
   * @param {RequestParam<D>} param - { url: string, data: D | undefined, token: string }: RequestParam<D>
   * @returns {Promise<HTTPResponse<T>>}
   */
  public async delete<T, D = undefined>({ url, data, token }: RequestParam<D>): Promise<HTTPResponse<T>> {
    return this.axiosInstance.delete(url, { data, headers: { Authorization: token } });
  }
}

export const apiInstance = new Api();
