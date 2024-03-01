import {Col, Row} from "antd";
import {CodeSandboxOutlined} from "@ant-design/icons";
import imgProduct from "@/public/images/sleepwell.png";
import Image from "next/image";
import './style.scss';
import MyBtn2 from "@/app/components/button-2/page";
import IBox from "@/public/icon/IBox/page";
import ILike from "@/public/icon/ILike/page";
import IAround from "@/public/icon/IAround/page";
import IPhone from "@/public/icon/IPhone/page";

export default function DetailProduct({
                                          params,
                                      }: {
    params: { slug: string };
}) {
    return (
        <>
            <div className="flex justify-center pt-52">
                <div className="detail-product container mx-auto px-4">
                    <Row>
                        <Col span={8}>
                            <div className="image-detail">
                                <Image src={imgProduct} alt="image product"/>
                            </div>
                        </Col>
                        <Col span={14}>
                            <div className="info-detail">
                                <h1 className="name-product">{params.slug} </h1>
                                <span className="id-product">Mã sản phẩm : <strong>D123SW123</strong></span>
                                <span className="status-product">Tình trạng : <strong>Còn hàng</strong></span>
                                <span className="brand-product">Thương hiệu : <strong>Vinamilk</strong></span>
                                <div className="price-product">
                                    <div className="price-current">
                                        <span className="price-now">500.000 VND</span>
                                        <span className="vat">(Đã bao gồm VAT)</span>
                                    </div>
                                    <div className="price-compare">
                                        <span className="com-title">Giá hãng </span>
                                        <span className="com-price">629,000 VNĐ</span>
                                        <span className="save-money-title">- Tiết kiệm:</span>
                                        <span className="save-money">125,800 VNĐ</span>
                                        <span className="percent-save">(-20%)</span>
                                    </div>
                                </div>
                                <div className="action-product">
                                    <div className="quantity-area">
                                        <div className="quantity-title">Số lượng:</div>
                                        <button type="button" className="qty-btn">
                                            <svg focusable="false" className="icon icon--minus " viewBox="0 0 10 2"
                                                 role="presentation">
                                                <path d="M10 0v2H0V0z"></path>
                                            </svg>
                                        </button>
                                        <input type="text" id="quantity" name="quantity" value="1" min="1"
                                               className="quantity-input"/>
                                        <button type="button" className="qty-btn">
                                            <svg focusable="false" className="icon icon--plus " viewBox="0 0 10 10"
                                                 role="presentation">
                                                <path d="M6 4h4v2H6v4H4V6H0V4h4V0h2v4z"></path>
                                            </svg>
                                        </button>
                                    </div>
                                    <div className="addcart-area">
                                        <MyBtn2/>
                                        <button type="button" id="buy-now" className="buy-now cursor-pointer"
                                                name="add">
                                            Mua ngay
                                        </button>
                                    </div>
                                </div>
                                <div className="product-delivery">
                            <span className="info-delivery">
                                <span>
                                    <IBox width="20px" height="20px"/>
                                </span>
                                <span>Cam kết chất lượng chính hãng</span>
                            </span>
                                    <span className="info-delivery">
                                <span>
                                    <ILike width="20px" height="20px"/>
                                </span>
                                        <span><strong>ĐỒNG KIỂM</strong> với Shipper</span>
                            </span>
                                    <span className="info-delivery">
                                <span>
                                    <IAround width="20px" height="20px"/>
                                </span>
                                        <span>Hỗ trợ đổi hàng trong <strong>48 giờ</strong></span>
                            </span>
                                    <span className="info-delivery">
                                <span>
                                    <IPhone width="20px" height="20px"/>
                                </span>
                                        <span>Hotline <strong>0123456789</strong></span>
                            </span>

                                </div>
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <div className="description-product">
                            <div className="title">
                            <span>
                                Mô tả sản phẩm
                            </span>
                            </div>
                            <div className="description">
                                Đây là mô tả
                            </div>
                        </div>
                    </Row>
                </div>
            </div>
        </>
    );
}
