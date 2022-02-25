export interface ResponseModel<T> {
  code: {
    status: number;
    message: string;
  };
  data: T;
}
