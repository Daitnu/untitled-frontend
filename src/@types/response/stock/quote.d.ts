export interface IResponseDailyStockPrices {
  corpCode: string;
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
}

export interface IResponseDailyStockPricesList {
  result: IResponseDailyStockPrices[];
}
