import Image from "next/image";
import {convertMoney} from "@/lib/convertMoney";
import {ProductInfo} from "@/redux/slices/showCart";
import './style.scss';

interface props {
    index?: number;
    productData: ProductInfo;
    handlePlusItems: () => void;
    handleMinusItems: () => void;
}

const ItemsCart = ({
                       index,
                       productData,
                       handlePlusItems,
                       handleMinusItems,
                   }: props) => {
    return (
        <div className={index && index > 0 ? "item line-top" : "item"}>
            <div className="item-left">
                <div className="item-img">
                    <Image
                        src={productData.img}
                        alt={productData.slug}
                        width={0}
                        height={0}
                    />
                </div>
                <div className="item-remove">
          <span className="cart text-xs bg-slate-300 rounded-full p-1">
            {productData.quantity}
          </span>
                </div>
            </div>
            <div className="item-center">
                <div className="item-info">
                    <div className="item-title">{productData.title}</div>
                    <div className="item-price">{convertMoney(productData.price)} đ</div>
                </div>
            </div>
            <div className="item-right">
                <div className="item-total-price">
                    <div className="price truncate">
                        {convertMoney(productData.price * productData.quantity)} đ
                    </div>
                </div>
                {/*<div className="item-qty">
                    <div className="qty">
                        <button
                            type="button"
                            className="qtyminus qty-btn"
                            onClick={handleMinusItems}
                        >
                            <svg
                                width="18"
                                height="18"
                                viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <rect height="1" width="18" y="9" x="1"></rect>
                            </svg>
                        </button>
                        <input
                            type="text"
                            value={productData.quantity}
                            className="item-quantity"
                        />
                        <button
                            type="button"
                            className="qtyplus qty-btn"
                            onClick={handlePlusItems}
                        >
                            <svg
                                width="18"
                                height="18"
                                viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <rect x="9" y="1" width="1" height="17"></rect>
                                <rect x="1" y="9" width="17" height="1"></rect>
                            </svg>
                        </button>
                    </div>
                </div>*/}
            </div>
        </div>
    );
};

export default ItemsCart;
