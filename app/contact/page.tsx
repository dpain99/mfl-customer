import './style.scss';
import ILocate from "@/public/icon/ILocate";
import IPhone from "@/public/icon/IPhone";
import IPhone1 from "@/public/icon/IPhone1";
import ICalendar from "@/public/icon/ICalendar";
import IEmail from "@/public/icon/IEmail";

export default function Contact() {
  return (
    <div className="pt-52">
        <div className="wrapbox-content-contact container mx-auto px-4 flex justify-center">
            <div className="contact flex-1">
                <div className="box-info-contact">
                    <h2>Thông tin liên hệ</h2>
                    <div className="wrapbox-contact flex gap-10">
                        <ul className="infoList-contact row flex-1">
                            <li>
                                <span>
                                    <ILocate width="100%" height="100%"/>
                                </span>
                                <p>
                                    <strong>Địa chỉ</strong><br></br>
                                    198A Mã Lò, P. Bình Trị Đông A, Q. Bình Tân, Thành phố Hồ Chí Minh
                                </p>
                            </li>
                            <li>
                                <span>
                                    <IPhone1 width="100%" height="100%"/>
                                </span>
                                <p>
                                    <strong>Điện thoại</strong><br></br>
                                    0981 787 551
                                </p>
                            </li>
                        </ul>
                        <ul className="infoList-contact row flex-1">
                            <li>
                                <span>
                                    <ICalendar width="100%" height="100%"/>
                                </span>
                                <p>
                                    <strong>Thời gian làm việc</strong><br></br>
                                    Thứ 2 đến Thứ 6: từ 8h đến 18h;<br></br>
                                    Thứ 7 và Chủ nhật: từ 8h00 đến 17h00
                                </p>
                            </li>
                            <li>
                                <span>
                                    <IEmail/>
                                </span>
                                <p>
                                    <strong>Email</strong><br></br>
                                    medifastlinks@gmail.com
                                </p>
                            </li></ul>
                    </div>
                </div>
                <div className="box-send-contact">
                    <h2>Gửi thắc mắc cho chúng tôi</h2>
                    <p>Nếu bạn có thắc mắc gì, có thể gửi yêu cầu cho chúng tôi, và chúng tôi sẽ liên lạc lại với bạn sớm nhất có thể .</p>
                </div>
            </div>
            <div className="flex-1">map</div>
        </div>
    </div>
  );
}
