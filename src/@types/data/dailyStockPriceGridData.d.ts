import { IDailyStockPrice } from '@t/common';
export interface IStockListData extends IDailyStockPrice {
  naverLink: string;
  rateOfGrowth?: number;
  profit21: number;
  profit22: number;
  profit23: number;
  per21: number;
  per22: number;
  per23: number;
  _attributes: {
    className: {
      column: {
        changePrice: Array<string>;
        changePercent: Array<string>;
        changePercentForAWeek: Array<string>;
        changePercentForAMonth: Array<string>;
        changePercentForThreeMonth: Array<string>;
        corpName: Array<string>;
        naverLink: Array<string>;
      };
    };
  };
}
