import Link from "next/link";
import { ChevronRight } from "lucide-react";

export default function Breadcrumbs({ items }) {
  return (
    <nav aria-label="Breadcrumb" className="flex items-center gap-1.5 text-sm text-ink/50">
      {items.map((item, i) => (
        <span key={item.path} className="flex items-center gap-1.5">
          {i > 0 && <ChevronRight size={13} />}
          {i === items.length - 1 ? (
            <span className="text-ink/80" aria-current="page">
              {item.name}
            </span>
          ) : (
            <Link href={item.path} className="hover:text-sienna-600">
              {item.name}
            </Link>
          )}
        </span>
      ))}
    </nav>
  );
}
