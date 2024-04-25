export interface IAddress {
  id: number;
  name: string;
  type: string;
}

export interface IAddressRes {
  data: IAddress[];
}

export interface IFormCheckoutGuest {
  phoneNumber: string | null;
  email: string | null;
  userName: string | null;
  addressDetail: string | null;
  provinceId: number | null;
  districtId: number | null;
  wardId: number | null;
  birthDate?: string;
}

export interface IProductVariantsCheckout {
  quantity: number;
  productVariantId: number;
}

export interface IOrderShipping {
  id: number;
  isDefault: boolean;
  provinceName: string;
  provinceId: number;
  wardId: number;
  wardName: string;
  districtId: number;
  districtName: string;
  addressDetail: string;
}

export interface IOrderShippingRes {
  items: IOrderShipping[];
}
