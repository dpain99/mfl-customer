import "./style.scss";
import { kanit } from "@/fonts/font";
import sydneyImg from "@/public/images/sydney-img.png";
import Image from "next/image";
import sunImg from "@/public/images/sun.png";
import img from "@/public/images/first.png";
import milkMan from "@/public/images/milkman.png";
import tamNhinImg from "@/public/images/tam-nhin.png";
import suMenhImg from "@/public/images/su-menh.png";
import CardValues from "./card-values/CardValues";
import CardWater from "./card-values/CardValues";
export default function AboutUs() {
  return (
    <div className="about-us bg-scroll">
      <div className="container mx-auto px-4 flex flex-col text-xl gap-10 pb-10">
        <div className="flex flex-col items-center bg-white shadow-xl p-5 rounded-lg mt-10 gap-5">
          <Image src={img} alt="oz-farm" className="rounded-lg" />
          <span className="font-semibold text-3xl text-center">
            Giới thiệu về <br /> Medi Fast Links
          </span>
          <p className="text-justify">
            Medi Fast Links là một công ty mới trên thị trường, chuyên về các
            dòng sản phẩm nhập khẩu Úc. Với tâm huyết và niềm tin, chúng tôi
            luôn cam kết mang đến cho khách hàng những sản phẩm cùng dịch vụ
            chất lượng, tiêu chuẩn cho nhu cầu của người tiêu dùng. Đặc biệt với
            dòng sản phẩm sữa bột Oz Farm, chúng tôi là đại lý tiêu biểu cho
            nhãn sữa nổi tiếng tại Úc, muốn đem nhãn hiệu này về phục vụ cho
            người tiêu dùng Việt Nam. Uy tín tạo nên thương hiệu, niềm tin củng
            cố bởi sản phẩm, chúng tôi đã sẵn sàng phục vụ và đáp ứng mọi nhu
            cầu của khách hàng.
            <br />
            Medi Fast Links hiện đã có showrooms cũng như có mặt tại các nền
            tảng Mạng xã hội Facebook, Tiktok... các sàn thương mại điện tử lớn
            nhất để khách hàng có thể dễ dàng truy cập và lựa chọn cho mình
            những sản phẩm phù hợp với nhu cầu bản thân.
            <br />
            Với chiến lược kinh doanh bài bản, tầm nhìn xa rộng, Medi Fast Links
            không ngừng nghiên cứu, đổi mới, sáng tạo, gia tăng hiệu quả vận
            hành đồng thời nâng cao chất lượng sản phẩm, dịch vụ tạo dựng vị thế
            cạnh tranh trên thị trường. Medi Fast Links sẽ không ngừng mở rộng,
            hợp tác và phát triển để trở thành nhà phân phối dẫn đầu trong lĩnh
            vực mình tại Việt Nam và sẽ trở thành nhà cung cấp cho thị trường
            Đông Nam Á và khu vực lân cận.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div className="flex flex-row gap-2 items-center">
            <Image src={tamNhinImg} alt="tam-nhin" className="size-40" />
            <div className="flex flex-col gap-2">
              <span className="uppercase font-semibold text-3xl bg-white p-5 rounded-lg bg-gradient-to-r from-sky-500 to-indigo-500">
                Tầm nhìn
              </span>
              <span className="text-justify bg-white p-5 rounded-lg">
                “Trở thành biểu tượng niềm tin hàng đầu Việt Nam về sản phẩm
                nhập khẩu Úc phục vụ cuộc sống con người“
              </span>
            </div>
          </div>
          <div className=""></div>
          <div className=""></div>
          <div className="flex flex-row gap-2 items-center">
            <div className="flex flex-col gap-2">
              <span className="uppercase font-semibold text-3xl bg-white p-5 rounded-lg text-end bg-gradient-to-r from-indigo-500 to-sky-500">
                Sứ mệnh
              </span>
              <span className="text-justify bg-white p-5 rounded-lg">
                “Mang đến cho khách hàng Việt Nam những sản phẩm được chọn lọc,
                phù hợp với tiêu chuẩn cao nhất“
              </span>
            </div>
            <Image
              src={suMenhImg}
              alt="su-menh"
              className="size-40 object-cover"
            />
          </div>
        </div>
        <h1 className="text-5xl font-semibold text-center py-20 text-secondary-color uppercase">
          Giá trị cốt lõi
        </h1>
        <div className="flex flex-col md:flex-row justify-center items-center gap-20">
          <div className="w-52 h-72 bg-white shadow-lg relative flex justify-center rounded-lg">
            <div className="w-32 h-32 rounded-full bg-white absolute -top-14 shadow-lg flex items-center justify-center text-sky-500">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="2em"
                height="2em"
                viewBox="0 0 14 14"
              >
                <g
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path d="M1.046 5.814h2.351v6.26h-2.35a.496.496 0 0 1-.497-.496V6.31a.496.496 0 0 1 .496-.496" />
                  <path d="m3.397 5.814l2.52-4.028a1.081 1.081 0 0 1 .933-.516a1.101 1.101 0 0 1 1.14 1.09v2.887h4.356a1.14 1.14 0 0 1 1.091 1.31l-.793 5.119a1.131 1.131 0 0 1-1.121.992H5.014c-.31.001-.615-.07-.892-.208l-.715-.357m-.01-6.289v6.26" />
                </g>
              </svg>
            </div>
            <p className="pt-20 px-5 text-center">
              Medi Fast Links coi uy tín là mục tiêu hàng đầu để công ty phát
              triển
            </p>
            <div className="absolute bottom-0 bg-sky-500 w-40 rounded-t-full flex justify-center py-2">
              <span className="font-semibold text-xl text-white">Uy tín</span>
            </div>
          </div>
          <div className="w-52 h-72 bg-white shadow-lg relative flex justify-center rounded-lg">
            <div className="w-32 h-32 rounded-full bg-white absolute -top-14 shadow-lg flex items-center justify-center text-sky-500">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="2em"
                height="2em"
                viewBox="0 0 16 16"
              >
                <g
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                >
                  <path d="M14.25 8.75c-.5 2.5-2.385 4.854-5.03 5.38A6.25 6.25 0 0 1 3.373 3.798C5.187 1.8 8.25 1.25 10.75 2.25" />
                  <path d="m5.75 7.75l2.5 2.5l6-6.5" />
                </g>
              </svg>
            </div>
            <p className="pt-20 px-5 text-center">
              Chất lượng sản phẩm và dịch vụ luôn là kim chỉ nam cho công ty
            </p>
            <div className="absolute bottom-0 bg-sky-500 w-40 rounded-t-full flex justify-center py-2">
              <span className="font-semibold text-xl text-white">
                Chất lượng
              </span>
            </div>
          </div>
          <div className="w-52 h-72 bg-white shadow-lg relative flex justify-center rounded-lg">
            <div className="w-32 h-32 rounded-full bg-white absolute -top-14 shadow-lg flex items-center justify-center text-sky-500">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="2.2em"
                height="2.2em"
                viewBox="0 0 16 16"
              >
                <path
                  fill="currentColor"
                  d="M13 3a5.393 5.393 0 0 1-1.902 1.178c-.748.132-2.818-.828-3.838.152c-.17.17-.38.34-.6.51c-.48-.21-1.22-.53-1.76-.84S3 3 3 3L0 6.5s.74 1 1.2 1.66c.3.44.67 1.11.91 1.56l-.34.4a.876.876 0 0 0 .15 1a.833.833 0 0 0 1.002-.002a.62.62 0 0 0 .077.881a.994.994 0 0 0 1.006-.002a.806.806 0 0 0-.003 1.005a1.012 1.012 0 0 0 .892-.114a.822.822 0 0 0 .187.912a1.093 1.093 0 0 0 1.054-.092l.516-.467c.472.47 1.123.761 1.842.761l.061-.001a1.311 1.311 0 0 0 1.094-.791c.146.056.312.094.488.094c.236 0 .455-.068.64-.185c.585-.387.445-.687.445-.687a1.07 1.07 0 0 0 1.229-.279a.996.996 0 0 0 .138-1.215a.036.036 0 0 0 .021.005c.421 0 .787-.232.978-.574a1.564 1.564 0 0 0-.191-1.48l.003.005c.82-.16.79-.57 1.19-1.17a4.725 4.725 0 0 1 1.387-1.208zm-.05 7.06c-.44.44-.78.25-1.53-.32S9.18 8.1 9.18 8.1c.061.305.202.57.401.781c.319.359 1.269 1.179 1.719 1.599c.28.26 1 .78.58 1.18s-.75 0-1.44-.56s-2.23-1.94-2.23-1.94a.937.937 0 0 0 .27.72c.17.2 1.12 1.12 1.52 1.54s.75.67.41 1s-1.03-.19-1.41-.58c-.59-.57-1.76-1.63-1.76-1.63l-.001.053c0 .284.098.544.263.75c.288.378.848.868 1.188 1.248s.54.7 0 1s-1.34-.44-1.69-.8v-.002a.411.411 0 0 0-.1-.269a.896.896 0 0 0-.906-.188A.609.609 0 0 0 6 11.1a.754.754 0 0 0-.912.001a.61.61 0 0 0-.085-.95a1 1 0 0 0-1.174.08a.66.66 0 0 0-.068-.911a.996.996 0 0 0-1.186-.128L1.91 8.069c-.46-.73-1-1.49-1-1.49l2.28-2.77s.81.5 1.48.88c.33.19.9.44 1.33.64c-.68.51-1.25 1-1.08 1.34a1.834 1.834 0 0 0 2.087.036a2.41 2.41 0 0 1 1.343-.403c.347 0 .677.072.976.203c.554.374 1.574 1.294 2.504 1.874c1.17.85 1.4 1.4 1.12 1.68z"
                />
              </svg>
            </div>
            <p className="pt-20 px-5 text-center">
              Niềm tin của khách hàng làm nên thương hiệu của công ty
            </p>
            <div className="absolute bottom-0 bg-sky-500 w-40 rounded-t-full flex justify-center py-2">
              <span className="font-semibold text-xl text-white">Niềm tin</span>
            </div>
          </div>
          <div className="w-52 h-72 bg-white shadow-lg relative flex justify-center rounded-lg">
            <div className="w-32 h-32 rounded-full bg-white absolute -top-14 shadow-lg flex items-center justify-center text-sky-500">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="2em"
                height="2em"
                viewBox="0 0 16 16"
              >
                <path
                  fill="currentColor"
                  fillRule="evenodd"
                  d="M13.293 0c.39 0 .707.317.707.707V2h1.293a.707.707 0 0 1 .5 1.207l-1.46 1.46A1.138 1.138 0 0 1 13.53 5h-1.47L8.53 8.53a.75.75 0 0 1-1.06-1.06L11 3.94V2.47c0-.301.12-.59.333-.804l1.46-1.46a.707.707 0 0 1 .5-.207ZM2.5 8a5.5 5.5 0 0 1 6.598-5.39a.75.75 0 0 0 .298-1.47A7 7 0 1 0 14.86 6.6a.75.75 0 0 0-1.47.299A5.5 5.5 0 1 1 2.5 8m5.364-2.496a.75.75 0 0 0-.08-1.498A4 4 0 1 0 11.988 8.3a.75.75 0 0 0-1.496-.111a2.5 2.5 0 1 1-2.63-2.686Z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <p className="pt-20 px-5 text-center">
              Mang đến những lợi ích thiết thực nhất cho khách hàng
            </p>
            <div className="absolute bottom-0 bg-sky-500 w-40 rounded-t-full flex justify-center py-2">
              <span className="font-semibold text-xl text-white">Giá trị</span>
            </div>
          </div>
        </div>
        <h1 className="text-5xl font-semibold text-center py-20 text-secondary-color uppercase">
          Mục tiêu phát triển
        </h1>
        <div className="flex flex-col md:flex-row gap-16 justify-center">
          <div className="flex flex-col gap-10 items-center">
            <CardWater
              title={
                "Trở thành công ty hàng đầu về nhập khẩu các sản phẩm từ Úc"
              }
            />
            <p style={{ width: "350px" }} className="text-justify text-sky-700">
              Medi Fast Links muốn là một địa chỉ đáng tin cậy hàng đầu khi
              khách hàng có nhu cầu sử dụng các sản phẩm với chất lượng tốt nhất
              đến từ xứ sở Kangaroo.
            </p>
          </div>
          <div className="flex flex-col gap-10 items-center">
            <CardWater
              title={
                "Đảm bảo sản phẩm nhập khẩu đáp ứng các tiêu chuẩn chất lượng cao"
              }
            />
            <p style={{ width: "350px" }} className="text-justify text-sky-700">
              Luôn đem đến tận tay khách hàng những sản phẩm chất lượng, tiêu
              chuẩn phục vụ cho nhu cầu khách hàng, cũng như đa dạng hóa các
              danh mục sản phẩm.
            </p>
          </div>
          <div className="flex flex-col gap-10 items-center">
            <CardWater
              title={
                "Xây dựng mối quan hệ ổn định và bền vững với khách hàng và đối tác"
              }
            />
            <p style={{ width: "350px" }} className="text-justify text-sky-700">
              Luôn là nơi để khách hàng và đối tác tin tưởng để song hành, và
              phát triển mạng lưới rộng khắp nhằm đáp ứng tối đa nhu cầu của các
              bên.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
