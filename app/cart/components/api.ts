import { fetchInstant } from "@/common/fetch";
import { IAddressRes, IOrderShippingRes } from "./interfaces";

export function getProvinces() {
  return fetchInstant<IAddressRes>(`address/province`);
}

export function getDistricts(provinceId: number) {
  return fetchInstant<IAddressRes>(`address/district?parent_id=${provinceId}`);
}

export function getWards(districtId: number) {
  return fetchInstant<IAddressRes>(`address/wards?parent_id=${districtId}`);
}

export function getOrderShipping(token: string) {
  return fetchInstant<IOrderShippingRes>(
    `customer/order/shipping?page=1&limit=20`,
    {},
    token
  );
}
