import React from 'react';
import ToastGrid from '@toast-ui/react-grid';
import 'tui-grid/dist/tui-grid.css';

const header = {
  height: 160,
  complexColumns: [
    {
      header: '연간실적',
      name: 'mergeColumn1',
      childNames: ['2016', '2017', '2018', '2019', '2020', '2021'],
    },
    {
      header: '분기실적',
      name: 'mergeColumn2',
      childNames: ['1Q21', '2Q21', '3Q21', '4Q21'],
    },
  ],
};

const columns = [
  {
    header: '2016',
    name: '2016',
  },
  {
    header: '2017',
    name: '2017',
  },
  {
    header: '2018',
    name: '2018',
  },
  {
    header: '2019',
    name: '2019',
  },
  {
    header: '2020',
    name: '2020',
  },
  {
    header: '2021',
    name: '2021',
  },
  {
    header: '1Q21',
    name: '1Q21',
  },
  {
    header: '2Q21',
    name: '2Q21',
  },
  {
    header: '3Q21',
    name: '3Q21',
  },
  {
    header: '4Q21',
    name: '4Q21',
  },
];

const FinancialStatementsGrid = ({ data }) => (
  <ToastGrid
    data={data}
    columns={columns}
    header={header}
    rowHeight={25}
    bodyHeight={'auto'}
    heightResizable={true}
    rowHeaders={['rowNum']}
    scrollX={true}
    scrollY={true}
  />
);

export default FinancialStatementsGrid;
