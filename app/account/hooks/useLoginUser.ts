import { useMutation } from "@tanstack/react-query";
import { postLoginUser } from "../service";
import { IResponseLogin } from "../type";

export const useLoginUser = () => {
  const { mutate, isPending, isError, isSuccess, data } = useMutation({
    mutationFn: postLoginUser,
  });
  return { mutate, isPending, isError, isSuccess, data };
};
