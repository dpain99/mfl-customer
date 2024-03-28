import IFacebook from "@/public/icon/social/IFacebook";
import "./style.scss";
import IMessenger from "@/public/icon/social/IMessenger";
import IZalo from "@/public/icon/social/IZalo";
export default function SocialBtn3() {
  return (
    <div className="social-btn-3">
      <ul className="wrapper">
        <li className="icon messenger">
          <span className="tooltip">Messenger</span>
          <span>
            <IMessenger width={"1.6em"} height={"1.6em"} />
          </span>
        </li>
        <li className="icon zalo">
          <span className="tooltip">Zalo</span>
          <span>
            <IZalo width={"1.6em"} height={"1.6em"} />
          </span>
        </li>
      </ul>
    </div>
  );
}
