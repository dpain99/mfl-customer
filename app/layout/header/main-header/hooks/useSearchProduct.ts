import { IListProductParams } from "@/app/list-product/list-product-form/interface";
import { getListProduct } from "@/app/list-product/list-product-form/service";
import { useQuery } from "@tanstack/react-query";

export function useSearchProduct(params: IListProductParams) {
  return useQuery({
    queryKey: ["todos", params],
    queryFn: () => getListProduct(params),
    enabled: false,
  });
}
