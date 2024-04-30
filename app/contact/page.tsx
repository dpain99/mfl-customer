"use client";
import "./style.scss";
import ILocate from "@/public/icon/ILocate";
import IPhone from "@/public/icon/IPhone";
import IPhone1 from "@/public/icon/IPhone1";
import ICalendar from "@/public/icon/ICalendar";
import IEmail from "@/public/icon/IEmail";
import BreadCrumb from "../components/breadcrumb/Breadcrumb";

export default function Contact() {
  return (
    <div className="py-10">
      <div className="container px-4 mx-auto pb-5">
        <BreadCrumb
          items={[{ title: "Trang Chủ", href: "/" }, { title: `Liên hệ` }]}
        />
      </div>
      <div className="wrapbox-content-contact container mx-auto px-4 flex justify-center">
        <div className="contact flex-1">
          <div className="box-info-contact">
            <h2>Thông tin liên hệ</h2>
            <div className="wrapbox-contact flex flex-col md:flex-row gap-10 p-5 rounded-lg">
              <ul className="infoList-contact row flex-1">
                <li>
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="1em"
                      height="1em"
                      viewBox="0 0 16 16"
                    >
                      <path
                        fill="currentColor"
                        d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-6.5a6.5 6.5 0 1 0 0 13a6.5 6.5 0 0 0 0-13M6.5 7.75A.75.75 0 0 1 7.25 7h1a.75.75 0 0 1 .75.75v2.75h.25a.75.75 0 0 1 0 1.5h-2a.75.75 0 0 1 0-1.5h.25v-2h-.25a.75.75 0 0 1-.75-.75M8 6a1 1 0 1 1 0-2a1 1 0 0 1 0 2"
                      />
                    </svg>
                  </span>
                  <p>
                    <strong>Tên Công ty</strong>
                    <br></br>
                    CÔNG TY CỔ PHẦN MEDI FAST LINKS
                  </p>
                </li>
                <li>
                  <span>
                    <ILocate width="100%" height="100%" />
                  </span>
                  <p>
                    <strong>Địa Chỉ</strong>
                    <br></br>
                    P403, tầng 4, Tòa nhà Ocean Park, số 1 Đào Duy Anh, Phường
                    Phương Mai, Quận Đống Đa, Thành phố Hà Nội, Việt Nam
                  </p>
                </li>
                <li>
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="0.88em"
                      height="1em"
                      viewBox="0 0 448 512"
                    >
                      <path
                        fill="currentColor"
                        d="M181.3 32.4c17.4 2.9 29.2 19.4 26.3 36.8l-9.8 58.8h95.1l11.5-69.3c2.9-17.4 19.4-29.2 36.8-26.3s29.2 19.4 26.3 36.8l-9.7 58.8H416c17.7 0 32 14.3 32 32s-14.3 32-32 32h-68.9l-21.3 128H384c17.7 0 32 14.3 32 32s-14.3 32-32 32h-68.9l-11.5 69.3c-2.9 17.4-19.4 29.2-36.8 26.3s-29.2-19.4-26.3-36.8l9.8-58.7h-95.2l-11.5 69.3c-2.9 17.4-19.4 29.2-36.8 26.3s-29.2-19.4-26.3-36.8l9.7-58.9H32c-17.7 0-32-14.3-32-32s14.3-32 32-32h68.9l21.3-128H64c-17.7 0-32-14.3-32-32s14.3-32 32-32h68.9l11.5-69.3c2.9-17.4 19.4-29.2 36.8-26.3zm5.8 159.6l-21.3 128h95.1l21.3-128z"
                      />
                    </svg>
                  </span>
                  <p>
                    <strong>Mã Số Thuế</strong>
                    <br></br>
                    0110378179
                  </p>
                </li>
                <li>
                  <span>
                    <ILocate width="100%" height="100%" />
                  </span>
                  <p>
                    <strong>Địa chỉ Văn Phòng</strong>
                    <br></br>
                    Toà nhà EveryGolf, Số 63 Cổ Linh, Phường Thạch Bàn, Quận
                    Long Biên, Thành phố Hà Nội
                  </p>
                </li>
              </ul>
              <ul className="infoList-contact row flex-1">
                <li>
                  <span>
                    <IPhone1 width="100%" height="100%" />
                  </span>
                  <p>
                    <strong>Điện thoại</strong>
                    <br></br>
                    0973.02.22.82
                  </p>
                </li>
                <li>
                  <span>
                    <ICalendar width="100%" height="100%" />
                  </span>
                  <p>
                    <strong>Thời gian làm việc</strong>
                    <br></br>
                    Thứ 2 đến Thứ 6: từ 8h00 đến 17h00
                  </p>
                </li>
                <li>
                  <span>
                    <IEmail />
                  </span>
                  <p>
                    <strong>Email</strong>
                    <br></br>
                    medifastlinks.jsc@gmail.com
                  </p>
                </li>
              </ul>
            </div>
          </div>
          <div className="box-send-contact rounded-lg">
            <h2>Gửi thắc mắc cho chúng tôi</h2>
            <p>
              Nếu bạn có thắc mắc gì, có thể gửi yêu cầu cho chúng tôi, và chúng
              tôi sẽ liên lạc lại với bạn sớm nhất có thể .
            </p>
            <div className="form-contact">
              <div className="form flex flex-col gap-3">
                <input type="text" placeholder="Tên của bạn" />
                <div className="email-phone flex gap-3">
                  <input
                    type="text"
                    className="email flex-1"
                    placeholder="Email"
                  />
                  <input
                    type="text"
                    className="phone flex-1"
                    placeholder="Số điện thoại"
                  />
                </div>
                <div className="content-contact">
                  <textarea placeholder="Nội dung"></textarea>
                </div>
                <div>
                  <button className="button submit">Gửi cho chúng tôi</button>
                </div>
              </div>
            </div>
          </div>
          <div className="flex-1 block sm:hidden">
            <iframe
              className="maps"
              style={{ border: 0 }}
              loading="lazy"
              allowFullScreen
              src="https://www.google.com/maps/embed/v1/place?q=place_id:ChIJoRyG2ZurNTERqRfKcnt_iOc&key=AIzaSyCaLclliaLBcgu3keMOHAgVzUbJVftHzCs"
            ></iframe>
          </div>
        </div>
        <div className="flex-1 w-3 pl-10 hidden md:block">
          <iframe
            className="maps"
            style={{ border: 0 }}
            loading="lazy"
            allowFullScreen
            src="https://www.google.com/maps/embed/v1/place?q=place_id:ChIJoRyG2ZurNTERqRfKcnt_iOc&key=AIzaSyCaLclliaLBcgu3keMOHAgVzUbJVftHzCs"
          ></iframe>
        </div>
      </div>
    </div>
  );
}
