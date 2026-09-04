import { Truck, Banknote, ShieldCheck, Sparkles } from "lucide-react";

const BADGES = [
  { icon: Truck, title: "Nationwide Delivery", desc: "We ship to every major city in Pakistan" },
  { icon: Banknote, title: "Cash on Delivery", desc: "Pay only when your order arrives" },
  { icon: ShieldCheck, title: "Secure Ordering", desc: "Your information stays private" },
  { icon: Sparkles, title: "Quality Products", desc: "Hand-picked and checked before listing" },
];

export default function TrustBadges({ compact = false }) {
  return (
    <div className={`grid grid-cols-2 gap-4 lg:grid-cols-4 ${compact ? "" : ""}`}>
      {BADGES.map(({ icon: Icon, title, desc }) => (
        <div key={title} className="flex flex-col items-start gap-2 rounded-2xl border border-ink/10 bg-white p-4 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-card sm:p-5">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-sage-100 text-sage-600">
            <Icon size={19} />
          </div>
          <p className="font-display text-sm text-ink sm:text-base">{title}</p>
          <p className="text-xs text-ink/55 sm:text-sm">{desc}</p>
        </div>
      ))}
    </div>
  );
}
