"use client";
import Link from "next/link";
import "./style.scss";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
interface CategoryCardProps {
  title: string;
  img: any;
  animation: string;
}
export default function CategoryCards({
  title,
  img,
  animation,
}: CategoryCardProps) {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: false,
    });
  }, []);
  return (
    <div data-aos={`${animation}`}>
      <div className="card-cate">
        <div className="card-details">
          <Image
            src={img}
            alt={title}
            className="w-full h-48 object-cover rounded-lg"
          />
          <p className="text-title">{title}</p>
          <p className="text-body">Here are the details of the card</p>
        </div>
        <button className="card-button">
          <Link href={"/list-product"}>Xem Thêm</Link>
        </button>
      </div>
    </div>
  );
}
