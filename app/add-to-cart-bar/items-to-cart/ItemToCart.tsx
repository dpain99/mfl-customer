import Image from "next/image";
import productImg from "@/public/images/sleepwell.png";
import AdjustNumber from "@/app/components/adjust-number/AdjustNumber";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import RemoveBtn from "@/app/components/remove-btn/RemoveBtn";
import { useDispatch, useSelector } from "react-redux";
import { setProductInfo } from "@/redux/slices/showCart";

interface ItemToCardProps {
  title: string;
  img: any;
  price: number;
  handleDeleteItems: () => void;
}
export default function ItemToCard({
  title,
  img,
  price,
  handleDeleteItems,
}: ItemToCardProps) {
  const [number, setNumber] = useState<number>(1);
  const dispatch = useDispatch();

  const infoProducts =
    useSelector((state: any) => state.showCart.infoProduct) || [];

  useEffect(() => {
    const updatedInfoProducts = infoProducts.map((product: any) => {
      if (product.title === title) {
        return { ...product, quantity: number };
      }
      return product;
    });
    dispatch(setProductInfo(updatedInfoProducts));
  }, [number]);

  return (
    <div className="flex flex-row justify-center items-center gap-4">
      <Image src={img} alt="product" className="size-24 object-cover" />
      <span>{title}</span>
      <span>{price * number}</span>
      <AdjustNumber adjustNumber={number} setAdjustNumber={setNumber} />
      <RemoveBtn handleClickBtn={handleDeleteItems} />
    </div>
  );
}
