import { fetchInstant } from "@/common/fetch";
import { IRegisterForm, IResponseLogin } from "./type";

export function postLoginUser({ email, password }: IRegisterForm) {
  return fetchInstant<IResponseLogin>(`customer/auth/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email: email,
      password: password,
    }),
  });
}

export function postRegisterUser({ email, password }: IRegisterForm) {
  return fetchInstant(`customer/auth/register`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email: email,
      password: password,
    }),
  });
}
