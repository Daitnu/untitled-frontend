/* eslint-disable no-unused-vars */
export interface IValidation {
  fieldName: string;
  rules: ((v: string) => true | string)[];
}

export interface IValidations {
  [key: string]: IValidation;
}

export interface IForm {
  validations: IValidations;
  values: object;
  returnAllError?: boolean;
}

export interface IBlur {
  validation: IValidation;
  value: string;
  returnAllError?: boolean;
  ignoreWhitespace?: boolean;
}

export interface IValidate {
  validation: IValidation;
  value: string;
  returnAllError: boolean;
  key?: string;
}

export interface IError {
  fieldName: string;
  reason: string;
  key?: string;
}
