import { IField, IError, IForm, IValidate, IValidation, IValidationResult } from '@t/libraries';
import Utils from '@lib/utils';

const RETURN_INIT_VALUE: IValidationResult = {
  isError: false,
  errors: [],
};

export const form = ({ validations, values, returnAllError = false }: IForm) => {
  const allError: IError[] = [];

  for (const [key, value] of Object.entries(validations)) {
    const fieldValue = values[key];
    const validationResult = validate({
      validation: value,
      value: fieldValue,
      returnAllError,
      key,
    });

    if (validationResult.isError) {
      allError.push(...validationResult.errors);
      if (!returnAllError) break;
    }
  }
  return {
    isError: allError.length > 0,
    errors: allError,
  };
};

export const field = ({
  validation,
  value,
  returnAllError = false,
  ignoreWhitespace = true,
}: IField): IValidationResult => {
  if (!value) return Utils.deepCopy(RETURN_INIT_VALUE);
  if (ignoreWhitespace && typeof value === 'string') {
    value = value.trim();
  }
  if (value === '') return Utils.deepCopy(RETURN_INIT_VALUE);

  const validationResult = validate({ validation, value, returnAllError });

  for (const error of validationResult.errors) {
    delete error.key;
  }

  return validationResult;
};

const validate = ({ validation, value, returnAllError, key }: IValidate): IValidationResult => {
  const allError: IError[] = [];
  const { fieldName, rules }: IValidation = validation;
  const { comparisonValue } = validation;

  if (typeof value === 'number') {
    value = Number.isNaN(value) ? '' : String(value);
  }

  for (const rule of rules) {
    const result = rule(value, comparisonValue);
    if (result !== true) {
      const error = { fieldName, reason: result, key };
      allError.push(error);
      if (!returnAllError) break;
    }
  }

  return {
    isError: allError.length > 0,
    errors: allError,
  };
};
