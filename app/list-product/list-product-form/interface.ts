export interface IListProductParams {
  search?: string;
  fromDate?: string;
  toDate?: string;
  minMoney?: number;
  maxMoney?: number;
  categoryIds?: number[];
  onSale?: boolean;
  page: number;
  limit: number;
}
