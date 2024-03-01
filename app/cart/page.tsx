import {Col, Row} from "antd";
import './style.scss';
import imgProduct from "@/public/images/sleepwell.png";
import Image from "next/image";
import ItemCart from "@/app/cart/item-cart/page";

export default function Cart() {
    return (
        <div className="layout-cart pt-52 ">
            <div className="wrapper-mainCart">
                <div className="content-bodyCart">
                    <div className="container mx-auto px-4">
                        <div className="flex flex-row flex-nowrap gap-x-5 cart">
                            <div className="flex-1 w-64 col-span-12 mainCart">
                                <div className="mainCart-detail">
                                    <div className="heading-cart heading-row">
                                        <h1>Giỏ hàng của bạn</h1>
                                        <p className="title-number-cart">Bạn đang có <strong className="count-cart">1
                                            sản phẩm</strong> trong giỏ hàng</p>
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
                                            <p>Tổng tiền: <span>1,153,900 VNĐ</span></p>
                                        </div>
                                        <div className="summary-action">
                                            <p>Phí vận chuyển sẽ được tính ở trang thanh toán.</p>
                                            <p>KHÔNG nhận hàng trong trường hợp kiện hàng không còn nguyên vẹn, bể vỡ.</p>
                                        </div>
                                        <div className="summary-button">
                                            <a id="btnCart-checkout" className="checkout-btn btnred" href="#">THANH TOÁN</a>
                                        </div>
                                    </div>
                                    <div className="order-summary-block order-summary-notify hide">
                                        <div className="summary-warning alert-order">
                                            <p className="textmr"><strong>Chính sách mua hàng</strong>:</p>
                                            <p>Hiện chúng tôi chỉ áp dụng thanh toán với đơn hàng có giá trị tối
                                                thiểu <strong>10.000 VNĐ </strong> trở lên.</p>
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
