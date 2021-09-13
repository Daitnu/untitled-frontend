export interface IDailyStockPrice {
  stockCode: string;
  corpName: string;
  marketKind: string;
  department: string;
  todayClosePrice: number;
  changePrice: number;
  changePercent: number;
  todayOpenPrice: number;
  todayHighPrice: number;
  todayLowPrice: number;
  volume: number;
  tradeTotalPrice: number;
  marketCapitalization: number;
  sharesOutstanding: number;
  marketKindId: string;
  changePercentForAWeek: number;
  changePercentForAMonth: number;
  changePercentForThreeMonth: number;
  rateOfGrowth?: number;
  profit21: number;
  profit22: number;
  profit23: number;
}

export type IResponseDailyStockPrices = IDailyStockPrice[];

export interface IStockListData extends IDailyStockPrice {
  naverLink: string;
  rateOfGrowth?: number;
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
