import { Fragment, useEffect, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { useDispatch, useSelector } from "react-redux";
import { closeCart, setProductInfo } from "@/redux/slices/showCart";
import Image from "next/image";
import Link from "next/link";
import { RootState } from "@/redux/store";
import { convertMoney } from "@/lib/convertMoney";
import IClose from "@/public/icon/IClose";

export default function AddToCartMenu() {
  const isOpen = useSelector((state: any) => state.showCart.isOpen);
  const dispatch = useDispatch();
  const handleCloseCart = () => {
    dispatch(closeCart());
  };
  const infoProducts =
    useSelector((state: RootState) => state.showCart.infoProduct) || [];

  const handleDeleteItem = (titleToDelete: string) => {
    const updatedProductInfo = infoProducts.filter(
      (product) => product.title !== titleToDelete
    );
    dispatch(setProductInfo(updatedProductInfo));
  };

  const [totalPrice, setTotalPrice] = useState<number>(1);

  useEffect(() => {
    const totalPrices = infoProducts.reduce((total: number, product: any) => {
      const quantity = product.quantity || 1;
      const productPrice = product.price * quantity;
      return total + productPrice;
    }, 0);

    setTotalPrice(totalPrices);
  }, [infoProducts]);

  return (
    <Transition.Root show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-30" onClose={handleCloseCart}>
        <Transition.Child
          as={Fragment}
          enter="ease-in-out duration-500"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in-out duration-500"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-hidden">
          <div className="absolute inset-0 overflow-hidden">
            <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
              <Transition.Child
                as={Fragment}
                enter="transform transition ease-in-out duration-500 sm:duration-700"
                enterFrom="translate-x-full"
                enterTo="translate-x-0"
                leave="transform transition ease-in-out duration-500 sm:duration-700"
                leaveFrom="translate-x-0"
                leaveTo="translate-x-full"
              >
                <Dialog.Panel className="pointer-events-auto w-screen max-w-md">
                  <div className="flex h-full flex-col overflow-y-scroll bg-white shadow-xl">
                    <div className="flex-1 overflow-y-auto px-4 py-6 sm:px-6">
                      <div className="flex items-start justify-between">
                        <Dialog.Title className="text-lg font-medium text-gray-900">
                          Giỏ hàng
                        </Dialog.Title>
                        <div className="ml-3 flex h-7 items-center">
                          <button
                            type="button"
                            className="relative -m-2 p-2 text-gray-400 hover:text-gray-500"
                            onClick={handleCloseCart}
                          >
                            <span className="absolute -inset-0.5" />
                            <span className="sr-only">Close panel</span>
                            <span className="h-6 w-6" aria-hidden="true">
                              <IClose width={"1.9em"} height={"1.9em"} />
                            </span>
                          </button>
                        </div>
                      </div>

                      <div className="mt-8">
                        <div className="flow-root">
                          <ul
                            role="list"
                            className="-my-6 divide-y divide-gray-200"
                          >
                            {infoProducts?.map((product, id) => (
                              <li key={id} className="flex py-6">
                                <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                                  <Image
                                    src={product?.img}
                                    alt={product?.title}
                                    className="h-full w-full object-cover object-center"
                                    width={0}
                                    height={0}
                                    sizes="100vw"
                                    style={{ width: "100%", height: "auto" }}
                                  />
                                </div>

                                <div className="ml-4 flex flex-1 flex-col">
                                  <div>
                                    <div className="flex justify-between text-base font-medium text-gray-900">
                                      <h3>
                                        <Link
                                          href={`/detail-produt/${product.title}`}
                                        >
                                          {product?.title}
                                        </Link>
                                      </h3>
                                      <p className="ml-4">{`${convertMoney(
                                        product?.price
                                      )}đ`}</p>
                                    </div>
                                    {/* <p className="mt-1 text-sm text-gray-500"></p> */}
                                  </div>
                                  <div className="flex flex-1 items-end justify-between text-sm">
                                    <p className="text-gray-500">
                                      SL: {product.quantity}
                                    </p>

                                    <div className="flex">
                                      <button
                                        type="button"
                                        className="font-medium text-indigo-600 hover:text-indigo-500"
                                        onClick={() =>
                                          handleDeleteItem(product?.title)
                                        }
                                      >
                                        Xóa
                                      </button>
                                    </div>
                                  </div>
                                </div>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>

                    <div className="border-t border-gray-200 px-4 py-6 sm:px-6">
                      <div className="flex justify-between text-base font-medium text-gray-900">
                        <p>Tổng tiền</p>
                        <p>{convertMoney(totalPrice)} đ</p>
                      </div>
                      <p className="mt-0.5 text-sm text-gray-500">
                        Tổng giá tiền chưa tính phí ship
                      </p>
                      <div className="mt-6">
                        <Link
                          href="/cart"
                          className="flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700"
                          onClick={handleCloseCart}
                        >
                          Mua ngay
                        </Link>
                      </div>
                      <div className="mt-6 flex justify-center text-center text-sm text-gray-500">
                        <p>
                          hoặc{" "}
                          <button
                            type="button"
                            className="font-medium text-indigo-600 hover:text-indigo-500"
                            onClick={handleCloseCart}
                          >
                            Tiếp tục mua sắm
                            <span aria-hidden="true"> &rarr;</span>
                          </button>
                        </p>
                      </div>
                    </div>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
}
