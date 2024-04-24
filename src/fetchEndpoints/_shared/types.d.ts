/* 
Fetch Request and Response Data Types from the backend
*/
export interface SuccessDataType<T> {
  success: boolean;
  message: string;
  data: T;
}
interface ErrorDataType {
  success: boolean;
  message: string;
  error?: any;
  statusCode
}

export interface ServerApiResponse<T = any> {
  resData: SuccessDataType<T> | null;
  statusCode: number | string | undefined;
  error: ErrorDataType | null;
  isError: boolean;
  endpoint?: string;
  statusText?: string;
  responseType?: string;
}

export type ClientApiResponse<T> = SuccessDataType<T>;
