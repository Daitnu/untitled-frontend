import { IDailyStockPrice } from '@t/common';
export interface IStockListData extends IDailyStockPrice {
  naverLink: string;
  _attributes: {
    className: {
      column: {
        changePrice: Array<string>;
        changePercent: Array<string>;
        corpName: Array<string>;
        naverLink: Array<string>;
      };
    };
  };
}
