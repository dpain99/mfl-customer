import { ICategory } from "../types/type";
import "./style.scss";

interface CategoryMenuProps {
  isShow: boolean;
  data: ICategory[];
}
export default function CategoryMenu({ isShow, data }: CategoryMenuProps) {
  return (
    <>
      <div
        className={`category-menu-container absolute left-0 top-12 w-96  ${
          isShow ? "h-96" : "h-0"
        }`}
      >
        <div className="flex flex-col relative">
          <div className="sub-cate">hello</div>
          {data.map((item, id) => (
            <div className="span-cate" key={id}>
              <span className="children-cate">{item.name}</span>

              {item.children.length > 0 && (
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="1em"
                    height="1em"
                    viewBox="0 0 512 512"
                  >
                    <path
                      fill="currentColor"
                      d="m190.06 414l163.12-139.78a24 24 0 0 0 0-36.44L190.06 98c-15.57-13.34-39.62-2.28-39.62 18.22v279.6c0 20.5 24.05 31.56 39.62 18.18"
                    />
                  </svg>
                </span>
              )}
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
