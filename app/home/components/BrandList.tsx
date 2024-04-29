"use client";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import ozFarmLogo from "@/public/images/ozfarm-logo.png";
import pentaviteLogo from "@/public/images/images.png";
import eukyBearLogo from "@/public/images/euky_bear.webp";
import Image from "next/image";
export default function BrandList() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
    });
  }, []);
  return (
    <div className="flex flex-col items-center">
      <h2 className="font-semibold text-xl text-secondary-color">
        Thương Hiệu Nổi Bật
      </h2>
      <section className="flex flex-row gap-2 shadow-lg p-5 items-center">
        <div className="basis-1/3 flex justify-center " data-aos="flip-left">
          <Image src={ozFarmLogo} alt="oz-farm" className="w-1/2" />
        </div>
        <div className="basis-1/3 flex justify-center" data-aos="flip-left">
          <Image src={pentaviteLogo} alt="pentavite" className="w-3/4" />
        </div>
        <div className="basis-1/3 flex justify-center" data-aos="flip-left">
          <Image src={eukyBearLogo} alt="euky-bear" className="w-3/4" />
        </div>
      </section>
    </div>
  );
}
