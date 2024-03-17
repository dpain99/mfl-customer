"use client";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import "./style.scss";

import AddToCartBtn from "@/app/components/add-to-cart-btn/AddToCartBtn";
import MoreBtn from "@/app/components/more-btn/MoreBtn";
import { martel } from "@/fonts/font";
import { openCart, setProductInfo } from "@/redux/slices/showCart";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigation, Pagination } from "swiper/modules";
import { IProductListResponse } from "@/app/home/type";

interface CategoryProductCarouselProps {
  linkMore: string;
  dataProduct?: IProductListResponse;
}
export default function CategoryProductCarousel({
  linkMore,
  dataProduct,
}: CategoryProductCarouselProps) {
  const dispatch = useDispatch();
  const currentProductInfo =
    useSelector((state: any) => state.showCart.infoProduct) || [];
  const handleClickAddCart = (
    name: string,
    maxMoney: number,
    minMoney: number,
    url: string
  ) => {
    dispatch(openCart());
    const newProductInfo = {
      img: url,
      title: name,
      price: minMoney | maxMoney,
    };
    const updatedProductInfo = [...currentProductInfo, newProductInfo];
    dispatch(setProductInfo(updatedProductInfo));
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
    <div className="category-product-container">
      <Swiper
        slidesPerView={slidesPerView}
        spaceBetween={10}
        modules={[Pagination, Navigation]}
        className="mySwiper"
        navigation={true}
      >
        {dataProduct?.items.map((item) => (
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
                    {item.maxMoney}đ
                  </p>
                  <p className={`${martel.className} sub-price`}>
                    {item.minMoney}đ
                  </p>
                </div>
                <span className="name-product">{item.name}</span>
                <div className="flex items-center justify-center py-2">
                  <AddToCartBtn
                    handleClickAdd={() =>
                      handleClickAddCart(
                        item.name,
                        item.maxMoney,
                        item.minMoney,
                        item.productImage[0].image.url
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
  );
}
