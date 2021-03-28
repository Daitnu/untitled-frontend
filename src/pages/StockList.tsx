import React from 'react';
import Grid from '~/components/Grid';
import Header from '~/components/Header';

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

// const complexColumn = [
//   {
//     header: 'col1',
//     name: 'col1',
//   },
//   {
//     header: 'col2',
//     name: 'col2',
//   },
//   {
//     header: 'col3',
//     name: 'col3',
//   },
// ];

// const complexheader = {
//   complexColumns: [
//     {
//       header: 'col1 + col2',
//       name: 'parent1',
//       childNames: ['col1', 'col2'],
//     },
//     {
//       header: 'col1 + col2 + col3',
//       name: 'parent2',
//       childNames: ['parent1', 'col3'],
//     },
//   ],
// };

const StockList: React.FC = () => {
  return (
    <>
      <Header />
      <div style={{ height: '500px' }}>
        <Grid data={data} columns={columns}></Grid>
      </div>
    </>
  );
};

export default StockList;
