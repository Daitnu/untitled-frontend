import React from 'react';
import ToastGrid from '@toast-ui/react-grid';
import 'tui-grid/dist/tui-grid.css';
import TuiGrid from 'tui-grid';

TuiGrid.applyTheme('clean');
TuiGrid.setLanguage('ko');

const Grid = ({ data, columns }) => (
  <ToastGrid
    data={data}
    columns={columns}
    rowHeight={25}
    bodyHeight={'auto'}
    width={'auto'}
    rowHeaders={['rowNum', 'checkbox']}
    scrollX={true}
    scrollY={true}
    columnOptions={{
      resizable: true,
    }}
  />
);

export default Grid;
