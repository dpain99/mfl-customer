"use client";

import Image from "next/image";

import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { IBanner } from "../type";

interface BannerProps {
  dataImg: IBanner[];
}
export default function Banner({ dataImg }: BannerProps) {
  console.log("dataImg", dataImg);
  return (
    <section className="py-12">
      <div className="container">
        <Swiper
          navigation
          pagination={{ type: "fraction" }}
          modules={[Navigation, Pagination]}
          onSwiper={(swiper) => console.log(swiper)}
          className="h-auto w-full rounded-lg"
        >
          {dataImg &&
            dataImg.length &&
            dataImg.map((items, index) => (
              <SwiperSlide key={index}>
                <div className="flex h-full w-full items-center justify-center">
                  <Image
                    src={`${items.actionLink || items.image.url}`}
                    alt={items.name}
                    className="block h-full w-full object-cover"
                    width={0}
                    height={0}
                    sizes="100vw"
                    style={{ width: "100%", height: "auto" }}
                  />
                </div>
              </SwiperSlide>
            ))}
        </Swiper>
      </div>
    </section>
  );
}
