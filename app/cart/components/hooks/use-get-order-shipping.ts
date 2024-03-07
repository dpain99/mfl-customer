import { useQuery } from "@tanstack/react-query";
import { getOrderShipping } from "../api";

export function useGetOrderShipping(token: string) {
  const { data, isLoading, refetch, isRefetching, isSuccess } = useQuery({
    queryKey: ["ORDER_SHIPPING", token],
    queryFn: () => getOrderShipping(token),
  });
  return { data, isLoading, refetch, isRefetching, isSuccess };
}
