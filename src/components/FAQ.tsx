"use client";

import { useState } from "react";

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export function FAQ({ items }: { items: FAQItem[] }) {
  const [openId, setOpenId] = useState<string | null>(items[0]?.id ?? null);

  return (
    <div className="space-y-2">
      {items.map((item) => {
        const isOpen = openId === item.id;
        return (
          <div
            key={item.id}
            className="overflow-hidden rounded-lg border border-[#0a0a0a]/10 bg-white transition-colors hover:border-[#0a0a0a]/15"
          >
            <button
              type="button"
              onClick={() => setOpenId(isOpen ? null : item.id)}
              className="flex w-full items-center justify-between px-5 py-4 text-left text-sm font-semibold text-[#0a0a0a] focus:outline-none focus:ring-2 focus:ring-[#0a0a0a]/20 focus:ring-inset"
              aria-expanded={isOpen}
              aria-controls={`faq-${item.id}`}
              id={`faq-btn-${item.id}`}
            >
              {item.question}
              <span className="ml-2 shrink-0 text-[#0a0a0a]/60" aria-hidden>
                {isOpen ? (
                  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                  </svg>
                ) : (
                  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                )}
              </span>
            </button>
            <div
              id={`faq-${item.id}`}
              role="region"
              aria-labelledby={`faq-btn-${item.id}`}
              className={`grid transition-all duration-200 ease-out ${isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}
            >
              <div className="overflow-hidden">
                <div className="border-t border-[#0a0a0a]/10 px-5 py-4 text-sm text-[#0a0a0a]/70">{item.answer}</div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
