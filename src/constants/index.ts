export * from './url';
export * from './color';

export const TOAST_GRID = {
  TOAST_GRID_STOCK_DOWN: 'tui-grid-stock-down',
  TOAST_GRID_STOCK_UP: 'tui-grid-stock-up',
};

export const STOCK_LIST_GRID_COLUMN_NAMES = {
  MARKET_KIND: 'marketKind', // KOSPI, KOSDAK
  CORPERATE_NAME: 'corpName', // 회사명
  TODAY_CLOSE_PRICE: 'todayClosePrice', // 종가
  CHANGE_PRICE: 'changePrice', // 전일대비 변경금액(전일비)
  CHANGE_PERCENT: 'changePercent', // 전일대비 변경금액 퍼센트(등락률)
  CHANGE_PERCENT_WEEK: 'changePercentWeek', // 일주간 변동퍼센트
  CHANGE_PERCENT_MONTH: 'changePercentMonth', // 한달간 변동퍼센트
  TODAY_OPEN_PRICE: 'todayOpenPrice', // 금일 시초가
  TODAY_HIGH_PRICE: 'todayHighPrice', // 금일 최고가
  TODAY_LOW_PRICE: 'todayLowPrice', // 금일 최저가
  VOLUME: 'volume', // 거래량
  SHARES_OUTSTANDING: 'sharesOutstanding', // 발행주식수
  MARKET_CAPITALIZATION: 'marketCapitalization', // 시가총액
  NAVER_LINK: 'naverLink', // 네이버바로가기
  CHANGE_PERCENT_FOR_A_WEEK: 'changePercentForAWeek',
  CHANGE_PERCENT_FOR_A_MONTH: 'changePercentForAMonth',
  CHANGE_PERCENT_FOR_THREE_MONTH: 'changePercentForThreeMonth',
  RATE_OF_GROWTH: 'rateOfGrowth',
  PROFIT21: 'profit21',
  PROFIT22: 'profit22',
  PROFIT23: 'profit23',
  PER21: 'per21',
  PER22: 'per22',
  PER23: 'per23',
};

export const PROJECT_NAME = 'Untitled Project';

export const BILLION = 1000000000000;
export const SHILLION = 100000000;

export const BREAK_POINT_MOBILE = '768px';

export const KEY_CODE = {
  ENTER: 13,
};
