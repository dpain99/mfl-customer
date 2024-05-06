import bannerSleepWellImg from "@/public/images/our-range/overrange_banner_sleepwell_800_x_400.webp";
import ozFarmSleepWell from "@/public/images/our-range/overrange_sleepwell_milk_180_x_240_clear_BG.jpg";
import Image from "next/image";
import sleepWellNuti from "@/public/images/our-range/903-x-555.webp";
import Link from "next/link";
export default function OzFarmSleepWell() {
  return (
    <div className="container mx-auto p-4">
      <div className="flex flex-col gap-5 bg-white rounded-lg shadow-lg items-center p-5">
        <h1 className="text-2xl font-semibold text-secondary-color">
          Sữa công thức dinh dưỡng Oz Farm SleepWell™
        </h1>
        <Image
          src={bannerSleepWellImg}
          alt="oz-farm-sleep-well"
          className="w-full"
        />
        <p className="text-xl  text-secondary-color">
          Lactium® đã được chứng minh lâm sàng giúp hỗ trợ chất lượng giấc ngủ,
          cải thiện tâm trạng và thúc đẩy sự thư giãn
        </p>
        <span className="text-xl font-semibold text-secondary-color">
          Ngủ ngon, sống tốt!
        </span>
        <div className="flex flex-row w-full md:w-1/2 gap-4">
          <p className="text-justify">
            Công thức sữa dinh dưỡng Oz Farm SleepWell™ được pha chế với thành
            phần đã được chứng minh lâm sàng, Lactium®, giúp mọi người giảm bớt
            các vấn đề khó ngủ hoặc lo lắng mà không gây nghiện.
          </p>
          <Image
            src={ozFarmSleepWell}
            alt="oz-farm-sleep-well"
            className="h-fit"
          />
        </div>

        <div className="bg-sky-200 rounded-lg p-5 text-secondary-color">
          <span className="font-semibold">Lợi ích sản phẩm</span>
          <ul className="list-disc pl-5">
            <li>
              Lactium®: Thành phần được chứng minh lâm sàng làm từ protein sữa
              tự nhiên giúp cải thiện chất lượng giấc ngủ
            </li>
            <li>
              Lactoferrin: Một loại protein được chiết xuất từ ​​sữa tự nhiên
              giúp hỗ trợ hệ miễn dịch
            </li>
            <li>Giàu protein: Góp phần tăng trưởng khối lượng cơ bắp</li>
          </ul>
        </div>
        <span className="text-xl font-semibold text-secondary-color">
          Thông tin dinh dưỡng
        </span>
        <div>
          <span>
            Công thức sữa dinh dưỡng Oz Farm SleepWell™ cung cấp các chất dinh
            dưỡng cần thiết để duy trì cơ thể khỏe mạnh bao gồm:
          </span>
          <Image src={sleepWellNuti} alt="oz-farm-sleep-well-nuti" />
        </div>

        <span className="text-xl font-semibold text-secondary-color">
          Hướng dẫn sử dụng
        </span>
        <p>
          Thêm 4 muỗng (khoảng 35 g) Sữa dinh dưỡng Oz Farm SleepWell™ vào 180
          ml nước ấm (dưới 50oC), khuấy đều cho đến khi hòa tan. Đề nghị 2 khẩu
          phần mỗi ngày.
        </p>

        <span className="text-xl font-semibold text-secondary-color">
          Phân loại sản phẩm
        </span>
        <p>
          Thực phẩm bổ sung theo công thức. Sản phẩm này không được sử dụng như
          một sự thay thế hoàn toàn cho chế độ ăn uống. Nó không thích hợp để
          thay thế sữa hoàn toàn cho trẻ dưới 3 tuổi.
        </p>

        <Link href={"/detail-product/ozfarm-sleepwell-800g"}>
          <button className="bg-secondary-color text-white p-2 rounded-lg hover:bg-sky-700">
            Mua Ngay
          </button>
        </Link>
      </div>
    </div>
  );
}
