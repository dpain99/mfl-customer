"use client";
import { Form, Input, Select } from "antd";
import React, { Dispatch, SetStateAction, useEffect, useState } from "react";
import { useGetProvinces } from "./hooks/use-get-provinces";
import { useGetDistricts } from "./hooks/use-get-districts";
import { useGetWards } from "./hooks/use-get-wards";
import { RootState, useSelector } from "@/redux/store";
import { IFormCheckoutGuest } from "./interfaces";

interface AddressFormProps {
  state: IFormCheckoutGuest;
  setState: Dispatch<SetStateAction<IFormCheckoutGuest>>;
}
export default function AddressForm({ setState, state }: AddressFormProps) {
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

  const { data: listProvince } = useGetProvinces();
  const { data: listDistrict } = useGetDistricts(state?.provinceId || 0);
  const { data: listWard } = useGetWards(state?.districtId || 0);

  const provinces = listProvince?.data || [];
  const districts = listDistrict?.data || [];
  const wards = listWard?.data || [];

  const onChangeProvince = (value: number) => {
    setState({
      ...state,
      provinceId: value,
    });
  };

  const onChangeDistrict = (value: number) => {
    setState({
      ...state,
      districtId: value,
    });
  };

  const onChangeWard = (value: number) => {
    setState({
      ...state,
      wardId: value,
    });
  };
  return (
    <div className="  ">
      <Form
        labelCol={{ span: 4 }}
        wrapperCol={{ span: 14 }}
        layout="horizontal"
        style={{ width: "100%", maxWidth: "100%" }}
      >
        <Form.Item label="Tỉnh/Thành phố">
          <Select
            onChange={onChangeProvince}
            placeholder="Chọn tỉnh/thành phố"
            style={{ width: "100%" }}
          >
            {provinces?.length &&
              provinces.map((province) => (
                <Select.Option value={province.id} key={province.id}>
                  {province.name}
                </Select.Option>
              ))}
          </Select>
        </Form.Item>
        <Form.Item label="Quận/Huyện">
          <Select
            onChange={onChangeDistrict}
            placeholder="Chọn quận/huyện"
            style={{ width: "100%" }}
            disabled={!state.provinceId}
          >
            {districts?.length &&
              districts.map((district) => (
                <Select.Option value={district.id} key={district.id}>
                  {district.name}
                </Select.Option>
              ))}
          </Select>
        </Form.Item>
        <Form.Item label="Phường/Xã">
          <Select
            onChange={onChangeWard}
            placeholder="Chọn phường/xã"
            style={{ width: "100%" }}
            disabled={!state.districtId}
          >
            {wards?.length &&
              wards.map((ward) => (
                <Select.Option value={ward.id} key={ward.id}>
                  {ward.name}
                </Select.Option>
              ))}
          </Select>
        </Form.Item>
        <Form.Item label="Địa chỉ chi tiết">
          <Input
            placeholder="Nhập địa chỉ chi tiết"
            onChange={(value) => {
              setState({
                ...state,
                addressDetail: value.target.value,
              });
            }}
            disabled={!state.wardId}
          />
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
