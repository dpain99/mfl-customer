import bannerAgedCarePlus from "@/public/images/our-range/overrange_banner_agedcare_800_x_400.webp";
import ozFarmAgedCare from "@/public/images/our-range/overrange_agedcare_plus_180_x_240_clear_BG.jpg";
import Image from "next/image";
import agedCarePlusNuti from "@/public/images/our-range/aged_care_plus_function_903_x_555.webp";
import Link from "next/link";
export default function OzFarmSleepWell() {
  return (
    <div className="container mx-auto p-4">
      <div className="flex flex-col gap-5 bg-white rounded-lg shadow-lg items-center p-5">
        <h1 className="text-2xl font-semibold text-secondary-color">
          Sữa công thức dinh dưỡng Oz Farm Aged Care Plus
        </h1>
        <Image
          src={bannerAgedCarePlus}
          alt="oz-farm-aged-care-plus"
          className="w-full"
        />
        <p className="text-xl  text-secondary-color">
          Dinh dưỡng phong phú để hỗ trợ sức khỏe đường ruột cho người già
        </p>
        <span className="text-xl font-semibold text-secondary-color">
          Dinh Dưỡng Tốt, Sống Khỏe Hơn!
        </span>
        <div className="flex flex-row w-full md:w-1/2 gap-4">
          <p className="text-justify">
            Công thức sữa dinh dưỡng Oz Farm Aged Care Plus đã được pha chế đặc
            biệt dành cho người cao tuổi mong muốn duy trì đường ruột khỏe mạnh
            với lượng dinh dưỡng đầy đủ hàng ngày theo khuyến nghị. Với việc bổ
            sung men vi sinh và prebiotic, nó giúp khôi phục lại sự cân bằng của
            vi khuẩn tốt trong ruột và thúc đẩy sự phát triển của vi khuẩn có
            lợi. Điều này, đến lượt nó, giúp cải thiện chức năng tiêu hóa.
          </p>
          <Image
            src={ozFarmAgedCare}
            alt="oz-farm-aged-care"
            className="h-fit"
          />
        </div>

        <div className="bg-green-300 rounded-lg p-5 text-secondary-color">
          <span className="font-semibold">Lợi ích sản phẩm</span>
          <ul className="list-disc pl-5">
            <li>
              Probiotic: Probiotic BB-12 hỗ trợ nhu động ruột và chức năng tiêu
              hóa
            </li>
            <li>
              Prebiotic: Prebiotic có nguồn gốc từ thực vật để kích thích sự
              phát triển của men vi sinh trong ruột
            </li>
            <li>Canxi và vitamin D: Hỗ trợ sức khỏe xương</li>
            <li>Giàu protein: Góp phần tăng trưởng khối lượng cơ bắp</li>
          </ul>
        </div>
        <span className="text-xl font-semibold text-secondary-color">
          Thông tin dinh dưỡng
        </span>
        <div>
          <span>
            Công thức sữa dinh dưỡng Oz Farm Aged Care Plus cung cấp các chất
            dinh dưỡng cần thiết để duy trì cơ thể khỏe mạnh bao gồm:
          </span>
          <Image src={agedCarePlusNuti} alt="oz-farm-aged-care-plus-nuti" />
        </div>

        <span className="text-xl font-semibold text-secondary-color">
          Hướng dẫn sử dụng
        </span>
        <p>
          Thêm 4 muỗng (khoảng 35 g) Sữa dinh dưỡng Oz Farm Aged Care Plus vào
          200 ml nước ấm (dưới 50oC), khuấy đều cho đến khi hòa tan. Đề nghị 2
          khẩu phần mỗi ngày.
        </p>

        <span className="text-xl font-semibold text-secondary-color">
          Phân loại sản phẩm
        </span>
        <p>
          Thực phẩm bổ sung theo công thức. Sản phẩm này không được sử dụng như
          một sự thay thế hoàn toàn cho chế độ ăn uống. Nó không thích hợp để
          thay thế sữa hoàn toàn cho trẻ dưới 3 tuổi.
        </p>

        <Link href={"/detail-product/ozfarm-aged-care-plus-800g"}>
          <button className="bg-secondary-color text-white p-2 rounded-lg hover:bg-sky-700">
            Mua Ngay
          </button>
        </Link>
      </div>
    </div>
  );
}
