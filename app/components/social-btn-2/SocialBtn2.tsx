import Link from "next/link";
import "./style.scss";
import IZalo from "@/public/icon/social/IZalo";
export default function SocialBtn2() {
  return (
    <div className="card-social">
      <Link
        className="socialContainer containerOne"
        href="https://www.facebook.com/profile.php?id=61555367214506"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          className="socialSvg facebookSvg"
          width="2em"
          height="2em"
        >
          <path
            fill="currentColor"
            d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c5.05-.5 9-4.76 9-9.95"
          />
        </svg>
      </Link>

      {/* <Link
        className="socialContainer containerTwo"
        href="https://chat.zalo.me/"
      >
        <div className="socialSvg twitterSvg">
          <IZalo width={"1.2em"} height={"1.2em"} />
        </div>
      </Link> */}

      <Link
        className="socialContainer containerThree"
        href="https://vt.tiktok.com/ZSY1Bkpmp/"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="1em"
          height="1em"
          viewBox="0 0 24 24"
          color="white"
          className="socialSvg whatsappSvg"
        >
          <path
            fill="currentColor"
            d="M16.6 5.82s.51.5 0 0A4.278 4.278 0 0 1 15.54 3h-3.09v12.4a2.592 2.592 0 0 1-2.59 2.5c-1.42 0-2.6-1.16-2.6-2.6c0-1.72 1.66-3.01 3.37-2.48V9.66c-3.45-.46-6.47 2.22-6.47 5.64c0 3.33 2.76 5.7 5.69 5.7c3.14 0 5.69-2.55 5.69-5.7V9.01a7.35 7.35 0 0 0 4.3 1.38V7.3s-1.88.09-3.24-1.48"
          />
        </svg>
      </Link>

      <Link
        className="socialContainer containerFour"
        href="https://shopee.vn/S%E1%BB%AFa-C%C3%B4ng-Th%E1%BB%A9c-Ch%C4%83m-S%C3%B3c-Ng%C6%B0%E1%BB%9Di-Cao-Tu%E1%BB%95i-Oz-Farm-Health-Care-900g-i.1187843240.25813690969?sp_atk=4af72f77-2b6f-45a0-8990-6d619dbe62ca&xptdk=4af72f77-2b6f-45a0-8990-6d619dbe62ca"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="1em"
          height="1em"
          viewBox="0 0 48 48"
          className="socialSvg shopeeSvg"
        >
          <path
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M33.055 43.5h-18.11a4 4 0 0 1-3.973-3.537l-2.588-22.19h31.232l-2.588 22.19a4 4 0 0 1-3.973 3.537M13.352 17.773V15.16a10.66 10.66 0 0 1 21.32 0v2.613"
          />
          <path
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19.529 36.983c1.154.865 2.308 1.153 4.615 1.153h1.154a3.75 3.75 0 0 0 0-7.5h-2.596a3.75 3.75 0 0 1 0-7.5h1.154c2.596 0 3.75.289 4.615 1.154"
          />
        </svg>
      </Link>

      <Link
        className="socialContainer containerFive"
        href=" https://www.lazada.vn/products/i2638225238.html?spm=a1zawf.24863640.table_online_product.5.108e4edf2FY9PT"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="1em"
          height="1em"
          viewBox="0 0 48 48"
          className="socialSvg"
        >
          <path
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m34.382 6.28l-6.426 3.71c-2.182 1.26-5.732 1.254-7.928-.014L13.56 6.242L4.5 11.473l19.56 11.294L43.5 11.544z"
          />
          <path
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M43.5 11.544v19.27L24.966 41.517a1.81 1.81 0 0 1-1.81 0L4.5 30.745V11.473m19.561 11.294v18.987"
          />
        </svg>
      </Link>
    </div>
  );
}
