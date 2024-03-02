import { getData } from "@/lib/api";
import imgCate1 from "@/public/images/first.png";
import Banner from "./banner/Banner";
import CategoryCard from "./category-card/CategoryCart";
import CardProduct from "./product-card/ProductCard";
import { IBanner } from "./type";
import ProductCarosel from "./product-carousel/ProductCarosel";
import CategoryCards from "./category-cards/CategoryCards";
import imgCate from "@/public/images/second.png";

export default async function HomePage() {
  const data = await getData("product");
  const dataImg: IBanner[] = await getData("banner");
  return (
    <div className="flex flex-col items-center pt-8 lg:pt-24">
      <Banner dataImg={dataImg} />
      <div className="container flex flex-col justify-center items-center gap-14">
        <div className="w-full" style={{ height: "500px" }}>
          <ProductCarosel />
        </div>

        <div className="flex flex-row gap-12">
          <CategoryCards title={"Sữa Oz Farm"} img={imgCate} />
          <CategoryCards title={"Mỹ Phẩm"} img={imgCate} />
          <CategoryCards title={"Vitamin"} img={imgCate} />
        </div>
      </div>
    </div>
  );
}
