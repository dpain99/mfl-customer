import { useQuery } from "@tanstack/react-query";
import { getProvinces } from "../api";

export function useGetProvinces() {
  const { data, isLoading, refetch, isRefetching, isSuccess } = useQuery({
    queryKey: ["PROVINCES"],
    queryFn: () => getProvinces(),
  });
  return { data, isLoading, refetch, isRefetching, isSuccess };
}
