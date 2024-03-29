import { useQuery } from "@tanstack/react-query";
import { getListCategory } from "../service";

export function useGetListCategory() {
  return useQuery({
    queryKey: ["listCategory"],
    queryFn: () => getListCategory(),
  });
}
