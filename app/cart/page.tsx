"use client";
import ItemCart from "@/app/cart/item-cart/ItemCarts";
import {RootState, useSelector} from "@/redux/store";
import {Spin} from "antd";
import {useState} from "react";
import AddressForm from "./components/address-form-guest";
import {IFormCheckoutGuest} from "./components/interfaces";
import {
    useCreatePaymentLinkCustomer,
    useCreatePaymentLinkGuest,
} from "./hooks/use-create-payment-link";
import "./style.scss";
import AddressCustomerForm from "./components/address-form.customer";
import BreadCrumb from "@/app/components/breadcrumb/Breadcrumb";
import {useRouter} from "next/navigation";

export default function Cart() {
    const [isLoading, setIsLoading] = useState(false);
    const router = useRouter();
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

    const goToCheckouts =() =>{
        setIsLoading(true);
        setTimeout(()=>{
            setIsLoading(false);
            router.push("/cart/checkouts");
        },2000)
    };


    return (
        <div>
            {/*{!accessToken ? (
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
      )}*/}

            <div className="layout-cart">
                <div className="wrapper-mainCart">
                    <div className="content-bodyCart">
                        <div className="container mx-auto px-4">
                            <div className="py-10">
                                <BreadCrumb
                                    items={[
                                        {title: "Trang Chủ", href: "/"},
                                        {title: `Giỏ hàng`},
                                    ]}
                                />
                            </div>
                            <div className="flex flex-row flex-nowrap gap-x-5 cart">
                                <div className="flex-1 w-64 col-span-12 mainCart">
                                    <div className="mainCart-detail">
                                        <div className="heading-cart heading-row">
                                            <h1>Giỏ hàng của bạn</h1>
                                            <p className="title-number-cart">
                                                Bạn đang có{" "}
                                                <strong className="count-cart">1 sản phẩm</strong> trong
                                                giỏ hàng
                                            </p>
                                        </div>
                                        <div className="list-item-cart">
                                            <div className="list-item">
                                                <ItemCart index={0}/>
                                                <ItemCart index={1}/>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="basis-1/3">
                                    <div className="wrap-order-summary">
                                        <div className="order-summary-block">
                                            <h2 className="summary-title">Thông tin đơn hàng</h2>
                                            <div className="summary-total">
                                                <p>
                                                    Tổng tiền: <span>1,153,900 VNĐ</span>
                                                </p>
                                            </div>
                                            <div className="summary-action">
                                                <p>Phí vận chuyển sẽ được tính ở trang thanh toán.</p>
                                                <p>
                                                    KHÔNG nhận hàng trong trường hợp kiện hàng không còn
                                                    nguyên vẹn, bể vỡ.
                                                </p>
                                            </div>
                                            <div className="summary-button" onClick={goToCheckouts}>
                                                <div
                                                    id="btnCart-checkout"
                                                    className="checkout-btn btnred"
                                                >
                                                    {isLoading ? (
                                                        <Spin/>
                                                    ) : (
                                                        "THANH TOÁN"
                                                    )}
                                                </div>
                                            </div>
                                        </div>
                                        <div className="order-summary-block order-summary-notify hide">
                                            <div className="summary-warning alert-order">
                                                <p className="textmr">
                                                    <strong>Chính sách mua hàng</strong>:
                                                </p>
                                                <p>
                                                    Hiện chúng tôi chỉ áp dụng thanh toán với đơn hàng có
                                                    giá trị tối thiểu <strong>10.000 VNĐ </strong> trở
                                                    lên.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
