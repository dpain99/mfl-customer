import { Transition } from "@headlessui/react";
import { ICategory } from "../types/type";
import "./style.scss";
import Link from "next/link";

interface CategoryMenuProps {
  isShow: boolean;
  data: ICategory[];
  handleIsClose: () => void;
}
export default function CategoryMenu({
  isShow,
  data,
  handleIsClose,
}: CategoryMenuProps) {
  const cateLists = ["sua-ozfarm", "my-pham", "thuc-pham-chuc-nang"];
  return (
    <>
      <Transition
        show={isShow}
        enter="ease-out duration-300"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="ease-in duration-200"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
        className={"absolute bg-sky-100 -bottom-96 h-96 w-80 rounded-lg"}
        onMouseLeave={handleIsClose}
      >
        <div className="flex flex-col gap-2 px-2 py-5 ">
          {data.map((item, index) => (
            <Link
              href={`/list-product/${cateLists[index]}`}
              key={item.id}
              className="cursor-pointer hover:bg-sky-300 p-1 rounded-lg font-semibold"
            >
              {item.name}
            </Link>
          ))}
        </div>
      </Transition>
    </>
  );
}
