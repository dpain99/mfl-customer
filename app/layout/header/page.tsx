import { getData } from "@/lib/api";
import MainHeader from "./main-header/page";
import SubHeader from "./sub-header/page";

export default async function Header() {
  return (
    <>
      <div className="fixed w-full z-10">
        <MainHeader />
        <SubHeader />
      </div>
    </>
  );
}
