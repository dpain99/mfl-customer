import { useMutation } from "@tanstack/react-query";
import { putCustomerInfo } from "../service";

export const usePutCustomerInfo = () => {
  const { mutate, isPending, isError, isSuccess, data } = useMutation({
    onSuccess: () => {},
    mutationFn: putCustomerInfo,
  });
  return { mutate, isPending, isError, isSuccess, data };
};
