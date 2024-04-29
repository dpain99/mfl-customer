import { StaticImport } from "next/dist/shared/lib/get-img-props";
import "./style.scss";
import Image from "next/image";
import MoreBtn from "@/app/components/more-btn/MoreBtn";
import Link from "next/link";
interface ItemBlogProps {
  title: string;
  preview: string;
  img: string | StaticImport;
  hastag: string[];
}
const ItemBlog = ({ title, preview, img, hastag }: ItemBlogProps) => {
  const convertToSlug = (text: string) => {
    return text
      .toString()
      .toLowerCase()
      .normalize("NFD") // Chuyển đổi Unicode thành bảng mã kết hợp (combining characters)
      .replace(/[\u0300-\u036f]/g, "") // Loại bỏ các ký tự kết hợp (combining diacritical marks)
      .replace(/đ/g, "d") // Chuyển đổi "đ" thành "d"
      .replace(/\s+/g, "-") // Thay thế khoảng trắng bằng dấu gạch ngang
      .replace(/[^\w\-]+/g, "") // Loại bỏ các ký tự không phải chữ cái, số hoặc dấu gạch ngang
      .replace(/\-\-+/g, "-") // Loại bỏ các dấu gạch ngang lặp lại
      .replace(/^-+/, "") // Loại bỏ dấu gạch ngang ở đầu chuỗi
      .replace(/-+$/, ""); // Loại bỏ dấu gạch ngang ở cuối chuỗi
  };

  const slug = convertToSlug(title);

  return (
    <div className="bg-white p-5 hover:shadow-lg hover:cursor-pointer flex items-center flex-col border border-solid border-slate-300 rounded-lg w-10/12">
      <Link href={`/blog/${slug}`}>
        <h1 className="font-semibold text-xl lg:text-3xl pb-4 text-secondary-color capitalize w-11/12">
          {title}
        </h1>
        <Image src={img} alt="img-blog" className="w-11/12" />
        <section className="py-4 text-slate-500 w-11/12">{preview}</section>
        <div className="flex flex-row gap-3 flex-wrap w-11/12">
          {hastag.map((item, index) => (
            <div
              key={index}
              className="bg-sky-400 text-white text-sm md:text-base p-1 rounded-lg text-nowrap capitalize"
            >
              ● {item}
            </div>
          ))}
        </div>
      </Link>
    </div>
  );
};

export default ItemBlog;
