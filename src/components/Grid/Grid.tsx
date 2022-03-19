import React, { useRef } from 'react';
import ToastGrid from '@toast-ui/react-grid';
import 'tui-grid/dist/tui-grid.css';
import TuiGrid from 'tui-grid';
import corperationApi from '~/store/corperation/CorperationApi';

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

const onEditingFinishedHandle = async (event, gridData) => {
  const { columnName, rowKey, value } = event;
  const currentValue = gridData[rowKey][columnName];
  const inputValue = value;
  gridData[event.rowKey][columnName] = inputValue;
  if (currentValue == inputValue) {
    return;
  }
  // TODO: API로직작성
  const data = {
    [columnName]: inputValue,
    stockCode: gridData[event.rowKey].stockCode,
  };

  const response = await corperationApi.updateCoperationProfit({ url: `/${columnName}`, data });
};

const Grid = ({ data, columns, onClick }) => {
  return (
    <ToastGrid
      data={data}
      columns={columns}
      rowHeight={25}
      bodyHeight={800}
      heightResizable
      width={'auto'}
      rowHeaders={[
        'checkbox',
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
      // onSort={(event) =>  }
    />
  );
};

export default Grid;
