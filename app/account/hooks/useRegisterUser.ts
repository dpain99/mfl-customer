import { useMutation } from "@tanstack/react-query";
import { postRegisterUser } from "../service";

export const useRegisterUser = () => {
  const { mutate, isPending, isError, isSuccess, data } = useMutation({
    onSuccess: () => {},
    mutationFn: postRegisterUser,
  });
  return { mutate, isPending, isError, isSuccess, data };
};
