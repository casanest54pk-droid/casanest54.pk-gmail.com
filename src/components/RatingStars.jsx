import { Star } from "lucide-react";

export default function RatingStars({ rating = 0, size = 14, showValue = false, reviewCount }) {
  const full = Math.round(rating);
  return (
    <div className="flex items-center gap-1" aria-label={`Rated ${rating} out of 5`}>
      <div className="flex items-center">
        {[1, 2, 3, 4, 5].map((i) => (
          <Star
            key={i}
            size={size}
            className={i <= full ? "fill-brass-500 text-brass-500" : "fill-transparent text-ink/20"}
          />
        ))}
      </div>
      {showValue && <span className="text-sm font-medium text-ink/80">{rating.toFixed(1)}</span>}
      {typeof reviewCount === "number" && (
        <span className="text-sm text-ink/50">({reviewCount})</span>
      )}
    </div>
  );
}
