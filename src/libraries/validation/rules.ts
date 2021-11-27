import validator from 'validator';

export const number = (value) => validator.isInt(value) || '숫자만 입력가능합니다.';

export const required = (value) => !validator.isEmpty(value, { ignore_whitespace: true }) || '필수입력값 입니다.';

export const email = (value) => validator.isEmail(value) || '이메일형식이 아닙니다.';

export const length = (min, max) => (value) =>
  validator.isLength(value, { min, max }) || `최소길이 ${min}, 최고길이 ${max}만 입력가능합니다.`;

export const lengthMin = (min) => (value) => validator.isLength(value, { min }) || `최소길이는 ${min}입니다.`;

export const lengthMax = (max) => (value) => validator.isLength(value, { max }) || `최대길이 ${max}입니다.`;

export const alphanumeric = (value) => validator.isAlphanumeric(value) || '영어와 숫자만 입력가능합니다.';

export const equalsTwoField = (equlasFieldName) =>
  function compareTwoField(str, comparison) {
    return validator.equals(str, comparison) || `${equlasFieldName}와 값이 다릅니다.`;
  };
