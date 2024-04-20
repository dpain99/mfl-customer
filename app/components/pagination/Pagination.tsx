import IArrowLeft from "@/public/icon/IArrowLeft";
import IArrowRight from "@/public/icon/IArrowRight";

interface PaginationProps {
  totalPage: number;
  currentPage: number;
}
export default function Pagination({
  totalPage,
  currentPage,
}: PaginationProps) {
  return (
    <div className="pagination-container">
      <div className="pagination flex items-center text-secondary px-5 py-2 rounded-lg">
        <button className="btn1 flex items-center gap-1">
          <IArrowLeft width="1.6em" height="1.6em" />
        </button>
        <ul className="mx-2 my-3">
          {Array.from({ length: totalPage }, (_, index) => index + 1).map(
            (item) => {
              const shouldDisplayEllipsis =
                totalPage > 5 &&
                item !== 1 &&
                item !== totalPage &&
                Math.abs(item - currentPage) > 1;
              return (
                <li
                  key={item}
                  className={`inline-block mx-2 w-8 h-8 rounded-full text-center text-xl leading-8 cursor-pointer ${
                    item === currentPage ? "bg-sky-400" : ""
                  }`}
                >
                  {shouldDisplayEllipsis ? "..." : item}
                </li>
              );
            }
          )}
        </ul>

        <button className="btn flex items-center gap-1">
          <IArrowRight width={"1.6em"} height={"1.6em"} />
        </button>
      </div>
    </div>
  );
}
