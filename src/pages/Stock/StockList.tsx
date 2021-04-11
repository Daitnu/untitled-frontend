import React from 'react';
import { BarChart, LineChart, PieChart } from '~/components/Chart';
import { Grid, FinancialStatementsGrid } from '~/components/Grid';
import testData from '~/data.json';
import * as S from './styled';
import { TOAST_GRID, URL } from '~/constant';
import {} from 'react-router-dom';

const columns = [
  { name: 'marketKind', header: '시장구분', filter: 'select', valign: 'middle' },
  {
    name: 'corpName',
    header: '회사명',
    onClick(event) {
      console.log(`evetn ${event}`);
    },
    valign: 'middle',
  },
  // { name: 'changePercent', header: '전일종가' },
  { name: 'todayClosePrice', header: '종가', valign: 'middle', sortable: true },
  { name: 'changePrice', header: '전일비', valign: 'middle', sortable: true },
  { name: 'changePercent', header: '등락률', valign: 'middle', sortable: true },
  { name: 'changePercentWeek', header: '1주 등락률', valign: 'middle' },
  { name: 'changePercentMonth', header: '1달 등락률', valign: 'middle' },
  { name: 'todayOpenPrice', header: '시가', valign: 'middle' },
  { name: 'todayHighPrice', header: '고가', valign: 'middle' },
  { name: 'todayLowPrice', header: '저가', valign: 'middle' },
  { name: 'volume', header: '거래량', valign: 'middle', sortable: true },
  { name: 'sharesOutstanding', header: '발행주식수', valign: 'middle' },
  { name: 'marketCapitalization', header: '시가총액', valign: 'middle', sortable: true, sortingType: 'desc' },
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
  changePercentWeek: number;
  changePercentMonth: number;
  marketCapitalization: string;
  sharesOutstanding: string;
  MarketKindId: string;
  _attributes: {
    className: {
      column: {
        changePrice: Array<string>;
        changePercent: Array<string>;
        corpName: Array<string>;
      };
    };
  };
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
    _attributes: {
      className: {
        column: {
          changePrice: [],
          changePercent: [],
          corpName: ['tui-grid-stock-link'],
        },
      },
    },
  };

  let pushClassName = '';

  if (stockData.changePrice < 0) {
    pushClassName = TOAST_GRID.TOAST_GRID_STOCK_FELL;
  } else if (0 < stockData.changePrice) {
    pushClassName = TOAST_GRID.TOAST_GRID_STOCK_ROSE;
  }
  stockData._attributes.className.column.changePrice.push(pushClassName);
  stockData._attributes.className.column.changePercent.push(pushClassName);
  return stockData;
});

const onClick = (event) => {
  const { columnName, rowKey } = event;
  if (columnName !== 'corpName') return;
  window.open(`${URL.NAVER_FINANCE}/item/main.nhn?code=${stockListData[rowKey].stockCode}`, '_blank');
};

const StockList: React.FC = () => {
  return (
    <S.Wrap>
      <S.Container>
        <div style={{ height: `calc(100%)` }}>
          <Grid data={stockListData} columns={columns} onClick={onClick}></Grid>
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
