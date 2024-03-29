"use client";
import AdjustNumber from "@/app/components/adjust-number/AdjustNumber";
import BreadCrumb from "@/app/components/breadcrumb/Breadcrumb";
import MyBtn3 from "@/app/components/button-3/MyBtn3";
import SocialBtn2 from "@/app/components/social-btn-2/SocialBtn2";
import { useGetListProduct } from "@/app/list-product/list-product-form/hooks/useGetListProduct";
import { convertMoney } from "@/lib/convertMoney";
import ILike from "@/public/icon/ILike";
import { openCart, setProductInfo } from "@/redux/slices/showCart";
import { RootState } from "@/redux/store";
import Image from "next/image";
import { useParams } from "next/navigation";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import CategoryProductCarousel from "../category-product-carousel/CategoryProductCarousel";
import { useGetProductBySlug } from "../hooks/useGetProductBySlug";
import ImageProductCarousel from "../image-product-carousel/ImageProductCarousel";
import "./style.scss";

export default function DetailProduct({
  params,
}: {
  params: { slug: string };
}) {
  const params1 = useParams();
  // const [detailProduct, setDetailProduct] = useState<Product | null>(null);
  // const [dataProductCategory, setDataProductCategory] =
  //   useState<IProductListResponse>();
  const [quantityProduct, setQuantityProduct] = useState<number>(1);
  // const getData1 = async () => {
  //   const response = await getDataForClient(`product/${params1.slug}`);
  //   setDetailProduct(response);
  // };
  // useEffect(() => {
  //   getData1().then((r) => {});
  //   return () => {};
  // }, []);

  const { data: detailProduct } = useGetProductBySlug({
    slug: `${params1.slug}`,
  });

  const categoryId = detailProduct?.productCategories[0].categoryId || 0;

  const { data: dataProductCategory } = useGetListProduct({
    categoryIds: [categoryId],
    page: 1,
    limit: 10,
  });

  const queryParamsSuaOz = new URLSearchParams({
    categoryIds: `${categoryId}`,
  }).toString();

  // const getDataProduct = async () => {
  //   try {
  //     const response: IProductListResponse = await getDataForClient(
  //       `product?${queryParamsSuaOz}`
  //     );
  //     setDataProductCategory(response);
  //   } catch (error) {
  //     console.error("Error fetching data:", error);
  //   }
  // };

  // useEffect(() => {
  //   if (categoryId !== undefined) {
  //     getDataProduct();
  //   }
  // }, [categoryId]);

  const dispatch = useDispatch();
  const currentProductInfo =
    useSelector((state: RootState) => state.showCart.infoProduct) || [];
  const handleClickAddCart = (
    name: string,
    maxMoney: number,
    minMoney: number,
    url: string,
    slug: string
  ) => {
    dispatch(openCart());
    const newProductInfo = {
      img: url,
      title: name,
      price: minMoney | maxMoney,
      slug: slug,
      quantity: quantityProduct,
    };
    const updatedProductInfo = [...currentProductInfo, newProductInfo];
    dispatch(setProductInfo(updatedProductInfo));
  };

  return (
    <div className="container mx-auto px-4">
      <div className="pt-5 pb-5">
        <BreadCrumb
          items={[
            { title: "Trang Chủ", href: "/" },
            { title: `${detailProduct?.name}` },
          ]}
        />
      </div>

      <div className="flex flex-col gap-10 rounded-xl">
        <div className="flex flex-col lg:flex-row p-5 rounded-xl bg-white shadow-xl">
          <div className="w-full lg:w-1/3 border-solid border-b border-slate-500 pb-5 lg:pb-0 lg:border-0">
            <ImageProductCarousel dataImg={detailProduct || null} />
          </div>

          <div className="flex flex-col gap-4 px-0 lg:px-10 grow pt-5 lg:pt-0">
            <span className="text-xl font-semibold text-sky-500">
              {detailProduct?.productCategories[0].category.name}
            </span>
            <span className="text-2xl">{detailProduct?.name}</span>
            <span className="text-base font-semibold">{`Tình trạng: ${detailProduct?.status}`}</span>
            <span className="text-3xl text-red-800 bg-slate-200 rounded-lg p-2">{`${convertMoney(
              detailProduct?.maxMoney
            )} đ`}</span>
            <div className="flex flex-row items-center gap-3">
              <span className="w-24 font-semibold">Loại: </span>
              {detailProduct?.productVariant.map((item) => (
                <div
                  key={item.id}
                  className="flex flex-row items-center w-fit justify-center border-x border-y border-solid border-slate-400 px-2 py-1 rounded-lg"
                >
                  <Image
                    src={item.productVariantImage[0].image.url}
                    alt={item.name}
                    width={0}
                    height={0}
                    sizes="100vw"
                    className="size-14 object-cover"
                  />
                  <span>{item.value}</span>
                </div>
              ))}
            </div>
            <div className="flex flex-row items-center gap-3">
              <span className="w-24 font-semibold">Số lượng : </span>
              <AdjustNumber
                adjustNumber={quantityProduct}
                setAdjustNumber={setQuantityProduct}
              />
            </div>
            <div className="flex flex-row gap-3">
              <MyBtn3
                title={"Thêm vào giỏ"}
                sx="bg-cyan-500 before:from-cyan-600 before:to-cyan-400 w-1/2 py-4"
                handleClick={() =>
                  handleClickAddCart(
                    detailProduct?.name || "",
                    detailProduct?.maxMoney || 0,
                    detailProduct?.minMoney || 0,
                    detailProduct?.productImage[0].image.url || "",
                    detailProduct?.slug || ""
                  )
                }
              />
              <MyBtn3
                title={"Mua ngay"}
                sx="bg-red-500 before:from-red-600 before:to-red-400 w-1/2 py-4"
              />
            </div>
            <div className="flex flex-row items-center gap-3">
              <span className="font-semibold w-24">Chia sẻ: </span>
              <SocialBtn2 />
            </div>
          </div>
          <div className="flex flex-col gap-5 pt-5 lg:pt-0 items-center lg:items-start">
            <div className="flex flex-col border-solid border-x border-y border-black rounded-lg w-80 h-fit p-2 gap-3">
              <span className="font-semibold text-base">
                Chính sách bán hàng
              </span>

              <span className=" flex flex-row gap-3 text-sm items-center">
                <ILike width="1.4em" height="1.4em" /> Cam kết 100% chính hãng
              </span>
              <span className="flex flex-row gap-3 text-sm items-center">
                <ILike width={"1.4em"} height={"1.4em"} /> Hỗ trợ 24/7
              </span>
              <span className="font-semibold text-base">Thông tin thêm</span>
              <span className=" flex flex-row gap-3 text-sm items-center">
                <ILike width={"1.4em"} height={"1.4em"} />
                Hoàn giá 111% nếu là hàng giả
              </span>
              <span className="flex flex-row gap-3 text-sm items-center">
                <ILike width={"1.4em"} height={"1.4em"} />
                Mở hội kiểm tra nhận hàng
              </span>
            </div>
            <div className="flex flex-col border-solid border-x border-y border-black rounded-lg w-80 h-fit p-2 gap-3">
              <iframe
                src="https://www.youtube.com/embed/nrqhPGdT6A8"
                title="Hướng dẫn sử dụng Oz Farm cho bà bầu"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-10 rounded-xl pt-10">
        <div className="flex flex-col p-5 rounded-xl bg-white shadow-xl">
          <section className="flex w-full border-solid border-b border-slate-200">
            <span className="border-solid border-b border-slate-950 pb-3 font-semibold text-xl uppercase">
              Mô tả sản phẩm
            </span>
          </section>
          <section className="pt-8">{detailProduct?.description}</section>
        </div>
      </div>

      <div className="flex flex-col gap-15 rounded-xl py-10">
        <div className="flex flex-col p-5 rounded-xl bg-white shadow-xl gap-5">
          <section className="flex w-full border-solid border-b border-slate-200">
            <span className="border-solid border-b border-slate-950 pb-3 font-semibold text-xl uppercase">
              Sản phẩm cùng danh mục
            </span>
          </section>

          <CategoryProductCarousel
            linkMore={""}
            dataProduct={dataProductCategory}
          />
        </div>
      </div>
    </div>
  );
}
