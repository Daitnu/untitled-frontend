import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { IStockListData } from '@t/data';
import { IResponseDailyStockPrices } from '@t/response';
import { Grid } from '~/components/Grid';
import { TOAST_GRID, URL, STOCK_LIST_GRID_COLUMN_NAMES } from '~/constant';
import { PROJECT_NAME } from '~/constant';
import { RootState } from '~/store';
import { dailyStockPricesGetRequest } from '~/store/stock/dailyStockPricesStore';
import * as S from './styled';

const BILLION = 1000000000000;
const SHILLION = 100000000;
const convertNumberSeparator = (string) => string.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
const convertStringToKoreanWon = (string) => {
  let number = Number(string);
  const billionWon = Math.floor(number / BILLION);
  number = number % BILLION;
  const shillionWon = Math.round(number / SHILLION);
  return billionWon === 0 ? `${shillionWon}억` : `${billionWon}조 ${shillionWon}억`;
};

/**
 * headers = [시장구분회사명/종가/전일비/등락률/1W등락률/1M등락률/3M등락률
 *            /당기순이익21/당기순이익22/당기순이익23
 *            /per21/per22/per23/성장률/시초가/고가/저가/거래량/발행주식수
 *            /시가총액/네이버주식바로가기]
 */
const gridColumns = [
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
    valign: 'middle',
    width: 150,
    align: 'left',
  },
  {
    name: STOCK_LIST_GRID_COLUMN_NAMES.TODAY_CLOSE_PRICE,
    header: '종가',
    valign: 'middle',
    sortable: true,
    width: 90,
    align: 'right',
    formatter: ({ value }) => convertNumberSeparator(value),
  },
  {
    name: STOCK_LIST_GRID_COLUMN_NAMES.CHANGE_PRICE,
    header: '전일비',
    valign: 'middle',
    sortable: true,
    width: 90,
    align: 'right',
    formatter: ({ value }) => convertNumberSeparator(value),
  },
  {
    name: STOCK_LIST_GRID_COLUMN_NAMES.CHANGE_PERCENT,
    header: '1D등락률',
    valign: 'middle',
    sortable: true,
    width: 80,
    align: 'right',
    formatter: ({ value }) => `${convertNumberSeparator(value)}%`,
  },
  {
    name: STOCK_LIST_GRID_COLUMN_NAMES.CHANGE_PERCENT_FOR_A_WEEK,
    header: '1W등락률',
    valign: 'middle',
    sortable: true,
    width: 80,
    defaultValue: 0,
    align: 'right',
    formatter: ({ value }) => `${convertNumberSeparator(value)}%`,
  },
  {
    name: STOCK_LIST_GRID_COLUMN_NAMES.CHANGE_PERCENT_FOR_A_MONTH,
    header: '1M등락률',
    valign: 'middle',
    sortable: true,
    width: 80,
    defaultValue: 0,
    align: 'right',
    formatter: ({ value }) => `${convertNumberSeparator(value)}%`,
  },
  {
    name: STOCK_LIST_GRID_COLUMN_NAMES.CHANGE_PERCENT_FOR_THREE_MONTH,
    header: '3M등락률',
    valign: 'middle',
    sortable: true,
    width: 80,
    defaultValue: 0,
    align: 'right',
    formatter: ({ value }) => `${convertNumberSeparator(value)}%`,
  },
  {
    name: STOCK_LIST_GRID_COLUMN_NAMES.PROFIT21,
    header: '순이익21',
    valign: 'middle',
    sortable: true,
    width: 80,
    defaultValue: 0,
    align: 'right',
    formatter: ({ value }) => `${value}억`,
  },
  {
    name: STOCK_LIST_GRID_COLUMN_NAMES.PROFIT22,
    header: '순이익22',
    valign: 'middle',
    sortable: true,
    width: 80,
    defaultValue: 0,
    align: 'right',
    formatter: ({ value }) => `${value}억`,
  },
  {
    name: STOCK_LIST_GRID_COLUMN_NAMES.PROFIT23,
    header: '순이익23',
    valign: 'middle',
    sortable: true,
    width: 80,
    defaultValue: 0,
    align: 'right',
    formatter: ({ value }) => `${value}억`,
  },
  {
    name: STOCK_LIST_GRID_COLUMN_NAMES.PER21,
    header: 'PER21',
    valign: 'middle',
    sortable: true,
    width: 80,
    defaultValue: 0,
    align: 'right',
    formatter: ({ value }) => Number(value).toFixed(2),
  },
  {
    name: STOCK_LIST_GRID_COLUMN_NAMES.PER22,
    header: 'PER22',
    valign: 'middle',
    sortable: true,
    width: 80,
    defaultValue: 0,
    align: 'right',
    formatter: ({ value }) => Number(value).toFixed(2),
  },
  {
    name: STOCK_LIST_GRID_COLUMN_NAMES.PER23,
    header: 'PER23',
    valign: 'middle',
    sortable: true,
    width: 80,
    defaultValue: 0,
    align: 'right',
    formatter: ({ value }) => Number(value).toFixed(2),
  },
  {
    name: STOCK_LIST_GRID_COLUMN_NAMES.RATE_OF_GROWTH,
    header: '성장률',
    valign: 'middle',
    sortable: true,
    width: 80,
    defaultValue: 0,
    align: 'right',
    formatter: ({ value }) => `${Math.round(value)}%`,
  },
  {
    name: STOCK_LIST_GRID_COLUMN_NAMES.TODAY_OPEN_PRICE,
    header: '시초가',
    valign: 'middle',
    width: 80,
    align: 'right',
    formatter: ({ value }) => convertNumberSeparator(value),
  },
  {
    name: STOCK_LIST_GRID_COLUMN_NAMES.TODAY_HIGH_PRICE,
    header: '고가',
    valign: 'middle',
    width: 80,
    align: 'right',
    formatter: ({ value }) => convertNumberSeparator(value),
  },
  {
    name: STOCK_LIST_GRID_COLUMN_NAMES.TODAY_LOW_PRICE,
    header: '저가',
    valign: 'middle',
    width: 80,
    align: 'right',
    formatter: ({ value }) => convertNumberSeparator(value),
  },
  {
    name: STOCK_LIST_GRID_COLUMN_NAMES.VOLUME,
    header: '거래량',
    valign: 'middle',
    sortable: true,
    width: 100,
    align: 'right',
    formatter: ({ value }) => convertNumberSeparator(value),
  },
  {
    name: STOCK_LIST_GRID_COLUMN_NAMES.SHARES_OUTSTANDING,
    header: '발행주식수',
    valign: 'middle',
    width: 120,
    align: 'right',
    formatter: ({ value }) => convertNumberSeparator(value),
  },
  {
    name: STOCK_LIST_GRID_COLUMN_NAMES.MARKET_CAPITALIZATION,
    header: '시가총액',
    valign: 'middle',
    sortable: true,
    sortingType: 'desc',
    width: 110,
    align: 'right',
    formatter: ({ value }) => convertStringToKoreanWon(value),
  },
  { name: STOCK_LIST_GRID_COLUMN_NAMES.NAVER_LINK, header: '네이버주식', align: 'center' },
];

const converToStockListData = (responseData: IResponseDailyStockPrices) => {
  return responseData.map((data) => {
    const per21 = data.year21 ? data.marketCapitalization / (data.year21 * SHILLION) : 0;
    const per22 = data.year22 ? data.marketCapitalization / (data.year22 * SHILLION) : 0;
    const per23 = data.year23 ? data.marketCapitalization / (data.year23 * SHILLION) : 0;
    const rateOfGrowth = per21 !== 0 && per23 !== 0 ? (per23 - per21) / per21 : 0;
    const stockListData: IStockListData = {
      ...data,
      profit21: data.year21,
      profit22: data.year22,
      profit23: data.year23,
      per21,
      per22,
      per23,
      rateOfGrowth,
      naverLink: '바로가기',
      // corpCode: data.corpCode,
      // corpName: data.corpName,
      // marketKind: data.marketKind,
      // department: data.department,
      // todayClosePrice: data.todayClosePrice,
      // changePrice: data.changePrice,
      // changePercent: data.changePercent,
      // todayOpenPrice: data.todayOpenPrice,
      // todayHighPrice: data.todayHighPrice,
      // todayLowPrice: data.todayLowPrice,
      // volume: data.volume,
      // tradeTotalPrice: data.tradeTotalPrice,
      // sharesOutstanding: data.sharesOutstanding,
      // marketCapitalization: data.marketCapitalization,
      // marketKindId: data.marketKindId,
      // changePercentForAWeek: data.changePercentForAWeek,
      // changePercentForAMonth: data.changePercentForAMonth,
      // changePercentForThreeMonth: data.changePercentForThreeMonth,
      _attributes: {
        className: {
          column: {
            changePrice: [],
            changePercent: [],
            corpName: ['tui-grid-stock-link'],
            naverLink: ['tui-grid-stock-link'],
          },
        },
      },
    };

    let pushClassName = '';
    if (stockListData.changePrice < 0) {
      pushClassName = TOAST_GRID.TOAST_GRID_STOCK_DOWN;
    } else if (0 < stockListData.changePrice) {
      pushClassName = TOAST_GRID.TOAST_GRID_STOCK_UP;
    }

    stockListData._attributes.className.column.changePrice.push(pushClassName);
    stockListData._attributes.className.column.changePercent.push(pushClassName);
    return stockListData;
  });
};

const onClickGridCell = (responseData: IResponseDailyStockPrices) => (event) => {
  const { columnName, rowKey } = event;
  console.log(columnName, rowKey);
  switch (columnName) {
    case STOCK_LIST_GRID_COLUMN_NAMES.NAVER_LINK:
      window.open(`${URL.NAVER_FINANCE}/item/main.nhn?code=${responseData[rowKey].corpCode}`, '_blank');
      break;
    case STOCK_LIST_GRID_COLUMN_NAMES.CORPERATE_NAME:
      window.open(`/corp/${responseData[rowKey].corpCode}`, '_blank');
      break;
  }
};

const StockList: React.FC = () => {
  document.title = `국내주식목록:${PROJECT_NAME}`;
  const { response } = useSelector((root: RootState) => root.dailyStockPrices);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(dailyStockPricesGetRequest());
  }, []);

  return (
    <S.Wrap>
      <S.Container>
        <>
          <Grid
            data={response && response.data && converToStockListData(response.data)}
            columns={gridColumns}
            onClick={onClickGridCell}
          />
        </>
      </S.Container>
    </S.Wrap>
  );
};

export default StockList;
