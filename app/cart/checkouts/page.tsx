"use client";
import AddressCustomerForm from "@/app/cart/components/address-form.customer";
import AddressForm from "@/app/cart/components/address-form-guest";
import {RootState, useSelector} from "@/redux/store";
import {useState} from "react";
import {IFormCheckoutGuest} from "@/app/cart/components/interfaces";
import BreadCrumb from "@/app/components/breadcrumb/Breadcrumb";
import './style.scss';
import {useCreatePaymentLinkCustomer, useCreatePaymentLinkGuest} from "@/app/cart/hooks/use-create-payment-link";

const Checkouts = () => {
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
    const accessToken = useSelector(
        (state: RootState) => state.authenSlice.accessToken
    );
    const {isPending: isPendingGuest, mutate: mutateGuest} =
        useCreatePaymentLinkGuest();

    const {isPending: isPendingCustomer, mutate: mutateCustomer} =
        useCreatePaymentLinkCustomer();
    const getPaymentLink = () => {
        if (isPendingGuest || isPendingCustomer) {
            return;
        }
        if (accessToken) {
            mutateCustomer(
                {
                    data: {
                        body: {
                            phoneNumber: formCheckoutGuest.phoneNumber,
                            email: formCheckoutGuest.email,
                            userName: formCheckoutGuest.userName,
                            orderShippingId,
                            productVariants: [
                                {
                                    quantity: 1,
                                    productVariantId: 1,
                                },
                            ],
                        },
                        token: accessToken,
                    },
                },
                {
                    onError: (err: any) => {
                        console.log(err);
                    },
                    onSuccess: (data: any) => {
                        if (!data?.statusCode) {
                            const newWindow = window.open(
                                data?.checkoutUrl,
                                "_blank",
                                "noopener,noreferrer"
                            );
                            if (newWindow) newWindow.opener = null;
                        }
                    },
                }
            );
        } else {
            mutateGuest(
                {
                    body: {
                        ...formCheckoutGuest,
                        productVariants: [
                            {
                                quantity: 1,
                                productVariantId: 1,
                            },
                        ],
                    },
                },
                {
                    onError: (err: any) => {
                        console.log(err);
                    },
                    onSuccess: (data: any) => {
                        if (!data?.statusCode) {
                            const newWindow = window.open(
                                data?.checkoutUrl,
                                "_blank",
                                "noopener,noreferrer"
                            );
                            if (newWindow) newWindow.opener = null;
                        }
                    },
                }
            );
        }
    };

    return (
        <div className="layout-checkout mb-10">
            <div className="wrapper-checkout">
                <div className="content-bodyCheckout">
                    <div className="container mx-auto px-4">
                        <div className="py-10">
                            <BreadCrumb
                                items={[
                                    {title: "Trang Chủ", href: "/"},
                                    {title: "Giỏ hàng", href: "/cart"},
                                    {title: "Thông tin giao hàng"}
                                ]}
                            />
                        </div>
                        <div className="bodyCheckouts flex gap-10">
                            <div className="info-order box-shadow flex-1">
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
                            <div className="info-cart box-shadow flex-1">
                                cart
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Checkouts;
