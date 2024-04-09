import { fetchInstant } from "@/common/fetch";
import { IUserData } from "../layout/header/main-header/type";

export function getCurrentUser(token: string) {
  return fetchInstant<IUserData>(`customer/auth/current`, {}, token);
}

export function getVoucherWheel(token: string) {
  return fetchInstant<IUserData>(`customer/voucher/wheel`, {}, token);
}
