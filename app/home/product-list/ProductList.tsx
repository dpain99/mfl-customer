import MyBtn from "@/app/components/button/MyBtn";
import Link from "next/link";
import CardProduct from "../product-card/ProductCard";
import { IProductListResponse } from "../type";
import "./style.scss";
import Image from "next/image";
import sanphambanchayImg from "@/public/images/san_pham_ban_chay_website_320x41_3x_88c599649c_preview_rev_1 (1).png";

interface ProductListProps {
  title: string;
  data: IProductListResponse;
  link: string;
}
export default function ProductList({ title, data, link }: ProductListProps) {
  return (
    <div className="my-card my-shadow">
      {/* <div className="ribbon hidden lg:block">
        <div className="ribbon-stitches-top"></div>
        <div className="ribbon-content">
          <span className="text-xl md:text-4xl">{title}</span>
        </div>
        <div className="ribbon-stitches-bottom"></div>
      </div> */}

      <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 flex justify-center items-center w-full">
        <Image
          src={sanphambanchayImg}
          alt="san-pham-ban-chay"
          className="absolute z-10"
          style={{ width: "300px" }}
        />
        <span className="text-base md:text-xl font-semibold text-white z-20">
          {title}
        </span>
      </div>

      <div className="bg-sky-500 flex justify-center items-center lg:hidden rounded-lg py-3">
        <span className="text-2xl text-white font-semibold">{title}</span>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 pt-10 sm:pt-20">
        {data.items.map((child) => (
          <div className="flex justify-center items-center" key={child.id}>
            <CardProduct
              title={child.name}
              price={child.productVariant[0].price}
              salePrice={child.productVariant[0].salePrice}
              image={child.productImage[0].image.url}
              slug={child.slug}
              color={child.productVariant[0].color || "#fff"}
            />
          </div>
        ))}
      </div>

      <div className="flex justify-center items-center pt-14">
        <Link href={link}>
          <MyBtn title={"Xem Thêm Sản Phẩm"} />
        </Link>
      </div>
    </div>
  );
}
