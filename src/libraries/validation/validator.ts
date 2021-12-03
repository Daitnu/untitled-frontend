import { IBlur, IError, IForm, IValidate } from '@t/libraries';

const RETURN_INIT_VALUE = {
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

export const blur = ({ validation, value, returnAllError = false, ignoreWhitespace = true }: IBlur) => {
  if (!value || typeof value !== 'string') return { ...RETURN_INIT_VALUE };
  if (ignoreWhitespace) {
    value = value.trim();
  }
  if (value === '') return { ...RETURN_INIT_VALUE };

  const validationResult = validate({ validation, value, returnAllError });

  for (const error of validationResult.errors) {
    delete error.key;
  }

  return validationResult;
};

const validate = ({ validation, value, returnAllError, key }: IValidate) => {
  const allError: IError[] = [];
  const { fieldName, rules, comparison } = validation;

  if(typeof value) {
    value = Number.isNaN(value) ? '' : String(value)
  }

  for (const rule of rules) {
    const result = rule.name === 'compareTwoField' && comparison ? rule(value, comparison) : rule(value);
    if (result !== true) {
      const error = { fieldName, reason: result, key };
      if (!returnAllError) {
        return {
          isError: true,
          errors: [error],
        };
      }
      allError.push(error);
    }
  }

  return {
    isError: allError.length > 0,
    errors: allError,
  };
};
