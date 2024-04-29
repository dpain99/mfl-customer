"use client";
import { convertMoney } from "@/lib/convertMoney";
import { openCart, setProductInfo } from "@/redux/slices/showCart";
import { RootState } from "@/redux/store";
import AOS from "aos";
import "aos/dist/aos.css";
import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./style.scss";

type ICardProductProps = {
  title: string;
  price: number;
  salePrice?: number;
  image: string;
  slug: string;
};
const CardProduct = ({
  title,
  price,
  salePrice,
  image,
  slug,
}: ICardProductProps) => {
  const isOpen = useSelector((state: RootState) => state.showCart.isOpen);
  const dispatch = useDispatch();

  const currentProductInfo =
    useSelector((state: RootState) => state.showCart.infoProduct) || [];
  const handleClickAddCart = () => {
    dispatch(openCart());
    const newProductInfo = {
      img: image,
      title: title,
      price: salePrice || price,
      slug: slug,
      quantity: 1,
    };

    const productDublicateId = currentProductInfo.findIndex(
      (item) => item.slug === slug
    );

    if (productDublicateId !== -1) {
      const existedProduct = currentProductInfo[productDublicateId];
      const newExistedProduct = {
        ...existedProduct,
        quantity: existedProduct.quantity + 1,
      };
      const newProductInfo = currentProductInfo.map((item, index) => {
        if (index === productDublicateId) {
          return newExistedProduct;
        }
        return item;
      });
      dispatch(setProductInfo(newProductInfo));
    } else {
      const updatedProductInfo = [...currentProductInfo, newProductInfo];
      dispatch(setProductInfo(updatedProductInfo));
    }
  };
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
    });
  }, []);
  return (
    <>
      <div className="card" data-aos={`zoom-in`} data-aos-once="true">
        <Link href={`/detail-product/${slug}`}>
          <div className="card-img">
            <Image
              src={image}
              alt={`${title}`}
              width={0}
              height={0}
              sizes="100vw"
              className="size-24 md:size-36 object-cover"
            />
          </div>
          <div className="card-title">{title}</div>
          <hr className="card-divider" />
        </Link>

        <div className="card-footer">
          <div className="card-price flex flex-col text-lg">
            {/* <span className="line-through text-sm">
              {convertMoney(salePrice)} vnđ
            </span> */}
            <span className="text-rose-600 text-lg">
              {title.includes("Oz Farm")
                ? `${convertMoney(price)} vnđ `
                : "Liên Hệ"}
            </span>
          </div>
          <button className="card-btn" onClick={handleClickAddCart}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
              <path d="m397.78 316h-205.13a15 15 0 0 1 -14.65-11.67l-34.54-150.48a15 15 0 0 1 14.62-18.36h274.27a15 15 0 0 1 14.65 18.36l-34.6 150.48a15 15 0 0 1 -14.62 11.67zm-193.19-30h181.25l27.67-120.48h-236.6z"></path>
              <path d="m222 450a57.48 57.48 0 1 1 57.48-57.48 57.54 57.54 0 0 1 -57.48 57.48zm0-84.95a27.48 27.48 0 1 0 27.48 27.47 27.5 27.5 0 0 0 -27.48-27.47z"></path>
              <path d="m368.42 450a57.48 57.48 0 1 1 57.48-57.48 57.54 57.54 0 0 1 -57.48 57.48zm0-84.95a27.48 27.48 0 1 0 27.48 27.47 27.5 27.5 0 0 0 -27.48-27.47z"></path>
              <path d="m158.08 165.49a15 15 0 0 1 -14.23-10.26l-25.71-77.23h-47.44a15 15 0 1 1 0-30h58.3a15 15 0 0 1 14.23 10.26l29.13 87.49a15 15 0 0 1 -14.23 19.74z"></path>
            </svg>
          </button>
        </div>
      </div>
    </>
  );
};
export default CardProduct;
