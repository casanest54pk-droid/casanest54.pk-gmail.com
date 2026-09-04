"use client";

import { useState } from "react";
import { Send } from "lucide-react";
import { useToast } from "@/context/ToastContext";

// Uses the same Web3Forms endpoint as checkout (see src/lib/orderSubmit.js
// for full setup instructions). No backend required.
export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const { showToast } = useToast();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email.trim() || !email.includes("@")) {
      showToast("Please enter a valid email address", "error");
      return;
    }
    setLoading(true);
    const accessKey = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY;
    try {
      if (accessKey && accessKey !== "your-web3forms-access-key-here") {
        await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            access_key: accessKey,
            subject: "New CasaNest Newsletter Signup",
            email,
          }),
        });
      }
      showToast("You're subscribed! Welcome to CasaNest.");
      setEmail("");
    } catch {
      showToast("Something went wrong. Please try again.", "error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="section bg-sage-500">
      <div className="container-page flex flex-col items-center gap-4 text-center text-linen">
        <h2 className="font-display text-3xl sm:text-4xl">Get the latest CasaNest finds</h2>
        <p className="max-w-md text-sm text-linen/85 sm:text-base">
          Be the first to discover new arrivals, special offers and trending products.
        </p>
        <form onSubmit={handleSubmit} className="mt-2 flex w-full max-w-md flex-col gap-2 sm:flex-row">
          <label htmlFor="newsletter-email" className="sr-only">
            Email address
          </label>
          <input
            id="newsletter-email"
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="you@email.com"
            className="flex-1 rounded-full border-none bg-white px-5 py-3 text-sm text-ink outline-none placeholder:text-ink/40"
          />
          <button type="submit" disabled={loading} className="btn-primary bg-ink hover:bg-ink/90 disabled:opacity-60">
            {loading ? "Sending..." : "Subscribe"}
            <Send size={15} />
          </button>
        </form>
      </div>
    </section>
  );
}
