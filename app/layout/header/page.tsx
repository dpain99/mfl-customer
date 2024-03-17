import { getData } from "@/lib/api";
import MainHeader from "./main-header/main-header";
import SubHeader from "./sub-header/page";

export default async function Header() {
  return (
    <>
      <div className="sticky w-full z-10 top-0 z-30">
        <MainHeader />
        <SubHeader />
      </div>
    </>
  );
}
