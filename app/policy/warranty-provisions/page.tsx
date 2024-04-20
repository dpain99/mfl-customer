import BreadCrumb from "@/app/components/breadcrumb/Breadcrumb";

export default function WarrantyProvisions() {
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
        <h1 className="text-2xl font-bold py-5">Qui Định Bảo Hành</h1>
        <h2 className="text-xl font-semibold">1. Điều kiện bảo hành hợp lệ:</h2>
        <div className="text-base pl-10">
          <ul className="list-disc">
            <li>
              Sản phẩm còn nguyên vẹn, không bị nứt vỡ, không bị biến dạng do
              tác động của ngoại lực.
            </li>
            <li>
              Sản phẩm phải còn nguyên vẹn thông tin S/N và tem của nhà phân
              phối còn nguyên vẹn với đầy đủ thông tin thời gian bảo hành.
            </li>
            <li>Sản phẩm phải còn trong thời gian bảo hành.</li>
          </ul>
        </div>
        <h2 className="text-xl font-semibold">2.Điều kiện từ chối bảo hành</h2>
        <div className="text-base pl-10">
          <ul className="list-disc">
            <li>
              Sản phẩm bị hư do thiên tai, hỏa hoạn, lụt lội, sét đánh, côn
              trùng, động vật vào.
            </li>
            <li>
              Sản phẩm được đặt nơi bụi bẩn, ẩm ướt, bị vào nước, bị thấm nước.
            </li>
            <li>
              Sản phẩm bị biến dạng do tác động nhiệt, tác động bên ngoài.
            </li>
            <li>
              Sản phẩm có vết mốc, rỉ sét hoặc bị ăn mòn, oxy hóa bởi hóa chất.
            </li>
            <li>
              Khách hàng gây nên những khuyết tật như biến dạng, nứt vỡ, trầy
              xước.
            </li>
            <li>Sản phẩm hết hạn bảo hành.</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
