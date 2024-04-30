"use client";
import PriceRange from "@/app/components/price-range/PriceRange";
import ICaretDown from "@/public/icon/ICaretDown";
import ISearch from "@/public/icon/ISearch";
import { Dialog, Disclosure, Menu, Transition } from "@headlessui/react";
import { Pagination } from "antd";
import { useParams } from "next/navigation";
import { Fragment, useEffect, useState } from "react";
import BreadCrumb from "../../components/breadcrumb/Breadcrumb";
import CardProduct from "../../home/product-card/ProductCard";
import { useGetListProduct } from "./hooks/useGetListProduct";
import { IListProductParams } from "./interface";

const sortOptions = [
  { name: "Phổ biến nhất", href: "#", current: true },
  { name: "Bình chọn cao nhất", href: "#", current: false },
  { name: "Mới nhất", href: "#", current: false },
  { name: "Giá: Thấp đến Cao", href: "#", current: false },
  { name: "Giá: Cao đến Thấp", href: "#", current: false },
];
const filters = [
  {
    id: "category",
    name: "Danh Mục",
    options: [
      { value: "1", label: "Sữa Oz Farm", checked: false },
      { value: "2", label: "Mỹ Phẩm", checked: false },
      { value: "3", label: "Vitamin", checked: false },
    ],
  },
  {
    id: "on-sale",
    name: "Khuyến Mãi",
    options: [
      { value: "true", label: "Đang Khuyến Mãi", checked: false },
      { value: "false", label: "Chưa Khuyến mãi", checked: false },
      { value: undefined, label: "Tất cả", checked: true },
    ],
  },
];

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

export default function ListProductForm() {
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);
  const [idCategory, setIdCategory] = useState<{
    id: number[] | null;
    name: string;
  }>();
  const [page, setPage] = useState<{
    totalItems: number;
    itemCount: number;
    itemsPerPage: number;
    totalPages: number;
    currentPage: number;
  }>({
    totalItems: 0,
    itemCount: 0,
    itemsPerPage: 10,
    totalPages: 0,
    currentPage: 1,
  });
  // const [subCate, setSubCate] = useState<{ name: string; href: string }[]>([]);
  const params1 = useParams();

  const params = decodeURIComponent(`${params1.slug}`);
  const keyword = params.substring(8);

  const checklist = () => {
    switch (params) {
      case "sua-ozfarm":
        setIdCategory({ id: [1], name: "Sữa bột Oz Farm" });
        break;
      case "cham-soc-co-the":
        setIdCategory({ id: [2], name: "Chăm Sóc Cơ Thể" });
        break;
      case "thuc-pham-chuc-nang":
        setIdCategory({ id: [3], name: "Thực Phẩm Chức Năng" });
        break;
      case "hot-sale":
        setIdCategory({ id: null, name: "Hot Sale" });
        break;
      default:
        setIdCategory({ id: null, name: "Danh Sách Sản Phẩm" });
    }
  };

  // const checkList = () => {
  //   if (`${params1.slug}` === "sua-ozfarm") {
  //     setIdCategory({ id: 1, name: "Sữa bột Oz Farm" });
  //     setDataCateGory([1]);
  //     setSubCate([
  //       { name: "Dành cho Mẹ Bầu", href: "#" },
  //       { name: "Dành cho Người Cao Tuổi", href: "#" },
  //       { name: "Chăm sóc giấc ngủ", href: "#" },
  //     ]);
  //   } else if (`${params1.slug}` === "cham-soc-co-the") {
  //     setIdCategory({ id: 2, name: "Chăm Sóc Cơ Thể" });
  //     setDataCateGory([2]);
  //     setSubCate([
  //       { name: "Dành cho Mẹ Bầu", href: "#" },
  //       { name: "Dành cho Người Cao Tuổi", href: "#" },
  //       { name: "Chăm sóc giấc ngủ", href: "#" },
  //     ]);
  //   } else if (`${params1.slug}` === "thuc-pham-chuc-nang") {
  //     setIdCategory({ id: 3, name: "Thực Phẩm Chức Năng" });
  //     setDataCateGory([3]);
  //     setSubCate([
  //       { name: "Dành cho Mẹ Bầu", href: "#" },
  //       { name: "Dành cho Người Cao Tuổi", href: "#" },
  //       { name: "Chăm sóc giấc ngủ", href: "#" },
  //     ]);
  //   } else if (`${params1.slug}` === "hot-sale") {
  //     setIdCategory({ id: 0, name: "Danh Sách Hot Sale" });
  //     setDataCateGory([0]);
  //     setSubCate([
  //       { name: "Dành cho Mẹ Bầu", href: "#" },
  //       { name: "Dành cho Người Cao Tuổi", href: "#" },
  //       { name: "Chăm sóc giấc ngủ", href: "#" },
  //     ]);
  //   } else {
  //     setIdCategory({ id: 0, name: "Danh sách sản phẩm" });
  //     setSubCate([
  //       {
  //         name: `Từ khóa tìm kiếm: ${keyword}`,
  //         href: "#",
  //       },
  //       { name: "Dành cho Người Cao Tuổi", href: "#" },
  //       { name: "Chăm sóc giấc ngủ", href: "#" },
  //     ]);
  //   }
  // };

  // const [dataCategory, setDataCateGory] = useState<number[]>([]);
  const [onSale, setOnSale] = useState<boolean | undefined>(undefined);
  const [minPrice, setMinPrice] = useState<number>(100000);
  const [maxPrice, setMaxPrice] = useState<number>(1900000);

  const [searchParams, setSearchParams] = useState<IListProductParams>({
    page: 1,
    limit: 10,
  });

  console.log("searchParams", searchParams);

  const { data } = useGetListProduct({
    page: searchParams.page,
    limit: searchParams.limit,
    categoryIds: idCategory?.id !== null ? idCategory?.id : undefined,
    onSale: searchParams?.onSale,
    minMoney: searchParams?.minMoney,
    maxMoney: searchParams?.maxMoney,
  });

  const handleClickFilter = () => {
    setSearchParams({
      page: page.currentPage,
      limit: page.itemsPerPage,
      categoryIds: idCategory?.id !== null ? idCategory?.id : undefined,
      onSale: onSale,
      minMoney: minPrice,
      maxMoney: maxPrice,
    });
  };

  const handleOnCheck = (value: string) => {
    if (idCategory?.id !== null && idCategory?.id !== undefined) {
      if (["1", "2", "3"].includes(value)) {
        const newValue = parseInt(value);
        const newData = idCategory?.id.includes(newValue)
          ? idCategory.id.filter((item) => item !== newValue)
          : [...idCategory.id, newValue];
        setIdCategory((prevState) => ({ ...prevState!, id: newData }));
      }

      if (["true", "false", "undefined"].includes(value)) {
        setOnSale(
          value === "true" ? true : value === "false" ? false : undefined
        );
      } else {
        return undefined;
      }
    }
  };

  useEffect(() => {
    checklist();
  }, [params1]);

  return (
    <div>
      <div>
        {/* Mobile filter dialog */}
        <Transition.Root show={mobileFiltersOpen} as={Fragment}>
          <Dialog
            as="div"
            className="relative z-40 lg:hidden"
            onClose={setMobileFiltersOpen}
          >
            <Transition.Child
              as={Fragment}
              enter="transition-opacity ease-linear duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="transition-opacity ease-linear duration-300"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="fixed inset-0 bg-black bg-opacity-25" />
            </Transition.Child>

            <div className="fixed inset-0 z-40 flex">
              <Transition.Child
                as={Fragment}
                enter="transition ease-in-out duration-300 transform"
                enterFrom="translate-x-full"
                enterTo="translate-x-0"
                leave="transition ease-in-out duration-300 transform"
                leaveFrom="translate-x-0"
                leaveTo="translate-x-full"
              >
                <Dialog.Panel className="relative ml-auto flex h-full w-full max-w-xs flex-col overflow-y-auto bg-white py-4 pb-12 shadow-xl">
                  <div className="flex items-center justify-between px-4">
                    <h2 className="text-lg font-medium text-gray-900">
                      Filters
                    </h2>
                    <button
                      type="button"
                      className="-mr-2 flex h-10 w-10 items-center justify-center rounded-md bg-white p-2 text-gray-400"
                      onClick={() => setMobileFiltersOpen(false)}
                    >
                      <span className="sr-only">Close menu</span>
                      <span className="h-6 w-6" aria-hidden="true">
                        X
                      </span>
                    </button>
                  </div>

                  {/* Filters */}
                  <form className="mt-4 border-t border-gray-200">
                    {/* <h3 className="sr-only">Categories</h3>
                    <ul
                      role="list"
                      className="px-2 py-3 font-medium text-gray-900"
                    >
                      {subCate.map((category) => (
                        <li key={category.name}>
                          <a href={category.href} className="block px-2 py-3">
                            {category.name}
                          </a>
                        </li>
                      ))}
                    </ul> */}

                    {filters.map((section) => (
                      <Disclosure
                        as="div"
                        key={section.id}
                        className="border-t border-gray-200 px-4 py-6"
                      >
                        {({ open }) => (
                          <>
                            <h3 className="-mx-2 -my-3 flow-root">
                              <Disclosure.Button className="flex w-full items-center justify-between bg-white px-2 py-3 text-gray-400 hover:text-gray-500">
                                <span className="font-medium text-gray-900">
                                  {section.name}
                                </span>
                                <span className="ml-6 flex items-center">
                                  {open ? (
                                    <span
                                      className="h-5 w-5"
                                      aria-hidden="true"
                                    >
                                      -
                                    </span>
                                  ) : (
                                    <span
                                      className="h-5 w-5"
                                      aria-hidden="true"
                                    >
                                      +
                                    </span>
                                  )}
                                </span>
                              </Disclosure.Button>
                            </h3>
                            <Disclosure.Panel className="pt-6">
                              <div className="space-y-6">
                                {section.options.map((option, optionIdx) => (
                                  <div
                                    key={option.label}
                                    className="flex items-center"
                                  >
                                    <input
                                      id={`filter-mobile-${section.id}-${optionIdx}`}
                                      name={`${section.id}[]`}
                                      defaultValue={option.value}
                                      type="checkbox"
                                      defaultChecked={option.checked}
                                      className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                                    />
                                    <label
                                      htmlFor={`filter-mobile-${section.id}-${optionIdx}`}
                                      className="ml-3 min-w-0 flex-1 text-gray-500"
                                    >
                                      {option.label}
                                    </label>
                                  </div>
                                ))}
                              </div>
                            </Disclosure.Panel>
                          </>
                        )}
                      </Disclosure>
                    ))}
                  </form>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </Dialog>
        </Transition.Root>

        <main className="mx-auto container">
          <div className="py-10">
            <BreadCrumb
              items={[
                { title: "Trang Chủ", href: "/" },
                { title: `${idCategory?.name}` },
              ]}
            />
          </div>

          <div className="flex items-baseline justify-between border-b border-gray-200 pb-6">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900">
              {idCategory?.name}
            </h1>

            <div className="flex items-center">
              <Menu as="div" className="relative inline-block text-left">
                <div>
                  <Menu.Button className="group inline-flex justify-center text-sm font-medium text-gray-700 hover:text-gray-900">
                    Sắp xếp
                    <span
                      className="-mr-1 ml-1 h-5 w-5 flex-shrink-0 text-gray-400 group-hover:text-gray-500"
                      aria-hidden="true"
                    >
                      <ICaretDown width={"1.3em"} height={"1.3em"} />
                    </span>
                  </Menu.Button>
                </div>

                <Transition
                  as={Fragment}
                  enter="transition ease-out duration-100"
                  enterFrom="transform opacity-0 scale-95"
                  enterTo="transform opacity-100 scale-100"
                  leave="transition ease-in duration-75"
                  leaveFrom="transform opacity-100 scale-100"
                  leaveTo="transform opacity-0 scale-95"
                >
                  <Menu.Items className="absolute right-0 z-10 mt-2 w-40 origin-top-right rounded-md bg-white shadow-2xl ring-1 ring-black ring-opacity-5 focus:outline-none">
                    <div className="py-1">
                      {sortOptions.map((option) => (
                        <Menu.Item key={option.name}>
                          {({ active }) => (
                            <a
                              href={option.href}
                              className={classNames(
                                option.current
                                  ? "font-medium text-gray-900"
                                  : "text-gray-500",
                                active ? "bg-gray-100" : "",
                                "block px-4 py-2 text-sm"
                              )}
                            >
                              {option.name}
                            </a>
                          )}
                        </Menu.Item>
                      ))}
                    </div>
                  </Menu.Items>
                </Transition>
              </Menu>
              <button
                type="button"
                className="-m-2 ml-4 p-2 text-gray-400 hover:text-gray-500 sm:ml-6 lg:hidden"
                onClick={() => setMobileFiltersOpen(true)}
              >
                <span className="sr-only">Filters</span>
                <span className="h-5 w-5" aria-hidden="true">
                  oo
                </span>
              </button>
            </div>
          </div>

          <section aria-labelledby="products-heading" className="pb-24 pt-6">
            <h2 id="products-heading" className="sr-only">
              Products
            </h2>

            <div className="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-4">
              {/* Filters */}
              <form className="hidden lg:block bg-white shadow-lg rounded-lg p-5">
                {/* <h3 className="sr-only">Categories</h3>
                <ul
                  role="list"
                  className="space-y-4 border-b border-gray-200 pb-6 text-sm font-medium text-gray-900"
                >
                  {subCate.map((category) => (
                    <li key={category.name}>
                      <a href={category.href}>{category.name}</a>
                    </li>
                  ))}
                </ul> */}

                {filters.map((section) => (
                  <Disclosure
                    as="div"
                    key={section.id}
                    className="border-b border-gray-200 py-6"
                  >
                    {({ open }) => (
                      <>
                        <h3 className="-my-3 flow-root">
                          <Disclosure.Button className="flex w-full items-center justify-between bg-white py-3 text-sm text-gray-400 hover:text-gray-500">
                            <span className="font-medium text-gray-900">
                              {section.name}
                            </span>

                            <span className="ml-6 flex items-center">
                              {open ? (
                                <span className="h-5 w-5" aria-hidden="true">
                                  -
                                </span>
                              ) : (
                                <span className="h-5 w-5" aria-hidden="true">
                                  +
                                </span>
                              )}
                            </span>
                          </Disclosure.Button>
                        </h3>
                        <Disclosure.Panel className="pt-6">
                          <div className="space-y-4">
                            {section.options.map((option, optionIdx) => (
                              <div
                                key={option.value}
                                className="flex items-center"
                              >
                                {section.id === "on-sale" ? (
                                  <input
                                    id={`filter-${section.id}-${optionIdx}`}
                                    name={`${section.id}[]`}
                                    type="radio"
                                    defaultChecked={option.checked}
                                    className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                                    value={option.value}
                                    onChange={(e) => {
                                      handleOnCheck(e.target.value);
                                    }}
                                  />
                                ) : (
                                  <input
                                    id={`filter-${section.id}-${optionIdx}`}
                                    name={`${section.id}[]`}
                                    type="checkbox"
                                    defaultChecked={option.checked}
                                    className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                                    value={option.value}
                                    onChange={(e) => {
                                      handleOnCheck(e.target.value);
                                    }}
                                  />
                                )}

                                <label
                                  htmlFor={`filter-${section.id}-${optionIdx}`}
                                  className="ml-3 text-sm text-gray-600"
                                >
                                  {option.label}
                                </label>
                              </div>
                            ))}
                          </div>
                        </Disclosure.Panel>
                      </>
                    )}
                  </Disclosure>
                ))}
                <PriceRange
                  minPrice={minPrice}
                  maxPrice={maxPrice}
                  setMinPrice={setMinPrice}
                  setMaxPrice={setMaxPrice}
                />
                <div className="flex w-full items-center justify-center pt-4">
                  <button
                    type="button"
                    onClick={handleClickFilter}
                    className="active:bg-sky-200 p-2 border border-solid border-black w-full rounded-lg flex justify-center items-center text-secondary-color"
                  >
                    <ISearch width="1.9em" height="1.9em" />
                    <span className="uppercase font-semibold">Tìm kiếm</span>
                  </button>
                </div>
              </form>

              {/* Product grid */}
              <div className="lg:col-span-3 bg-white shadow-lg rounded-lg py-10 h-fit">
                {
                  <div className="grid md:grid-cols-4 grid-cols-2 gap-4">
                    {data?.items?.map((item, id) => (
                      <div key={id} className="flex justify-center">
                        <CardProduct
                          title={item.name}
                          price={item.productVariant[0].price}
                          image={item.productImage[0].image.url}
                          slug={item.slug}
                          salePrice={item.productVariant[0].salePrice}
                        />
                      </div>
                    ))}
                  </div>
                }

                <div className="flex items-center justify-center pt-10">
                  {data?.meta?.currentPage === data?.meta?.totalPages ? (
                    ""
                  ) : (
                    <Pagination
                      defaultCurrent={1}
                      total={data?.meta.totalItems}
                      current={data?.meta.currentPage}
                    />
                  )}
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}
