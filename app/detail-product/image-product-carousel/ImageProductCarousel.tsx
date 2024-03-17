"use client";

import Image from "next/image";

import { FreeMode, Navigation, Thumbs } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Product } from "@/lib/interface";
import { useState } from "react";
import "./style.scss";

interface ImageProductCarouselProps {
  dataImg: Product | null;
}
export default function ImageProductCarousel({
  dataImg,
}: ImageProductCarouselProps) {
  const [thumbsSwiper, setThumbsSwiper] = useState<any>();
  return (
    <div className="container">
      <Swiper
        loop={true}
        spaceBetween={10}
        navigation={true}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[FreeMode, Navigation, Thumbs]}
        className="h-full w-full rounded-lg"
      >
        {dataImg &&
          dataImg.productImage.length &&
          dataImg.productImage.map((items) => (
            <SwiperSlide key={items.id}>
              <div className="flex h-full w-full items-center justify-center">
                <Image
                  src={`${items.image.url}`}
                  alt={items.image.key}
                  className="block object-cover"
                  width={0}
                  height={0}
                  sizes="100vw"
                  style={{ width: "100%", height: "100%" }}
                />
              </div>
            </SwiperSlide>
          ))}
      </Swiper>
      <Swiper
        onSwiper={(swiper) => setThumbsSwiper(swiper)}
        loop={true}
        spaceBetween={10}
        slidesPerView={4}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mt-5 swiper-bottom"
      >
        {dataImg &&
          dataImg.productImage.length &&
          dataImg.productImage.map((items) => (
            <SwiperSlide key={items.id} className="">
              <Image
                src={`${items.image.url}`}
                alt={items.image.key}
                className="block h-full w-full object-cover"
                width={0}
                height={0}
                sizes="100vw"
                style={{ width: "100%", height: "auto" }}
              />
            </SwiperSlide>
          ))}
      </Swiper>
    </div>
  );
}
