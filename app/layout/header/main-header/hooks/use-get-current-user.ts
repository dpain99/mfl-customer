import { useQuery } from "@tanstack/react-query";
import { getCurrentUser } from "../service";

export function useGetCurrentUser(token: string) {
  const { data, isLoading, refetch, isRefetching, isSuccess } = useQuery({
    queryKey: ["PROFILE"],
    queryFn: () => getCurrentUser(token),
  });
  return { data, isLoading, refetch, isRefetching, isSuccess };
}
