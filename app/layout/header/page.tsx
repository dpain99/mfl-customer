import MainHeader from "./main-header/page";
import SubHeader from "./sub-header/page";

export default function Header() {
  return (
    <>
      <div className="fixed w-full z-10">
        <MainHeader />
        <SubHeader />
      </div>
    </>
  );
}
