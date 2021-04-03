import React from 'react';
import { BarChart, LineChart, PieChart } from '~/components/Chart';
import { Grid, FinancialStatementsGrid } from '~/components/Grid';
import * as S from './styled';

const data = [
  { name: 'Editor', price: 1010100, openPrice: 1111, marketCapitalization: 500 },
  { name: 'Grid', price: 5020, openPrice: 2222, marketCapitalization: 300 },
  { name: 'Chart', price: 5300, openPrice: 333, marketCapitalization: 400 },
  { name: 'Bar', price: 50000, openPrice: 111, marketCapitalization: 500 },
  { name: 'Pie', price: 2000, openPrice: 333, marketCapitalization: 600 },
  { name: 'Multiple', price: 10000, openPrice: 333, marketCapitalization: 700 },
];

const columns = [
  { name: 'name', header: '회사명' },
  { name: 'price', header: '가격' },
  { name: 'prevClosePrice', header: '전일종가' },
  { name: 'openPrice', header: '시가' },
  { name: 'highPrice', header: '고가' },
  { name: 'lowPrice', header: '저가' },
  { name: 'volume', header: '거래량', sortable: true },
  { name: 'marketCapitalization', header: '시가총액', sortable: true, sortingType: 'desc' },
];

const StockList: React.FC = () => {
  return (
    <S.Wrap>
      <S.Container>
        <div style={{ height: '500px' }}>
          <Grid data={data} columns={columns}></Grid>
        </div>
        <div style={{ display: 'flex', flexDirection: 'row' }}>
          <BarChart />
          <LineChart />
          <PieChart />
        </div>
        <FinancialStatementsGrid data={data} />
      </S.Container>
    </S.Wrap>
  );
};

export default StockList;
