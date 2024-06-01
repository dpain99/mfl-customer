"use client";
import { comfortaa } from "@/fonts/font";
import Link from "next/link";
import { useState } from "react";
import { useGetListCategory } from "./hooks/useGetListCategory";
import "./style.scss";
export default function SubHeader() {
  const { data: dataCate } = useGetListCategory();
  const [isOpen, setIsOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnterMenu = () => {
    setIsOpen(true);
  };

  const handleMouseLeaveMenu = () => {
    if (!isHovered) {
      setIsOpen(false);
    }
  };

  const handleMouseEnterDropdown = () => {
    setIsHovered(true);
    setIsOpen(true);
  };

  const handleMouseLeaveDropdown = () => {
    setIsHovered(false);
    setIsOpen(false);
  };

  return (
    <section className="bg-primary-color w-full h-full flex flex-row justify-center gap-6 text-white p-1">
      <div
        className="menu"
        onMouseEnter={handleMouseEnterMenu}
        onMouseLeave={handleMouseLeaveMenu}
      >
        <span
          className={`${comfortaa.className} cate-span hover:cursor-pointer text-base lg:text-lg`}
        >
          Danh Mục
        </span>
        <div
          className={`dropdown  ${isOpen ? "show" : ""}`}
          onMouseEnter={handleMouseEnterDropdown}
          onMouseLeave={handleMouseLeaveDropdown}
        >
          {dataCate?.map((item) => (
            <Link href={""} key={item.id}>
              <span>{item.name}</span>
            </Link>
          ))}
        </div>
      </div>

      <Link href={"/"}>
        <span
          className={`${comfortaa.className} cate-span text-base lg:text-lg`}
        >
          Trang Chủ
        </span>
      </Link>
      <Link href={"/blog"}>
        <span
          className={`${comfortaa.className} cate-span text-base lg:text-lg`}
        >
          Cẩm Nang
        </span>
      </Link>
      <Link href={"/about-us"}>
        <span
          className={`${comfortaa.className} cate-span text-base lg:text-lg`}
        >
          Về Chúng Tôi
        </span>
      </Link>
      <Link href={"/our-range"}>
        <span
          className={`${comfortaa.className} cate-span text-base lg:text-lg`}
        >
          Sản Phẩm
        </span>
      </Link>
      <Link href={"/contact"}>
        <span
          className={`${comfortaa.className} cate-span text-base lg:text-lg`}
        >
          Liên Hệ
        </span>
      </Link>
    </section>
  );
}
