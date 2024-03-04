import { getData } from "@/lib/api";
import imgCate from "@/public/images/second.png";
import Banner from "./banner/Banner";
import CategoryCards from "./category-cards/CategoryCards";
import ProductCarosel from "./product-carousel/ProductCarosel";
import ProductList from "./product-list/ProductList";
import { IBanner } from "./type";

export default async function HomePage() {
  const dataImg: IBanner[] = await getData("banner");
  const a = ["sua-bot"];
  return (
    <div className="flex flex-col items-center">
      <Banner dataImg={dataImg} />
      <div className="container flex flex-col justify-center items-center gap-14">
        <div className="w-full" style={{ height: "500px" }}>
          <ProductCarosel linkMore={`/list-product/${a}`} />
        </div>

        <div className="flex flex-col md:flex-row gap-12">
          <CategoryCards
            title={"Sữa Oz Farm"}
            img={imgCate}
            animation={"fade-right"}
          />
          <CategoryCards
            title={"Mỹ Phẩm"}
            img={imgCate}
            animation={"zoom-in"}
          />
          <CategoryCards
            title={"Vitamin"}
            img={imgCate}
            animation={"fade-left"}
          />
        </div>

        <ProductList title={"Sữa Bột"} />
        <ProductList title={"Mỹ Phẩm"} />
        <ProductList title={"Thực phẩm Chức Năng"} />
      </div>
    </div>
  );
}
