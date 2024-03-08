import { useMutation } from "@tanstack/react-query";
import { createPaymentLinkCustomer, createPaymentLinkGuest } from "../services";

export const useCreatePaymentLinkGuest = () => {
  const { mutate, isPending } = useMutation({
    onSuccess: () => {},
    mutationFn: createPaymentLinkGuest,
  });
  return { mutate, isPending };
};

export const useCreatePaymentLinkCustomer = () => {
  const { mutate, isPending } = useMutation({
    onSuccess: () => {},
    mutationFn: createPaymentLinkCustomer,
  });
  return { mutate, isPending };
};
