import { IBlur, IError, IForm, IValidate } from '@t/libraries';

export const form = ({ validations, values, returnAllError = false }: IForm) => {
  const allError: IError[] = [];

  for (const [key, value] of Object.entries(validations)) {
    const fieldValue = values[key];
    const validationResult = validate({
      validation: value,
      value: fieldValue,
      returnAllError,
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
  if (!value || typeof value !== 'string') return;
  if (ignoreWhitespace) {
    value = value.trim();
  }
  if (value === '') return;

  return validate({ validation, value, returnAllError });
};

const validate = ({ validation, value, returnAllError }: IValidate) => {
  const allError: IError[] = [];
  const { fieldName, rules } = validation;

  for (const rule of rules) {
    const result = rule(value);
    if (result !== true) {
      const error = { fieldName, reason: result };
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
