import Image from "next/image";
import eukyBearImg from "@/public/images/G20201_Web_Banner_V2-01_1920x_crop_center_0e5e27ec-0b63-4805-bcea-868446d7dcdb_1920x_crop_center.webp";
export default function EukyBear() {
  return (
    <div className="relative w-screen my-20">
      <Image
        src={eukyBearImg}
        alt="euky-bear-img"
        className="z-0 w-full object-cover"
        style={{ height: "450px" }}
      />
      <section className="flex flex-col gap-5 z-20 absolute -top-10 left-1/4 text-neutral-600 w-96 text-lg">
        <span className="font-semibold text-3xl upppercase">
          Chăm sóc cho bé <br /> với hơn 40 năm miệt mài
        </span>
        <p>
          Triết lý của{" "}
          <span style={{ color: "#E40062", fontWeight: "600" }}>
            Euky Bear&trade;
          </span>{" "}
          rất đơn giản; nếu sản phẩm không đáp ứng các tiêu chí chất lượng, sản
          phẩm sẽ không được sản xuất.
        </p>
        <p>Điều đó có nghĩa là:</p>
        <p>
          Các sản phẩm được tạo ra từ những thành phần tự nhiên nhất, có nguồn
          gốc thực vật và hữu cơ.
        </p>
        <p>Đảm bảo tất cả các thành phần đều an toàn và nhẹ nhàng cho bé.</p>
      </section>
    </div>
  );
}
