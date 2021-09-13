import axios, { AxiosInstance } from 'axios';
import { HTTPResponse, BusinessErrorResponse } from '~/@types/response';
import { RequestParam } from '~/@types/request';

const API_SERVER = 'http://localhost:8080';
const MEDIA_TYPE = {
  JSON: 'application/json' as const,
};

const getHttpResponse = async <T>({ fn }): Promise<HTTPResponse<T>> => {
  try {
    const result = await fn();
    const { status, data: resData, headers } = result;
    const successResponse: HTTPResponse<T> = { status, data: resData, headers };
    return successResponse;
  } catch (err) {
    let errResponse: BusinessErrorResponse = { status: 0, message: '', code: '', errors: [] };
    if (!err.response) {
      errResponse = {
        status: 500,
        message: err.message,
        code: null,
        errors: null,
      };
      throw errResponse;
    }
    const { status, message, code } = err.response.data.errorCode;
    errResponse = { status, message, code, errors: err.response.data.fieldErrors };
    throw errResponse;
  }
};

const toQueryString = (obj): string =>
  Object.entries(obj)
    .map(([k, v]) => `${k}=${v}`)
    .reduce((prev, cur) => `${prev}&${cur}`);

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
  }

  /**
   * @method
   * @template T Response Type
   * @template D Request Type. default: undefined
   * @param {RequestParam<D>} param - { url: string, data: D | undefined, token: string }: RequestParam<D>
   * @returns {Promise<HTTPResponse<T>>}
   */
  public async get<T, D = undefined>({ url, data, token, options }: RequestParam<D>): Promise<HTTPResponse<T>> {
    if (data !== undefined) {
      url += '?' + toQueryString(data);
    }
    const fn = () => this.axiosInstance.get(url, { headers: { Authorization: token }, ...options });
    return getHttpResponse<T>({ fn });
  }

  /**
   * @method
   * @template T Response Type
   * @template D Request Type. default: undefined
   * @param {RequestParam<D>} param - { url: string, data: D | undefined, token: string }: RequestParam<D>
   * @returns {Promise<HTTPResponse<T>>}
   */
  public async post<T, D = undefined>({ url, data, token }: RequestParam<D>): Promise<HTTPResponse<T>> {
    const fn = () => this.axiosInstance.post(url, data, { headers: { Authorization: token } });
    return getHttpResponse<T>({ fn });
  }

  /**
   * @method
   * @template T Response Type
   * @template D Request Type. default: undefined
   * @param {RequestParam<D>} param - { url: string, data: D | undefined, token: string }: RequestParam<D>
   * @returns {Promise<HTTPResponse<T>>}
   */
  public async patch<T, D = undefined>({ url, data, token }: RequestParam<D>): Promise<HTTPResponse<T>> {
    const fn = () => this.axiosInstance.patch(url, data, { headers: { Authorization: token } });
    return getHttpResponse<T>({ fn });
  }

  /**
   * @method
   * @template T Response Type
   * @template D Request Type. default: undefined
   * @param {RequestParam<D>} param - { url: string, data: D | undefined, token: string }: RequestParam<D>
   * @returns {Promise<HTTPResponse<T>>}
   */
  public async delete<T, D = undefined>({ url, data, token }: RequestParam<D>): Promise<HTTPResponse<T>> {
    const fn = () => this.axiosInstance.delete(url, { data, headers: { Authorization: token } });
    return getHttpResponse<T>({ fn });
  }
}
