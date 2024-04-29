import BreadCrumb from "../components/breadcrumb/Breadcrumb";
import "./style.scss";
import ItemBlog from "@/app/blog/Item-blog/ItemBlog";
import img1SuaMe from "@/public/images/blog/mother-eating-breastfeeding-newborn.webp";
import img1AnVat from "@/public/images/blog/pregnancy-midnight-snack-cravings.webp";
import img1ThemAn from "@/public/images/blog/increasing-childs-appetite.webp";
import img1MuaDong from "@/public/images/blog/ozfarm-jul-blog.webp";
import img1KenAn from "@/public/images/blog/fussy-eaters-approaches-to-avoid.webp";
import CardProduct from "../home/product-card/ProductCard";

export default function Blog() {
  return (
    <div className="container mx-auto px-4">
      <div className="container px-4 mx-auto pb-5 pt-5">
        <BreadCrumb
          items={[{ title: "Trang Chủ", href: "/" }, { title: `Cẩm Nang` }]}
        />
      </div>
      <div className="flex flex-row gap-5 w-full">
        <div className="hidden lg:flex flex-col items-center gap-5 basis-1/4 bg-white shadow-lg rounded-lg p-5">
          <h2 className="font-semibold text-xl uppercase text-secondary-color">
            Sản phẩm hot
          </h2>
          <section className="flex flex-col gap-5">
            <CardProduct title={""} price={0} image={""} slug={""} />
            <CardProduct title={""} price={0} image={""} slug={""} />
            <CardProduct title={""} price={0} image={""} slug={""} />
            <CardProduct title={""} price={0} image={""} slug={""} />
            <CardProduct title={""} price={0} image={""} slug={""} />
          </section>
        </div>
        <div className="flex flex-col gap-5 grow bg-white shadow-lg rounded-lg p-5 items-center">
          <ItemBlog
            title={"Nên Ăn Gì Khi Đang Nuôi Con Bằng Sữa Mẹ"}
            preview={
              "Trở thành 'mẹ' mới có thể mang lại những thay đổi lớn cho cuộc sống của bạn, đặc biệt nếu đó là đứa con đầu lòng của bạn. Để chăm sóc cả bạn và con, điều quan trọng là phải đảm bảo bạn ăn cho cả hai người!"
            }
            img={img1SuaMe}
            hastag={[
              "Khỏe Mạnh",
              "Phong Cách Sống",
              "Làm Mẹ",
              "Mới Sinh",
              "Dinh Dưỡng",
            ]}
          />
          <ItemBlog
            title={
              "Cách Để Kiềm Chế Cơn thèm ăn lúc nửa đêm khi mang thai (hoặc cho con bú)"
            }
            preview={
              "Bất cứ ai đã từng mang thai sẽ biết cảm giác đói khát vô độ khi đứa trẻ lớn lên và sau đó được bú sữa. Và những cơn đói này không chỉ tấn công chúng ta vào ban ngày! Ăn vặt vào ban đêm là một tác dụng phụ phổ biến đáng ngạc nhiên khi mang thai và cho con bú, đồng thời khiến chúng ta khó có được thời gian nghỉ ngơi mà cơ thể chúng ta rất cần."
            }
            img={img1AnVat}
            hastag={[
              "Nửa Đêm",
              "Mang Bầu",
              "Ăn Vặt",
              "Đói Bụng",
              "Đêm",
              "Dinh Dưỡng",
            ]}
          />
          <ItemBlog
            title={"7 lời khuyên để tăng sự thèm ăn của con bạn"}
            preview={
              "Giống như nhiều bậc cha mẹ, có những trường hợp bạn cảm thấy con mình ăn không đủ chất. Cho dù đó là vì trẻ kén ăn hay vì một vấn đề sâu xa hơn, hãy đọc tiếp để khám phá những lời khuyên của chúng tôi về cách tăng cảm giác thèm ăn cho con bạn."
            }
            img={img1ThemAn}
            hastag={[
              "Gia đình",
              "Thực phẩm",
              "Khỏe mạnh",
              "Trẻ em",
              "Dinh Dưỡng",
            ]}
          />
          <ItemBlog
            title={"5 mẹo vặt để mang thai khỏe mạnh trong mùa đông"}
            preview={
              "Mang thai là một hành trình tuyệt vời dù đang trong mùa, tuy nhiên mang thai vào mùa đông cũng có những thách thức riêng. Hãy đọc tiếp để khám phá những lời khuyên hàng đầu của chúng tôi về cách giữ sức khỏe và thoải mái trong những tháng sắp làm mẹ của bạn, khi nhiệt độ ngày càng giảm xuống!"
            }
            img={img1MuaDong}
            hastag={[
              "kinh nghiệm",
              "mang bầu",
              "Khỏe mạnh",
              "Dinh Dưỡng",
              "mùa đông",
            ]}
          />
          <ItemBlog
            title={"5 cách tiếp cận cần tránh với trẻ kén ăn"}
            preview={
              "Có vài điều khó chịu hơn việc đổ thời gian và công sức vào việc nấu một bữa ăn mà con bạn không ăn. Nhưng đối với một số bậc cha mẹ, đây là tiêu chuẩn hàng đêm."
            }
            img={img1KenAn}
            hastag={[
              "gia đình",
              "thực phẩm",
              "Khỏe mạnh",
              "chăm sóc trẻ",
              "bố mẹ",
              "dinh dưỡng",
            ]}
          />
        </div>
      </div>
    </div>
  );
}
