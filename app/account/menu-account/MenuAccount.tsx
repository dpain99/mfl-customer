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
      <Popover className="relative">
        <>
          <Popover.Button onClick={() => setShow(!show)}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="1.7em"
              height="1.7em"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="M12 19.2c-2.5 0-4.71-1.28-6-3.2c.03-2 4-3.1 6-3.1s5.97 1.1 6 3.1a7.232 7.232 0 0 1-6 3.2M12 5a3 3 0 0 1 3 3a3 3 0 0 1-3 3a3 3 0 0 1-3-3a3 3 0 0 1 3-3m0-3A10 10 0 0 0 2 12a10 10 0 0 0 10 10a10 10 0 0 0 10-10c0-5.53-4.5-10-10-10"
              />
            </svg>
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
            <Popover.Panel className="absolute -left-48 z-10">
              <div className="bg-slate-200 shadow-lg rounded-lg p-5 flex flex-col gap-2">
                <span>Xin chào, {nameAcc}</span>
                <div className="border border-solid border-slate-500"></div>

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
