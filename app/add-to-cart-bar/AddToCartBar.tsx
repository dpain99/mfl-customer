"use client";
import { closeCart, setProductInfo } from "@/redux/slices/showCart";
import ItemToCard from "./items-to-cart/ItemToCart";
import "./style.scss";
import { useDispatch, useSelector } from "react-redux";
import { SetStateAction, useEffect, useState } from "react";

export default function AddToCartBar() {
  const isOpen = useSelector((state: any) => state.showCart.isOpen);
  const infoProducts =
    useSelector((state: any) => state.showCart.infoProduct) || [];
  const dispatch = useDispatch();

  const handleDeleteItem = (titleToDelete: string) => {
    const updatedProductInfo = infoProducts.filter(
      (product: any) => product.title !== titleToDelete
    );
    dispatch(setProductInfo(updatedProductInfo));
  };

  const handleCloseCart = () => {
    dispatch(closeCart());
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
    <div className={isOpen ? "flex" : "hidden"}>
      <div className="cart-bar-container shadow-lg w-1/2 md:w-1/4 z-20">
        <div className="content">
          <div className="cart-header">
            <span>Giỏ Hàng</span>
          </div>
          <div className="cart-body">
            {infoProducts?.map((item: any, index: number) => (
              <ItemToCard
                key={index}
                title={item?.title}
                img={undefined}
                price={item?.price}
                handleDeleteItems={() => handleDeleteItem(item.title)}
              />
            ))}
          </div>

          <div className="cart-footer">
            <span className="total-price">Tổng tiền: {totalPrice}</span>
            <div className="flex justify-center items-center">
              <button
                className="cancel-btn basis-1/2"
                onClick={handleCloseCart}
              >
                Cancel
              </button>
              <button className="payment-btn basis-1/2">Thanh toán</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
