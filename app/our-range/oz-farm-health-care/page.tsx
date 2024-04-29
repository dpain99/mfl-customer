import bannerHealthCare from "@/public/images/our-range/ozfarm-agedcare-header-800x400.webp";
import ozFarmHealthCare from "@/public/images/our-range/overrange_agedcare_180_x_240.jpg";
import Image from "next/image";
import healthCareNuti from "@/public/images/our-range/aged_care_function.webp";
import Link from "next/link";
export default function OzFarmSleepWell() {
  return (
    <div className="container mx-auto p-4">
      <div className="flex flex-col gap-5 bg-white rounded-lg shadow-lg items-center p-5">
        <h1 className="text-2xl font-semibold text-secondary-color">
          Chăm sóc sức khỏe Chăm sóc người già Oz Farm HealthCare
        </h1>
        <Image
          src={bannerHealthCare}
          alt="oz-farm-health-care"
          className="w-full"
        />
        <p className="text-xl  text-secondary-color">
          Dinh dưỡng phong phú cho Sức sống, Sức mạnh, Phục hồi sau bệnh
        </p>
        <span className="text-xl font-semibold text-secondary-color">
          Dinh Dưỡng Tốt, Sống Khỏe Hơn!
        </span>
        <div className="flex flex-row w-1/2 gap-4">
          <p className="text-justify">
            Khi chúng ta già đi, cả sự thèm ăn và nhu cầu dinh dưỡng của chúng
            ta đều thay đổi. Điều này đôi khi có thể bị thách thức hơn nữa với
            những cơn bệnh tật. Cho dù bạn đang giải quyết một căn bệnh hay mong
            muốn giữ sức khỏe, điều cần thiết là đảm bảo bạn có được dinh dưỡng
            quan trọng cần thiết để duy trì sức mạnh, năng lượng và hệ thống
            miễn dịch của bạn. <br /> HealthCare Aged Care cũng là một công thức
            có GI thấp đã được Dịch vụ Nghiên cứu Chỉ số Đường huyết của Đại học
            Sydney phân tích và phát hiện có Chỉ số Đường huyết (GI) là 40. Nó
            có hàm lượng canxi cao cho mật độ khoáng của xương và nhiều vitamin
            D để giảm nguy cơ loãng xương và gãy xương do loãng xương. <br />{" "}
            Công thức này chứa nhiều nguồn vitamin tốt như Vitamin B1, B3 và B6
            giúp duy trì hệ thần kinh và chức năng tâm lý khỏe mạnh. Các chất
            dinh dưỡng như iốt, sắt, kẽm, vitamin B12, folate và vitamin C cũng
            có thể giúp góp phần hỗ trợ chức năng nhận thức lành mạnh.
            <br />
            HealthCare Aged Care có hương vị thơm ngon và dễ tiêu hóa – khiến nó
            trở thành sản phẩm hỗ trợ dinh dưỡng ưu tiên cho việc chăm sóc người
            già. Nó có thể được sử dụng như một sự thay thế bữa ăn khi việc tiêu
            thụ thực phẩm rắn trở nên khó khăn hoặc như một sự bổ sung cho chế
            độ ăn uống lành mạnh bao gồm nhiều chất dinh dưỡng. .
          </p>
          <Image
            src={ozFarmHealthCare}
            alt="oz-farm-health-care"
            className="h-fit"
          />
        </div>

        <div className="bg-sky-300 rounded-lg p-5 text-secondary-color">
          <span className="font-semibold">Lợi ích sản phẩm</span>
          <ul className="list-disc pl-5">
            <li>Dinh dưỡng hoàn chỉnh</li>
            <li>GI thấp giúp duy trì lượng đường trong máu ổn định hơn</li>
            <li>
              Giàu canxi và vitamin D giúp giảm nguy cơ gãy xương do loãng xương
            </li>
            <li>Dễ tiêu hóa và hấp thu</li>
          </ul>
        </div>
        <span className="text-xl font-semibold text-secondary-color">
          Thông tin dinh dưỡng
        </span>
        <div>
          <span>
            HealthCare Aged Care cung cấp các chất dinh dưỡng cần thiết để duy
            trì cơ thể khỏe mạnh bao gồm:
          </span>
          <Image src={healthCareNuti} alt="oz-farm-health-care-nuti" />
        </div>

        <span className="text-xl font-semibold text-secondary-color">
          Sữa chất lượng cao
        </span>
        <p>
          Oz Farm Oz Farm HealthCare Aged Care được sản xuất từ ​​sữa tươi bổ
          sung dưỡng chất nhằm cung cấp năng lượng, dinh dưỡng cùng các vitamin
          và khoáng chất thiết yếu. Úc có nguồn cung cấp sữa tự nhiên và an
          toàn, được đảm bảo chất lượng nhờ các quy định tiêu chuẩn thực phẩm
          cao và cơ sở sản xuất hiện đại. <br /> Sữa Úc được cả thế giới biết
          đến là sữa sạch và tự nhiên, có dư lượng hóa chất thấp. Các tiêu chuẩn
          an toàn và chất lượng cao được thực thi trong toàn bộ chuỗi cung ứng,
          đảm bảo sản phẩm của họ đáng tin cậy và an toàn.
        </p>

        <span className="text-xl font-semibold text-secondary-color">
          Cân bằng dinh dưỡng
        </span>
        <p>
          Chăm sóc sức khỏe người già bằng công thức thay thế bữa ăn cung cấp GI
          thấp, cung cấp cân bằng các chất dinh dưỡng đa lượng bao gồm protein
          để duy trì cơ bắp, axit béo thiết yếu và carbohydrate để hỗ trợ năng
          lượng. Với hương vị thơm ngon của sữa tự nhiên, Oz Farm HealthCare
          Aged Care Formula được sản xuất từ ​​sữa tươi bổ sung dưỡng chất nhằm
          cung cấp năng lượng, dinh dưỡng cùng các vitamin và khoáng chất thiết
          yếu. Công thức chăm sóc người già của Oz Farm HealthCare có GI thấp,
          nghĩa là nó làm giảm sự gia tăng lượng đường trong máu khi tiêu thụ.
          Công thức chăm sóc người cao tuổi Oz Farm HealthCare đã được phân tích
          bởi Dịch vụ nghiên cứu chỉ số đường huyết của Đại học Sydney (SUGiRS),
          xác nhận GI thấp (Chỉ số đường huyết) là 40.
        </p>
        <span className="text-xl font-semibold text-secondary-color">
          Lựa chọn thay thế bữa ăn ngon
        </span>
        <p>
          Oz Farm HealthCare Aged Care có thể hỗ trợ những người có mức năng
          lượng thấp và những người nằm liệt giường hoặc không khỏe mạnh; để có
          được nhu cầu hàng ngày về vitamin và khoáng chất thiết yếu. Nó có thể
          được sử dụng như một sự thay thế bữa ăn khi việc tiêu thụ thức ăn đặc
          trở nên khó khăn hoặc khi cảm giác thèm ăn thấp hoặc như một sự bổ
          sung cho chế độ ăn uống lành mạnh. Khuyến cáo nên sử dụng Công thức
          chăm sóc người già Oz Farm HealthCare với sự tư vấn của chuyên gia
          chăm sóc sức khỏe.
        </p>

        <span className="text-xl font-semibold text-secondary-color">
          Hướng dẫn sử dụng
        </span>
        <p>
          - Thêm 6 muỗng (khoảng 54 g) Công thức chăm sóc người già Oz Farm
          HealthCare vào 1/2 cốc nước đun sôi dưới 50oC hoặc nước lạnh <br /> -
          Khuấy cho đến khi hòa tan <br /> - Thêm nước vào cho đủ 1 cốc (300ml){" "}
          <br />- Tối đa hai khẩu phần mỗi ngày
        </p>

        <span className="text-xl font-semibold text-secondary-color">
          Phân loại sản phẩm
        </span>
        <p>
          Thực phẩm bổ sung theo công thức. Sản phẩm này không được sử dụng như
          một sự thay thế hoàn toàn cho chế độ ăn uống. Nó không thích hợp để
          thay thế sữa hoàn toàn cho trẻ dưới 3 tuổi.
        </p>

        <Link href={"/detail-product/oz-farm-health-care-900g"}>
          <button className="bg-secondary-color text-white p-2 rounded-lg hover:bg-sky-700">
            Mua Ngay
          </button>
        </Link>
      </div>
    </div>
  );
}
