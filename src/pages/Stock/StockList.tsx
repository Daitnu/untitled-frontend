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

const sampleData = testData.data.slice(50);
const stockListData = sampleData.map((data) => {
  const corpStockData: IStockListData = {
    stockCode: data.ISU_SRT_CD,
    corpName: data.ISU_ABBRV,
    marketKind: data.MKT_NM,
    department: data.SECT_TP_NM,
    todayClosePrice: Number(data.TDD_CLSPRC.replaceAll(',', '')),
    changePrice: Number(data.CMPPREVDD_PRC.replaceAll(',', '')),
    changePercent: Number(data.FLUC_RT.replaceAll(',', '')),
    todayOpenPrice: Number(data.TDD_OPNPRC.replaceAll(',', '')),
    todayHighPrice: Number(data.TDD_HGPRC.replaceAll(',', '')),
    todayLowPrice: Number(data.TDD_LWPRC.replaceAll(',', '')),
    volume: Number(data.ACC_TRDVOL.replaceAll(',', '')),
    tradeTotalPrice: Number(data.ACC_TRDVAL.replaceAll(',', '')),
    sharesOutstanding: Number(data.LIST_SHRS.replaceAll(',', '')),
    marketCapitalization: Number(data.MKTCAP.replaceAll(',', '')),
    naverLink: '바로가기',
    MarketKindId: data.MKT_ID,
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

const onClickCell = (event) => {
  const { columnName, rowKey } = event;
  switch (columnName) {
    case COLUMN_NAMES.NAVER_LINK:
      window.open(`${URL.NAVER_FINANCE}/item/main.nhn?code=${stockListData[rowKey].stockCode}`, '_blank');
      break;
    case COLUMN_NAMES.CORPERATE_NAME:
      window.open(`/corp/${stockListData[rowKey].stockCode}`, '_blank');
      break;
  }
};

const StockList: React.FC = () => {
  document.title = `국내주식목록:${PROJECT_NAME}`;
  const { stockQuotes } = useSelector((root: RootState) => root);
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
          <Grid data={stockListData} columns={columns} onClick={onClickCell}></Grid>
        </div>
      </S.Container>
    </S.Wrap>
  );
};

export default StockList;
