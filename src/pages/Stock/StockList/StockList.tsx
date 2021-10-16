import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import 'tui-grid/dist/tui-grid.css';
import TuiGrid from 'tui-grid';
import { IDailyStockPrice, IResponseDailyStockPrices, IStockListData } from '~/@types/data';
import { TOAST_GRID, URL, STOCK_LIST_GRID_COLUMN_NAMES, SHILLION, PROJECT_NAME } from '~/constants';
import { Grid } from '~/components/Grid';
import { RootState } from '~/store';
import { dailyStockPricesGetRequest } from '~/store/stock/dailyStockPricesStore';
import { StockListSearch } from '~/components/StockListSearch';
import * as S from './styled';
import { SimplePageTemplate } from '~/templates/SimplePageTemplate';
import { gridColumns } from './columnOptions';
import { Col, Row } from 'antd';

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
  const { columnName, rowKey } = event;

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
  const { loading, response, errors: dailyStockpricesResponseError } = useSelector(
    (root: RootState) => root.dailyStockPrices,
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(dailyStockPricesGetRequest());
  }, []);

  let content: JSX.Element | string = '';
  if (response && response.data) {
    const { data } = response;
    const gridDatas = converToStockListData(data);
    content = (
      <>
        <S.Section>
          <Row>
            <Col span={12}>
              <StockListSearch gridDatas={gridDatas}></StockListSearch>
            </Col>
            <Col span={12}>
              <StockListSearch gridDatas={gridDatas}></StockListSearch>
            </Col>
          </Row>
        </S.Section>
        <S.Section>
          <S.ContainerWide>
            <Grid data={gridDatas} columns={gridColumns} onClick={onClickGridCell(gridDatas)} />
          </S.ContainerWide>
        </S.Section>
      </>
    );
  }

  return (
    <SimplePageTemplate isLoading={loading} errors={dailyStockpricesResponseError}>
      <S.Wrap>{content}</S.Wrap>
    </SimplePageTemplate>
  );
};

export default StockList;
