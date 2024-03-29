import { useQuery } from "@tanstack/react-query";
import { getProductBySlug } from "../service";

export function useGetProductBySlug({ slug }: { slug: string }) {
  return useQuery({
    queryKey: ["getProductBySlug", slug],
    queryFn: () => getProductBySlug({ slug: slug }),
  });
}
