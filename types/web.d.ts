// types/web.ts
export interface IPagination {
  currentPage: number;
  limit: number;
  totalData: number;
  totalPage: number;
}

export interface IWebResponse<T> {
  data: T;
  message: string;
  pagination: IPagination;
  statusCode: number;
  success: boolean;
}
