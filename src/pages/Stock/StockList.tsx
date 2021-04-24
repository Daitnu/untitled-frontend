import React from 'react';
import { BarChart, LineChart, PieChart } from '~/components/Chart';
import { Grid, FinancialStatementsGrid } from '~/components/Grid';
import testData from '~/data.json';
import { IStockListData } from '~/types/data';
import * as S from './styled';
import { TOAST_GRID, URL } from '~/constant';
import {} from 'react-router-dom';

const ConvertNumberSeparator = (string) => string.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');

const columns = [
  { name: 'marketKind', header: '시장구분', filter: 'select', valign: 'middle', width: 100, align: 'left' },
  {
    name: 'corpName',
    header: '회사명',
    valign: 'middle',
    width: 150,
    align: 'left',
  },
  // { name: 'changePercent', header: '전일종가' },
  {
    name: 'todayClosePrice',
    header: '종가',
    valign: 'middle',
    sortable: true,
    width: 90,
    align: 'right',
    formatter: ({ value }) => ConvertNumberSeparator(value)
  },
  {
    name: 'changePrice',
    header: '전일비',
    valign: 'middle',
    sortable: true,
    width: 90,
    align: 'right',
    formatter: ({ value }) =>  ConvertNumberSeparator(value)
  },
  {
    name: 'changePercent',
    header: '등락률',
    valign: 'middle',
    sortable: true,
    width: 80,
    align: 'right',
    formatter: ({ value }) => `${ConvertNumberSeparator(value)}%`
  },
  {
    name: 'changePercentWeek',
    header: '주간등락률',
    valign: 'middle',
    sortable: true,
    width: 90,
    defaultValue: 0,
    align: 'right',
formatter: ({ value }) => `${ConvertNumberSeparator(value)}%`
  },
  {
    name: 'changePercentMonth',
    header: '월간등락률',
    valign: 'middle',
    sortable: true,
    width: 90,
    defaultValue: 0,
    align: 'right',
formatter: ({ value }) => `${ConvertNumberSeparator(value)}%`
  },
  {
    name: 'todayOpenPrice',
    header: '시가',
    valign: 'middle',
    width: 80,
    align: 'right',
    formatter: ({ value }) =>  ConvertNumberSeparator(value)
  },
  {
    name: 'todayHighPrice',
    header: '고가',
    valign: 'middle',
    width: 80,
    align: 'right',
    formatter: ({ value }) =>  ConvertNumberSeparator(value)
  },
  {
    name: 'todayLowPrice',
    header: '저가',
    valign: 'middle',
    width: 80,
    align: 'right',
    formatter: ({ value }) =>  ConvertNumberSeparator(value)
  },
  {
    name: 'volume',
    header: '거래량',
    valign: 'middle',
    sortable: true,
    width: 100,
    align: 'right',
    formatter: ({ value }) =>  ConvertNumberSeparator(value)
  },
  {
    name: 'sharesOutstanding',
    header: '발행주식수',
    valign: 'middle',
    width: 120,
    align: 'right',
    formatter: ({ value }) =>  ConvertNumberSeparator(value)
  },
  {
    name: 'marketCapitalization',
    header: '시가총액',
    valign: 'middle',
    sortable: true,
    sortingType: 'desc',
    width: 160,
    align: 'right',
    formatter: ({ value }) =>  ConvertNumberSeparator(value)
  },
];

const sampleData = testData.data.slice(50);
const stockListData = sampleData.map((data) => {
  const corpStockData: IStockListData = {
    stockCode: data.ISU_SRT_CD,
    corpName: data.ISU_ABBRV,
    marketKind: data.MKT_NM,
    department: data.SECT_TP_NM,
    todayClosePrice: Number(data.TDD_CLSPRC.replaceAll(',', '')),
    changePrice: Number(data.CMPPREVDD_PRC.replaceAll(',', '')),
    changePercent: Number(data.FLUC_RT.replaceAll(',', '')),
    todayOpenPrice: Number(data.TDD_OPNPRC.replaceAll(',', '')),
    todayHighPrice: Number(data.TDD_HGPRC.replaceAll(',', '')),
    todayLowPrice: Number(data.TDD_LWPRC.replaceAll(',', '')),
    volume: Number(data.ACC_TRDVOL.replaceAll(',', '')),
    tradeTotalPrice: Number(data.ACC_TRDVAL.replaceAll(',', '')),
    sharesOutstanding: Number(data.LIST_SHRS.replaceAll(',', '')),
    marketCapitalization: Number(data.MKTCAP.replaceAll(',', '')),
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

  if (corpStockData.changePrice < 0) {
    pushClassName = TOAST_GRID.TOAST_GRID_STOCK_FELL;
  } else if (0 < corpStockData.changePrice) {
    pushClassName = TOAST_GRID.TOAST_GRID_STOCK_ROSE;
  }

  corpStockData._attributes.className.column.changePrice.push(pushClassName);
  corpStockData._attributes.className.column.changePercent.push(pushClassName);
  return corpStockData;
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
        </div> */}
        {/* <FinancialStatementsGrid data={data} /> */}
      </S.Container>
    </S.Wrap>
  );
};

export default StockList;
