export interface BusinessErrorResponse {
  status: number;
  message: string;
  code: string | null;
  errors: Array<FieldError> | null;
  isError: boolean;
}

interface FieldError {
  field: string;
  value: string;
  reason: string;
}
