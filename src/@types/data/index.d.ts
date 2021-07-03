
export interface IStockListData {
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
  changePercentForAWeek : number;
  changePercentForAMonth : number;
  changePercentForThreeMonth : number;
  marketCapitalization: number;
  sharesOutstanding: number;
  naverLink : string,
  MarketKindId: string;
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

export interface ITestData {
  ISU_SRT_CD: string;
  ISU_ABBRV: string;
  MKT_NM: string;
  SECT_TP_NM: string;
  TDD_CLSPRC: string;
  CMPPREVDD_PRC: string;
  FLUC_RT: string;
  TDD_OPNPRC: string;
  TDD_HGPRC: string;
  TDD_LWPRC: string;
  ACC_TRDVOL: string;
  ACC_TRDVAL: string;
  MKTCAP: string;
  LIST_SHRS: string;
  MKT_ID: string;
}

export interface IGridOptions {
  data: Array<JSON>;
  columns: Array<JSON>;
  onClick?: Function;
}
