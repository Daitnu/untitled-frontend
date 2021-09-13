import React, { useRef } from 'react';
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
  cell: {
    focused: {
      border: '0',
    },
  },
});

const Grid = ({ data, columns, onClick }) => {
  const gridRef = useRef(null);

  return (
    <ToastGrid
      data={data}
      columns={columns}
      rowHeight={25}
      bodyHeight={900}
      width={'auto'}
      rowHeaders={[
        {
          type: 'rowNum',
          width: 60,
        },
      ]}
      scrollX={true}
      scrollY={true}
      columnOptions={{
        resizable: true,
      }}
      showDummyRows={true}
      onClick={onClick}
      ref={gridRef}
    />
  );
};

export default Grid;
