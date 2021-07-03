import React, { useEffect } from 'react';
import { Grid } from '~/components/Grid';
import testData from '~/data.json';
import { IStockListData } from '@t/data';
import * as S from './styled';
import { TOAST_GRID, URL, COLUMN_NAMES } from '~/constant';
import { PROJECT_NAME } from '~/constant';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '~/store';
import { stockQuotesGetRequest } from '~/store/stock/stockQuoteStore';
import { IResponseStockQuote } from '~/@types/response';

const ConvertNumberSeparator = (string) => string.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');

const columns = [
  { name: COLUMN_NAMES.MARKET_KIND, header: '시장구분', filter: 'select', valign: 'middle', width: 100, align: 'left' },
  {
    name: COLUMN_NAMES.CORPERATE_NAME,
    header: '회사명',
    valign: 'middle',
    width: 150,
    align: 'left',
  },
  {
    name: COLUMN_NAMES.TODAY_CLOSE_PRICE,
    header: '종가',
    valign: 'middle',
    sortable: true,
    width: 90,
    align: 'right',
    formatter: ({ value }) => ConvertNumberSeparator(value),
  },
  {
    name: COLUMN_NAMES.CHANGE_PRICE,
    header: '전일비',
    valign: 'middle',
    sortable: true,
    width: 90,
    align: 'right',
    formatter: ({ value }) => ConvertNumberSeparator(value),
  },
  {
    name: COLUMN_NAMES.CHANGE_PERCENT,
    header: '등락률',
    valign: 'middle',
    sortable: true,
    width: 80,
    align: 'right',
    formatter: ({ value }) => `${ConvertNumberSeparator(value)}%`,
  },
  {
    name: COLUMN_NAMES.CHANGE_PERCENT_WEEK,
    header: '주간등락률',
    valign: 'middle',
    sortable: true,
    width: 90,
    defaultValue: 0,
    align: 'right',
    formatter: ({ value }) => `${ConvertNumberSeparator(value)}%`,
  },
  {
    name: COLUMN_NAMES.CHANGE_PERCENT_MONTH,
    header: '월간등락률',
    valign: 'middle',
    sortable: true,
    width: 90,
    defaultValue: 0,
    align: 'right',
    formatter: ({ value }) => `${ConvertNumberSeparator(value)}%`,
  },
  {
    name: COLUMN_NAMES.TODAY_OPEN_PRICE,
    header: '시초가',
    valign: 'middle',
    width: 80,
    align: 'right',
    formatter: ({ value }) => ConvertNumberSeparator(value),
  },
  {
    name: COLUMN_NAMES.TODAY_HIGH_PRICE,
    header: '고가',
    valign: 'middle',
    width: 80,
    align: 'right',
    formatter: ({ value }) => ConvertNumberSeparator(value),
  },
  {
    name: COLUMN_NAMES.TODAY_LOW_PRICE,
    header: '저가',
    valign: 'middle',
    width: 80,
    align: 'right',
    formatter: ({ value }) => ConvertNumberSeparator(value),
  },
  {
    name: COLUMN_NAMES.VOLUME,
    header: '거래량',
    valign: 'middle',
    sortable: true,
    width: 100,
    align: 'right',
    formatter: ({ value }) => ConvertNumberSeparator(value),
  },
  {
    name: COLUMN_NAMES.SHARES_OUTSTANDING,
    header: '발행주식수',
    valign: 'middle',
    width: 120,
    align: 'right',
    formatter: ({ value }) => ConvertNumberSeparator(value),
  },
  {
    name: COLUMN_NAMES.MARKET_CAPITALIZATION,
    header: '시가총액',
    valign: 'middle',
    sortable: true,
    sortingType: 'desc',
    width: 160,
    align: 'right',
    formatter: ({ value }) => ConvertNumberSeparator(value),
  },
  { name: COLUMN_NAMES.NAVER_LINK, header: '네이버주식', align: 'center' },
];

// const sampleData = testData.data.slice(50);

const stockListData = (responseData: IResponseStockQuote[]) => {
  return responseData.map((data) => {
    const corpStockData: IStockListData = {
      stockCode: data.corpCode,
      corpName: data.corpName,
      marketKind: data.marketKind,
      department: data.department,
      todayClosePrice: data.todayClosePrice,
      changePrice: data.changePrice,
      changePercent: data.changePercent,
      todayOpenPrice: data.todayOpenPrice,
      todayHighPrice: data.todayHighPrice,
      todayLowPrice: data.todayLowPrice,
      volume: data.volume,
      tradeTotalPrice: data.tradeTotalPrice,
      sharesOutstanding: data.sharesOutstanding,
      marketCapitalization: data.marketCapitalization,
      naverLink: '바로가기',
      MarketKindId: data.marketKindId,
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

    if (corpStockData.changePrice < 0) {
      pushClassName = TOAST_GRID.TOAST_GRID_STOCK_DOWN;
    } else if (0 < corpStockData.changePrice) {
      pushClassName = TOAST_GRID.TOAST_GRID_STOCK_UP;
    }

    corpStockData._attributes.className.column.changePrice.push(pushClassName);
    corpStockData._attributes.className.column.changePercent.push(pushClassName);
    return corpStockData;
  });
};

const onClickCell = (responseData: IResponseStockQuote[]) => (event) => {
  const { columnName, rowKey } = event;
  console.log(columnName, rowKey);
  switch (columnName) {
    case COLUMN_NAMES.NAVER_LINK:
      window.open(`${URL.NAVER_FINANCE}/item/main.nhn?code=${responseData[rowKey].corpCode}`, '_blank');
      break;
    case COLUMN_NAMES.CORPERATE_NAME:
      window.open(`/corp/${responseData[rowKey].corpCode}`, '_blank');
      break;
  }
};

const StockList: React.FC = () => {
  document.title = `국내주식목록:${PROJECT_NAME}`;
  const { response } = useSelector((root: RootState) => root.stockQuotes);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(stockQuotesGetRequest());
  }, []);

  return (
    <S.Wrap>
      <S.Container>
        <div>
          <S.AdditionalFeatures>
            <S.Calander>달력</S.Calander>
          </S.AdditionalFeatures>
          <Grid
            data={response && response.data && stockListData(response.data.slice(0, 50))}
            columns={columns}
            onClick={response && response.data && onClickCell(response.data.slice(0, 50))}
          />
        </div>
      </S.Container>
    </S.Wrap>
  );
};

export default StockList;
