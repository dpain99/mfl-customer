import SocialBtn3 from "@/app/components/social-btn-3/SocialBtn3";
import MainHeader from "./main-header/main-header";
import SubHeader from "./sub-header/page";

export default async function Header() {
  return (
    <>
      <div className="sticky w-full z-10 top-0 z-30">
        <MainHeader />
        <div className="hidden lg:flex">
          <SubHeader />
        </div>

        <div className={`absolute right-5`} style={{ bottom: "-70vh" }}>
          <SocialBtn3 />
        </div>
      </div>
    </>
  );
}
