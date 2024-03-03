import './style.scss';
import Image from "next/image";
import imgProduct from "@/public/images/sleepwell.png";
interface props{
    index?:number;
}
const ItemCart = ({index}:props) => {
    return (
        <div className={index && index > 0 ? "item line-top" : "item"}>
            <div className="item-left">
                <div className="item-img">
                    <Image src={imgProduct} alt="image"/>
                </div>
                <div className="item-remove">
                    <a href="#" className="cart">Xóa</a>
                </div>
            </div>
            <div className="item-center">
                <div className="item-info">
                    <div className="item-title">
                        Dung dịch tẩy tế bào chết BHA COSRX BHA Blackhead Power Liquid
                        100ml
                    </div>
                    <div className="item-price">
                        503,200 VNĐ
                    </div>
                </div>
            </div>
            <div className="item-right">
                <div className="item-total-price">
                    <div className="price">
                        503,200 VNĐ
                    </div>
                </div>
                <div className="item-qty">
                    <div className="qty">
                        <button type="button" className="qtyminus qty-btn">
                            <svg width="18" height="18" viewBox="0 0 20 20"
                                 xmlns="http://www.w3.org/2000/svg">
                                <rect height="1" width="18" y="9" x="1"></rect>
                            </svg>
                        </button>
                        <input type="text" value="2"
                               className="item-quantity"/>
                        <button type="button" className="qtyplus qty-btn">
                            <svg width="18" height="18" viewBox="0 0 20 20"
                                 xmlns="http://www.w3.org/2000/svg">
                                <rect x="9" y="1" width="1" height="17"></rect>
                                <rect x="1" y="9" width="17" height="1"></rect>
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ItemCart;
