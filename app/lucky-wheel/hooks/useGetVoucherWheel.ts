import { useQuery } from "@tanstack/react-query";
import { getVoucherWheel } from "../service";

export function useGetVoucherWheel(token: string) {
  const { data, isLoading, refetch, isRefetching, isSuccess } = useQuery({
    queryKey: ["GET_VOUCHER_WHEEL"],
    queryFn: () => getVoucherWheel(token),
  });
  return { data, isLoading, refetch, isRefetching, isSuccess };
}
