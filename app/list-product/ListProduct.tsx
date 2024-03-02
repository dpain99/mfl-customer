import BreadCrumb from "../components/breadcrumb/Breadcrumb";
import MyBtn from "../components/button/MyBtn";
import CardProduct from "../home/product-card/ProductCard";

export default function ListProduct() {
  const listProduct = ["sp-1", "sp-2", "sp-3", "sp-4", "sp-5", "sp-6"];
  return (
    <div className="flex flex-col justify-center items-center pt-32">
      <div className="container">
        <BreadCrumb
          items={[{ title: "Trang Chủ", href: "/" }, { title: "Sữa Bột" }]}
        />
        <div className="flex flex-row justify-between pt-10 pb-10">
          <h1>Sữa Bột</h1>
          <span>Sắp xếp</span>
        </div>
        <div className="grid grid-cols-5 gap-4">
          {listProduct.map((item, id) => (
            <div key={id} className="flex justify-center">
              <CardProduct title={item} />
            </div>
          ))}
        </div>
        <div className="flex justify-center items-center pt-20">
          <MyBtn title={"Xem Thêm Sản Phẩm"} />
        </div>
      </div>
    </div>
  );
}
