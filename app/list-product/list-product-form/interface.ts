export interface IListProductParams {
  search?: string;
  fromDate?: string;
  toDate?: string;
  minMoney?: string;
  maxMoney?: string;
  categoryIds?: number[];
  page: number;
  limit: number;
}
