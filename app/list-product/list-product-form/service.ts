import { fetchInstant } from "@/common/fetch";
import { IListProductParams } from "./interface";
import { IProductListResponse } from "@/app/home/type";

export const getListProduct = ({
  search,
  fromDate,
  toDate,
  minMoney,
  maxMoney,
  categoryIds,
  page,
  limit,
}: IListProductParams) => {
  const queryParams = new URLSearchParams();

  // Thêm các tham số có giá trị khác undefined vào queryParams
  if (search !== undefined) queryParams.append("search", search);
  if (fromDate !== undefined)
    queryParams.append("fromDate", fromDate.toString());
  if (toDate !== undefined) queryParams.append("toDate", toDate.toString());
  if (minMoney !== undefined)
    queryParams.append("minMoney", minMoney.toString());
  if (maxMoney !== undefined)
    queryParams.append("maxMoney", maxMoney.toString());
  if (page !== undefined) queryParams.append("page", page.toString());
  if (limit !== undefined) queryParams.append("limit", limit.toString());

  if (
    categoryIds !== undefined &&
    categoryIds.length > 0 &&
    !categoryIds.includes(0)
  ) {
    categoryIds.forEach((categoryId) => {
      queryParams.append("categoryIds", categoryId.toString());
    });
  }

  return fetchInstant<IProductListResponse>(
    `customer/product?${queryParams.toString()}`,
    {
      method: "GET",
    }
  );
};
