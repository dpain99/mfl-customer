import { getData } from "@/lib/api";
import SlideCarousel from "../components/slides/page";
import CategoryCard from "./category-card/CategoryCart";
import CardProduct from "./product-card/ProductCard";
import imgCate1 from "@/public/images/first.png";

async function getDatas() {
  const res = await fetch(
    "https://medifastlinkbe-production.up.railway.app/api/customer/product"
  );

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export default async function HomePage() {
  const data = await getDatas();
  return (
    <div className="flex flex-col items-center pt-24">
      <SlideCarousel />
      <div className="container flex flex-col justify-center items-center gap-10">
        <h1 className="text-4xl font-semibold">Sữa Bột</h1>
        <span>Order It</span>
        <div className="flex flex-wrap flex-row">
          <div className="basis-1/4">
            <CardProduct title={"San pham 1"} />
          </div>
          <div className="basis-1/4">
            <CardProduct title={"San pham 2"} />
          </div>
          <div className="basis-1/4">
            <CardProduct title={"San pham 3"} />
          </div>
          <div className="basis-1/4">
            <CardProduct title={"San pham 4"} />
          </div>
        </div>
        <div className="flex flex-row gap-12">
          <CategoryCard title={"Sữa bột"} des={"lorem"} img={imgCate1} />
          <CategoryCard title={"Mỹ phẩm"} des={"lorem"} img={imgCate1} />
          <CategoryCard title={"Vitamin"} des={"lorem"} img={imgCate1} />
        </div>
      </div>
    </div>
  );
}
