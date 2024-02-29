"use client";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import "./style.scss";

import { martel } from "@/fonts/font";
import imgProduct from "@/public/images/sleepwell.png";
import Image from "next/image";
import { Navigation, Pagination } from "swiper/modules";
import MoreBtn from "@/app/components/more-btn/MoreBtn";

export default function CardProductCarousel() {
  return (
    <>
      <div className="flex justify-between items-center pb-4 pl-4 pr-4">
        <div className="flex items-center gap-2">
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="1.9em"
              height="1.9em"
              viewBox="0 0 128 128"
            >
              <path
                fill="#fff"
                d="M72.9 72.09c.37.37 21.81-17.86 21.81-17.86l2.22-30.53l-18.51 7.97l-31.24-1.23l-15.68-7.11l2.45 29.96c-.01 0 38.59 18.44 38.95 18.8"
                opacity="0.5"
              />
              <path
                fill="#e0e0e0"
                d="M62.69 5.93L46.82 7.46l-11.97 4.32l-6.68 6.96l7.24 84.08l-.14 10.58s8.49 11 28.54 11s29.79-10.02 29.79-10.02l-.14-10.86L100 19.57l-4.73-6.82l-17.96-5.71z"
                opacity="0.7"
              />
              <path
                fill="#c0c0c0"
                d="M33.88 53.25c0 2.73 3.48 50.39 5.01 52.9c1.53 2.51 9.54 10.35 25.13 10.07s25.12-7.15 25.95-9.52c.84-2.37 4.73-52.48 4.73-52.48s-.42-5.43-11.69-9.19s-25.34-2.97-32.43-1.53c-8.91 1.82-16.7 6.69-16.7 9.75"
              />
              <path
                fill="#fcf9e9"
                d="m38.95 62.63l-3.04-5.98s-.06-1.77.18-2.83s2.05-6.04 13.87-8.4c9.38-1.88 21.29-1.71 29.94.65c5.86 1.6 11.6 4.71 12.39 7.8c.9 3.51-.65 5.01-.65 5.01l-5.87 9.38l-42.91-.57z"
              />
              <path
                fill="#f0e7ba"
                d="M40.75 104.8c.38 1.29 6.44 8.81 22.92 8.81s23.82-6.12 23.98-7.51s4.81-49.03 4.81-49.03s-6.77 8.81-28.31 8.4s-28.23-8.86-28.23-8.86s4.42 46.81 4.83 48.19"
              />
              <path
                fill="#fff"
                d="M42.13 38.15c-2.36.15-3.59 1.96-3.1 5.71c.33 2.52.98 5.22 4.32 4.89c3.38-.33 3.48-3.86 3.1-5.87c-.56-3.01-1.7-4.89-4.32-4.73m1.15 12.08c-2.28.18-3.02 1.55-2.69 5.63c.43 5.39 3.18 39.24 3.43 42.18c.24 2.94 1.55 4 3.34 4c1.79 0 3.26-1.79 3.18-3.83c-.08-2.04-3.18-40.55-3.43-42.75c-.24-2.21-.65-5.48-3.83-5.23M38.46 109c-.68 1.77 1.68 5.39 6.37 7.8c5.23 2.69 11.08 2.28 11.18.08c.1-2.32-3.51-1.7-8.97-4.32c-4.52-2.17-7.52-6.34-8.58-3.56"
              />
              <path
                fill="#d5d5d5"
                d="M66.18 119.49c-.21 1.74 8.75 1.14 15.61-1.22c7.8-2.69 10.09-6.5 9.19-7.81c-.9-1.31-2.71 2.08-10.42 4.59c-10.68 3.45-14.07 1.8-14.38 4.44"
              />
              <path
                fill="#c8c8c8"
                d="M65.13 34.26h-.71c-22.48-.14-30.9-6.03-33.92-9.68c-1.96-2.38-2.6-4.97-2.13-7.49v-.08c2.26-6.75 15-12.75 35.7-12.83c23.33-.09 35.29 8.14 35.87 13.75c.18 1.8-.15 4.95-2.83 7.77c-4.88 5.11-16.43 8.56-31.98 8.56m-32-16.35c-.31 1.65-.39 3 1.02 4.7c2.16 2.61 8.2 7.98 30.25 8.12h.74c19.76 0 26.07-4.35 28.71-7.26c1.48-1.63 2.06-3.07 1.89-4.79c-.39-3.69-10.14-10.75-31.42-10.63c-22.66.12-30.35 5.86-31.08 9.74z"
              />
              <path
                fill="#fff"
                d="M35.86 13.87c-.45-.48-2.07-.17-3.39 1.36c-1.17 1.36-2.73 4.16-.43 7.33c2.32 3.19 9.55 9.12 33.21 9.43c21.38.28 31.61-7.02 31.91-11.95s-2.77-4.81-2.77-4.13s.64 2.05.43 3.7c-.25 1.9-4.99 10.03-29.82 10.09c-23.78.06-31.56-7.64-31.48-10.1c.12-3.82 3.33-4.68 2.34-5.73"
              />
            </svg>
          </span>
          <h1 className="text-3xl font-semibold">Sữa Oz Farm</h1>
        </div>
        <div></div>
      </div>
      <div className="card-product-container">
        <Swiper
          slidesPerView={4}
          spaceBetween={10}
          modules={[Pagination, Navigation]}
          className="mySwiper"
          navigation={true}
        >
          <SwiperSlide>
            <div className="slide w-48 lg:w-56">
              <Image
                src={imgProduct}
                alt={`asdsa`}
                style={{
                  display: "flex",
                  objectFit: "cover",
                  width: "150px",
                  height: "150px",
                }}
                className="img-product"
              />
              <div className="info_product">
                <div className="price">
                  <p className={martel.className}>{"asdas"}đ</p>
                  <p className={martel.className}>{"asdas"}đ</p>
                </div>

                <span>{"jasdasd"}</span>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="slide w-48 lg:w-56">
              <Image
                src={imgProduct}
                alt={`asdsa`}
                style={{
                  display: "flex",
                  objectFit: "cover",
                  width: "150px",
                  height: "150px",
                }}
                className="img-product"
              />
              <div className="info_product">
                <div className="price">
                  <p className={martel.className}>{"asdas"}đ</p>
                  <p className={martel.className}>{"asdas"}đ</p>
                </div>

                <span>{"jasdasd"}</span>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="slide w-48 lg:w-56">
              <Image
                src={imgProduct}
                alt={`asdsa`}
                style={{
                  display: "flex",
                  objectFit: "cover",
                  width: "150px",
                  height: "150px",
                }}
                className="img-product"
              />
              <div className="info_product">
                <div className="price">
                  <p className={martel.className}>{"asdas"}đ</p>
                  <p className={martel.className}>{"asdas"}đ</p>
                </div>

                <span>{"jasdasd"}</span>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="slide w-48 lg:w-56">
              <Image
                src={imgProduct}
                alt={`asdsa`}
                style={{
                  display: "flex",
                  objectFit: "cover",
                  width: "150px",
                  height: "150px",
                }}
                className="img-product"
              />
              <div className="info_product">
                <div className="price">
                  <p className={martel.className}>{"asdas"}đ</p>
                  <p className={martel.className}>{"asdas"}đ</p>
                </div>

                <span>{"jasdasd"}</span>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="slide w-48 lg:w-56">
              <Image
                src={imgProduct}
                alt={`asdsa`}
                style={{
                  display: "flex",
                  objectFit: "cover",
                  width: "150px",
                  height: "150px",
                }}
                className="img-product"
              />
              <div className="info_product">
                <div className="price">
                  <p className={martel.className}>{"asdas"}đ</p>
                  <p className={martel.className}>{"asdas"}đ</p>
                </div>

                <span>{"jasdasd"}</span>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
      <div className="flex pt-5 justify-center">
        <MoreBtn />
      </div>
    </>
  );
}
