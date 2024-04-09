import { getData } from "@/lib/api";
import imgCate from "@/public/images/third.png";
import imgMyPham from "@/public/images/my-pham-botani.png";
import imgVitamin from "@/public/images/vitamin-blackmores.png";
import imgBackground from "@/public/images/background.jpg";
import Banner from "./banner/Banner";
import CategoryCards from "./category-cards/CategoryCards";
import ProductCarosel from "./product-carousel/ProductCarosel";
import ProductList from "./product-list/ProductList";
import { IBanner, IProductListResponse } from "./type";
import InfoCard from "./info-card/InfoCard";
import Image from "next/image";
import MyDialog from "./pop-up-ads/ModalAds";
import ModalAds from "./pop-up-ads/ModalAds";

export default async function HomePage() {
  const dataImg: IBanner[] = await getData("customer/banner");
  const cateLists = ["sua-ozfarm", "my-pham", "thuc-pham-chuc-nang"];
  const queryParamsOzfarm = new URLSearchParams({
    categoryIds: "1",
    page: "1",
    limit: "4",
  }).toString();
  const queryParamsMyPham = new URLSearchParams({
    categoryIds: "2",
    page: "1",
    limit: "4",
  }).toString();
  const queryParamsVitamin = new URLSearchParams({
    categoryIds: "3",
    page: "1",
    limit: "4",
  }).toString();
  const dataOz: IProductListResponse = await getData(
    `customer/product?${queryParamsOzfarm}`
  );
  const dataMyPham: IProductListResponse = await getData(
    `customer/product?${queryParamsMyPham}`
  );
  const dataVitamin: IProductListResponse = await getData(
    `customer/product?${queryParamsVitamin}`
  );
  return (
    <div className="flex flex-col items-center relative bg-white z-10">
      <ModalAds />
      <Image
        src={imgBackground}
        alt="back"
        className="w-full h-full fixed top-0 left-0"
      />

      <div className="w-full bg-white z-20 flex justify-center items-center pb-20">
        <div className="container px-4 flex flex-col justify-center items-center gap-14">
          <Banner dataImg={dataImg} />
          <div className="w-full" style={{ height: "500px" }}>
            <ProductCarosel
              linkMore={`/list-product/${cateLists[0]}`}
              dataProduct={dataOz}
            />
          </div>

          <div className="flex flex-col md:flex-row flex-wrap justify-center items-center gap-12">
            <CategoryCards
              title={"Sữa Oz Farm"}
              img={imgCate}
              animation={"fade-right"}
              des={"100% Thiên nhiên từ Australia"}
              link={cateLists[0]}
            />
            <CategoryCards
              title={"Mỹ Phẩm"}
              img={imgMyPham}
              animation={"zoom-in"}
              des={"Thương hiệu nổi tiếng"}
              link={cateLists[1]}
            />
            <CategoryCards
              title={"Vitamin"}
              img={imgVitamin}
              animation={"fade-left"}
              des={"Chăm sóc sức khỏe"}
              link={cateLists[2]}
            />
          </div>
        </div>
      </div>
      <InfoCard />
      <div className="w-full bg-white z-20 flex justify-center items-center pt-20 pb-5">
        <div className="container px-4 flex flex-col justify-center items-center gap-14">
          <ProductList
            title={"Sữa Oz Farm"}
            data={dataOz}
            link={`/list-product/${cateLists[0]}`}
          />
          <ProductList
            title={"Mỹ Phẩm"}
            data={dataMyPham}
            link={`/list-product/${[cateLists[1]]}`}
          />
          <ProductList
            title={"Thực phẩm Chức Năng"}
            data={dataVitamin}
            link={`/list-product/${cateLists[2]}`}
          />
        </div>
      </div>
    </div>
  );
}
