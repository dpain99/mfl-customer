"use client";
import SearchInput from "@/app/components/search-input/SearchInput";
import { useEffect, useState } from "react";
import { useSearchProduct } from "../hooks/useSearchProduct";
import { useRouter } from "next/navigation";

interface SearchBarProps {
  onClose: () => void;
  autoFocus?: boolean;
}
export default function SearchBar({ onClose, autoFocus }: SearchBarProps) {
  const handleOuterDivClick = () => {
    console.log("Click vào phần tử outerDiv");
  };

  const handleInnerDivClick = (e: { stopPropagation: () => void }) => {
    // Ngăn chặn sự kiện click từ việc lan ra bên ngoài phần tử innerDiv
    e.stopPropagation();
    // Xử lý khi click vào phần tử innerDiv
  };

  const [searchValue, setSearchValue] = useState<string>("");
  const { data, refetch } = useSearchProduct({
    search: searchValue,
    page: 1,
    limit: 50,
  });

  const router = useRouter();

  const handleEnterSearch = () => {
    refetch();
    router.push(`/list-product/keyword=${searchValue}`);
    onClose();
  };

  useEffect(() => {
    if (searchValue.length >= 3) {
      refetch();
    }
  }, [searchValue, refetch]);

  return (
    <div
      className="px-5 mx-auto bg-slate-500 bg-opacity-50 absolute w-screen h-screen z-20 flex justify-center"
      onClick={onClose}
    >
      <div
        className="rounded-lg bg-white flex flex-col items-center w-11/12 absolute p-5 top-2"
        onClick={handleInnerDivClick}
      >
        <SearchInput
          searchValue={searchValue}
          setSearchValue={setSearchValue}
          onEnter={handleEnterSearch}
          autoFocus={autoFocus}
        />
        <div className="w-full py-2">
          <ul className="max-h-96 overflow-y-auto scroll-smooth ">
            {data?.items.map((item) => (
              <li
                key={item.id}
                className="py-1 cursor-pointer hover:bg-sky-200"
                onClick={() => setSearchValue(item.name)}
              >
                {item.name}
              </li>
            ))}
          </ul>
        </div>
        <span className="w-full p-2 border-b-2 text-center italic ">
          Gợi ý cho bạn
        </span>
        <ul className="w-full">
          <li className="p-2 cursor-pointer hover:bg-sky-200">
            Sữa dinh dưỡng Oz Farm SleepWell™ 800g
          </li>
          <li className="p-2 cursor-pointer hover:bg-sky-200">
            Sữa Oz Farm Aged Care Plus dành cho người già 800g
          </li>
          <li className="p-2 cursor-pointer hover:bg-sky-200">
            Sữa dành cho mẹ bầu Oz Farm Pregnant Mother Formula 800g
          </li>
          <li className="p-2 cursor-pointer hover:bg-sky-200">
            Sữa Oz Farm Health Care Công Thức Chăm Sóc Người Cao Tuổi 900g
          </li>
        </ul>
      </div>
    </div>
  );
}
