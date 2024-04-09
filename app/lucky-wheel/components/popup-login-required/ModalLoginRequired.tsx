"use client";
import { Dialog, Transition } from "@headlessui/react";
import { Fragment } from "react";
import Login from "./login/Login";
import Link from "next/link";

interface ModalLoginRequiredProps {
  isOpen: boolean;
  handleSetOpen: () => void;
  handleSetClose: () => void;
}
export default function ModalLoginRequired({
  isOpen,
  handleSetOpen,
  handleSetClose,
}: ModalLoginRequiredProps) {
  return (
    <>
      <Transition show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-50" onClose={handleSetClose}>
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

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white text-left align-middle shadow-xl transition-all">
                  <div className="">
                    <Login />
                  </div>

                  <div className="p-5 flex justify-center font-semibold hover:text-secondary-color cursor-pointer">
                    <Link href="/">Trở về Trang chủ</Link>
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
