"use client";
import wheelImg from "@/public/images/wheel.png";
import { closeWheel, openWheel } from "@/redux/slices/wheel";
import { RootState } from "@/redux/store";
import { Dialog, Transition } from "@headlessui/react";
import Image from "next/image";
import Link from "next/link";
import { Fragment, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

export default function ModalAds() {
  // let [isOpen, setIsOpen] = useState(false);
  const isShowWheel = useSelector((state: RootState) => state.showWheel.isShow);
  const distpatch = useDispatch();

  const isUserAccess = useSelector(
    (state: RootState) => state.checkAccess.isAccess
  );

  function closeModal() {
    // setIsOpen(false);
    distpatch(closeWheel());
  }

  // useEffect(() => {
  //   if (!isUserAccess) {
  //     // distpatch(openWheel());
  //     // setIsOpen(true);
  //   }
  // }, []);

  return (
    <>
      <Transition show={isShowWheel} as={Fragment}>
        <Dialog as="div" className="relative z-10 " onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black/25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto ">
            <div className="flex min-h-full items-center justify-center p-4 text-center ">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="text-2xl font-semibold leading-6 text-gray-900 text-center"
                  >
                    Vòng quay may mắn
                  </Dialog.Title>
                  <div className="mt-2">
                    <Image src={wheelImg} alt="vong-quay-may-man" />
                    <p className="text-base mt-2">
                      Bạn là người may mắn? Thử vận may của mình hôm nay với
                      Vòng quay may mắn của chúng tôi!
                    </p>
                  </div>

                  <div className="mt-4 flex justify-center gap-5">
                    <button
                      type="button"
                      className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                      onClick={closeModal}
                    >
                      Đóng
                    </button>
                    <button
                      type="button"
                      className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                    >
                      <Link href="/lucky-wheel">Đi nào!</Link>
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}
