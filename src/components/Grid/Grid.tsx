import React from 'react';
import ToastGrid from '@toast-ui/react-grid';
import 'tui-grid/dist/tui-grid.css';

const Grid = ({ data, columns }) => (
  <ToastGrid
    data={data}
    columns={columns}
    rowHeight={25}
    bodyHeight={100}
    heightResizable={true}
    rowHeaders={['rowNum']}
    scrollX={true}
    scrollY={true}
  />
);

export default Grid;
