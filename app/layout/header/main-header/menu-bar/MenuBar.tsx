import SearchInput from "@/app/components/search-input/SearchInput";

interface MenuBarProps {
  onClickClose: () => void;
}
export default function MenuBar({ onClickClose }: MenuBarProps) {
  const listCate = ["Danh mục", "Cẩm nang", "Về chúng tôi", "Liên hệ"];
  const acc = ["Đăng ký", "Đăng nhập"];
  return (
    <>
      <div
        className="absolute w-screen h-screen top-0 left-0 z-10"
        onClick={onClickClose}
        style={{ backgroundColor: "rgba(0,0,0, 0.3)" }}
      ></div>
      <div className="absolute w-9/12 h-screen bg-neutral-400 right-0 top-0 transition ease-in-out z-5">
        <div className="relative w-full h-full bg-orange-300 p-5">
          <div className="absolute -left-4 top-14 z-10" onClick={onClickClose}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="1.88em"
              height="2em"
              viewBox="0 0 448 512"
            >
              <path
                fill="currentColor"
                d="M448 96c0-35.3-28.7-64-64-64H64C28.7 32 0 60.7 0 96v320c0 35.3 28.7 64 64 64h320c35.3 0 64-28.7 64-64zM320 256c0 6.7-2.8 13-7.7 17.6l-112 104c-7 6.5-17.2 8.2-25.9 4.4S160 369.5 160 360V152c0-9.5 5.7-18.2 14.4-22s18.9-2.1 25.9 4.4l112 104c4.9 4.5 7.7 10.9 7.7 17.6"
              />
            </svg>
          </div>

          <SearchInput />

          <div className="flex flex-col pt-10 gap-5">
            {listCate.map((item, id) => (
              <span className="uppercase font-semibold" key={id}>
                {item}
              </span>
            ))}
            <div className="h-1 bg-black w-full"></div>
            {acc.map((item, id) => (
              <span className="uppercase font-semibold" key={id}>
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
