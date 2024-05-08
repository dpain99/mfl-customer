import Image from "next/image";
import pentaviteImg from "@/public/images/Pentavite-Products-2_768x.webp";
export default function Pentavite() {
  return (
    <div className="grid grid-cols-2">
      <div className="flex justify-center items-center">
        <p className="w-1/2 text-xl">
          <span className="font-semibold text-2xl">
            Ngày nay Pentavite tiếp tục là thương hiệu vitamin tổng hợp số 1
            dành cho trẻ em tại Úc.
          </span>
          <p>
            Các sản phẩm được cam kết không có màu sắc, hương vị hoặc chất ngọt
            nhân tạo. Pentavite mong muốn trẻ em được giáo dục đúng đắn về dinh
            dưỡng ngay từ thời thơ ấu để đồng hành cùng các em suốt đời.
          </p>
        </p>
      </div>
      <div>
        <iframe
          width="100%"
          height="500px"
          src="https://www.youtube.com/embed/SPmbrjeVuj0"
          title='"Must be a Pentavite Kid" Masterbrand TVC 30&#39;'
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
      </div>
      <div>
        <Image src={pentaviteImg} alt="pentavite-img" />
      </div>
      <div className="flex flex-col items-center justify-center">
        <div className="text-xl">
          <span className="uppercase text-2xl font-semibold text-emerald-300">
            Lợi ích của Pentavite
          </span>
          <section className="flex flex-col justify-start items-start ">
            <span className="flex justify-center items-center gap-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="1.5em"
                height="1.5em"
                viewBox="0 0 24 24"
                className="text-emerald-300"
              >
                <path
                  fill="currentColor"
                  d="M9 16.17L5.53 12.7a.996.996 0 1 0-1.41 1.41l4.18 4.18c.39.39 1.02.39 1.41 0L20.29 7.71a.996.996 0 1 0-1.41-1.41z"
                />
              </svg>
              Hỗ trợ miễn dịch
            </span>
            <span className="flex justify-center items-center gap-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="1.5em"
                height="1.5em"
                viewBox="0 0 24 24"
                className="text-emerald-300"
              >
                <path
                  fill="currentColor"
                  d="M9 16.17L5.53 12.7a.996.996 0 1 0-1.41 1.41l4.18 4.18c.39.39 1.02.39 1.41 0L20.29 7.71a.996.996 0 1 0-1.41-1.41z"
                />
              </svg>
              Giúp xương và răng chắc khỏe
            </span>
            <span className="flex justify-center items-center gap-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="1.5em"
                height="1.5em"
                viewBox="0 0 24 24"
                className="text-emerald-300"
              >
                <path
                  fill="currentColor"
                  d="M9 16.17L5.53 12.7a.996.996 0 1 0-1.41 1.41l4.18 4.18c.39.39 1.02.39 1.41 0L20.29 7.71a.996.996 0 1 0-1.41-1.41z"
                />
              </svg>
              Hỗ trợ năng lương
            </span>
            <span className="flex justify-center items-center gap-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="1.5em"
                height="1.5em"
                viewBox="0 0 24 24"
                className="text-emerald-300"
              >
                <path
                  fill="currentColor"
                  d="M9 16.17L5.53 12.7a.996.996 0 1 0-1.41 1.41l4.18 4.18c.39.39 1.02.39 1.41 0L20.29 7.71a.996.996 0 1 0-1.41-1.41z"
                />
              </svg>
              Tăng cường cơ bắp
            </span>
          </section>
        </div>
      </div>
    </div>
  );
}
