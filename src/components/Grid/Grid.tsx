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

const onEditingFinishedHandle = (event, data) => {
  const { columnName, rowKey, value } = event;
  const currentValue = data[rowKey][columnName];
  const inputValue = value;

  console.log(data[rowKey]);
  data[event.rowKey][columnName] = inputValue;

  if (currentValue != inputValue) {
    // TODO: API로직작성
    console.log('값이다름');
    return;
  }

  console.log('값이 같음');
};

const Grid = ({ data, columns, onClick }) => {
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
      onEditingFinish={(event) => onEditingFinishedHandle(event, data)}
      onSort={(event) => console.log('onsort event', event)}
    />
  );
};

export default Grid;
