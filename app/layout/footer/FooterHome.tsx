"use client";
import Link from "next/link";
import "./style.scss";
import SocialBtn2 from "@/app/components/social-btn-2/SocialBtn2";
import { sairaStencilOne } from "@/fonts/font";

export default function FooterHome() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="bg-primary-color footer-container w-full relative z-20 flex justify-center items-center flex-col">
      <div className="concave-triangle w-36 h-10 absolute left-1/2 transform top-0 -translate-x-1/2"></div>
      <div
        className="btn-to-top absolute left-1/2 transform -translate-x-1/2 top-2 p-5 rounded-full"
        onClick={scrollToTop}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="1em"
          height="1em"
          viewBox="0 0 256 256"
          color="white"
        >
          <path
            fill="currentColor"
            d="M216.49 191.51a12 12 0 0 1-17 17L128 137l-71.51 71.49a12 12 0 0 1-17-17l80-80a12 12 0 0 1 17 0Zm-160-63L128 57l71.51 71.52a12 12 0 0 0 17-17l-80-80a12 12 0 0 0-17 0l-80 80a12 12 0 0 0 17 17Z"
          />
        </svg>
      </div>
      <div className="grid grid-cols-4 gap-2 text-white pt-40 pb-20 container px-4 text-sm hidden lg:grid">
        <div className="flex flex-col">
          <span className="uppercase text-lg font-semibold ">
            <span className="text-secondary-color ">|</span> Cửa Hàng
          </span>
          <ul className="pt-10 list-outside flex flex-col gap-2 justify-center ">
            <li className="flex flex-row items-center gap-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="1.5em"
                height="1.5em"
                viewBox="0 0 48 48"
              >
                <path
                  fill="currentColor"
                  d="M39.015 28.98A16.9 16.9 0 0 0 41 21c0-9.389-7.611-17-17-17S7 11.611 7 21a16.92 16.92 0 0 0 4 10.955l.02.025l.018.02H11l10.088 10.71a4 4 0 0 0 5.823 0L37 32h-.038l.016-.019l.002-.002q.108-.129.215-.26a17 17 0 0 0 1.82-2.74m-15.01-1.48a6 6 0 1 1 0-12a6 6 0 0 1 0 12"
                />
              </svg>
              63 Cổ Linh, Thạch Bàn, Long Biên, Hà Nội
            </li>
            <li className="flex flex-row items-center gap-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="1.5em"
                height="1.5em"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="m19.23 15.26l-2.54-.29a1.99 1.99 0 0 0-1.64.57l-1.84 1.84a15.045 15.045 0 0 1-6.59-6.59l1.85-1.85c.43-.43.64-1.03.57-1.64l-.29-2.52a2.001 2.001 0 0 0-1.99-1.77H5.03c-1.13 0-2.07.94-2 2.07c.53 8.54 7.36 15.36 15.89 15.89c1.13.07 2.07-.87 2.07-2v-1.73c.01-1.01-.75-1.86-1.76-1.98"
                />
              </svg>
              0973.022.282
            </li>
            <li className="flex flex-row items-center gap-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="1.5em"
                height="1.5em"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="M22 6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2zm-2 0l-8 5l-8-5zm0 12H4V8l8 5l8-5z"
                />
              </svg>
              medifastlinks.jsc@gmail.com
            </li>
            <li className="flex flex-row items-center gap-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="1.5em"
                height="1.5em"
                viewBox="0 0 24 24"
              >
                <g fill="none">
                  <path d="M24 0v24H0V0zM12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035c-.01-.004-.019-.001-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427c-.002-.01-.009-.017-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093c.012.004.023 0 .029-.008l.004-.014l-.034-.614c-.003-.012-.01-.02-.02-.022m-.715.002a.023.023 0 0 0-.027.006l-.006.014l-.034.614c0 .012.007.02.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z" />
                  <path
                    fill="currentColor"
                    d="M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12S6.477 2 12 2m0 2a8 8 0 1 0 0 16a8 8 0 0 0 0-16m0 2a1 1 0 0 1 .993.883L13 7v4.586l2.707 2.707a1 1 0 0 1-1.32 1.497l-.094-.083l-3-3a1 1 0 0 1-.284-.576L11 12V7a1 1 0 0 1 1-1"
                  />
                </g>
              </svg>
              8:00 - 17:00, Thứ Hai - Thứ Sáu
            </li>
          </ul>
        </div>
        <div className="flex flex-col">
          <span className="uppercase text-lg font-semibold">
            <span className="text-secondary-color ">|</span> Thông tin
          </span>
          <ul className="pt-10 flex flex-col gap-2 list-disc list-inside">
            <li className="capitalize">
              <Link href={"/"}>Về chúng tôi</Link>
            </li>
            <li>
              <Link href={"/contact"}>
                <span className="cursor-pointer capitalize">
                  Địa Điểm Showroom
                </span>
              </Link>
            </li>
            <li>
              <Link href={"/contact"}>
                <span className="cursor-pointer capitalize">
                  Liên Hệ Chúng Tôi
                </span>
              </Link>
            </li>
            <li>
              <Link href={"/contact"}>
                <span className="cursor-pointer capitalize">Sản phẩm sale</span>
              </Link>
            </li>
          </ul>
        </div>
        <div className="flex flex-col ">
          <span className="uppercase text-lg font-semibold">
            <span className="text-secondary-color ">|</span> Dịch Vụ khách hàng
          </span>
          <ul className="pt-10 list-inside flex flex-col gap-2 list-disc">
            <li>
              <Link href={"/policy/private-policy"}>
                <span className=" cursor-pointer capitalize">
                  Chính sách bảo mật
                </span>
              </Link>
            </li>
            <li>
              <Link href={"/policy/warranty-provisions"}>
                <span className="cursor-pointer capitalize">
                  Quy định bảo hành
                </span>
              </Link>
            </li>
            <li>
              <Link href={"/policy/return-policy"}>
                <span className=" cursor-pointer capitalize">
                  Chính sách đổi trả
                </span>
              </Link>
            </li>
            <li>
              <Link href={"/policy/return-policy"}>
                <span className=" cursor-pointer capitalize">
                  Tài khoản của tôi
                </span>
              </Link>
            </li>
          </ul>
        </div>
        <div className="flex flex-col ">
          <span className="uppercase text-lg font-semibold">
            <span className="text-secondary-color  ">|</span> Đăng ký bản tin
          </span>
          <p className="pt-10">
            Đăng ký danh sách để nhận thông tin cập nhật về hàng mới về, ưu đãi
            đặc biệt và thông tin giảm giá khác.
          </p>
          <div className="flex flex-col">
            <div className="relative mt-6">
              <input
                type="email"
                placeholder="Email address"
                autoComplete="email"
                aria-label="Email address"
                className="block w-full rounded-2xl border border-neutral-300 bg-transparent py-3 pl-6 pr-20 text-base/6 text-neutral-950 ring-4 ring-transparent transition placeholder:text-neutral-500 focus:border-neutral-950 focus:outline-none focus:ring-neutral-950/5"
              />
              <div className="absolute inset-y-1 right-1 flex justify-end">
                <button
                  type="submit"
                  aria-label="Submit"
                  className="flex aspect-square h-full items-center justify-center rounded-xl bg-neutral-950 text-white transition hover:bg-neutral-800"
                >
                  <svg viewBox="0 0 16 6" aria-hidden="true" className="w-4">
                    <path
                      fill="currentColor"
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M16 3 10 .5v2H0v1h10v2L16 3Z"
                    ></path>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* mobile */}
      <div className="hidden max-sm:flex flex-col items-center pt-20">
        <div className="flex flex-col gap-4 items-center pt-10">
          <Link href={"/about-us"}>
            <span className="uppercase font-semibold">Về Medi Fast Links</span>
          </Link>
          <Link href={"/contact"}>
            <span className="uppercase font-semibold">Địa Điểm Showroom</span>
          </Link>
          <Link href={"/contact"}>
            <span className="uppercase font-semibold">Liên Hệ Chúng Tôi</span>
          </Link>
          <Link href={"/policy/private-policy"}>
            <span className="uppercase font-semibold">Chính sách bảo mật</span>
          </Link>
          <Link href={"/policy/warranty-provisions"}>
            <span className="uppercase font-semibold">Quy định bảo hành</span>
          </Link>
          <Link href={"/return-policy"}>
            <span className="uppercase font-semibold">Chính sách đổi trả</span>
          </Link>
          <SocialBtn2 />
          <span>Đăng ký nhận bản tin</span>
          <div className="relative">
            <input
              type="email"
              placeholder="Email address"
              autoComplete="email"
              aria-label="Email address"
              className="block w-full rounded-2xl border border-neutral-300 bg-transparent py-2 pl-6 pr-20 text-base/6 text-neutral-950 ring-4 ring-transparent transition placeholder:text-neutral-500 focus:border-neutral-950 focus:outline-none focus:ring-neutral-950/5"
            />
            <div className="absolute inset-y-1 right-1 flex justify-end">
              <button
                type="submit"
                aria-label="Submit"
                className="flex aspect-square h-full items-center justify-center rounded-xl bg-neutral-950 text-white transition hover:bg-neutral-800"
              >
                <svg viewBox="0 0 16 6" aria-hidden="true" className="w-4">
                  <path
                    fill="currentColor"
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M16 3 10 .5v2H0v1h10v2L16 3Z"
                  ></path>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>

      <div
        className="w-full border-t-2 flex justify-center items-center p-2 text-white"
        style={{ backgroundColor: "#8c805d" }}
      >
        <span className="text-xs md:text-sm">
          Copyright © 2024 Medi Fast Links - Hàng Úc Nhập Khẩu | Sữa Bột | Mỹ
          Phẩm | Vitamin - www.medifastlinks.vn
        </span>
      </div>
    </div>
  );
}
