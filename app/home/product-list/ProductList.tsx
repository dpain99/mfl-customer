import MyBtn from "@/app/components/button/MyBtn";
import Link from "next/link";
import CardProduct from "../product-card/ProductCard";
import { IProductListResponse } from "../type";
import "./style.scss";

interface ProductListProps {
  title: string;
  data: IProductListResponse;
  link: string;
}
export default function ProductList({ title, data, link }: ProductListProps) {
  return (
    <div className="my-card my-shadow">
      <div className="ribbon hidden md:block">
        <div className="ribbon-stitches-top"></div>
        <div className="ribbon-content">
          <span className="text-xl md:text-4xl">{title}</span>
        </div>
        <div className="ribbon-stitches-bottom"></div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-5 gap-4 pt-20">
        {data.items.map((child) => (
          <div className="flex justify-center items-center" key={child.id}>
            <CardProduct
              title={child.name}
              price={child.maxMoney}
              salePrice={child.minMoney}
              image={child.productImage[0].image.url}
              slug={child.slug}
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
