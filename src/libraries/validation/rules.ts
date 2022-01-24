import equals from 'validator/es/lib/equals';
import isInt from 'validator/es/lib/isInt';
import isEmail from 'validator/es/lib/isEmail';
import isLength from 'validator/es/lib/isLength';
import isAlphanumeric from 'validator/es/lib/isAlphanumeric';
import isEmpty from 'validator/es/lib/isEmpty';

import i18n from 'i18next';

export const number = (value: string) =>
  isInt(value) || i18n.t('RULE.REQUIRED_NUMBER', { defaultValue: '숫자만 입력가능합니다.' });

export const required = (value: string) =>
  (!!value && !isEmpty(value, { ignore_whitespace: true })) ||
  (i18n.t('RULE.REQUIRED', { defaultValue: '필수입력값 입니다.' }) as string);

export const email = (value: string) =>
  isEmail(value) || (i18n.t('RULE.EMAIL', { defaultValue: '이메일형식이 아닙니다.' }) as string);

export const length = (min: number, max: number) => (value: string) =>
  isLength(value, { min, max }) ||
  (i18n.t('RULE.LENGTH_MIN_MAX', {
    defaultValue: `최소길이 {{min}}, 최고길이 {{max}}만 입력가능합니다.`,
    min,
    max,
  }) as string);

export const lengthMin = (min: number) => (value: string) =>
  isLength(value, { min }) || (i18n.t('RULE.LENGTH_MIN', { defaultValue: `최소길이는 {{min}}입니다.`, min }) as string);

export const lengthMax = (max: number) => (value: string) =>
  isLength(value, { max }) || (i18n.t('RULE.LENGTH_MAX', { defaultValue: `최대길이는 {{max}}입니다.`, max }) as string);

export const alphanumeric = (value: string) =>
  isAlphanumeric(value) ||
  (i18n.t('RULE.ALLOW_ALPAH_NUMBER', { defaultValue: '영어와 숫자만 입력가능합니다.' }) as string);

export const equalsTwoField = (comparisonFieldName: string) => {
  return function compareTwoField(str, comparison) {
    return (
      equals(str, comparison) ||
      (i18n.t(`RULE.NOT_EQUALS_TWO_FIELD`, {
        defaultValue: '{{comparisonFieldName}}와 값이 다릅니다.',
        comparisonFieldName,
      }) as string)
    );
  };
};
