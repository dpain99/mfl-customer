import "./style.scss";
import { kanit } from "@/fonts/font";
import sydneyImg from "@/public/images/sydney-img.png";
import Image from "next/image";
import sunImg from "@/public/images/sun.png";
export default function AboutUs() {
  return (
    <div className="flex flex-col about-us">
      <div className="flex justify-center items-center flex-col relative">
        <Image src={sydneyImg} alt="sydney-img" className="w-1/2 pb-16 z-10" />
        <Image src={sunImg} alt="sun-img" className="spinning-img" />

        <div className="waves">
          <div className="wave" id="wave1"></div>
          <div className="wave" id="wave2"></div>
          <div className="wave" id="wave3"></div>
          <div className="wave" id="wave4"></div>
        </div>

        <span
          className={`${kanit.className} absolute text-7xl font-bold -top-14 z-2`}
        >
          MEDI FAST LINKS
        </span>
      </div>
      <div className="content-about-us flex justify-center items-center pt-20 px-40">
        <p className="text-3xl">
          Chào mừng bạn đến với chúng tôi - một địa chỉ đáng tin cậy trong việc
          cung cấp các sản phẩm nhập khẩu từ Úc!
          <br />
          Chúng tôi là một công ty chuyên nhập khẩu và phân phối các sản phẩm
          chất lượng cao từ xứ sở Kangaroo. Với cam kết đem đến những sản phẩm
          tốt nhất, chúng tôi tập trung chủ yếu vào ba lĩnh vực chính: sữa, mỹ
          phẩm và vitamin.
          <br />
          Với sứ mệnh nâng cao chất lượng cuộc sống và sức khỏe của mọi người,
          chúng tôi không ngừng nỗ lực để mang lại những sản phẩm an toàn, hiệu
          quả và được kiểm định chất lượng cao. Từ sữa giàu dinh dưỡng, mỹ phẩm
          chăm sóc da đa dạng đến các loại vitamin cần thiết, chúng tôi tự hào
          là người bạn đồng hành tin cậy trong hành trình chăm sóc sức khỏe và
          sắc đẹp của bạn. Với tôn chỉ Chất lượng là uy tín, chúng tôi luôn cam
          kết đem đến sự hài lòng và niềm tin tuyệt đối cho khách hàng. Hãy đồng
          hành cùng chúng tôi để trải nghiệm sự khác biệt và ưu đãi tuyệt vời từ
          những sản phẩm nhập khẩu chất lượng nhất từ Úc.
        </p>
      </div>
    </div>
  );
}
