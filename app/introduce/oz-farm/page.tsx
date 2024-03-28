"use client";
import anKieng from "@/public/images/an-kieng-inde.png";
import australiaMade from "@/public/images/australian-made.png";
import imgBackground from "@/public/images/background.jpg";
import goldAward from "@/public/images/gold.png";
import ozFarmAbout from "@/public/images/ozfarm-about-certification.png";
import ozfarmLogo from "@/public/images/ozfarm-logo.png";
import silverAward from "@/public/images/silver.png";
import AOS from "aos";
import "aos/dist/aos.css";
import Image from "next/image";
import { useEffect } from "react";
import BrandAnimation from "./brand-animation/BrandAnimation";
export default function IntroduceOzFarm() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: false,
    });
  }, []);
  return (
    <div className="container mx-auto px-5 pb-5">
      <div className="flex flex-col items-center gap-10">
        <div className="w-full relative h-52 md:h-96 flex items-center justify-center">
          <Image
            src={imgBackground}
            alt="bg"
            className="w-full h-32 md:h-56 object-cover border border-solid border-sky-500 rounded-lg"
          />
          <div className="h-20 w-20 md:h-72 md:w-72 rounded-full bg-white absolute right-5 md:right-20 flex items-center justify-center border border-solid border-sky-500">
            <Image src={ozfarmLogo} alt="logo-oz" />
          </div>
          <div className="absolute left-10 h-56 flex items-center justify-center">
            <BrandAnimation />
          </div>
        </div>
        <div className="flex flex-col items-center">
          <h1 className="text-secondary-color text-3xl md:text-5xl font-bold uppercase">
            Oz Farm Royal
          </h1>
          <span className="text-secondary-color text-base md:text-xl font-semibold uppercase">
            Dinh dưỡng tự nhiên, tăng cường sức khỏe
          </span>
        </div>

        <div className="flex flex-col items-center justify-end">
          <Image
            src={australiaMade}
            alt="australian-made"
            className="size-40 md:size-72"
          />
          <div
            data-aos="flip-up"
            className="flex flex-col md:flex-row items-center p-5 md:p-24 justify-between gap-5 md:gap-0"
          >
            <div className="flex flex-row md:flex-col items-center basis-1/3 gap-3">
              <span className="w-12 h-12 md:w-20 md:h-20 border-2 border-solid border-secondary-color rounded-full flex items-center justify-center text-md md:text-2xl font-semibold text-secondary-color">
                100%
              </span>
              <span className="text-center text-secondary-color font-semibold">
                Nguồn sữa tự nhiên 100% từ những trang trại bò sữa vùng
                Gippsland, Victoria, Úc
              </span>
            </div>
            <div className="flex flex-row-reverse md:flex-col items-center basis-1/3 gap-3 ">
              <span className="w-12 h-12 md:w-20 md:h-20 border-2 border-solid border-secondary-color rounded-full flex items-center justify-center text-md md:text-2xl font-semibold text-secondary-color">
                100%
              </span>
              <span className="text-center text-secondary-color font-semibold">
                Tất cả chú bò đều được nhận dạng bởi Chương trình nhận dạng vật
                nuôi quốc gia, đảm bảo không mắc bệnh xốp não bò (BSE)
              </span>
            </div>
            <div className="flex flex-row md:flex-col items-center basis-1/3 gap-3">
              <span className="w-12 h-12 md:w-20 md:h-20 border-2 border-solid border-secondary-color rounded-full flex items-center justify-center text-md md:text-2xl font-semibold text-secondary-color">
                100%
              </span>
              <span className="text-center text-secondary-color font-semibold">
                Toàn bộ quy trình được sản xuất 100% tại Úc, mang đến cho khách
                hàng sản phẩm chất lượng nhất
              </span>
            </div>
          </div>

          <p className="indent-7 whitespace-normal text-xl md:text-2xl text-justify rounded-lg">
            Oz Farm là công ty được thành lập lại Úc, chuyên sản xuất các dòng
            sữa bột dinh dưỡng, phục vụ cho nhu cầu cuộc sống, duy trì sức khỏe
            và cho sự phát triển tối ưu, phù hợp cho tất cả các giai đoạn của
            cuộc sống. Điều đặc biệt làm nên thương hiệu Oz Farm ngày hôm nay
            chính là nguồn sữa thơm ngon, dinh dưỡng được lấy từ các trang trại
            bò sữa 100% của Úc, từ vùng Gippsland, Victoria. Bò ở đây được nuôi
            dưỡng trong môi trường quy chuẩn hiện đại bậc nhất, luôn được kiểm
            tra dưới các điều kiện nghiêm ngặt bởi Chương trình nhận dạng vật
            nuôi quốc gia nhằm hạn chế bệnh tật, đảm bảo cung cấp một nguồn sữa
            khỏe mạnh, thơm ngon và bổ dưỡng. Với nhiều dòng sản phẩm đa dạng
            như sữa dành cho mẹ bầu, sữa dành riêng cho trẻ sơ sinh, sữa chăm
            sóc sức khỏe,... giúp sản phẩm trở nên thân thiện, phù hợp với nhiều
            lứa tuổi khác nhau. Bằng những ly sữa bổ dưỡng từ Oz Farm mỗi ngày,
            sức khỏe gia đình luôn được đảm bảo khỏe mạnh, mang đến một tương
            lai vui khỏe, hạnh phúc.
          </p>
        </div>

        <h1 className="text-secondary-color text-3xl md:text-5xl font-bold uppercase pt-10">
          Giải Thưởng Đạt Được
        </h1>
        <div className="flex flex-col items-center gap-10">
          <span className="text-xl md:text-2xl">
            Oz Farm đã đạt được rất nhiều giải thưởng từ hiệp hội DIAA (Hiệp hội
            Công nghiệp sữa Úc), bao gồm:
          </span>
          <div className="flex flex-col items-center shadow-lg bg-white p-10 rounded-lg gap-5">
            <div className="flex flex-row items-center gap-2 md:gap-5 text-xl md:text-3xl ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="1em"
                height="1em"
                viewBox="0 0 20 20"
                className="text-yellow-500"
              >
                <path
                  fill="currentColor"
                  d="M4.46 5.16L5 7.46l-.54 2.29l2.01 1.24L7.7 13l2.3-.54l2.3.54l1.23-2.01l2.01-1.24L15 7.46l.54-2.3l-2-1.24l-1.24-2.01l-2.3.55l-2.29-.54l-1.25 2zm5.55 6.34a3.999 3.999 0 1 1 0-8c2.2 0 3.99 1.79 3.99 3.99c0 2.22-1.79 4.01-3.99 4.01m-.02-1C8.33 10.5 7 9.16 7 7.5c0-1.65 1.33-3 2.99-3S13 5.85 13 7.5c0 1.66-1.35 3-3.01 3m3.84 1.1l-1.28 2.24l-2.08-.47L13 19.2l1.4-2.2h2.5zm-7.7.07l1.25 2.25l2.13-.51L7 19.2L5.6 17H3.1z"
                />
              </svg>
              <span>Giải Vàng Gold Awards</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="1em"
                height="1em"
                viewBox="0 0 20 20"
                className="text-yellow-500"
              >
                <path
                  fill="currentColor"
                  d="M4.46 5.16L5 7.46l-.54 2.29l2.01 1.24L7.7 13l2.3-.54l2.3.54l1.23-2.01l2.01-1.24L15 7.46l.54-2.3l-2-1.24l-1.24-2.01l-2.3.55l-2.29-.54l-1.25 2zm5.55 6.34a3.999 3.999 0 1 1 0-8c2.2 0 3.99 1.79 3.99 3.99c0 2.22-1.79 4.01-3.99 4.01m-.02-1C8.33 10.5 7 9.16 7 7.5c0-1.65 1.33-3 2.99-3S13 5.85 13 7.5c0 1.66-1.35 3-3.01 3m3.84 1.1l-1.28 2.24l-2.08-.47L13 19.2l1.4-2.2h2.5zm-7.7.07l1.25 2.25l2.13-.51L7 19.2L5.6 17H3.1z"
                />
              </svg>
            </div>
            <div data-aos="zoom-in">
              <Image src={goldAward} alt="gold-award" />
            </div>
            <ul className="list-disc text-xl">
              <li>Pregnant Mother Formula năm 2017</li>
              <li>Kid&rsquo;s Care Formula năm 2018</li>
              <li>Instant Skim Milk Powder năm 2020</li>
              <li>Instant Full Cream Milk Powder năm 2019 / 2022</li>
              <li>Gold Baby Formula năm 2023</li>
              <li>Super Platinum Baby Formula năm 2022 / 2023</li>
            </ul>
          </div>
          <div className="flex flex-col items-center shadow-lg bg-white p-10 rounded-lg">
            <div className="flex flex-row items-center gap-2 md:gap-5 text-xl md:text-3xl ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="1em"
                height="1em"
                viewBox="0 0 20 20"
                className="text-neutral-400"
              >
                <path
                  fill="currentColor"
                  d="M4.46 5.16L5 7.46l-.54 2.29l2.01 1.24L7.7 13l2.3-.54l2.3.54l1.23-2.01l2.01-1.24L15 7.46l.54-2.3l-2-1.24l-1.24-2.01l-2.3.55l-2.29-.54l-1.25 2zm5.55 6.34a3.999 3.999 0 1 1 0-8c2.2 0 3.99 1.79 3.99 3.99c0 2.22-1.79 4.01-3.99 4.01m-.02-1C8.33 10.5 7 9.16 7 7.5c0-1.65 1.33-3 2.99-3S13 5.85 13 7.5c0 1.66-1.35 3-3.01 3m3.84 1.1l-1.28 2.24l-2.08-.47L13 19.2l1.4-2.2h2.5zm-7.7.07l1.25 2.25l2.13-.51L7 19.2L5.6 17H3.1z"
                />
              </svg>
              <span>Giải Bạc Silver Awards</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="1em"
                height="1em"
                viewBox="0 0 20 20"
                className="text-neutral-400"
              >
                <path
                  fill="currentColor"
                  d="M4.46 5.16L5 7.46l-.54 2.29l2.01 1.24L7.7 13l2.3-.54l2.3.54l1.23-2.01l2.01-1.24L15 7.46l.54-2.3l-2-1.24l-1.24-2.01l-2.3.55l-2.29-.54l-1.25 2zm5.55 6.34a3.999 3.999 0 1 1 0-8c2.2 0 3.99 1.79 3.99 3.99c0 2.22-1.79 4.01-3.99 4.01m-.02-1C8.33 10.5 7 9.16 7 7.5c0-1.65 1.33-3 2.99-3S13 5.85 13 7.5c0 1.66-1.35 3-3.01 3m3.84 1.1l-1.28 2.24l-2.08-.47L13 19.2l1.4-2.2h2.5zm-7.7.07l1.25 2.25l2.13-.51L7 19.2L5.6 17H3.1z"
                />
              </svg>
            </div>
            <div data-aos="zoom-in">
              <Image src={silverAward} alt="silver-award" />
            </div>
            <ul className="list-disc text-xl">
              <li>Aged Care Formula năm 2020 / 2023</li>
              <li>Kid&rsquo;s Care Formula năm 2020 / 2022 / 2023</li>
              <li>Pregnant Mother Formula năm 2020 / 2022 / 2023</li>
              <li>Super Platinum Baby Formula năm 2022 / 2023</li>
              <li>Gold Baby Formula năm 2023</li>
              <li>Lactoferrin Milk Powder năm 2020</li>
            </ul>
          </div>
        </div>

        <h1 className="text-secondary-color text-3xl md:text-5xl font-bold uppercase pt-10">
          Nghiên cứu & Phát triển
        </h1>
        <div className="flex flex-col gap-5 items-center shadow-lg bg-white p-10 rounded-lg gap-5 text-xl">
          <span>
            Nhóm nghiên cứu & phát triển Dinh dưỡng của Oz Farm tập trung vào
            nhu cầu dinh dưỡng cho:
          </span>
          <ul className="list-disc">
            <li>Trẻ sơ sinh - Trẻ sơ sinh 0-6 tháng, Trẻ sơ sinh 6-12 tháng</li>
            <li>Trẻ mới biết đi 1-3 tuổi</li>
            <li>Trẻ em 1-10 tuổi</li>
            <li>Người lớn - tất cả các giai đoạn cần bổ sung dinh dưỡng </li>
            <li>Sản phẩm sữa dành cho người dân nói chung</li>
          </ul>
          <p>
            Oz Farm hợp tác với Hiệp hội Công nghiệp Sữa Úc (DIAA), Dairy
            Innovation Australia, các trường đại học Úc, các chuyên gia dinh
            dưỡng và sữa quốc tế hàng đầu chođang diễn raphát triển công thức
            công thức dinh dưỡng. Nhóm R&D của chúng tôi liên tục đánh giá và
            xây dựng các công thức nấu ăn để xem xét các xu hướng thực phẩm hiện
            tại và mới nổi, bao gồm:
          </p>
          <ul className="list-disc">
            <li>chất gây dị ứng</li>
            <li>Chế độ ăn kiêng cần thiết đặc biệt</li>
            <li>Tùy chọn hữu cơ</li>
          </ul>
        </div>
        <h1 className="text-secondary-color text-3xl md:text-5xl font-bold uppercase pt-10">
          Thông tin xác thực
        </h1>
        <div className="flex flex-col items-center text-xl">
          <p>
            Để đáp ứng nhu cầu chính xác của khách hàng, chúng tôi cố gắng đạt
            được sự xuất sắc và chứng nhận về chất lượng sản xuất và chế biến.
            Chứng nhận của chúng tôi bao gồm;
          </p>
          <div>
            <ul className="text-xl list-disc">
              <li>Halal (Sữa lạc đà không phải là sản phẩm Halal.)</li>
              <li>đồ ăn kiêng</li>
            </ul>
            <div className="flex flex-row w-full">
              <Image
                src={ozFarmAbout}
                alt="oz-farm-about"
                className="w-52 md:w-96"
              />
              <Image src={anKieng} alt="an-kieng" className="w-20 md:w-40" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
