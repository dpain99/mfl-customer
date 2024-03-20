"use client";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import "./style.scss";

import AddToCartBtn from "@/app/components/add-to-cart-btn/AddToCartBtn";
import MoreBtn from "@/app/components/more-btn/MoreBtn";
import { martel } from "@/fonts/font";
import { ProductInfo, openCart, setProductInfo } from "@/redux/slices/showCart";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigation, Pagination } from "swiper/modules";
import { IProductListResponse } from "../type";
import { RootState } from "@/redux/store";
import IHotSale from "@/public/icon/IHotSale";
import CountDown from "@/app/components/count-down/CountDown";
import IClockAnimation from "@/public/icon/IClockAnimation";
import { convertMoney } from "@/lib/convertMoney";

interface ICardProductCarouselProps {
  linkMore: string;
  dataProduct: IProductListResponse;
}
export default function CardProductCarousel({
  linkMore,
  dataProduct,
}: ICardProductCarouselProps) {
  const dispatch = useDispatch();
  const currentProductInfo =
    useSelector((state: RootState) => state.showCart.infoProduct) || [];

  const handleClickAddCart = (
    name: string,
    maxMoney: number,
    minMoney: number,
    url: string,
    slug: string
  ) => {
    dispatch(openCart());
    const newProductInfo = {
      img: url,
      title: name,
      price: minMoney || maxMoney,
      slug: slug,
      quantity: 1,
    };

    const productDublicateId = currentProductInfo.findIndex(
      (item) => item.slug === slug
    );

    if (productDublicateId !== -1) {
      const existedProduct = currentProductInfo[productDublicateId];
      const newExistedProduct = {
        ...existedProduct,
        quantity: existedProduct.quantity + 1,
      };
      const newProductInfo = currentProductInfo.map((item, index) => {
        if (index === productDublicateId) {
          return newExistedProduct;
        }
        return item;
      });
      dispatch(setProductInfo(newProductInfo));
    } else {
      const updatedProductInfo = [...currentProductInfo, newProductInfo];
      dispatch(setProductInfo(updatedProductInfo));
    }
  };

  const [slidesPerView, setSlidesPerView] = useState(4);

  useEffect(() => {
    const isMobile = window.matchMedia("(max-width: 768px)").matches;
    if (isMobile) {
      setSlidesPerView(2);
    } else {
      setSlidesPerView(4);
    }

    const handleResize = () => {
      if (window.innerWidth <= 768) {
        setSlidesPerView(2);
      } else {
        setSlidesPerView(4);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <div className="flex justify-between items-center pb-4 py-4">
        <div className="flex items-center gap-2">
          <span className="text-red-500 hidden sm:block">
            <IHotSale width="1.9em" height="1.9em" />
          </span>
          <h1 className="text-base sm:text-3xl font-semibold text-yellow-600 pl-3 md:pl-0">
            Hot Sale
          </h1>
          <span className="pr-5 text-primary-color">
            <IClockAnimation width="1.7em" height="1.7em" />
          </span>
          <CountDown days={1} hours={0} minutes={0} seconds={0} />
        </div>
      </div>
      <div className="card-product-container">
        <Swiper
          slidesPerView={slidesPerView}
          spaceBetween={10}
          modules={[Pagination, Navigation]}
          className="mySwiper"
          navigation={true}
        >
          {dataProduct.items.map((item) => (
            <SwiperSlide key={item.id}>
              <div className="slide w-48 lg:w-56">
                <Link href={`detail-product/${item.slug}`} key={item.id}>
                  <Image
                    src={item.productImage[0].image.url}
                    alt={`${item.name}`}
                    width={0}
                    height={0}
                    sizes="100vw"
                    style={{
                      display: "flex",
                      objectFit: "cover",
                      width: "150px",
                      height: "150px",
                    }}
                    className="img-product"
                  />
                </Link>
                <div className="info_product relative">
                  <div className="price">
                    <p className={`${martel.className} real-price`}>
                      {convertMoney(item.maxMoney)}đ
                    </p>
                    <p className={`${martel.className} sub-price`}>
                      {convertMoney(item.minMoney)}đ
                    </p>
                  </div>
                  <span className="name-product">{item.name}</span>
                  <div className="absolute bottom-0 flex items-center right-2/4 translate-x-2/4">
                    <AddToCartBtn
                      handleClickAdd={() =>
                        handleClickAddCart(
                          item.name,
                          item.maxMoney,
                          item.minMoney,
                          item.productImage[0].image.url,
                          item.slug
                        )
                      }
                    />
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className="flex pt-5 justify-center">
        <MoreBtn link={linkMore} />
      </div>
    </>
  );
}
