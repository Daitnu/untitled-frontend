import React from 'react';
import ToastGrid from '@toast-ui/react-grid';
import 'tui-grid/dist/tui-grid.css';

const Grid = ({ data, columns }) => (
  <ToastGrid
    data={data}
    columns={columns}
    rowHeight={25}
    bodyHeight={'auto'}
    heightResizable={true}
    rowHeaders={['rowNum']}
    scrollX={true}
    scrollY={true}
    columnOptions={{
      frozenCount: 3,
      frozenBorderWidth: 2,
    }}
  />
);

export default Grid;
