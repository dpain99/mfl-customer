import Link from "next/link";
import "./style.scss";
export default function SubHeader() {
  return (
    <div className="sub-header shadow-lg h-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-row justify-between justify-center items-center h-12">
          <span>Danh Mục</span>
          <Link href={"/blog"}>
            <span>Cẩm nang</span>
          </Link>
          <Link href={"./about-us"}>
            <span>Về chúng tôi</span>
          </Link>
          <Link href={"/contact"}>
            <span>Liên Hệ</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
