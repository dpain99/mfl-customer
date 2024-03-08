import { useQuery } from "@tanstack/react-query";
import { getProvinces, getWards } from "../api";

export function useGetWards(districtId: number) {
  const { data, isLoading, refetch, isRefetching, isSuccess } = useQuery({
    queryKey: ["WARDS", districtId],
    queryFn: () => getWards(districtId),
  });
  return { data, isLoading, refetch, isRefetching, isSuccess };
}
