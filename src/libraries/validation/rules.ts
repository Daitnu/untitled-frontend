import validator from 'validator';

export const number = (value) => validator.isInt(value) || '숫자만 입력가능합니다.';

export const required = (value) => !validator.isEmpty(value, { ignore_whitespace: true }) || '필수입력값 입니다.';
