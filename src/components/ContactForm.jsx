"use client";

import { useState } from "react";
import { Loader2, Send } from "lucide-react";
import { useToast } from "@/context/ToastContext";

export default function ContactForm() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);
  const { showToast } = useToast();

  const update = (field) => (e) => setForm((f) => ({ ...f, [field]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      showToast("Please fill in all fields", "error");
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
            subject: `New CasaNest Contact Message from ${form.name}`,
            ...form,
          }),
        });
        showToast("Message sent! We'll get back to you soon.");
      } else {
        showToast("Message integration not configured yet — see .env.example.", "error");
      }
      setForm({ name: "", email: "", message: "" });
    } catch {
      showToast("Something went wrong. Please try again.", "error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4 rounded-2xl bg-white p-6 shadow-card">
      <label className="flex flex-col gap-1.5">
        <span className="text-sm font-medium text-ink/80">Your Name</span>
        <input
          type="text"
          value={form.name}
          onChange={update("name")}
          className="rounded-xl border border-ink/15 px-4 py-2.5 text-sm outline-none focus:border-sienna-500"
        />
      </label>
      <label className="flex flex-col gap-1.5">
        <span className="text-sm font-medium text-ink/80">Email</span>
        <input
          type="email"
          value={form.email}
          onChange={update("email")}
          className="rounded-xl border border-ink/15 px-4 py-2.5 text-sm outline-none focus:border-sienna-500"
        />
      </label>
      <label className="flex flex-col gap-1.5">
        <span className="text-sm font-medium text-ink/80">Message</span>
        <textarea
          rows={5}
          value={form.message}
          onChange={update("message")}
          className="resize-none rounded-xl border border-ink/15 px-4 py-2.5 text-sm outline-none focus:border-sienna-500"
        />
      </label>
      <button type="submit" disabled={loading} className="btn-primary self-start">
        {loading ? <Loader2 size={16} className="animate-spin" /> : <Send size={16} />}
        Send Message
      </button>
    </form>
  );
}
