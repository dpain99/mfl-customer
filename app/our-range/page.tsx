import imgOzFarmOurRange from "@/public/images/our-range/ozfarm-our-range-header.webp";
import Image from "next/image";
import ozFarmSleepWellImg from "@/public/images/our-range/overrange_sleepwell_milk_180_x_240_clear_BG.jpg";
import ozFarmAgedCarePlus from "@/public/images/our-range/overrange_agedcare_plus_180_x_240_clear_BG.jpg";
import ozFarmHealthCare from "@/public/images/our-range/overrange_agedcare_180_x_240.jpg";
import ozFarmPregnantMother from "@/public/images/our-range/ozfarm_pregnant_mother_front_ps_medium_60ea71c5-7431-4422-8f8e-dfe69b043efe.jpg";
import MoreBtn from "../components/more-btn/MoreBtn";
export default function OurRange() {
  return (
    <div className="container mx-auto p-4">
      <div className="flex flex-col gap-5 p-5 bg-white shadow-lg rounded-lg items-center">
        <h1 className="font-semibold text-xl md:text-2xl">
          Thông tin sản phẩm - Oz Farm
        </h1>
        <Image
          src={imgOzFarmOurRange}
          alt="medi-fast-links-our-range"
          className="w-full"
        />
        <p className="text-justify text-slate-500">
          Thấu hiểu rằng nhu cầu dinh dưỡng thay đổi theo suốt cuộc đời, Oz Farm
          chuyên bào chế các loại sữa bột dinh dưỡng để có sức khỏe tối ưu - cho
          mọi giai đoạn cuộc đời - từ trẻ sơ sinh đến người già và tất cả các
          giai đoạn ở giữa. <br /> Để được khỏe mạnh, điều quan trọng là phải
          cung cấp thêm bất kỳ nhu cầu dinh dưỡng nào cho cơ thể bạn trong những
          giai đoạn này - đặc biệt là trong thời kỳ mang thai, trẻ đang lớn và
          những năm cuối đời. <br /> Phạm vi của Oz Farm bao gồm các giai đoạn
          sau bao gồm:
        </p>
        <section className="w-2/3 flex flex-col items-center">
          <span className="font-semibold text-xl text-secondary-color">
            Oz Farm SleepWell™ - Lactium® đã được chứng minh lâm sàng hỗ trợ
            chất lượng giấc ngủ
          </span>
          <div className="flex flex-row gap-4">
            <div>
              <p className="py-4 text-slate-500 text-justify">
                Công thức sữa dinh dưỡng{" "}
                <span className="font-semibold text-black">
                  {" "}
                  Oz Farm SleepWell™
                </span>{" "}
                được pha chế với thành phần đã được chứng minh lâm sàng,
                Lactium®, giúp mọi người giảm bớt các vấn đề khó ngủ hoặc lo
                lắng mà không gây nghiện.
              </p>
              <MoreBtn link={"/our-range/oz-farm-sleep-well"} />
            </div>

            <Image src={ozFarmSleepWellImg} alt="oz-farm-sleep-well" />
          </div>
        </section>
        <section className="w-2/3 flex flex-col items-center">
          <span className="font-semibold text-xl text-secondary-color">
            Oz Farm Aged Care Plus - Dinh dưỡng phong phú hỗ trợ sức khỏe đường
            ruột cho người già
          </span>
          <div className="flex flex-row gap-4">
            <div>
              <p className="py-4 text-slate-500 text-justify">
                Công thức sữa dinh dưỡng{" "}
                <span className="font-semibold text-black">
                  Oz Farm Aged Care Plus
                </span>{" "}
                đã được pha chế đặc biệt dành cho người cao tuổi mong muốn duy
                trì đường ruột khỏe mạnh với lượng dinh dưỡng đầy đủ hàng ngày
                theo khuyến nghị. Với việc bổ sung men vi sinh và prebiotic, nó
                giúp khôi phục lại sự cân bằng của vi khuẩn tốt trong ruột và
                thúc đẩy sự phát triển của vi khuẩn có lợi. Điều này, đến lượt
                nó, giúp cải thiện chức năng tiêu hóa.
              </p>
              <MoreBtn link={"/our-range/oz-farm-aged-care-plus"} />
            </div>

            <Image
              src={ozFarmAgedCarePlus}
              alt="oz-farm-aged-care-plus"
              className="h-fit"
            />
          </div>
        </section>
        <section className="w-2/3 flex flex-col items-center">
          <span className="font-semibold text-xl text-secondary-color">
            HealthCare Aged Care - Dinh dưỡng phong phú cho Sức sống, Sức mạnh,
            Phục hồi sau bệnh
          </span>
          <div className="flex flex-row gap-4">
            <div>
              <p className="py-4 text-slate-500 text-justify">
                <span className="font-semibold text-black">
                  Oz Farm Health Care
                </span>{" "}
                là thực phẩm thay thế và bổ sung bữa ăn cung cấp cả dinh dưỡng
                và năng lượng cùng với các vitamin và khoáng chất thiết yếu.
                Giàu canxi để duy trì xương và ít natri, nó được cân bằng đặc
                biệt cho người già, những người không nhận đủ dinh dưỡng từ chế
                độ ăn uống hàng ngày.
              </p>
              <MoreBtn link={"/our-range/oz-farm-health-care"} />
            </div>

            <Image
              src={ozFarmHealthCare}
              alt="oz-farm-aged-care-plus"
              className="h-fit"
            />
          </div>
        </section>
        <section className="w-2/3 flex flex-col items-center">
          <span className="font-semibold text-xl text-secondary-color">
            Oz Farm’s Pregnant Mother - Sản phẩm tuyệt vời cho phụ nữ đang mang
            thai & cho con bú
          </span>
          <div className="flex flex-row gap-4">
            <div>
              <p className="py-4 text-slate-500 text-justify">
                <span className="font-semibold text-black">
                  Oz Farm’s Pregnant Mother
                </span>{" "}
                là sữa dành cho mẹ bầu, sở hữu một công thức được phát triển đặc
                biệt để cung cấp dinh dưỡng thiết yếu cần thiết cho phụ nữ đang
                mang thai, đang cho con bú và cả thai nhi. Các chất dinh dưỡng
                quan trọng như axit folic và sắt cũng hỗ trợ sự phát triển lành
                mạnh của trẻ.
              </p>
              <MoreBtn link={"/our-range/oz-farm-pregnant-mother"} />
            </div>

            <Image
              src={ozFarmPregnantMother}
              alt="oz-farm-pregnant-mother"
              className="h-fit"
            />
          </div>
        </section>
      </div>
    </div>
  );
}
