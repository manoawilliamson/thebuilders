"use client";

import { useState } from "react";

export default function ContactPage() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    // Replace with your form backend (e.g. Formspree, Resend, custom API)
    await new Promise((r) => setTimeout(r, 800));
    setStatus("success");
  }

  return (
    <>
      <section className="bg-[#f5f5f5] py-24 sm:py-32 lg:py-40">
        <div className="mx-auto max-w-6xl px-6 sm:px-8 lg:px-12">
          <div className="mx-auto max-w-4xl text-center">
            <h1 className="font-display text-4xl font-bold tracking-tight text-[#0a0a0a] sm:text-5xl lg:text-6xl">Contact</h1>
            <p className="mt-8 text-lg leading-relaxed text-[#1a1a1a]/80 font-sans">
              Have a question or want to work together? Get in touch.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white py-24 sm:py-32 lg:py-40">
        <div className="mx-auto max-w-6xl px-6 sm:px-8 lg:px-12">
          <div className="grid gap-16 lg:grid-cols-2">
            <div>
              <h2 className="font-display text-3xl font-bold tracking-tight text-[#0a0a0a] sm:text-4xl">Send a message</h2>
              <form onSubmit={handleSubmit} className="mt-12 space-y-8">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-[#1a1a1a]">
                    Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    className="mt-3 w-full rounded-xl border border-[#0a0a0a]/10 bg-white px-6 py-4 text-[#1a1a1a] placeholder-[#1a1a1a]/40 focus:border-[#0a0a0a]/30 focus:outline-none focus:ring-2 focus:ring-[#0a0a0a]/10"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-[#1a1a1a]">
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    className="mt-3 w-full rounded-xl border border-[#0a0a0a]/10 bg-white px-6 py-4 text-[#1a1a1a] placeholder-[#1a1a1a]/40 focus:border-[#0a0a0a]/30 focus:outline-none focus:ring-2 focus:ring-[#0a0a0a]/10"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-[#1a1a1a]">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={6}
                    required
                    className="mt-3 w-full rounded-xl border border-[#0a0a0a]/10 bg-white px-6 py-4 text-[#1a1a1a] placeholder-[#1a1a1a]/40 focus:border-[#0a0a0a]/30 focus:outline-none focus:ring-2 focus:ring-[#0a0a0a]/10"
                  />
                </div>
                {status === "success" && (
                  <p className="text-green-600">Thanks! We&apos;ll get back to you soon.</p>
                )}
                {status === "error" && (
                  <p className="text-red-600">Something went wrong. Please try again.</p>
                )}
                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="w-full rounded-xl bg-[#0a0a0a] px-8 py-4 font-semibold text-white hover:bg-[#1a1a1a] disabled:opacity-70 transition-colors sm:w-auto"
                >
                  {status === "loading" ? "Sending…" : "Send message"}
                </button>
              </form>
            </div>

            <div>
              <h2 className="font-display text-3xl font-bold tracking-tight text-[#0a0a0a] sm:text-4xl">Other ways to reach us</h2>
              <ul className="mt-12 space-y-8">
                <li>
                  <span className="text-sm font-medium text-[#1a1a1a]">Email</span>
                  <p className="mt-2">
                    <a href="mailto:hello@thebuilders.com" className="text-[#0a0a0a] hover:opacity-70 transition-opacity">
                      hello@thebuilders.com
                    </a>
                  </p>
                </li>
                <li>
                  <span className="text-sm font-medium text-[#1a1a1a]">Social</span>
                  <div className="mt-3 flex gap-6">
                    <a href="#" className="text-[#0a0a0a] hover:opacity-70 transition-opacity">Twitter</a>
                    <a href="#" className="text-[#0a0a0a] hover:opacity-70 transition-opacity">LinkedIn</a>
                    <a href="#" className="text-[#0a0a0a] hover:opacity-70 transition-opacity">YouTube</a>
                    <a href="#" className="text-[#0a0a0a] hover:opacity-70 transition-opacity">Discord</a>
                  </div>
                </li>
              </ul>

              <div className="mt-16 rounded-2xl border border-[#0a0a0a]/10 bg-[#f5f5f5]/50 p-8">
                <h3 className="font-display text-lg font-bold tracking-tight text-[#0a0a0a]">Want to be a guest speaker?</h3>
                <p className="mt-4 text-sm text-[#1a1a1a]/80 font-sans">
                  We run guest workshops with designers, photographers, and creators. If you&apos;d like to share your
                  AI workflow with our community, we&apos;d love to hear from you.
                </p>
                <a
                  href="mailto:hello@thebuilders.com?subject=Guest%20speaker%20inquiry"
                  className="mt-6 inline-block text-sm font-semibold text-[#0a0a0a] hover:opacity-70 transition-opacity font-sans"
                >
                  Get in touch →
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
