"use client";

import Image from "next/image";

import { EffectFade, Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { IBanner } from "../type";
import "./style.scss";

interface BannerProps {
  dataImg: IBanner[];
}
export default function BannerHome({ dataImg }: BannerProps) {
  return (
    <section className="w-full">
      <div className="w-full">
        <Swiper
          navigation
          pagination={{ type: "bullets" }}
          modules={[EffectFade, Autoplay, Pagination, Navigation]}
          className="h-auto w-96 sm:w-full banner-container"
          loop={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          style={{ borderEndEndRadius: "150px" }}
          effect={"fade"}
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
