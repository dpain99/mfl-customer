import { sairaStencilOne } from "@/fonts/font";
import "./style.scss";
import SocialBtn from "@/app/components/social-btn/SocialBtn";
import SocialBtn2 from "@/app/components/social-btn-2/SocialBtn2";
export default function FooterWeb() {
  return (
    <div className="footer-container flex flex-col w-full mt-20 relative">
      {/* destop */}
      <div className="w-full hidden lg:flex">
        <div className="basis-1/3 pl-5">
          <div className="h-0.5 w-full bg-black mt-5"></div>
          <div className="flex flex-col pt-20 items-center h-full gap-5">
            <span className="uppercase font-semibold">Chính sách bảo mật</span>
            <span className="uppercase font-semibold">Quy định bảo hành</span>
            <span className="uppercase font-semibold">Chính sách đổi trả</span>
          </div>
        </div>

        <div className="basis-1/3 flex flex-col items-center">
          <div className="flex flex-col items-center">
            <span
              className={`${sairaStencilOne.className} text-2xl lg:text-5xl tracking-wider`}
            >
              MEDI FAST LINKS
            </span>
            <span className="text-xl">Hàng Úc Nhập Khẩu</span>
          </div>
          <div className="pt-12">
            <SocialBtn />
          </div>
          <div className="h-20 w-0.5 bg-black mt-10"></div>
          <div className="flex flex-col items-center pt-10">
            <span>Đăng ký nhận bản tin</span>
            <div className="relative mt-6">
              <input
                type="email"
                placeholder="Email address"
                autoComplete="email"
                aria-label="Email address"
                className="block w-full rounded-2xl border border-neutral-300 bg-transparent py-4 pl-6 pr-20 text-base/6 text-neutral-950 ring-4 ring-transparent transition placeholder:text-neutral-500 focus:border-neutral-950 focus:outline-none focus:ring-neutral-950/5"
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

        <div className="basis-1/3 pr-5">
          <div className="h-0.5 w-full bg-black mt-5"></div>
          <div className="flex flex-col pt-20 items-center h-full gap-5">
            <span className="uppercase font-semibold">Về Medi Fast Links</span>
            <span className="uppercase font-semibold">Địa Điểm Showroom</span>
            <span className="uppercase font-semibold">Liên Hệ Chúng Tôi</span>
          </div>
        </div>
      </div>

      {/* mobile */}
      <div className="hidden max-sm:flex flex-col items-center">
        <div className="flex items-center w-full justify-between">
          <div className="h-0.5 bg-black w-full ml-2"></div>
          <span
            className={`${sairaStencilOne.className} text-2xl tracking-wider text-nowrap pl-3 pr-3`}
          >
            MEDI FAST LINKS
          </span>
          <div className="h-0.5 bg-black w-full mr-2"></div>
        </div>
        <div className="flex flex-col gap-4 items-center pt-10">
          <span className="uppercase font-semibold">Về Medi Fast Links</span>
          <span className="uppercase font-semibold">Địa Điểm Showroom</span>
          <span className="uppercase font-semibold">Liên Hệ Chúng Tôi</span>
          <span className="uppercase font-semibold">Chính sách bảo mật</span>
          <span className="uppercase font-semibold">Quy định bảo hành</span>
          <span className="uppercase font-semibold">Chính sách đổi trả</span>
          <SocialBtn2 />
          <span>Đăng ký nhận bản tin</span>
          <div className="relative">
            <input
              type="email"
              placeholder="Email address"
              autoComplete="email"
              aria-label="Email address"
              className="block w-full rounded-2xl border border-neutral-300 bg-transparent py-4 pl-6 pr-20 text-base/6 text-neutral-950 ring-4 ring-transparent transition placeholder:text-neutral-500 focus:border-neutral-950 focus:outline-none focus:ring-neutral-950/5"
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
      <div className="absolute bottom-0 w-full border-t-2 mt-14 flex justify-center items-center p-3">
        <span className="text-xs md:text-sm">
          Copyright © 2024 Medi Fast Links - Hàng Úc Nhập Khẩu | Sữa Bột | Mỹ
          Phẩm | Vitamin - www.medifastlinks.vn
        </span>
      </div>
    </div>
  );
}
