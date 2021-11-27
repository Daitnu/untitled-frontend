import validator from 'validator';

export const number = (value: string): true | string => validator.isInt(value) || '숫자만 입력가능합니다.';

export const required = (value: string): true | string =>
  !validator.isEmpty(value, { ignore_whitespace: true }) || '필수입력값 입니다.';

export const email = (value: string): true | string => validator.isEmail(value) || '이메일형식이 아닙니다.';

export const length = (min: number, max: number) => (value: string): true | string =>
  validator.isLength(value, { min, max }) || `최소길이 ${min}, 최고길이 ${max}만 입력가능합니다.`;

export const lengthMin = (min: number) => (value: string): true | string =>
  validator.isLength(value, { min }) || `최소길이는 ${min}입니다.`;

export const lengthMax = (max: number) => (value: string): true | string =>
  validator.isLength(value, { max }) || `최대길이 ${max}입니다.`;
