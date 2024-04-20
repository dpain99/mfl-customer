import BreadCrumb from "@/app/components/breadcrumb/Breadcrumb";

export default function ReturnPolicy() {
  return (
    <div className="container mx-auto px-4 pb-4">
      <div className="py-5">
        <BreadCrumb
          items={[
            { title: "Trang Chủ", href: "/" },
            { title: `Quy định bảo hành` },
          ]}
        />
      </div>

      <div className="bg-white rounded-lg p-5 flex flex-col gap-5">
        <h1 className="text-2xl font-bold py-5">Chính Sách Đổi Trả</h1>
        <h2 className="text-xl font-semibold">1. Điều kiện đổi trả:</h2>
        <div className="text-base pl-10">
          <ul className="list-disc">
            <li>Sản phẩm bị trục trặc, lỗi do nhà sản xuất.</li>
            <li>
              Sản phẩm còn nguyên vẹn, không bị nứt vỡ, không bị biến dạng do
              tác động của ngoại lực.
            </li>
            <li>Sản phẩm bị trục trặc, lỗi do nhà sản xuất.</li>
            <li>
              Sản phẩm phải còn nguyên vẹn thông tin S/N và tem của nhà phân
              phối còn nguyên vẹn với đầy đủ thông tin thời gian bảo hành.
            </li>
            <li>Sản phẩm phải còn trong thời gian bảo hành.</li>
          </ul>
        </div>
        <h2 className="text-xl font-semibold">2. Thời hạn đổi trả:</h2>
        <div className="text-base pl-10">
          Sản phẩm còn trong thời gian bảo hành của nhà sản xuất.
        </div>
      </div>
    </div>
  );
}
