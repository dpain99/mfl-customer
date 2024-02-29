"use client";
import AddToCartBar from "@/app/add-to-cart-bar/AddToCartBar";
import SearchInput from "@/app/components/search-input/SearchInput";
import SocialBtn2 from "@/app/components/social-btn-2/SocialBtn2";
import logoImg from "@/public/images/logo.png";
import Image from "next/image";
import Link from "next/link";
import HotLine from "./hot-line/HotLine";
import "./style.scss";
import { useState } from "react";
import MenuBar from "./menu-bar/MenuBar";
export default function MainHeader() {
  const [openMenu, setOpenMenu] = useState<boolean>(false);
  const handleClickMenu = () => {
    setOpenMenu(!openMenu);
  };
  return (
    <>
      <header className="page-header h-12 md:h-16 shadow-lg lg:shadow-none">
        <AddToCartBar />
        <div className="container mx-auto px-4">
          <div className="flex flex-row">
            <div className="flex basis-1/3 justify-start items-center gap-10 ">
              <HotLine />
              <div className="hidden lg:block">
                <SocialBtn2 />
              </div>
            </div>
            <div className="flex basis-1/3 justify-center items-center">
              <Link href="/">
                <Image
                  src={logoImg}
                  alt="logo-medi-fast-links"
                  className="size-10 sm:size-16"
                />
              </Link>
            </div>
            <div className="flex basis-1/3 justify-end items-center gap-4 sm:gap-10">
              <div className="hidden lg:flex">
                <SearchInput />
              </div>
              <Link href={"/cart"}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="2em"
                  height="2em"
                  viewBox="0 0 24 24"
                >
                  <g
                    fill="none"
                    stroke="currentColor"
                    strokeLinejoin="round"
                    strokeWidth="2"
                  >
                    <path d="M5 7h13.79a2 2 0 0 1 1.99 2.199l-.6 6A2 2 0 0 1 18.19 17H8.64a2 2 0 0 1-1.962-1.608z" />
                    <path
                      strokeLinecap="round"
                      d="m5 7l-.81-3.243A1 1 0 0 0 3.22 3H2m6 18h2m6 0h2"
                    />
                  </g>
                </svg>
              </Link>
              <div className="hidden lg:block">
                {" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="1.7em"
                  height="1.7em"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    d="M12 19.2c-2.5 0-4.71-1.28-6-3.2c.03-2 4-3.1 6-3.1s5.97 1.1 6 3.1a7.232 7.232 0 0 1-6 3.2M12 5a3 3 0 0 1 3 3a3 3 0 0 1-3 3a3 3 0 0 1-3-3a3 3 0 0 1 3-3m0-3A10 10 0 0 0 2 12a10 10 0 0 0 10 10a10 10 0 0 0 10-10c0-5.53-4.5-10-10-10"
                  />
                </svg>
              </div>

              <div className="block lg:hidden" onClick={handleClickMenu}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="1.8em"
                  height="1.8em"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    d="M4 7a1 1 0 0 1 1-1h14a1 1 0 1 1 0 2H5a1 1 0 0 1-1-1m0 5a1 1 0 0 1 1-1h14a1 1 0 1 1 0 2H5a1 1 0 0 1-1-1m0 5a1 1 0 0 1 1-1h14a1 1 0 1 1 0 2H5a1 1 0 0 1-1-1"
                  />
                </svg>
              </div>

              {openMenu && <MenuBar onClickClose={handleClickMenu} />}
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
