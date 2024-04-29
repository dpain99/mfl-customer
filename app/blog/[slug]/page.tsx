"use client";
import img1SuaMe from "@/public/images/blog/mother-eating-breastfeeding-newborn.webp";
import img1AnVat from "@/public/images/blog/pregnancy-midnight-snack-cravings.webp";
import img1ThemAn from "@/public/images/blog/increasing-childs-appetite.webp";
import img1MuaDong from "@/public/images/blog/ozfarm-jul-blog.webp";
import img1KenAn from "@/public/images/blog/fussy-eaters-approaches-to-avoid.webp";
import Image from "next/image";
import { useParams } from "next/navigation";

export default function DetailBlog() {
  const params = useParams();
  return (
    <div className="container mx-auto p-4">
      {params.slug ===
        "cach-de-kiem-che-con-them-an-luc-nua-dem-khi-mang-thai-hoac-cho-con-bu" && (
        <div className="border border-slate-200 border-solid rounded-lg bg-white p-5">
          <h1 className="font-semibold text-xl text-secondary-color">
            Cách để Kiềm chế cơn thèm ăn lúc nửa đêm khi mang thai (hoặc cho con
            bú)
          </h1>
          Bất cứ ai từng mang thai đều biết cảm giác đói khát vô độ khi đứa trẻ
          lớn lên và sau đó được bú mẹ. Và những cơn đói này không chỉ tấn công
          chúng ta vào ban ngày! Ăn vặt vào ban đêm là một tác dụng phụ phổ biến
          đáng ngạc nhiên khi mang thai và cho con bú, đồng thời khiến chúng ta
          khó có được thời gian nghỉ ngơi mà cơ thể chúng ta rất cần. Nếu cảm
          giác thèm ăn vào ban đêm của bạn gây ra vấn đề, hãy thử những lời
          khuyên sau:
          <br /> <Image src={img1AnVat} alt="kiem-che-them-an" />
          <span className="font-semibold">
            1. Tăng lượng calo nạp vào ban ngày
          </span>{" "}
          <br /> Phát triển một cuộc sống mới cần có năng lượng. Trong tam cá
          nguyệt thứ hai, cơ thể chúng ta cần nhiều hơn 340 calo mỗi ngày so với
          khi không mang thai và trong tam cá nguyệt thứ ba, con số này tăng lên
          450. Nếu vẫn áp dụng chế độ ăn kiêng trước khi mang thai, bạn có thể
          không tiêu thụ đủ trong ngày, điều này có thể khiến bạn thức dậy với
          cảm giác đói vào ban đêm. Chống lại điều này bằng cách ăn nhiều
          protein nạc, ngũ cốc nguyên hạt, sữa, rau và trái cây. Nếu tình trạng
          ốm nghén cản trở chế độ ăn uống cân bằng, hãy thử dùng sữa bột dinh
          dưỡng như Mẹ bầu hoặc Chăm sóc mẹ của Oz Farm. Chúng cung cấp thêm
          năng lượng mà cơ thể bạn cần, cũng như các vitamin và khoáng chất
          thiết yếu để hỗ trợ sức khỏe của bạn và em bé. <br />{" "}
          <span className="font-semibold">2. Ăn nhẹ trước khi đi ngủ</span>{" "}
          <br /> Ăn một bữa ăn nhẹ giàu protein trước khi đi ngủ là một cách
          tuyệt vời khác để hạn chế cảm giác thèm ăn vào ban đêm. Protein tăng
          cường giải phóng các hormone ức chế sự thèm ăn, có thể giúp hạn chế
          cơn đói cho đến sáng. Kết hợp protein với ngũ cốc nguyên hạt để có một
          bữa ăn nhẹ thỏa mãn nhưng tốt cho sức khỏe. Hãy nghĩ đến bánh quy giòn
          với phô mai và trái cây ít béo, sữa chua với bánh mì nướng và bơ hạnh
          nhân, hoặc một bát cháo làm từ sữa. Chỉ cần đảm bảo bạn ăn một giờ
          trước khi đi ngủ để tránh trào ngược axit. <br />{" "}
          <span className="font-semibold">3. Hãy chuẩn bị</span> <br /> Nếu bạn
          vẫn thấy mình thức dậy đói vào lúc 3 giờ sáng, điều cuối cùng bạn muốn
          làm là loạng choạng xuống bếp tìm thức ăn trong bóng tối. Thay vào đó,
          hãy đặt một món ăn nhẹ bổ dưỡng, dễ ăn trong tầm tay của bạn. Chuối là
          sự lựa chọn tuyệt vời vì chúng chứa một loại axit amin thúc đẩy giấc
          ngủ tự nhiên được gọi là tryptophan. Một thìa bơ hạnh nhân là một món
          ăn nhẹ nửa đêm nhanh chóng và dễ dàng khác có thể giúp bạn tỉnh táo
          cho đến sáng. Những cơn đói lúc nửa đêm khi mang thai thực sự có thể
          tàn phá giấc ngủ của chúng ta. Nhưng chỉ cần chuẩn bị một chút, chúng
          ta có thể giảm cảm giác thèm ăn vào ban đêm - hoặc ít nhất là tác động
          của nó đến giấc ngủ. Những lời khuyên ở trên sẽ hữu ích, nhưng nếu
          việc ngủ trưa vào ban đêm của bạn thực sự ảnh hưởng đến sức khỏe thể
          chất hoặc tinh thần của bạn, hãy trò chuyện với bác sĩ.
        </div>
      )}

      {params.slug === "nen-an-gi-khi-dang-nuoi-con-bang-sua-me" && (
        <div className="border border-slate-200 border-solid rounded-lg bg-white p-5">
          <h1 className="font-semibold text-xl text-secondary-color">
            Ăn gì khi cho con bú
          </h1>
          Trở thành mẹ mới có thể mang lại những thay đổi lớn cho cuộc sống của
          bạn, đặc biệt nếu đó là đứa con đầu lòng của bạn. Để chăm sóc cả bạn
          và con, điều quan trọng là phải đảm bảo bạn ăn cho cả hai người! Mặc
          dù cơ thể bạn trải qua những thay đổi trong khi mang thai và thậm chí
          sau đó - một điều không thay đổi là tầm quan trọng của chế độ ăn uống
          lành mạnh. Trong khi nuôi con nhỏ, điều quan trọng là phải bổ sung
          thêm một số chất dinh dưỡng cho cả bạn và con bạn (Cho con bú đốt cháy
          tới 500 calo mỗi ngày!). Bạn có thể hy vọng em bé sẽ giảm cân nhanh
          chóng nhưng hãy kiên nhẫn! Trên thực tế, trong ba tháng đầu tiên, bạn
          vẫn có thể tích mỡ vì bạn cần thêm năng lượng. Tin vui là bạn sẽ bắt
          đầu đốt cháy calo nhanh chóng sau khi cho con bú được 3-6 tháng! Dưới
          đây là một số thực phẩm mà chúng tôi nghĩ bạn nên thưởng thức để cảm
          thấy tốt nhất cho niềm vui mới của mình;
          <br /> <Image src={img1SuaMe} alt="kiem-che-them-an" />
          <span className="font-semibold">1. Nước</span> <br /> Vì bạn mất nhiều
          chất lỏng trong thời gian cho con bú nên việc bù nước là điều quan
          trọng đối với những bà mẹ mới sinh. Mặc dù tình trạng mất nước cuối
          cùng có thể ảnh hưởng đến nguồn sữa của bạn nhưng nó cũng có thể gây
          ra các vấn đề như mệt mỏi và táo bón. Nên uống tối thiểu 8 ly mỗi
          ngày! <br />{" "}
          <span className="font-semibold">2. Chất dinh dưỡng chính</span> <br />{" "}
          Đây là một vấn đề lớn! Nhu cầu dinh dưỡng của bạn sẽ cao hơn khi cho
          con bú sữa mẹ, do đó cần phải bổ sung chúng. Các chất dinh dưỡng như
          Vitamin A, B và D rất quan trọng khi cho con bú vì nó truyền qua sữa
          mẹ sang con bạn. Thực phẩm giàu vitamin này là Cá, Phô mai, Các loại
          hạt, Rau lá xanh đậm và nhiều loại khác. Hơn nữa, các chất dinh dưỡng
          như Kẽm, Canxi và Sắt cũng rất quan trọng cần cân nhắc trong chế độ ăn
          uống của bạn. Chúng có thể không ảnh hưởng đến chế độ ăn của trẻ nhưng
          có thể ảnh hưởng đến mức năng lượng và sức khỏe của bạn. Thêm các loại
          thực phẩm như thịt đỏ, sữa và nhiều loại rau xanh là bạn đã sẵn sàng!
          Điều độ là chìa khóa khi nói đến một chế độ ăn uống lành mạnh, trong
          khi ăn các chất dinh dưỡng rất tốt cho bạn thì việc thưởng thức một
          loại thực phẩm cụ thể cũng có thể có tác động tiêu cực. Dòng sản phẩm
          Chăm sóc Mẹ và Mẹ Mang thai của chúng tôi là sự lựa chọn hoàn hảo cho
          những người mới làm mẹ vì nó chứa tất cả các chất dinh dưỡng phù hợp
          để đảm bảo bạn luôn ở trạng thái tốt nhất. <br />{" "}
          <span className="font-semibold">3. Sữa</span> <br /> Ngoài việc tăng
          lượng chất lỏng nạp vào cơ thể, sữa còn là nguồn cung cấp canxi tuyệt
          vời và chứa các vitamin thiết yếu không chỉ tốt cho bạn mà còn cho cả
          em bé của bạn. Tốt hơn hết, hãy thử dòng sản phẩm Chăm sóc mẹ và Mẹ
          mang thai của chúng tôi để có thêm chất dinh dưỡng. để đảm bảo bạn
          luôn ở trạng thái tốt nhất. <br />{" "}
          <span className="font-semibold">4. Trái cây và rau củ</span> <br />{" "}
          Trái cây và rau quả là những món chủ yếu của bất kỳ chế độ ăn uống
          lành mạnh nào. Các loại trái cây như táo, cam và chuối có chứa chất
          chống oxy hóa giúp loại bỏ các gốc tự do có thể tích tụ và gây tổn hại
          lâu dài cho cơ thể bạn. Lời cảm ơn đặc biệt dành cho Cà rốt! Cà rốt
          chứa beta-carotene, chất chuyển hóa thành vitamin A trong cơ thể, rất
          quan trọng cho thị lực, khả năng miễn dịch và độ đàn hồi của da. Nó dễ
          dàng truyền qua sữa của bạn đến em bé và cung cấp cho chúng tất cả
          những lợi ích. <br />{" "}
          <span className="font-semibold">5. Đậu phộng</span> <br /> Kỳ quặc?
          Chúng tôi biết. Các bà mẹ mới sinh nên thường xuyên ăn những thực phẩm
          có chứa các chất gây dị ứng thông thường như Trứng, Đậu nành và Động
          vật có vỏ để tăng cường hệ miễn dịch cho con. Có rất nhiều loại thực
          phẩm lành mạnh giúp ích cho bạn và con bạn, nhưng có một chế độ ăn
          uống cân bằng là chìa khóa để trở thành một bà mẹ khỏe mạnh và sinh ra
          một đứa con khỏe mạnh.
        </div>
      )}

      {params.slug === "7-loi-khuyen-de-tang-su-them-an-cua-con-ban" && (
        <div className="border border-slate-200 border-solid rounded-lg bg-white p-5">
          <h1 className="font-semibold text-xl text-secondary-color">
            7 lời khuyên để tăng sự thèm ăn của con bạn
          </h1>
          Giống như nhiều bậc cha mẹ, có những trường hợp bạn cảm thấy con mình
          ăn không đủ chất. Cho dù đó là vì trẻ kén ăn hay vì một vấn đề sâu xa
          hơn, hãy đọc tiếp để khám phá những lời khuyên của chúng tôi về cách
          tăng cảm giác thèm ăn cho con bạn.
          <br /> <Image src={img1ThemAn} alt="kiem-che-them-an" />
          <span className="font-semibold">
            1. Bữa sáng bắt buộc
          </span> <br /> Chúng tôi chắc chắn bạn đã từng nghe câu Bữa sáng là
          bữa ăn quan trọng nhất trong ngày, trong trường hợp này đúng là như
          vậy. Ăn một bữa sáng lành mạnh sau một giấc ngủ ngon sẽ làm trẻ hóa
          quá trình trao đổi chất và chắc chắn sẽ làm tăng cảm giác thèm ăn nói
          chung. <br />{" "}
          <span className="font-semibold">2. Bám sát một thói quen</span> <br />{" "}
          Phục vụ các bữa ăn chính và đồ ăn nhẹ vào cùng một thời điểm mỗi ngày.
          Điều này điều chỉnh hệ thống cơ thể của trẻ và khiến chúng có thói
          quen ăn uống thường xuyên hơn. <br />{" "}
          <span className="font-semibold">3. Ăn nhỏ mỗi 2 giờ</span> <br /> Ba
          bữa ăn điển hình một ngày không áp dụng cho tất cả trẻ em. Tốt hơn hết
          bạn nên ăn những bữa ăn nhỏ đầy đủ dinh dưỡng để tăng cường hệ tiêu
          hóa. Các bữa ăn nhỏ có thể bao gồm sữa hoặc đồ uống bổ dưỡng như
          OzFarm Kids Care, bánh quy hoặc một ít trái cây. quen ăn uống thường
          xuyên hơn. <br />{" "}
          <span className="font-semibold">4. Vui vẻ dưới ánh mặt trời!</span>{" "}
          <br />
          Vui chơi ngoài trời không chỉ thú vị mà còn có lợi cho việc khiến
          chúng đói hơn. Khi họ sử dụng nhiều năng lượng hơn, họ sẽ đói hơn. Đó
          là một đôi bên cùng có lợi! quen ăn uống thường xuyên hơn. <br />{" "}
          <span className="font-semibold">
            5. Ăn thực phẩm có hàm lượng calo cao
          </span>{" "}
          <br /> Một cách thông minh để đảm bảo trẻ kén ăn vẫn nhận được đủ chất
          dinh dưỡng cần thiết là cho trẻ ăn những thực phẩm giàu calo. Ví dụ
          trong số này là các thanh granola, sữa chua, sữa hạnh nhân và bơ. Chỉ
          một quả bơ có khoảng 322 calo hoặc trái cây sấy khô là một cách tuyệt
          vời khác để tăng thêm calo, vitamin, khoáng chất và chất chống oxy
          hóa. <br /> <span className="font-semibold">6. Miếng cắn nhỏ</span>{" "}
          <br /> Dạy trẻ tập trung khi đến giờ ăn. Họ cần đảm bảo rằng vết cắn
          của họ nhỏ và nhai thức ăn đúng cách. Nhai thức ăn đúng cách (các
          chuyên gia cho biết ít nhất 32 lần trước khi nuốt) và cắn những miếng
          nhỏ hơn giúp tiêu hóa dễ dàng và tăng cường trao đổi chất.
          <br />{" "}
          <span className="font-semibold">
            7. Những cuộc trò chuyện tích cực trong bữa ăn
          </span>{" "}
          <br /> Giờ ăn là lúc bạn và gia đình quây quần bên nhau để chia sẻ
          những câu chuyện trong ngày của mình. Bám sát các cuộc trò chuyện tích
          cực liên quan đến bạn bè, các buổi vui chơi và các hoạt động vui chơi
          để biến bữa ăn trở thành một trải nghiệm yên tĩnh, tích cực. Nếu bạn
          có con kén ăn hoặc không ăn thường xuyên, hãy thử Kids Care để tăng
          cường trao đổi chất và tăng cường hấp thụ các chất dinh dưỡng lành
          mạnh cho con. Có sẵn hương vị vani thơm ngon, hoàn hảo cho trẻ em từ
          1-10 tuổi!
        </div>
      )}

      {params.slug === "5-meo-vat-de-mang-thai-khoe-manh-trong-mua-dong" && (
        <div className="border border-slate-200 border-solid rounded-lg bg-white p-5">
          <h1 className="font-semibold text-xl text-secondary-color">
            5 lời khuyên để mang thai khỏe mạnh trong mùa đông
          </h1>
          Mang thai là một hành trình tuyệt vời dù đang trong mùa, tuy nhiên
          mang thai vào mùa đông cũng có những thách thức riêng. Hãy đọc tiếp để
          khám phá những lời khuyên hàng đầu của chúng tôi về cách giữ sức khỏe
          và thoải mái trong những tháng sắp làm mẹ của bạn, khi nhiệt độ ngày
          càng giảm xuống!
          <br /> <Image src={img1MuaDong} alt="kiem-che-them-an" />
          <span className="font-semibold">
            1. Tiếp tục di chuyển
          </span> <br /> Việc ra ngoài khi nhiệt độ thấp có thể khó như việc tập
          thể dục, nhưng điều quan trọng là duy trì sự cân bằng thể chất tốt
          trong thai kỳ. Cố gắng đưa một số bài tập nhẹ vào thói quen hàng ngày
          của bạn, chẳng hạn như đi bộ nhanh hoặc nếu bạn thích hoạt động trong
          nhà - có một số video tập luyện tuyệt vời để tập thể dục nhẹ nhàng
          hoặc salsa tùy thuộc vào phong cách và giai đoạn của bạn mà bạn có thể
          tận hưởng một cách thoải mái của chính ngôi nhà của bạn. <br />{" "}
          <span className="font-semibold">
            2. Dưỡng ẩm & cấp nước (Rất nhiều!)
          </span>{" "}
          <br /> Những thay đổi về hormone chắc chắn sẽ xảy ra khi mang thai và
          điều này có thể gây ra tình trạng da khô, ngứa, đặc biệt là trong
          những tháng lạnh hơn. Hãy nhớ dưỡng ẩm cho làn da của bạn bằng các
          loại sữa dưỡng thể chứa đầy vitamin E và giữ cho cơ thể đủ nước bằng
          cách uống nhiều nước. <br />{" "}
          <span className="font-semibold">3. Mặc quần áo thoải mái</span> <br />{" "}
          Mặc nhiều lớp trong mùa đông là một cách tuyệt vời để giữ ấm nhưng vẫn
          thoải mái. Quần áo bà bầu đã đi được một chặng đường dài, vì vậy đừng
          lo lắng về việc trông lôi thôi vì có nhiều cách để giải quyết vấn đề
          đó (ví dụ như với một chiếc Blazer có cấu trúc dễ thương!).
          <br />{" "}
          <span className="font-semibold">
            4. Tránh xa cảm lạnh và cúm
          </span>{" "}
          <br />
          Khi mang thai, cơ thể bạn có thể có hệ thống miễn dịch kém hơn, nghĩa
          là bạn dễ bị cảm lạnh và cúm hơn. Các bác sĩ khuyên bạn nên tiêm phòng
          cúm như một phương pháp phòng ngừa, vì vậy hãy tìm kiếm hiệu thuốc ở
          địa phương và đặt lịch hẹn ngay hôm nay! <br />{" "}
          <span className="font-semibold">
            5. Ăn uống lành mạnh
          </span> <br /> Một chế độ ăn uống lành mạnh rất quan trọng khi mang
          thai, đặc biệt là trong mùa đông. Ăn nhiều bữa nhỏ trong ngày bao gồm
          trái cây, rau và protein có thể mang lại điều kỳ diệu cho cơ thể bạn.
          Nếu bạn muốn tăng cường dinh dưỡng hoặc đảm bảo dinh dưỡng khi ốm
          nghén, hãy thử Sữa Công Thức Dành Cho Mẹ Bầu của chúng tôi. Nó chứa
          nhiều chất dinh dưỡng tuyệt vời và dễ tiêu hóa hơn nhiều chất rắn
          khác. Khi mùa đông đang đến gần, hãy đảm bảo rằng bạn lắng nghe cơ thể
          mình và dành thời gian cho bản thân để chuẩn bị cho đứa con mới chào
          đời. Hãy giữ ấm và cố gắng tìm thời gian ngồi lại thư giãn với cốc
          cacao nóng và tận hưởng những trải nghiệm và hành trình thú vị nhé!{" "}
        </div>
      )}
      {params.slug === "5-cach-tiep-can-can-tranh-voi-tre-ken-an" && (
        <div className="border border-slate-200 border-solid rounded-lg bg-white p-5">
          <h1 className="font-semibold text-xl text-secondary-color">
            5 cách tiếp cận cần tránh với trẻ kén ăn
          </h1>
          Có vài điều khó chịu hơn việc đổ thời gian và công sức vào việc nấu
          một bữa ăn mà con bạn không ăn. Nhưng đối với một số bậc cha mẹ, đây
          là tiêu chuẩn hàng đêm. Mặc dù chúng ta dễ dàng nghĩ rằng con mình có
          vấn đề nhưng những điều cha mẹ chúng ta làm đôi khi có thể khiến vấn
          đề trở nên tồi tệ hơn. Dưới đây là 5 cách tiếp cận cần tránh – và thay
          vào đó nên làm gì:
          <br /> <Image src={img1KenAn} alt="kiem-che-them-an" />
          <span className="font-semibold">
            1. Ép trẻ ăn hoặc thử đồ ăn
          </span>{" "}
          <br /> Chỉ một hoặc hai thế hệ trước, nhiều bậc cha mẹ buộc con họ
          phải ngồi vào bàn ăn tối cho đến khi chúng dọn sạch đĩa của mình.
          Nhưng các chuyên gia hiện tin rằng điều này có thể gây hại nhiều hơn
          là có lợi; nó tạo ra những cuộc tranh giành quyền lực và khiến bữa tối
          trở thành một trải nghiệm tiêu cực. Thay vào đó: Hãy phục vụ nhiều
          loại thức ăn khác nhau và để con bạn chọn món ăn trên đĩa. Nếu có điều
          gì đó mới mẻ, hãy đề nghị cô ấy bắt đầu bằng cách đơn giản là liếm nó
          và dần dần thử từng miếng một. <br />{" "}
          <span className="font-semibold">2. Đòi ăn</span> <br /> Việc dụ dỗ con
          bạn bằng đồ ăn vặt luôn là điều hấp dẫn. Hứa với anh ấy một bát kem
          nếu anh ấy ăn rau có thể có tác dụng, nhưng về lâu dài, hối lộ có xu
          hướng phản tác dụng. Nó gửi thông điệp rằng ăn thực phẩm lành mạnh là
          một việc vặt. Thay vào đó: Hãy từ bỏ việc hối lộ và tiếp tục phục vụ
          những món ăn mà bạn muốn con mình ăn. Cuối cùng, chúng sẽ học cách
          thích nó - hoặc ít nhất là ăn nó. <br />{" "}
          <span className="font-semibold">3. Gọi cô ấy là người kén chọn</span>{" "}
          <br /> Là cha mẹ, chúng ta thường trút giận về hành vi thách thức của
          con mình và tìm kiếm lời khuyên từ các ông bố bà mẹ. Nhưng gọi con bạn
          là kẻ quấy khóc – trước mặt con hoặc trước mặt người khác – có thể
          khuyến khích con sống theo đúng nhãn hiệu và tiếp tục cư xử như vậy.
          Thay vào đó: Nếu con bạn quấy khóc về thức ăn, hãy cố gắng phớt lờ nó.
          Và hãy thoải mái chia sẻ với người khác - chỉ cần không ở trong tầm
          nghe của con bạn.
          <br />{" "}
          <span className="font-semibold">
            4. Thực hiện TẤT CẢ các lựa chọn thực phẩm
          </span>{" "}
          <br />
          Ai quyết định ăn gì trong gia đình bạn? Ai mua hàng tạp hóa? Chuẩn bị
          bữa ăn? Nếu câu trả lời là bạn (hoặc bạn đời của bạn), có lẽ đã đến
          lúc bắt đầu cho con bạn tự lập hơn trong việc ăn uống. Thay vào đó:
          Hãy để con bạn tham gia. Đưa anh ấy đi mua hàng tạp hóa cùng bạn và để
          anh ấy lựa chọn trong số nhiều loại thực phẩm tốt cho sức khỏe. Mời
          anh ấy chọn công thức nấu bữa tối mỗi tuần và giúp những việc đơn giản
          như rửa rau. Trẻ em có nhiều khả năng ăn thứ gì đó mà chúng đã góp
          công làm ra hơn. <br />{" "}
          <span className="font-semibold">
            5. Bỏ cuộc sau lần đầu tiên
          </span>{" "}
          <br /> Phản ứng của trẻ đối với thức ăn mới đôi khi rất tiêu cực,
          dường như việc cho trẻ ăn lại chúng trong tương lai dường như không có
          ý nghĩa gì. Chẳng phải việc bám vào một số loại thực phẩm mà bạn biết
          chúng sẽ ăn mà không phàn nàn sẽ dễ dàng hơn sao? Thay vào đó: Tiếp
          tục cho trẻ ăn những món mà trẻ đã từ chối. Các nghiên cứu cho thấy họ
          có thể phải nhìn thấy món ăn trên đĩa của mình 10 - 15 lần trước khi
          thử món đó! Nếu con bạn là một đứa trẻ kén ăn, hãy cố gắng đừng để
          điều đó làm bạn quá lo lắng. Việc sở thích về khẩu vị của trẻ khác với
          chúng ta là điều bình thường. Chúng ta mất đi vị giác khi lớn lên, đó
          là lý do tại sao trẻ em lại thấy những món ăn có hương vị đậm đà hơn
          chúng ta. Con bạn có thể sẽ trở nên ít kén chọn hơn khi lớn lên. Nếu
          bạn thực sự lo lắng rằng con bạn không nhận được đủ chất dinh dưỡng mà
          cơ thể đang phát triển cần, hãy trò chuyện với bác sĩ đa khoa hoặc bác
          sĩ dinh dưỡng được công nhận. Họ có thể đề xuất một loại thực phẩm bổ
          sung như sữa công thức Kids Care của Oz Farm để hỗ trợ sức khỏe cho
          con bạn cho đến khi chúng bắt đầu thưởng thức nhiều loại thực phẩm
          hơn.{" "}
        </div>
      )}
    </div>
  );
}
