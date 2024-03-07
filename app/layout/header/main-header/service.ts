import { fetchInstant } from "@/common/fetch";
import { IUserData } from "./type";

export function getCurrentUser(token: string) {
  return fetchInstant<IUserData>(`customer/auth/current`, {}, token);
}
