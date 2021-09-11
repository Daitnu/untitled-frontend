import { SHILLION, BILLION } from '~/constants';

export const NumberToSeparatorString = (string) => string.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');

export const StringToKoreanWon = (string) => {
  let number = Number(string);
  const billionWon = Math.floor(number / BILLION);
  number = number % BILLION;
  const shillionWon = Math.round(number / SHILLION);
  return billionWon === 0 ? `${shillionWon}억` : `${billionWon}조 ${shillionWon}억`;
};
