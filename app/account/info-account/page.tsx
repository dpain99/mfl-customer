"use client";
import { useGetDistricts } from "@/app/cart/components/hooks/use-get-districts";
import { useGetProvinces } from "@/app/cart/components/hooks/use-get-provinces";
import { useGetWards } from "@/app/cart/components/hooks/use-get-wards";
import { IFormCheckoutGuest } from "@/app/cart/components/interfaces";
import { RootState } from "@/redux/store";
import { Button, DatePicker, Form, FormProps, Input, Select } from "antd";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { usePutCustomerInfo } from "../hooks/usePutCustomerInfo";

export default function InfoAccount() {
  const [formCheckoutGuest, setFormCheckoutGuest] =
    useState<IFormCheckoutGuest>({
      addressDetail: null,
      districtId: null,
      email: null,
      phoneNumber: null,
      provinceId: null,
      userName: null,
      wardId: null,
      birthDate: "",
    });

  const currentUser = useSelector((state: RootState) => state.user.user);

  useEffect(() => {
    if (currentUser?.email) {
      setFormCheckoutGuest({
        ...formCheckoutGuest,
        email: currentUser.email,
        phoneNumber: currentUser.phoneNumber,
        userName: currentUser.name,
        birthDate: currentUser.birthDate || "",
      });
    }
  }, [JSON.stringify(currentUser)]);

  const { data: listProvince } = useGetProvinces();
  const { data: listDistrict } = useGetDistricts(
    formCheckoutGuest?.provinceId || 0
  );
  const { data: listWard } = useGetWards(formCheckoutGuest?.districtId || 0);

  const provinces = listProvince?.data || [];
  const districts = listDistrict?.data || [];
  const wards = listWard?.data || [];

  const onChangeProvince = (value: number) => {
    setFormCheckoutGuest({
      ...formCheckoutGuest,
      provinceId: value,
    });
  };

  const onChangeDistrict = (value: number) => {
    setFormCheckoutGuest({
      ...formCheckoutGuest,
      districtId: value,
    });
  };

  const onChangeWard = (value: number) => {
    setFormCheckoutGuest({
      ...formCheckoutGuest,
      wardId: value,
    });
  };
  const { mutate, isPending } = usePutCustomerInfo();

  const onFinish: FormProps<IFormCheckoutGuest>["onFinish"] = (values) => {
    mutate(formCheckoutGuest);
  };

  const onFinishFailed: FormProps<IFormCheckoutGuest>["onFinishFailed"] = (
    errorInfo
  ) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <div className="container mx-auto p-4">
      <div className="p-4 bg-white flex flex-col gap-5 items-center">
        <h2 className="font-semibold text-2xl">Cập nhật thông tin tài khoản</h2>
        <div className="w-full px-5">
          <Form
            labelCol={{ span: 4 }}
            wrapperCol={{ span: 14 }}
            layout="vertical"
            style={{ width: "100%", maxWidth: "100%" }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
          >
            <div className="select-address border border-solid border-secondary-color p-5 mb-5 rounded-lg">
              <h3 className="w-full text-center font-semibold text-xl">
                Thông tin giao hàng
              </h3>
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
                  disabled={!formCheckoutGuest.provinceId}
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
                  disabled={!formCheckoutGuest.districtId}
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
                    setFormCheckoutGuest({
                      ...formCheckoutGuest,
                      addressDetail: value.target.value,
                    });
                  }}
                  disabled={!formCheckoutGuest.wardId}
                />
              </Form.Item>
            </div>

            <div className="select-address border border-solid border-secondary-color p-5 mb-5 rounded-lg">
              <h3 className="w-full text-center font-semibold text-xl">
                Thông tin cá nhân
              </h3>

              <Form.Item label="Họ và tên">
                <Input
                  placeholder="Nhập họ và tên"
                  onChange={(value) => {
                    setFormCheckoutGuest({
                      ...formCheckoutGuest,
                      userName: value.target.value,
                    });
                  }}
                  value={formCheckoutGuest.userName || ""}
                />
              </Form.Item>
              <Form.Item label="Email">
                <Input
                  placeholder="Nhập email"
                  disabled
                  onChange={(value) => {
                    setFormCheckoutGuest({
                      ...formCheckoutGuest,
                      email: value.target.value,
                    });
                  }}
                  value={formCheckoutGuest.email || ""}
                />
              </Form.Item>
              <Form.Item label="Số điện thoại">
                <Input
                  placeholder="Nhập số điện thoại"
                  onChange={(value) => {
                    setFormCheckoutGuest({
                      ...formCheckoutGuest,
                      phoneNumber: value.target.value,
                    });
                  }}
                  value={formCheckoutGuest.phoneNumber || ""}
                  type="number"
                />
              </Form.Item>
              <Form.Item label="Ngày sinh">
                <DatePicker
                  format={"DD/MM/YYYY"}
                  placeholder="Chọn ngày tháng năm sinh"
                  onChange={(value) => {
                    setFormCheckoutGuest({
                      ...formCheckoutGuest,
                      birthDate: `${value}`,
                    });
                  }}
                  // value={new Date(formCheckoutGuest.birthDate || "")}
                  style={{ width: "50%" }}
                />
              </Form.Item>
            </div>

            <div className="flex justify-center gap-5">
              <Button
                type="primary"
                htmlType="submit"
                className="bg-secondary-color w-28 h-10"
                loading={isPending}
              >
                Cập Nhật
              </Button>
              <Link href={"/"}>
                <Button
                  type="primary"
                  htmlType="button"
                  className="bg-secondary-color w-28 h-10"
                  danger
                >
                  Hủy
                </Button>
              </Link>
            </div>
          </Form>
        </div>
      </div>
    </div>
  );
}
