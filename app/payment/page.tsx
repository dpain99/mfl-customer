"use client";
import { RootState } from "@/redux/store";
import { useState } from "react";
import { useSelector } from "react-redux";
import AddressForm from "../cart/components/address-form-guest";
import AddressCustomerForm from "../cart/components/address-form.customer";
import { IFormCheckoutGuest } from "../cart/components/interfaces";
import ItemCart from "../cart/item-cart/ItemCarts";

export default function Payment() {
  const accessToken = useSelector(
    (state: RootState) => state.authenSlice.accessToken
  );
  const dataCart = useSelector(
    (state: RootState) => state.showCart.infoProduct
  );
  const [formCheckoutGuest, setFormCheckoutGuest] =
    useState<IFormCheckoutGuest>({
      addressDetail: null,
      districtId: null,
      email: null,
      phoneNumber: null,
      provinceId: null,
      userName: null,
      wardId: null,
    });
  const [orderShippingId, setOrderShippingId] = useState<number>(0);
  return (
    <div className="container mx-auto p-5 flex flex-row gap-5">
      <div className="shadow-lg bg-white p-5 rounded-lg w-3/4">
        <div className="w-full border-b border-solid border-slate-300 pb-2">
          <span className="text-2xl font-semibold">Thông tin nhận hàng</span>
        </div>
        <div className="pt-10">
          {!accessToken ? (
            <AddressForm
              state={formCheckoutGuest}
              setState={setFormCheckoutGuest}
            />
          ) : (
            <AddressCustomerForm
              state={formCheckoutGuest}
              setState={setFormCheckoutGuest}
              token={accessToken}
              setOrderShippingId={setOrderShippingId}
            />
          )}
        </div>
      </div>

      <div className="shadow-lg bg-white p-5 rounded-lg flex grow flex-col h-fit">
        <div className="w-full border-b border-solid border-slate-300 pb-2">
          <span className="text-2xl font-semibold">Danh Sách Sản Phẩm</span>
        </div>
        <div>
          {dataCart?.map((item) => (
            <ItemCart
              key={item.slug}
              productData={item}
              handleDeleteItems={function (): void {
                throw new Error("Function not implemented.");
              }}
              handlePlusItems={function (): void {
                throw new Error("Function not implemented.");
              }}
              handleMinusItems={function (): void {
                throw new Error("Function not implemented.");
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
