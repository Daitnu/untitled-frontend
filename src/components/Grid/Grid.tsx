import React from 'react';
import ToastGrid from '@toast-ui/react-grid';
import 'tui-grid/dist/tui-grid.css';
import TuiGrid from 'tui-grid';

TuiGrid.setLanguage('ko');
TuiGrid.applyTheme('striped', {
  row: {
    hover: {
      background: '#e5dbff',
    },
  },
});

const Grid = ({ data, columns, onClick }) => (
  <ToastGrid
    data={data}
    columns={columns}
    rowHeight={25}
    bodyHeight={'auto'}
    width={'auto'}
    rowHeaders={['rowNum']}
    scrollX={true}
    scrollY={true}
    columnOptions={{
      resizable: true,
    }}
    showDummyRows={true}
    onClick={onClick}
  />
);

export default Grid;
