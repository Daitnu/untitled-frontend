export interface BusinessErrorResponse {
  readonly status: number;
  readonly message: string;
  readonly code: string | null;
  readonly errors: Array<FieldError> | null;
  readonly isError: boolean;
}

interface FieldError {
  readonly field: string;
  readonly value: string;
  readonly reason: string;
}
