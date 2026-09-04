import { BadgeCheck } from "lucide-react";
import RatingStars from "./RatingStars";

export default function ReviewCard({ review }) {
  const initial = review.name.charAt(0).toUpperCase();
  return (
    <div className="flex h-full flex-col gap-3 rounded-2xl border border-ink/10 bg-white p-5">
      <RatingStars rating={review.rating} size={14} />
      <p className="flex-1 text-sm leading-relaxed text-ink/75">"{review.text}"</p>
      <div className="flex items-center gap-3 pt-2">
        <div className="flex h-9 w-9 items-center justify-center rounded-full bg-sienna-50 font-display text-sm text-sienna-600">
          {initial}
        </div>
        <div>
          <div className="flex items-center gap-1.5">
            <p className="text-sm font-medium text-ink">{review.name}</p>
            {review.verified && <BadgeCheck size={14} className="text-sage-500" />}
          </div>
          <p className="text-xs text-ink/50">{review.location}</p>
        </div>
      </div>
    </div>
  );
}
