import { useQuery } from "@tanstack/react-query";
import { IListProductParams } from "../interface";
import { getListProduct } from "../service";

export function useGetListProduct(params: IListProductParams) {
  const { data, refetch } = useQuery({
    queryKey: ["todos", params],
    queryFn: () => getListProduct(params),
    enabled: false,
  });

  return { data, refetch };
}
