"use client";
import { RootState, useSelector } from "@/redux/store";
import { Form, Input, Select } from "antd";
import { Dispatch, SetStateAction, useEffect } from "react";
import { useGetOrderShipping } from "./hooks/use-get-order-shipping";
import { IFormCheckoutGuest } from "./interfaces";

interface AddressFormProps {
  state: IFormCheckoutGuest;
  setState: Dispatch<SetStateAction<IFormCheckoutGuest>>;
  setOrderShippingId: Dispatch<SetStateAction<number>>;
  token: string;
}
export default function AddressCustomerForm({
  setState,
  state,
  token,
  setOrderShippingId,
}: AddressFormProps) {
  const currentUser = useSelector((state: RootState) => state.user.user);

  useEffect(() => {
    if (currentUser?.email) {
      setState({
        ...state,
        email: currentUser.email,
        phoneNumber: currentUser.phoneNumber,
        userName: currentUser.name,
      });
    }
  }, [JSON.stringify(currentUser)]);

  const { data: listOrderShipping } = useGetOrderShipping(token);

  const orderShippings = listOrderShipping?.items || [];

  const onChangeOrderShippingId = (value: number) => {
    setOrderShippingId(value);
  };

  return (
    <div className="">
      <Form
        labelCol={{ span: 4 }}
        wrapperCol={{ span: 14 }}
        layout="horizontal"
        style={{ maxWidth: 800 }}
      >
        <Form.Item label="Địa chỉ giao hàng">
          <Select
            onChange={onChangeOrderShippingId}
            placeholder="Chọn địa chỉ giao hàng"
            style={{ width: "100%" }}
          >
            {orderShippings?.length &&
              orderShippings.map((orderShipping) => (
                <Select.Option value={orderShipping.id} key={orderShipping.id}>
                  {`${orderShipping.addressDetail},${orderShipping.wardName},${orderShipping.districtName},${orderShipping.provinceName}`}
                </Select.Option>
              ))}
          </Select>
        </Form.Item>

        <Form.Item label="Họ và tên">
          <Input
            placeholder="Nhập họ và tên"
            onChange={(value) => {
              setState({
                ...state,
                userName: value.target.value,
              });
            }}
            value={state.userName || ""}
          />
        </Form.Item>

        <Form.Item label="Email">
          <Input
            placeholder="Nhập email"
            onChange={(value) => {
              setState({
                ...state,
                email: value.target.value,
              });
            }}
            value={state.email || ""}
          />
        </Form.Item>
        <Form.Item label="Số điện thoại">
          <Input
            placeholder="Nhập số điện thoại"
            onChange={(value) => {
              setState({
                ...state,
                phoneNumber: value.target.value,
              });
            }}
            value={state.phoneNumber || ""}
          />
        </Form.Item>
      </Form>
    </div>
  );
}
