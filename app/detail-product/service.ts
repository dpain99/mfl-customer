import { fetchInstant } from "@/common/fetch";
import { Product } from "@/lib/interface";

export const getProductBySlug = ({ slug }: { slug: string }) => {
  return fetchInstant<Product>(`customer/product/${slug}`, {
    method: "GET",
  });
};
