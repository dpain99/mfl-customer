"use client";
import {Col, Row} from "antd";
import './style.scss';
import MyBtn2 from "@/app/components/button-2/page";
import IBox from "@/public/icon/IBox/page";
import ILike from "@/public/icon/ILike/page";
import IAround from "@/public/icon/IAround/page";
import IPhone from "@/public/icon/IPhone/page";
import {useEffect, useState} from "react";
import {Product} from "@/lib/interface";
import {getDataForClient} from "@/lib/api";
import {formatCurrencyVND} from "@/lib/helper";


export default function DetailProduct({params,}: {
    params: { slug: string };
}) {
    params.slug = "product/slug-1";
    const [detailProduct, setDetailProduct] = useState<Product | null>(null)
    const getData1 = async ()=>{
        const response = await getDataForClient(params.slug);
        setDetailProduct(response);
    };
    useEffect(() => {
        getData1().then(r => {});
        return () => {
        };
    }, []);

    return (
        <>
            <div className="flex justify-center pt-52">
                <div className="detail-product container mx-auto px-4">
                    <Row>
                        <Col span={8}>
                            <div className="image-detail">
                                <img src={detailProduct && detailProduct.productImage[0].image.url || undefined} alt="image product"/>
                            </div>
                        </Col>
                        <Col span={14}>
                            <div className="info-detail">
                                <h1 className="name-product">{detailProduct?.name}</h1>
                                <span className="id-product">Mã sản phẩm : <strong>{detailProduct?.id}</strong></span>
                                <span className="status-product">Tình trạng : <strong>{detailProduct && detailProduct.productVariant[0].quantity > 0 ? "Còn hàng" : "Hết hàng"}</strong></span>
                                <span className="brand-product">Thương hiệu : <strong>{detailProduct?.productCategories[0].category.name}</strong></span>
                                <div className="price-product">
                                    <div className="price-current">
                                        <span className="price-now">{detailProduct && formatCurrencyVND(detailProduct.productVariant[0].salePrice)} VND</span>
                                        <span className="vat">(Đã bao gồm VAT)</span>
                                    </div>
                                    <div className="price-compare">
                                        <span className="com-title">Giá hãng </span>
                                        <span className="com-price">{detailProduct && formatCurrencyVND(detailProduct.productVariant[0].price)}</span>
                                        {/*<span className="save-money-title">- Tiết kiệm:</span>
                                        <span className="save-money">125,800 VNĐ</span>
                                        <span className="percent-save">(-20%)</span>*/}
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
                                {detailProduct && detailProduct.description}
                            </div>
                        </div>
                    </Row>
                </div>
            </div>
        </>
    );
}
