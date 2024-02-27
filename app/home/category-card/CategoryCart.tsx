import Link from "next/link";
import "./style.scss";
import Image, { StaticImageData } from "next/image";

interface CategoryCardProps {
  title: string;
  des: string;
  img: StaticImageData;
}
export default function CategoryCard({ title, des, img }: CategoryCardProps) {
  return (
    <div className="category-container">
      <div className="card">
        <div className="imgBx">
          <Image src={img} alt="1" />
        </div>
        <div className="content">
          <h2>{title}</h2>
          <p>{des}</p>
          <Link href={`/list-product`}>Xem Thêm</Link>
        </div>
      </div>
    </div>
  );
}
