import { BusinessErrorResponse, HTTPResponse, IResponseStockQuoteList } from '~/@types/response';
import { URL } from '~/libs';
import Api from './Api';

export default class StockQuoteApi extends Api {
  constructor() {
    super();
  }

  public async getStockQuotes(): Promise<HTTPResponse<IResponseStockQuoteList> | BusinessErrorResponse> {
    return this.get<IResponseStockQuoteList>({ url: URL.STOCK_QUOTE });
  }
}
