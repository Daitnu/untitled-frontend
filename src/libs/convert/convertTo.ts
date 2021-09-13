import { SHILLION, BILLION } from '~/constants';

export const getSeparatorStringFromFormatterValue = (value) => {
  const number = formatterValueToNumber(value);
  return NumberToSeparatorString(number);
};

export const getKoreanWonFromFormatterValue = (value, multiple = 1) => {
  const number = formatterValueToNumber(value) * multiple;
  return StringToKoreanWon(number);
};

export const formatterValueToString = (value): string => {
  let returnValue = value;

  if (returnValue === null || returnValue === undefined) {
    returnValue = '';
  }

  return returnValue.toString();
};

export const formatterValueToNumber = (value): number => {
  let returnValue = value;

  if (returnValue === null || returnValue === undefined) {
    returnValue = 0;
  }

  return Number(value);
};

export const NumberToSeparatorString = (value: number | string) =>
  value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');

export const StringToKoreanWon = (value: number | string): string => {
  let number = Number(value);
  let isNegative = false;

  if (number < 0) isNegative = true;
  number = Math.abs(number);

  const billionWon = Math.floor(number / BILLION);
  number = number % BILLION;
  const shillionWon = Math.round(number / SHILLION);

  const returnStringValue = billionWon === 0 ? `${shillionWon}억` : `${billionWon}조 ${shillionWon}억`;
  return isNegative ? `-${returnStringValue}` : returnStringValue;
};
