import React from 'react';
import { BarChart, LineChart, PieChart } from '~/components/Chart';
import { Grid, FinancialStatementsGrid } from '~/components/Grid';
import testData from '~/data.json';
import * as S from './styled';

const columns = [
  { name: 'marketKind', header: '시장구분', filter: 'select', aglin: 'center' },
  {
    name: 'corpName',
    header: '회사명',
    onClick(event) {
      console.log(`evetn ${event}`);
    },
  },
  // { name: 'changePercent', header: '전일종가' },
  { name: 'todayClosePrice', header: '종가', sortable: true },
  { name: 'changePrice', header: '전일비', sortable: true },
  { name: 'changePercent', header: '등락률', sortable: true },
  { name: 'todayOpenPrice', header: '시가' },
  { name: 'todayHighPrice', header: '고가' },
  { name: 'todayLowPrice', header: '저가' },
  { name: 'volume', header: '거래량', sortable: true },
  { name: 'sharesOutstanding', header: '발행주식수' },
  { name: 'marketCapitalization', header: '시가총액', sortable: true, sortingType: 'desc' },
];

interface IStockListData {
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
  volume: string;
  tradeTotalPrice: string;
  marketCapitalization: string;
  sharesOutstanding: string;
  MarketKindId: string;
}

interface ITestData {
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

const sampleData = testData.data.slice(50);
const stockListData = sampleData.map((data) => {
  const stockData: IStockListData = {
    stockCode: data.ISU_SRT_CD,
    corpName: data.ISU_ABBRV,
    marketKind: data.MKT_NM,
    department: data.SECT_TP_NM,
    todayClosePrice: Number(data.TDD_CLSPRC.replace(',', '')),
    changePrice: Number(data.CMPPREVDD_PRC.replace(',', '')),
    changePercent: Number(data.FLUC_RT.replace(',', '')),
    todayOpenPrice: Number(data.TDD_OPNPRC.replace(',', '')),
    todayHighPrice: Number(data.TDD_HGPRC.replace(',', '')),
    todayLowPrice: Number(data.TDD_LWPRC.replace(',', '')),
    volume: data.ACC_TRDVOL,
    tradeTotalPrice: data.ACC_TRDVAL,
    marketCapitalization: data.MKTCAP,
    sharesOutstanding: data.LIST_SHRS,
    MarketKindId: data.MKT_ID,
  };

  return stockData;
});

const StockList: React.FC = () => {
  return (
    <S.Wrap>
      <S.Container>
        <div style={{ height: `calc(100%)` }}>
          <Grid data={stockListData.slice(50)} columns={columns}></Grid>
        </div>
        {/* <div style={{ display: 'flex', flexDirection: 'row' }}>
          <BarChart />
          <LineChart />
          <PieChart />
        </div>
        <FinancialStatementsGrid data={data} /> */}
      </S.Container>
    </S.Wrap>
  );
};

export default StockList;
