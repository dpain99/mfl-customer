import './style.scss';
import ItemBlog from "@/app/blog/Item-blog/ItemBlog";

export default function Blog() {
    return (
        <div className="mt-16">
            <div className="wrapbox-blog container mx-auto px-4 flex">
                <div className="left-content">
                    <div className="category-blog">
                        <div className="title-category">
                            <h2>danh mục tin tức</h2>
                        </div>
                        <div className="category">
                            <ul className="list-category">
                                <li>Sữa bột</li>
                                <li>Mỹ phẩm</li>
                                <li>Mỹ phẩm</li>
                                <li>Mỹ phẩm</li>
                            </ul>
                        </div>
                    </div>
                    <div className="hot-new">
                        <div className="title-news">
                            <h2>tin tức nổi bật</h2>
                        </div>
                        <div className="wrapbox-news">
                            <div className="list-news">
                                <div className="news">
                                    <div className="thums-left">
                                        <img
                                            src="https://bizweb.dktcdn.net/thumb/small/100/336/334/articles/img-2275.jpg?v=1540267898967"
                                            alt="thums"/>
                                    </div>
                                    <div className="name-right">
                                        <h3>Mách cho bạn bí quyết trị nám tại nhà hiệu quả nhất </h3>
                                    </div>
                                </div>
                                <div className="news">
                                    <div className="thums-left">
                                        <img
                                            src="https://bizweb.dktcdn.net/thumb/small/100/336/334/articles/img-2275.jpg?v=1540267898967"
                                            alt="thums"/>
                                    </div>
                                    <div className="name-right">
                                        <h3>Mách cho bạn bí quyết trị nám tại nhà hiệu quả nhất </h3>
                                    </div>
                                </div>
                                <div className="news">
                                    <div className="thums-left">
                                        <img
                                            src="https://bizweb.dktcdn.net/thumb/small/100/336/334/articles/img-2275.jpg?v=1540267898967"
                                            alt="thums"/>
                                    </div>
                                    <div className="name-right">
                                        <h3>Mách cho bạn bí quyết trị nám tại nhà hiệu quả nhất </h3>
                                    </div>
                                </div>
                                <div className="news">
                                    <div className="thums-left">
                                        <img
                                            src="https://bizweb.dktcdn.net/thumb/small/100/336/334/articles/img-2275.jpg?v=1540267898967"
                                            alt="thums"/>
                                    </div>
                                    <div className="name-right">
                                        <h3>Mách cho bạn bí quyết trị nám tại nhà hiệu quả nhất </h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="right-content">
                    <div className="heading">
                        <h1>sữa bột</h1>
                    </div>
                    <div className="list-blogs">
                        <ItemBlog/>
                        <ItemBlog/>
                        <ItemBlog/>
                        <ItemBlog/>
                        <ItemBlog/>
                        <ItemBlog/>
                    </div>
                </div>
            </div>
        </div>
    );
}
