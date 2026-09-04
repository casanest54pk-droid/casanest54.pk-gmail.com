"use client";

import { createContext, useCallback, useContext, useState } from "react";
import { CheckCircle2, Info, Heart, X } from "lucide-react";

const ToastContext = createContext(null);
let toastId = 0;

export function ToastProvider({ children }) {
  const [toasts, setToasts] = useState([]);

  // message can be a plain string, or { title, description } for a richer,
  // two-line premium toast (e.g. "✓ Added to your cart" + product name).
  const showToast = useCallback((message, type = "success") => {
    const id = ++toastId;
    const normalized =
      typeof message === "string" ? { title: message, description: null } : message;
    setToasts((prev) => [...prev, { id, type, ...normalized }]);
    setTimeout(() => {
      setToasts((prev) => prev.filter((t) => t.id !== id));
    }, 3200);
  }, []);

  const dismiss = (id) => setToasts((prev) => prev.filter((t) => t.id !== id));

  return (
    <ToastContext.Provider value={{ showToast }}>
      {children}
      <div
        className="fixed bottom-4 left-1/2 z-[100] flex w-full max-w-sm -translate-x-1/2 flex-col gap-2 px-4 sm:bottom-6 sm:left-auto sm:right-6 sm:translate-x-0"
        aria-live="polite"
      >
        {toasts.map((t) => (
          <div
            key={t.id}
            role="status"
            className="animate-fade-up flex items-start gap-2.5 rounded-xl bg-ink px-4 py-3 text-linen shadow-premium"
          >
            {t.type === "error" ? (
              <Info size={18} className="mt-0.5 shrink-0 text-brass-500" />
            ) : t.type === "wishlist" ? (
              <Heart size={17} className="mt-0.5 shrink-0 fill-sienna-500 text-sienna-500" />
            ) : (
              <CheckCircle2 size={18} className="mt-0.5 shrink-0 text-sage-400" />
            )}
            <div className="min-w-0 flex-1">
              <p className="text-sm font-medium leading-snug">{t.title}</p>
              {t.description && (
                <p className="mt-0.5 text-xs leading-snug text-linen/70">{t.description}</p>
              )}
            </div>
            <button
              onClick={() => dismiss(t.id)}
              aria-label="Dismiss notification"
              className="ml-1 shrink-0 opacity-70 hover:opacity-100"
            >
              <X size={16} />
            </button>
          </div>
        ))}
      </div>
    </ToastContext.Provider>
  );
}

export function useToast() {
  const ctx = useContext(ToastContext);
  if (!ctx) throw new Error("useToast must be used within ToastProvider");
  return ctx;
}
