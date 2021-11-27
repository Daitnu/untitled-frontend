export interface IValidation {
  fieldName: string;
  rules: ((v: any) => true | string)[];
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
  value: any;
  returnAllError?: boolean;
  ignoreWhitespace?: boolean;
}

export interface IValidate {
  validation: IValidation;
  value: any;
  returnAllError: boolean;
}

export interface IError {
  fieldName: any;
  reason: any;
}
