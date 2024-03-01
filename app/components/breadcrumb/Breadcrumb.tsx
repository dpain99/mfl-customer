import Link from "next/link";

interface BreadCrumbProps {
  items: { title: string; href?: string }[];
}

export default function BreadCrumb({ items }: BreadCrumbProps) {
  return (
    <div className="flex gap-1">
      {items?.map((item, id) =>
        item.href ? (
          <div key={id} className="flex items-center gap-1">
            <Link
              href={`/${item.href}`}
              className="p-1 rounded-lg hover:bg-slate-200 text-slate-500"
            >
              <span>{item.title}</span>
            </Link>
            <span>/</span>
          </div>
        ) : (
          <span className="p-1" key={id}>
            {item.title}
          </span>
        )
      )}
    </div>
  );
}
