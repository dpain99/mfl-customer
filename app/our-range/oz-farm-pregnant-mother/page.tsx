import bannerPregnantMother from "@/public/images/our-range/ozfarm-pregnant-mother-header.webp";
import ozFarmPregnantMother from "@/public/images/our-range/ozfarm_pregnant_mother_front_ps_medium_60ea71c5-7431-4422-8f8e-dfe69b043efe.jpg";
import Image from "next/image";
import pregnantMotherNuti from "@/public/images/our-range/pregnant_mother_function.webp";
import Link from "next/link";
export default function OzFarmSleepWell() {
  return (
    <div className="container mx-auto p-4">
      <div className="flex flex-col gap-5 bg-white rounded-lg shadow-lg items-center p-5">
        <h1 className="text-2xl font-semibold text-secondary-color">
          Sữa dinh dưỡng Oz Pregnant Mother
        </h1>
        <Image
          src={bannerPregnantMother}
          alt="oz-farm-pregnant-mother"
          className="w-full"
        />
        <p className="text-xl  text-secondary-color">
          Công thức dinh dưỡng Oz Farm dành cho bà mẹ mang thai và cho con bú
        </p>
        <span className="text-xl font-semibold text-secondary-color">
          Cải thiện hơn với công thức đường ruột khỏe mạnh
        </span>
        <div className="flex flex-row w-1/2 gap-4">
          <p className="text-justify">
            Oz Farm Pregnant Mother được bào chế để hỗ trợ bà bầu và phụ nữ đang
            cho con bú để đạt được mức hấp thụ dinh dưỡng tăng lên, điều này rất
            quan trọng đối với cả mẹ và con đang phát triển của họ. Nó đặc biệt
            hữu ích như một chất bổ sung khi việc ăn uống trở nên khó khăn do ốm
            nghén và khó tiêu, đặc biệt là trong tam cá nguyệt thứ 1 và thứ 3 .{" "}
            <br />
            Mẹ bầu ăn ngon và dễ nuốt, không giống như một số loại thuốc bổ sung
            dạng viên. <br /> Oz Farm Pregnant Mother là thực phẩm bổ sung có
            công thức hỗ trợ bà bầu giảm mệt mỏi đồng thời tăng cường năng lượng
            hàng ngày. Nó có hàm lượng canxi cao và là nguồn cung cấp sắt, kẽm,
            axit folic, Vitamin A, E, B 6 , B 12 & C.
          </p>
          <Image
            src={ozFarmPregnantMother}
            alt="oz-farm-pregnant-mother"
            className="h-fit"
          />
        </div>

        <div
          className="rounded-lg p-5 text-secondary-color"
          style={{ backgroundColor: "#E188B7" }}
        >
          <span className="font-semibold">
            Bằng cả tấm lòng, chúng tôi mang đến sản phẩm:
          </span>
          <ul className="list-disc pl-5">
            <li>
              Với Probiotics & Prebiotics để hỗ trợ hệ tiêu hóa và miễn dịch
              khỏe mạnh
            </li>
            <li>Nguồn sắt và kẽm tốt cho sự tăng trưởng và phát triển</li>
            <li>
              Axit folic, sắt, giàu canxi hỗ trợ sự phát triển sớm của thai nhi
              và chức năng miễn dịch
            </li>
            <li>GI thấp - giúp duy trì lượng đường trong máu ổn định hơn</li>
            <li>
              Dễ nuốt, không giống như một số loại thuốc bổ sung dạng viên{" "}
            </li>
            <li>Không mùi giúp giảm buồn nôn</li>
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
          <Image src={pregnantMotherNuti} alt="oz-farm-pregnant-mother-nuti" />
        </div>

        <span className="text-xl font-semibold text-secondary-color">
          Cơ quan dinh dưỡng Úc khuyến cáo những điều sau đây cho phụ nữ mang
          thai:
        </span>
        <p>
          <span className="font-semibold">Canxi</span>
          trong suốt thai kỳ và đặc biệt là trong tam cá nguyệt thứ ba là cần
          thiết để tạo xương khỏe mạnh. Khuyến nghị về lượng canxi khi mang thai
          và cho con bú là (1000mg mỗi ngày). Lượng canxi cần thiết cho cả mẹ và
          bé khi mang thai có thể được cung cấp từ 3 đến 4 khẩu phần thực phẩm
          từ sữa mỗi ngày. <br />{" "}
          <span className="font-semibold">Folate và axit folic</span> là một
          loại vitamin B. Không có đủ folate trong thời kỳ đầu mang thai có thể
          làm tăng nguy cơ dị tật ống thần kinh như tật nứt đốt sống. Để giảm
          nguy cơ dị tật ống thần kinh ở trẻ sơ sinh, Hội đồng Nghiên cứu Y tế
          và Sức khỏe Quốc gia (NHMRC) khuyến nghị rằng, bên cạnh việc áp dụng
          chế độ ăn uống lành mạnh giàu folate, phụ nữ cần bổ sung thêm 400
          microgam axit folic mỗi ngày trong ít nhất một lần. tháng trước khi
          thụ thai và trong ba tháng đầu của thai kỳ. <br />
          <span className="font-semibold">Sắt</span> – nhu cầu về sắt tăng đáng
          kể trong thời kỳ mang thai, đặc biệt là trong tam cá nguyệt thứ hai và
          thứ ba để đáp ứng nhu cầu của nhau thai và em bé đang lớn. <br />
          <span className="font-semibold">Kẽm </span>
          cần thiết cho sự tăng trưởng và phát triển bình thường của xương, não
          và nhiều bộ phận khác của cơ thể. <br />
          <span className="font-semibold">Cần có lượng protein </span>
          bổ sung trong thời kỳ mang thai để hỗ trợ sự phát triển của em bé và
          những thay đổi trong cơ thể bạn, chẳng hạn như mô vú phát triển.
        </p>

        <span className="text-xl font-semibold text-secondary-color">
          Hướng dẫn sử dụng
        </span>
        <p>
          Pha 4 muỗng (kèm theo) vào 180ml nước ấm (dưới 45°C) hoặc nước lạnh,
          khuấy đều cho đến khi hòa tan.
        </p>
        <span className="text-xl font-semibold text-secondary-color">
          Sữa chất lượng cao
        </span>
        <p>
          Oz Farm Pregnant Mother được sản xuất từ ​​sữa đặc và bổ sung dưỡng
          chất nhằm cung cấp năng lượng, dinh dưỡng cùng các vitamin và khoáng
          chất thiết yếu. Úc có nguồn cung cấp sữa tự nhiên và an toàn, được
          kiểm soát chặt chẽ bởi quy định tiêu chuẩn thực phẩm và cơ sở sản xuất
          hiện đại. <br /> Sữa Úc từ lâu đã được cả thế giới biết đến là sữa
          sạch và tự nhiên, ít dư lượng hóa chất. Các tiêu chuẩn an toàn và chất
          lượng cao được thực thi trong toàn bộ chuỗi cung ứng, đảm bảo sản phẩm
          của họ đáng tin cậy và an toàn.
        </p>

        <Link href={"/detail-product/ozfarm-pregnant-mother-800g"}>
          <button className="bg-secondary-color text-white p-2 rounded-lg hover:bg-sky-700">
            Mua Ngay
          </button>
        </Link>
      </div>
    </div>
  );
}
