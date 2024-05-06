"use client";

import Image from "next/image";

import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { IBanner } from "../type";
import "./style.scss";

interface BannerProps {
  dataImg: IBanner[];
}
export default function Banner({ dataImg }: BannerProps) {
  return (
    <section className="w-full">
      <div className="w-full">
        <Swiper
          navigation
          pagination={{ type: "bullets" }}
          modules={[Navigation, Pagination]}
          className="h-auto w-96 sm:w-full banner-container"
          loop={true}
          autoplay={true}
          style={{ borderEndEndRadius: "150px" }}
        >
          {dataImg &&
            dataImg.length &&
            dataImg.map((items, index) => (
              <SwiperSlide key={index}>
                <div className="flex h-full items-center justify-center">
                  <Image
                    src={`${items.actionLink || items.image.url}`}
                    alt={items.name}
                    className="block w-full h-full object-cover"
                    width={0}
                    height={0}
                    sizes="100vw"
                    // style={{ width: "100%", height: "auto" }}
                  />
                </div>
              </SwiperSlide>
            ))}
        </Swiper>
      </div>
    </section>
  );
}
