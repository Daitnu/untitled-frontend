export const form = ({ validations, values }) => {
  return 0;
};

export const blur = ({ validation, value, returnAllError = false, ignoreWhitespace = true }) => {
  if (!value || typeof value !== 'string') return;
  if (typeof value === '') return;
  if (ignoreWhitespace) {
    value = value.trim();
  }
  if (typeof value === '') return;

  return validate({ validation, value, returnAllError });
};

const validate = ({ validation, value, returnAllError }) => {
  const allError = [];
  const { fieldName, rules } = validation;

  for (const rule of rules) {
    const result = rule(value);
    if (result !== true) {
      const error = getErrorByRuleResult(fieldName, result);
      if (returnAllError === false) {
        return {
          isError: true,
          errors: [error],
        };
      }
      allError.errors.push(error);
    }
  }

  return {
    isError: allError.length > 0,
    erros: allError,
  };
};

const getErrorByRuleResult = (fieldName, result) => {
  return {
    fieldName,
    reason: result,
  };
};
