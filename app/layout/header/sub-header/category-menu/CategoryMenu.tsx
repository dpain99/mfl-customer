import { Transition } from "@headlessui/react";
import { ICategory } from "../types/type";
import "./style.scss";

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
        className={"absolute bg-red-100 -bottom-96 h-96 w-80 rounded-lg"}
        onMouseLeave={handleIsClose}
      >
        <div className="flex flex-col gap-5 px-2 py-5 ">
          {data.map((item) => (
            <span key={item.id}>{item.name}</span>
          ))}
        </div>
      </Transition>
    </>
  );
}
