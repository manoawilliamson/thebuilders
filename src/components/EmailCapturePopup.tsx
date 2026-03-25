"use client";

import { useState, useEffect } from "react";
import { EmailSignupForm } from "./EmailSignupForm";

const DELAY_MS = 15000; // Show after 15 seconds
const STORAGE_KEY = "thebuilders_popup_shown";

export function EmailCapturePopup() {
  const [isVisible, setIsVisible] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (!isMounted) return;
    const shown = sessionStorage.getItem(STORAGE_KEY);
    if (shown) return;

    const timer = setTimeout(() => {
      setIsVisible(true);
      sessionStorage.setItem(STORAGE_KEY, "1");
    }, DELAY_MS);

    const handleExit = (e: MouseEvent) => {
      if (e.clientY <= 0) {
        setIsVisible(true);
        sessionStorage.setItem(STORAGE_KEY, "1");
      }
    };
    document.addEventListener("mouseleave", handleExit);
    return () => {
      clearTimeout(timer);
      document.removeEventListener("mouseleave", handleExit);
    };
  }, [isMounted]);

  function handleSuccess() {
    setIsVisible(false);
  }

  if (!isVisible) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/50 p-4 animate-fade-in"
      role="dialog"
      aria-modal="true"
      aria-labelledby="popup-title"
    >
      <div className="relative w-full max-w-md rounded-2xl bg-white p-6 shadow-xl animate-fade-in-up">
        <button
          type="button"
          onClick={() => setIsVisible(false)}
          className="absolute right-4 top-4 rounded-lg p-1 text-body hover:bg-gray-bg focus:outline-none focus:ring-2 focus:ring-primary"
          aria-label="Close"
        >
          <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
        <h2 id="popup-title" className="font-display text-xl font-bold text-headline">
          Get started with AI
        </h2>
        <p className="mt-2 text-sm text-body">
          Join 500+ creators. Get free resources and early access to new courses.
        </p>
        <div className="mt-4">
          <EmailSignupForm variant="popup" onSuccess={handleSuccess} />
        </div>
      </div>
    </div>
  );
}
