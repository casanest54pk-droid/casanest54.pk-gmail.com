import { Truck, PartyPopper } from "lucide-react";
import { siteConfig } from "@/config/site";
import { formatPrice } from "@/lib/format";

// Small, reusable progress indicator shown in the cart drawer and cart page.
// Purely presentational — reads live totals from CartContext via props.
export default function FreeDeliveryProgress({ subtotal }) {
  const threshold = siteConfig.freeDeliveryThreshold;
  const remaining = Math.max(0, threshold - subtotal);
  const pct = Math.min(100, Math.round((subtotal / threshold) * 100));
  const unlocked = remaining <= 0;

  return (
    <div
      className={`rounded-xl border p-3.5 transition-colors ${
        unlocked ? "border-sage-500/30 bg-sage-100" : "border-ink/10 bg-linen-200"
      }`}
    >
      <p className="flex items-center gap-2 text-xs font-medium text-ink sm:text-sm">
        {unlocked ? (
          <>
            <PartyPopper size={15} className="shrink-0 text-sage-600" />
            You've unlocked free delivery!
          </>
        ) : (
          <>
            <Truck size={15} className="shrink-0 text-sienna-600" />
            You're <span className="text-sienna-600">{formatPrice(remaining)}</span> away from
            free delivery
          </>
        )}
      </p>
      <div className="mt-2 h-1.5 w-full overflow-hidden rounded-full bg-white">
        <div
          className={`h-full origin-left rounded-full transition-transform duration-700 ease-out ${
            unlocked ? "bg-sage-500" : "bg-sienna-500"
          }`}
          style={{ width: `${pct}%` }}
        />
      </div>
    </div>
  );
}
