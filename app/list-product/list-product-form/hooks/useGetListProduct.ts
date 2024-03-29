import { useQuery } from "@tanstack/react-query";
import { getListProduct } from "../service";
import { IListProductParams } from "../interface";

export function useGetListProduct(params: IListProductParams) {
  return useQuery({
    queryKey: ["todos", params],
    queryFn: () => getListProduct(params),
  });
}
