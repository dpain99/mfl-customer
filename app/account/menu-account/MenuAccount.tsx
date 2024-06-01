import { setToken } from "@/redux/slices/authen";
import { Popover, Transition } from "@headlessui/react";
import Link from "next/link";
import { Fragment, useState } from "react";
import { useDispatch } from "react-redux";

interface MenuAccountProps {
  nameAcc?: string;
}
export default function MenuAccount({ nameAcc }: MenuAccountProps) {
  const [show, setShow] = useState<boolean>(false);
  const dispatch = useDispatch();
  return (
    <div className="">
      <Popover className="relative flex justify-center items-center">
        <>
          <Popover.Button onClick={() => setShow(!show)}>
            <div className="border border-solid border-black rounded-full p-2 text-black">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="1em"
                height="1em"
                viewBox="0 0 256 256"
              >
                <path
                  fill="currentColor"
                  d="M230.92 212c-15.23-26.33-38.7-45.21-66.09-54.16a72 72 0 1 0-73.66 0c-27.39 8.94-50.86 27.82-66.09 54.16a8 8 0 1 0 13.85 8c18.84-32.56 52.14-52 89.07-52s70.23 19.44 89.07 52a8 8 0 1 0 13.85-8M72 96a56 56 0 1 1 56 56a56.06 56.06 0 0 1-56-56"
                />
              </svg>
            </div>
          </Popover.Button>
          <Transition
            show={show}
            as={Fragment}
            enter="transition ease-out duration-200"
            enterFrom="opacity-0 translate-y-1"
            enterTo="opacity-100 translate-y-0"
            leave="transition ease-in duration-150"
            leaveFrom="opacity-100 translate-y-0"
            leaveTo="opacity-0 translate-y-1"
          >
            <Popover.Panel className="absolute -bottom-36 w-64 z-10">
              <div className="bg-slate-200 shadow-lg rounded-lg p-5 flex flex-col gap-2">
                <span>Xin chào, {nameAcc}</span>
                <div className="border border-solid border-slate-500"></div>

                <div className="flex items-center gap-3 hover:bg-slate-400 cursor-pointer">
                  <Link href={"/account/info-account"}>
                    Thông tin tài khoản
                  </Link>
                </div>

                <div
                  className="flex items-center gap-3 hover:bg-slate-400 cursor-pointer"
                  onClick={() => {
                    console.log("out");
                    setShow(false);
                    dispatch(
                      setToken({ accessToken: null, refreshToken: null })
                    );
                  }}
                >
                  <Link href={"/account"}>
                    <span>Đăng Xuất</span>
                  </Link>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="1em"
                    height="1em"
                    viewBox="0 0 24 24"
                  >
                    <g fill="currentColor">
                      <path
                        fillRule="evenodd"
                        d="M11 20a1 1 0 0 0-1-1H5V5h5a1 1 0 1 0 0-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h5a1 1 0 0 0 1-1"
                        clipRule="evenodd"
                      />
                      <path d="M21.714 12.7a.996.996 0 0 0 .286-.697v-.006a.997.997 0 0 0-.293-.704l-4-4a1 1 0 1 0-1.414 1.414L18.586 11H9a1 1 0 1 0 0 2h9.586l-2.293 2.293a1 1 0 0 0 1.414 1.414l4-4z" />
                    </g>
                  </svg>
                </div>
              </div>
            </Popover.Panel>
          </Transition>
        </>
      </Popover>
    </div>
  );
}
