import "./style.scss";
import Image from "next/image";
import logoImg from "@/public/images/logo.png";
import Link from "next/link";
import AddToCartBar from "@/app/add-to-cart-bar/AddToCartBar";
export default function MainHeader() {
  return (
    <>
      <header className="page-header h-16">
        <AddToCartBar />
        <div className="container mx-auto px-4">
          <div className="flex flex-row">
            <div className="flex basis-1/4">
              <Link href="/">
                <Image
                  src={logoImg}
                  alt="logo-medi-fast-links"
                  className="size-16"
                />
              </Link>
            </div>
            <div className="basis-1/4">02</div>
            <div className="basis-1/2">
              <Link href={"/cart"}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="2em"
                  height="2em"
                  viewBox="0 0 24 24"
                >
                  <g
                    fill="none"
                    stroke="currentColor"
                    strokeLinejoin="round"
                    strokeWidth="2"
                  >
                    <path d="M5 7h13.79a2 2 0 0 1 1.99 2.199l-.6 6A2 2 0 0 1 18.19 17H8.64a2 2 0 0 1-1.962-1.608z" />
                    <path
                      strokeLinecap="round"
                      d="m5 7l-.81-3.243A1 1 0 0 0 3.22 3H2m6 18h2m6 0h2"
                    />
                  </g>
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
