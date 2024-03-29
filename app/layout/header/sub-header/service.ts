import { fetchInstant } from "@/common/fetch";
import { ICategory } from "./types/type";

export const getListCategory = () => {
  return fetchInstant<ICategory[]>(`customer/category`, {
    method: "GET",
  });
};
