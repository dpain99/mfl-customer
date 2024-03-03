import MyBtn from "@/app/components/button/MyBtn";
import CardProduct from "../product-card/ProductCard";
import "./style.scss";

interface ProductListProps {
  title: string;
}
export default function ProductList({ title }: ProductListProps) {
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
        <div className="flex justify-center items-center">
          <CardProduct title={"sp1"} />
        </div>
        <div className="flex justify-center items-center">
          <CardProduct title={"sp1"} />
        </div>
        <div className="flex justify-center items-center">
          <CardProduct title={"sp1"} />
        </div>
        <div className="flex justify-center items-center">
          <CardProduct title={"sp1"} />
        </div>
        <div className="flex justify-center items-center">
          <CardProduct title={"sp1"} />
        </div>
        <div className="flex justify-center items-center">
          <CardProduct title={"sp1"} />
        </div>
      </div>

      <div className="flex justify-center items-center pt-14">
        <MyBtn title={"Xem Thêm Sản Phẩm"} />
      </div>
    </div>
  );
}
