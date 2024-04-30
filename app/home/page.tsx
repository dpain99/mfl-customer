import { getData } from "@/lib/api";
import imgBackground from "@/public/images/background.jpg";
import eukyBearImg from "@/public/images/euky-bear.jpg";
import pentaviteImg from "@/public/images/pentavite.png";
import imgCate from "@/public/images/third.png";
import Image from "next/image";
import Banner from "./banner/Banner";
import CategoryCards from "./category-cards/CategoryCards";
import InfoCard from "./info-card/InfoCard";
import ModalAds from "./pop-up-ads/ModalAds";
import ProductCarosel from "./product-carousel/ProductCarosel";
import ProductList from "./product-list/ProductList";
import { IBanner, IProductListResponse } from "./type";
import imgNutiForEveryOne from "@/public/images/ozfarm-home-nutrition-everybody.webp";
import BrandList from "./components/BrandList";

export default async function HomePage() {
  const dataImg: IBanner[] = await getData("customer/banner");
  const cateLists = ["sua-ozfarm", "cham-soc-co-the", "thuc-pham-chuc-nang"];
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
              linkMore={`/list-product/hot-sale`}
              dataProduct={[
                dataOz.items[0],
                dataMyPham.items[0],
                dataVitamin.items[0],
                dataOz.items[1],
              ]}
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
              title={"Chăm Sóc Cơ Thể"}
              img={eukyBearImg}
              animation={"zoom-in"}
              des={"Thương hiệu nổi tiếng"}
              link={cateLists[1]}
            />
            <CategoryCards
              title={"Vitamin"}
              img={pentaviteImg}
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
          <div className="flex flex-col gap-5 justify-center items-center">
            <h1 className="font-semibold text-2xl uppercase">
              Dinh dưỡng cho mọi người
            </h1>
            <Image src={imgNutiForEveryOne} alt="dinh-duong-cho-moi-nguoi" />
            <p className="text-slate-500 text-xl shadow-lg p-5 text-justify flex justify-center flex-col items-center">
              OzFarm xây dựng công thức sữa bột dinh dưỡng mang lại sức khỏe,
              sức sống và sự phát triển tối ưu - cho mọi giai đoạn của cuộc đời.
              Nhu cầu dinh dưỡng thay đổi trong các giai đoạn khác nhau của cuộc
              sống. Để khỏe mạnh, điều quan trọng là phải cung cấp thêm bất kỳ
              nhu cầu dinh dưỡng nào cho cơ thể bạn trong những giai đoạn này -
              đặc biệt là khi mang thai, trẻ đang lớn và trong những năm cuối
              đời. Điều cần thiết là phải đảm bảo cung cấp đầy đủ những thứ sau:
              <ul className="list-disc">
                <li>đủ kilojoules/calo cho năng lượng</li>
                <li>axit béo thiết yếu</li>
                <li>đủ protein để bảo trì và sửa chữa tế bào</li>
                <li>vitamin tan trong chất béo và tan trong nước</li>
                <li>khoáng chất thiết yếu như sắt, canxi và kẽm</li>
              </ul>
            </p>
          </div>

          <ProductList
            title={"Sữa Oz Farm"}
            data={dataOz}
            link={`/list-product/${cateLists[0]}`}
          />
          <ProductList
            title={"Chăm Sóc Cơ Thể"}
            data={dataMyPham}
            link={`/list-product/${[cateLists[1]]}`}
          />
          <ProductList
            title={"Thực phẩm Chức Năng"}
            data={dataVitamin}
            link={`/list-product/${cateLists[2]}`}
          />

          <BrandList />
        </div>
      </div>
    </div>
  );
}
