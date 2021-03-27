import React from 'react';
import ToastGrid from '@toast-ui/react-grid';
import 'tui-grid/dist/tui-grid.css';

const data = [
  { id: 1, name: 'Editor', price: 1010100, openPrice: 1111 },
  { id: 2, name: 'Grid', price: 5020, openPrice: 2222 },
  { id: 3, name: 'Chart', price: 5300, openPrice: 333 },
  // { id: 4, name: 'Bar', price: 50000, openPrice: 111 },
  // { id: 5, name: 'Pie', price: 2000, openPrice: 333 },
  // { id: 6, name: 'Multiple', price: 10000, openPrice: 333 },
];

const columns = [
  // { name: 'id', header: '순번' },
  { name: 'name', header: '회사명' },
  { name: 'price', header: '가격' },
  { name: 'prevClosePrice', header: '전일종가' },
  { name: 'openPrice', header: '시가' },
  { name: 'highPrice', header: '고가' },
  { name: 'lowPrice', header: '저가' },
  { name: 'volume', header: '거래량' },
];

const Grid = () => (
  <ToastGrid
    data={data}
    columns={columns}
    rowHeight={25}
    // bodyHeight={100}
    heightResizable={true}
    rowHeaders={['rowNum']}
    scrollX={true}
    scrollY={true}
  />
);

export default Grid;
