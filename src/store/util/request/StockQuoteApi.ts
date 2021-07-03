import { BusinessErrorResponse, HTTPResponse, IResponseStockQuote } from '~/@types/response';
import { URL } from '~/libs';
import Api from './Api';

export default class StockQuoteApi extends Api {
  constructor() {
    super();
  }

  public async getStockQuotes(): Promise<HTTPResponse<IResponseStockQuote> | BusinessErrorResponse> {
    return this.get<IResponseStockQuote>({ url: URL.STOCK_QUOTE });
  }
}
