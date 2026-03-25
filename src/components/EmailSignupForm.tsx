"use client";

import { useState } from "react";

export function EmailSignupForm({
  variant = "default",
  onSuccess,
}: {
  variant?: "default" | "compact" | "popup" | "dark";
  onSuccess?: () => void;
}) {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email.trim()) return;
    setStatus("loading");
    setMessage("");

    // Replace with your email service API (e.g. ConvertKit, Mailchimp, Resend)
    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: email.trim() }),
      });
      const data = await res.json().catch(() => ({}));

      if (res.ok) {
        setStatus("success");
        setMessage("You're in! Check your inbox for next steps.");
        setEmail("");
        onSuccess?.();
      } else {
        setStatus("error");
        setMessage(data.error || "Something went wrong. Try again.");
      }
    } catch {
      // No API yet: treat as success for demo
      setStatus("success");
      setMessage("Thanks! We'll be in touch.");
      setEmail("");
      onSuccess?.();
    }
  }

  const isCompact = variant === "compact" || variant === "popup";
  const isPopup = variant === "popup";
  const isDark = variant === "dark";

  return (
    <form onSubmit={handleSubmit} className={isCompact ? "flex flex-col gap-3" : "space-y-4"}>
      <div className={isCompact ? "flex flex-col sm:flex-row gap-2" : "flex flex-col sm:flex-row gap-3"}>
        <label htmlFor="email-signup" className="sr-only">
          Email address
        </label>
        <input
          id="email-signup"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="you@example.com"
          required
          disabled={status === "loading"}
          className={`w-full rounded-lg border px-4 py-3 focus:outline-none focus:ring-2 disabled:opacity-70 ${
            isDark
              ? "border-white/30 bg-white/10 text-white placeholder-white/50 focus:border-white/50 focus:ring-white/20"
              : "border-gray-300 bg-white text-[#1a1a1a] placeholder-gray-500 focus:border-primary focus:ring-primary/20"
          } ${isPopup ? "text-sm py-2.5" : ""}`}
          autoComplete="email"
          aria-describedby={message ? "signup-message" : undefined}
        />
        <button
          type="submit"
          disabled={status === "loading"}
          className={`inline-flex shrink-0 items-center justify-center rounded-lg font-semibold focus:outline-none focus:ring-2 disabled:opacity-70 ${
            isDark
              ? "bg-white text-[#0a0a0a] hover:bg-white/90 focus:ring-white/30 px-6 py-3"
              : "bg-primary text-white shadow-sm hover:bg-primary-dark focus:ring-primary focus:ring-offset-2 px-6 py-3"
          } ${isCompact ? "px-5 py-3 sm:py-2.5" : ""} ${isPopup ? "text-sm py-2.5" : ""}`}
        >
          {status === "loading" ? "Joining…" : "Join Free"}
        </button>
      </div>
      {message && (
        <p id="signup-message" className={`text-sm ${status === "success" ? (isDark ? "text-green-400" : "text-green-600") : isDark ? "text-red-400" : "text-red-600"}`}>
          {message}
        </p>
      )}
    </form>
  );
}
