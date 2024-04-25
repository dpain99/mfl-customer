import { fetchInstant } from "@/common/fetch";
import { IRegisterForm, IResponseLogin } from "./type";
import { IFormCheckoutGuest } from "../cart/components/interfaces";
import { store } from "@/redux/store";

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

const token = store.getState().authenSlice.accessToken;

export function putCustomerInfo({
  phoneNumber,
  email,
  userName,
  addressDetail,
  provinceId,
  districtId,
  wardId,
  birthDate,
}: IFormCheckoutGuest) {
  return fetchInstant(
    `customer/profile`,
    {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        phoneNumber: phoneNumber,
        email: email,
        userName: userName,
        addressDetail: addressDetail,
        provinceId: provinceId,
        districtId: districtId,
        wardId: wardId,
        birthDate: birthDate,
      }),
    },
    token || ""
  );
}
