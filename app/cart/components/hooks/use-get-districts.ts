import { useQuery } from "@tanstack/react-query";
import { getDistricts, getProvinces } from "../api";

export function useGetDistricts(provinceId: number) {
  const { data, isLoading, refetch, isRefetching, isSuccess } = useQuery({
    queryKey: ["DISTRICTS", provinceId],
    queryFn: () => getDistricts(provinceId),
  });
  return { data, isLoading, refetch, isRefetching, isSuccess };
}
