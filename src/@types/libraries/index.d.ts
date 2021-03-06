/* eslint-disable no-unused-vars */
export interface IValidation {
  fieldName: string;
  rules: ((v: string, v2?: string) => any)[];
  comparisonValue?: string;
}

export interface IValidations {
  [key: string]: IValidation;
}

export interface IForm {
  validations: IValidations;
  values: object;
  returnAllError?: boolean;
}

export interface IField {
  validation: IValidation;
  value: string | number;
  returnAllError?: boolean;
  ignoreWhitespace?: boolean;
}

export interface IValidate {
  validation: IValidation;
  value: string | number;
  returnAllError: boolean;
  key?: string;
}

export interface IError {
  fieldName: string;
  reason: string;
  key?: string;
}

export interface IValidationResult {
  isError: boolean;
  errors: IError[];
}
