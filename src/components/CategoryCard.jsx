import Link from "next/link";
import Image from "next/image";

export default function CategoryCard({ category }) {
  return (
    <Link
      href={`/category/${category.slug}`}
      className="group relative flex aspect-[4/5] overflow-hidden rounded-2xl bg-linen-200 shadow-soft transition-shadow duration-300 hover:shadow-premium"
    >
      <Image
        src={category.image}
        alt={category.name}
        fill
        sizes="(max-width: 768px) 50vw, 25vw"
        className="object-cover transition-transform duration-500 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-ink/10 to-transparent" />
      <div className="relative mt-auto p-4 text-linen">
        <p className="font-display text-lg leading-tight">{category.name}</p>
        <p className="mt-0.5 text-xs text-linen/80">{category.description}</p>
      </div>
    </Link>
  );
}
