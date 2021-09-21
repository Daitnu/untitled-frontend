import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import 'tui-grid/dist/tui-grid.css';
import TuiGrid, { ColumnOptions } from 'tui-grid';
import { IDailyStockPrice, IResponseDailyStockPrices, IStockListData } from '~/@types/data';
import { TOAST_GRID, URL, STOCK_LIST_GRID_COLUMN_NAMES, SHILLION, PROJECT_NAME } from '~/constants';
import { convert } from '~/libraries/convert';
import { Grid } from '~/components/Grid';
import { RootState } from '~/store';
import { dailyStockPricesGetRequest } from '~/store/stock/dailyStockPricesStore';
import * as S from './styled';
import { CustomTextEditor } from './CustomField';

document.title = `국내주식목록 : ${PROJECT_NAME}`;

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

/**
 * headers = [시장구분회사명/종가/전일비/등락률/1W등락률/1M등락률/3M등락률
 *            /당기순이익21/당기순이익22/당기순이익23
 *            /per21/per22/per23/성장률/시초가/고가/저가/거래량/발행주식수
 *            /시가총액/네이버주식바로가기]
 */
const gridColumns: ColumnOptions[] = [
  {
    name: STOCK_LIST_GRID_COLUMN_NAMES.MARKET_KIND,
    header: '시장구분',
    filter: 'select',
    valign: 'middle',
    width: 100,
    align: 'left',
  },
  {
    name: STOCK_LIST_GRID_COLUMN_NAMES.CORPERATE_NAME,
    header: '회사명',
    filter: 'select',
    valign: 'middle',
    align: 'left',
  },
  { name: STOCK_LIST_GRID_COLUMN_NAMES.NAVER_LINK, width: 100, header: '네이버주식', align: 'center' },
  {
    name: STOCK_LIST_GRID_COLUMN_NAMES.TODAY_CLOSE_PRICE,
    header: '종가',
    valign: 'middle',
    sortable: true,
    width: 100,
    align: 'right',
    formatter: ({ value }) => `${convert.getSeparatorStringFromFormatterValue(value)}원`,
  },
  {
    name: STOCK_LIST_GRID_COLUMN_NAMES.CHANGE_PRICE,
    header: '전일비',
    valign: 'middle',
    sortable: true,
    width: 90,
    align: 'right',
    formatter: ({ value }) => `${convert.getSeparatorStringFromFormatterValue(value)}원`,
  },
  {
    name: STOCK_LIST_GRID_COLUMN_NAMES.CHANGE_PERCENT,
    header: '1D등락률',
    valign: 'middle',
    sortable: true,
    width: 80,
    align: 'right',
    formatter: ({ value }) => `${convert.getSeparatorStringFromFormatterValue(value)}%`,
  },
  {
    name: STOCK_LIST_GRID_COLUMN_NAMES.CHANGE_PERCENT_FOR_A_WEEK,
    header: '1W등락률',
    valign: 'middle',
    sortable: true,
    width: 80,
    defaultValue: 0,
    align: 'right',
    formatter: ({ value }) => `${convert.getSeparatorStringFromFormatterValue(value)}%`,
  },
  {
    name: STOCK_LIST_GRID_COLUMN_NAMES.CHANGE_PERCENT_FOR_A_MONTH,
    header: '1M등락률',
    valign: 'middle',
    sortable: true,
    width: 80,
    defaultValue: 0,
    align: 'right',
    formatter: ({ value }) => `${convert.getSeparatorStringFromFormatterValue(value)}%`,
  },
  {
    name: STOCK_LIST_GRID_COLUMN_NAMES.CHANGE_PERCENT_FOR_THREE_MONTH,
    header: '3M등락률',
    valign: 'middle',
    sortable: true,
    width: 80,
    defaultValue: 0,
    align: 'right',
    formatter: ({ value }) => `${convert.getSeparatorStringFromFormatterValue(value)}%`,
  },
  {
    name: STOCK_LIST_GRID_COLUMN_NAMES.PROFIT21,
    header: '순이익21',
    valign: 'middle',
    sortable: true,
    width: 100,
    defaultValue: 0,
    align: 'right',
    editor: {
      type: CustomTextEditor,
      options: {
        maxLength: 7,
      },
    },
    formatter: ({ value }) => convert.getKoreanWonFromFormatterValue(value, SHILLION),
  },
  {
    name: STOCK_LIST_GRID_COLUMN_NAMES.PROFIT22,
    header: '순이익22',
    valign: 'middle',
    sortable: true,
    width: 100,
    defaultValue: 0,
    align: 'right',
    formatter: ({ value }) => convert.getKoreanWonFromFormatterValue(value, SHILLION),
  },
  {
    name: STOCK_LIST_GRID_COLUMN_NAMES.PROFIT23,
    header: '순이익23',
    valign: 'middle',
    sortable: true,
    width: 100,
    defaultValue: 0,
    align: 'right',
    formatter: ({ value }) => convert.getKoreanWonFromFormatterValue(value, SHILLION),
  },
  {
    name: STOCK_LIST_GRID_COLUMN_NAMES.PER21,
    header: 'PER21(배)',
    valign: 'middle',
    sortable: true,
    filter: {
      type: 'number',
      operator: 'OR',
      showApplyBtn: true,
      showClearBtn: true,
    },
    width: 110,
    defaultValue: 0,
    align: 'right',
    formatter: ({ value }) => Number(value).toFixed(2),
  },
  {
    name: STOCK_LIST_GRID_COLUMN_NAMES.PER22,
    header: 'PER22(배)',
    valign: 'middle',
    sortable: true,
    filter: {
      type: 'number',
      operator: 'OR',
      showApplyBtn: true,
      showClearBtn: true,
    },
    width: 110,
    defaultValue: 0,
    align: 'right',
    formatter: ({ value }) => Number(value).toFixed(2),
  },
  {
    name: STOCK_LIST_GRID_COLUMN_NAMES.PER23,
    header: 'PER23(배)',
    valign: 'middle',
    sortable: true,
    filter: {
      type: 'number',
      operator: 'OR',
      showApplyBtn: true,
      showClearBtn: true,
    },
    width: 110,
    defaultValue: 0,
    align: 'right',
    formatter: ({ value }) => Number(value).toFixed(2),
  },
  {
    name: STOCK_LIST_GRID_COLUMN_NAMES.RATE_OF_GROWTH,
    header: '성장률(%)',
    valign: 'middle',
    sortable: true,
    filter: {
      type: 'number',
      operator: 'OR',
      showApplyBtn: true,
      showClearBtn: true,
    },
    width: 110,
    defaultValue: 0,
    align: 'right',
    formatter: ({ value }) => Math.round(Number(value)).toFixed(0),
  },
  {
    name: STOCK_LIST_GRID_COLUMN_NAMES.TODAY_OPEN_PRICE,
    header: '시초가',
    valign: 'middle',
    width: 100,
    align: 'right',
    formatter: ({ value }) => `${convert.getSeparatorStringFromFormatterValue(value)}원`,
  },
  {
    name: STOCK_LIST_GRID_COLUMN_NAMES.TODAY_HIGH_PRICE,
    header: '고가',
    valign: 'middle',
    width: 100,
    align: 'right',
    formatter: ({ value }) => `${convert.getSeparatorStringFromFormatterValue(value)}원`,
  },
  {
    name: STOCK_LIST_GRID_COLUMN_NAMES.TODAY_LOW_PRICE,
    header: '저가',
    valign: 'middle',
    width: 100,
    align: 'right',
    formatter: ({ value }) => `${convert.getSeparatorStringFromFormatterValue(value)}원`,
  },
  {
    name: STOCK_LIST_GRID_COLUMN_NAMES.VOLUME,
    header: '거래량',
    valign: 'middle',
    sortable: true,
    width: 100,
    align: 'right',
    formatter: ({ value }) => convert.getSeparatorStringFromFormatterValue(value),
  },
  {
    name: STOCK_LIST_GRID_COLUMN_NAMES.SHARES_OUTSTANDING,
    header: '발행주식수',
    valign: 'middle',
    width: 120,
    align: 'right',
    formatter: ({ value }) => convert.getSeparatorStringFromFormatterValue(value),
  },
  {
    name: STOCK_LIST_GRID_COLUMN_NAMES.MARKET_CAPITALIZATION,
    header: '시가총액',
    valign: 'middle',
    sortable: true,
    sortingType: 'desc',
    width: 110,
    align: 'right',
    formatter: ({ value }) => convert.getKoreanWonFromFormatterValue(value),
  },
];

const converToStockListData = (responseData: IResponseDailyStockPrices) => {
  return responseData.map((data: IDailyStockPrice) => {
    const per21 = data.profit21 ? data.marketCapitalization / (data.profit21 * SHILLION) : 0;
    const per22 = data.profit22 ? data.marketCapitalization / (data.profit22 * SHILLION) : 0;
    const per23 = data.profit23 ? data.marketCapitalization / (data.profit23 * SHILLION) : 0;
    const rateOfGrowth =
      per21 !== 0 && per23 !== 0 ? ((data.profit23 - data.profit21) * 100) / Math.abs(data.profit21) : 0;
    const stockListData: IStockListData = {
      ...data,
      per21,
      per22,
      per23,
      rateOfGrowth,
      naverLink: '바로가기',
      _attributes: {
        className: {
          column: {
            changePrice: [],
            changePercent: [],
            changePercentForAWeek: [],
            changePercentForAMonth: [],
            changePercentForThreeMonth: [],
            corpName: ['tui-grid-stock-link'],
            naverLink: ['tui-grid-stock-link'],
          },
        },
      },
    };

    const changePricePushClassName = getClassNameByChangePriceOrPercent(stockListData.changePrice);
    const changePercent1WPushClassName = getClassNameByChangePriceOrPercent(stockListData.changePercentForAWeek);
    const changePercent1MPushClassName = getClassNameByChangePriceOrPercent(stockListData.changePercentForAMonth);
    const changePercent3MPushClassName = getClassNameByChangePriceOrPercent(stockListData.changePercentForThreeMonth);

    stockListData._attributes.className.column.changePrice.push(changePricePushClassName);
    stockListData._attributes.className.column.changePercent.push(changePricePushClassName);
    stockListData._attributes.className.column.changePercentForAWeek.push(changePercent1WPushClassName);
    stockListData._attributes.className.column.changePercentForAMonth.push(changePercent1MPushClassName);
    stockListData._attributes.className.column.changePercentForThreeMonth.push(changePercent3MPushClassName);

    return stockListData;
  });
};

const getClassNameByChangePriceOrPercent = (priceOrPercent: number) => {
  let returnClassNmae = '';
  if (priceOrPercent < 0) {
    returnClassNmae = TOAST_GRID.TOAST_GRID_STOCK_DOWN;
  } else if (0 < priceOrPercent) {
    returnClassNmae = TOAST_GRID.TOAST_GRID_STOCK_UP;
  }
  return returnClassNmae;
};

const onClickGridCell = (responseData: IResponseDailyStockPrices) => (event) => {
  console.log('onclick grid cell', event);
  const { columnName, rowKey } = event;
  console.log(columnName, rowKey);
  switch (columnName) {
    case STOCK_LIST_GRID_COLUMN_NAMES.NAVER_LINK:
      window.open(`${URL.NAVER_FINANCE}/item/coinfo.nhn?code=${responseData[rowKey].stockCode}`, '_blank');
      break;
    case STOCK_LIST_GRID_COLUMN_NAMES.CORPERATE_NAME:
      window.open(`/corp/${responseData[rowKey].stockCode}`, '_blank');
      break;
  }
};

const StockList: React.FC = () => {
  const { response, error: dailyStockpricesResponseError } = useSelector((root: RootState) => root.dailyStockPrices);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(dailyStockPricesGetRequest());
  }, []);

  useEffect(() => {
    if (dailyStockpricesResponseError !== null) {
      alert('서버와의 통신에 실패하였습니다.');
    }
  }, [dailyStockpricesResponseError]);

  return (
    <S.Wrap>
      <S.Section>
        <S.ContainerMiddle border="2px solid #6741d9">
          <h1>섹션영역입니다.</h1>
          <button>버어튼</button>
          <button>버어튼</button>
          <button>버어튼</button>
        </S.ContainerMiddle>
      </S.Section>
      <S.Section>
        <S.ContainerWide>
          {response && response.data && (
            <Grid
              data={converToStockListData(response.data)}
              columns={gridColumns}
              onClick={onClickGridCell(converToStockListData(response.data))}
            />
          )}
        </S.ContainerWide>
      </S.Section>
    </S.Wrap>
  );
};

export default StockList;
