"use client";
import { comfortaa } from "@/fonts/font";
import Link from "next/link";
import { useState } from "react";
import CategoryMenu from "./category-menu/CategoryMenu";
import { useGetListCategory } from "./hooks/useGetListCategory";
import "./style.scss";
export default function SubHeader() {
  const [openCate, setOpenCate] = useState<boolean>(false);
  const handleClickCate = () => {
    // if (openCate) {
    //   setOpenCate(openCate);
    // } else setOpenCate(!openCate);
    setOpenCate(!openCate);
  };

  const { data: dataCate } = useGetListCategory();

  return (
    <div className="sub-header shadow-lg h-12 hidden lg:block">
      <div className="container mx-auto px-4">
        <div className="flex flex-row justify-between items-center h-12 relative">
          <CategoryMenu
            isShow={openCate}
            data={dataCate}
            // handleIsClose={() => setOpenCate(false)}
          />
          <span
            className={`${comfortaa.className} cate-span`}
            onClick={handleClickCate}
            // onMouseLeave={handleClickCate}
          >
            Danh Mục
          </span>
          <Link href={"/"}>
            <span className={`${comfortaa.className} cate-span`}>
              Trang chủ
            </span>
          </Link>
          <Link href={"/blog"}>
            <span className={`${comfortaa.className} cate-span`}>Cẩm nang</span>
          </Link>
          <Link href={"/about-us"}>
            <span className={`${comfortaa.className} cate-span`}>
              Về chúng tôi
            </span>
          </Link>
          <Link href={"/our-range"}>
            <span className={`${comfortaa.className} cate-span`}>Sản phẩm</span>
          </Link>
          <Link href={"/contact"}>
            <span className={`${comfortaa.className} cate-span`}>Liên Hệ</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
