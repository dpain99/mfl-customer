import MyBtn3 from "@/app/components/button-3/MyBtn3";
import "./style.scss";
import Link from "next/link";
export default function InfoCard() {
  return (
    <div className="info-container-parallax z-20 flex items-center justify-center">
      <div className="content flex flex-col items-center justify-center w-full md:w-3/4 lg:3/4 xl:w-1/2 p-5 text-base md:text-xl lg:text-2xl">
        <span className="text-xl sm:text-4xl font-semibold">
          Tự nhiên 100% từ Úc{" "}
        </span>
        <br />
        <p>
          Oz Farm là một công ty Úc tự hào về việc công thức hóa bột sữa dinh
          dưỡng để tối ưu sức khỏe, sức sống và phát triển - cho mọi giai đoạn
          của cuộc sống.
        </p>
        <p>Sữa của chúng tôi được sản xuất 100% tại Úc.</p>
        <p>
          Mỗi con bò được xác định bằng Chương trình Nhận dạng Thú y Quốc gia và
          không có BSE (bệnh não bò (BSE)). Hơn nữa, bò của chúng tôi ăn và di
          chuyển một cách tự nhiên mà không cần thức ăn nhân tạo hoặc khu chăn
          nuôi.
        </p>
        <Link href="/introduce/oz-farm">
          <MyBtn3
            title={"Tìm Hiểu Thêm"}
            sx="text-blue-500 hover:text-blue-800 border-solid border border-slate-300 hover:border-slate-500 "
          />
        </Link>
      </div>
    </div>
  );
}
