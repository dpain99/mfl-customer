"use client";
import ItemsCart from "@/app/payment/items-cart/ItemsCart";
import { RootState } from "@/redux/store";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import AddressForm from "../cart/components/address-form-guest";
import AddressCustomerForm from "../cart/components/address-form.customer";
import { IFormCheckoutGuest } from "../cart/components/interfaces";
import "./style.scss";
import { convertMoney } from "@/lib/convertMoney";

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
  const [totalPrice, setTotalPrice] = useState<number>(1);
  useEffect(() => {
    const totalPrices = dataCart?.reduce((total: number, product: any) => {
      const quantity = product.quantity || 1;
      const productPrice = product.price * quantity;
      return total + productPrice;
    }, 0);

    setTotalPrice(totalPrices || 0);
  }, [dataCart]);
  return (
    <div className="container mx-auto p-5 flex flex-row gap-5">
      <div className="shadow-lg bg-white p-5 rounded-lg w-1/2">
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
        <div className="w-full border-b border-solid border-slate-300 pb-2">
          <span className="text-2xl font-semibold">Phương thức thanh toán</span>
        </div>
        <div className=""></div>
        <div className="button-submit">
          <button className="button-completed">Hoàn tất đơn hàng</button>
        </div>
      </div>

      <div className="shadow-lg bg-white p-5 rounded-lg flex grow flex-col h-fit">
        <div className="w-full border-b border-solid border-slate-300 pb-2">
          <span className="text-2xl font-semibold">Danh Sách Sản Phẩm</span>
        </div>
        <div>
          {dataCart?.map((item) => (
            <ItemsCart
              key={item.slug}
              productData={item}
              handlePlusItems={function (): void {
                throw new Error("Function not implemented.");
              }}
              handleMinusItems={function (): void {
                throw new Error("Function not implemented.");
              }}
            />
          ))}
        </div>
        <div className="divider"></div>
        <div className="total-order">
          <div className="sub-total padding-row flex justify-between">
            <p>Tạm tính</p>
            <div className="sub-price">{convertMoney(totalPrice)} VND</div>
          </div>
          <div className="flex justify-between padding-row">
            <p>Phí vận chuyển</p>
            <div className="transport-fee">30.000 VND</div>
          </div>
          <div className="divider"></div>
          <div className="flex justify-between padding-row">
            <p className="font-medium">Tổng cộng</p>
            <div className="total">{convertMoney(totalPrice + 30000)} VND</div>
          </div>
        </div>
      </div>
    </div>
  );
}
