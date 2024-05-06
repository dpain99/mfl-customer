"use client";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import "./style.scss";

import AddToCartBtn from "@/app/components/add-to-cart-btn/AddToCartBtn";
import CountDown from "@/app/components/count-down/CountDown";
import MoreBtn from "@/app/components/more-btn/MoreBtn";
import { martel } from "@/fonts/font";
import { convertMoney } from "@/lib/convertMoney";
import IFlowerAnimation from "@/public/icon/IFlowerAnimation";
import { openCart, setProductInfo } from "@/redux/slices/showCart";
import { RootState } from "@/redux/store";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigation, Pagination } from "swiper/modules";
import { IProduct } from "../type";
import { LightenColor } from "@/lib/lightColor";

interface ICardProductCarouselProps {
  linkMore: string;
  dataProduct: IProduct[];
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
        <div className="flex flex-col items-center justify-center gap-2 w-full pb-10">
          <section className="flex flex-row gap-0 items-center justify-center">
            <span>
              <IFlowerAnimation width="2.5em" height="2.5em" />
            </span>
            <span>
              <IFlowerAnimation width="3em" height="3em" />
            </span>
            <span>
              <IFlowerAnimation width="3.5em" height="3.5em" />
            </span>
            <span>
              <IFlowerAnimation width="4em" height="4em" />
            </span>
            <h1 className="text-base sm:text-4xl font-semibold text-yellow-600 pl-3 md:pl-0">
              Hot Sale
            </h1>
            <span>
              <IFlowerAnimation width="4em" height="4em" />
            </span>
            <span>
              <IFlowerAnimation width="3.5em" height="3.5em" />
            </span>
            <span>
              <IFlowerAnimation width="3em" height="3em" />
            </span>
            <span>
              <IFlowerAnimation width="2.5em" height="2.5em" />
            </span>
          </section>

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
          pagination={{ type: "progressbar" }}
        >
          {dataProduct.map((item) => (
            <SwiperSlide key={item.id}>
              <div className="slide w-48 lg:w-72 shadow-lg relative rounded-lg">
                <Link
                  href={`detail-product/${item.slug}`}
                  key={item.id}
                  className={`link-img-${item.id} w-full h-2/3 flex justify-center items-center transition-colors duration-500 ease-in-out rounded-lg`}
                >
                  <style>
                    {`
                    .link-img-${item.id} {
                      background-color: ${
                        LightenColor(item.productVariant[0].color || "", 150) ||
                        ""
                      };
                    }
                    .link-img-${item.id}:hover {
                      background-color: ${item.productVariant[0].color};
                    }`}
                  </style>
                  <Image
                    src={item.productImage[0].image.url}
                    alt={`${item.name}`}
                    width={0}
                    height={0}
                    sizes="100vw"
                    style={{
                      display: "flex",
                      objectFit: "cover",
                      width: "170px",
                      height: "230px",
                    }}
                    className="img-product"
                  />
                </Link>
                <div className="info_product">
                  <div className="price">
                    <p
                      className={`${martel.className} real-price text-base lg:text-xl`}
                    >
                      {convertMoney(item.productVariant[0].price)}đ
                    </p>
                    <p
                      className={`${martel.className} sub-price text-base lg:text-xl`}
                    >
                      {convertMoney(item.productVariant[0].salePrice)}đ
                    </p>
                  </div>
                  <span className="name-product leading-6">{item.name}</span>
                  <div className="absolute bottom-1 flex items-center right-2/4 translate-x-2/4">
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
