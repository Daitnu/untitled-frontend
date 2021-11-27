export interface IValidation {
  fieldName: string;
  rules: ((v: string | number) => true | string)[];
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
