import MyBtn from "@/app/components/button/MyBtn";
import "./style.scss";
import MyBtn2 from "@/app/components/button-2/MyBtn2";
export default function InfoCard() {
  return (
    <div className="info-container-parallax z-20 flex items-center justify-center">
      <div className="content flex flex-col items-center justify-center w-1/2 p-5">
        <span className="text-4xl font-semibold"> Tự nhiên 100% từ Úc </span>
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
        <MyBtn2 title={"Tìm Hiểu Thêm"} />
      </div>
    </div>
  );
}
