import React from 'react';
import Image from "next/image";
import imgProduct from "@/public/images/sleepwell.png";
import {UserOutlined} from "@ant-design/icons";
import './style.scss';
const ItemBlog = () => {
    return (
        <div className="blog">
            <div className="thums-blog">
                <Image src={imgProduct} alt="image"/>
            </div>
            <div className="title-blog">
                <h2>Xu hướng lông mày năm 2018 không thể không biết</h2>
            </div>
            <div className="poster flex items-center gap-1 mt-1">
                                <span>
                                <UserOutlined/>
                                </span>
                Đăng bởi: Admin
            </div>
            <div className="summary-blog">
                <p>Da chúng ta dễ bị thâm nám là do tiếp xúc với ánh nắng mặt trời thường xuyên, chế độ ăn uống nghỉ...</p>
            </div>
        </div>
    );
};

export default ItemBlog;
