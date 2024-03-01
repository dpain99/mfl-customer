import Link from "next/link";
import "./style.scss";

import Image from "next/image";
interface CategoryCardProps {
  title: string;
  img: any;
}
export default function CategoryCards({ title, img }: CategoryCardProps) {
  return (
    <div className="card-cate">
      <div className="card-details">
        <Image
          src={img}
          alt={title}
          className="w-full h-48 object-cover rounded-lg"
        />
        <p className="text-title">{title}</p>
        <p className="text-body">Here are the details of the card</p>
      </div>
      <Link href={"/list-product"}>
        <button className="card-button">Xem Thêm</button>
      </Link>
    </div>
  );
}
