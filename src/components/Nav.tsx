"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";

const navLinks = [
  { href: "/about", label: "About" },
  { href: "/community", label: "Community" },
  { href: "/contact", label: "Contact" },
];

export function Nav() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isDark = pathname === "/" && !scrolled;

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        isDark ? "bg-[#0a0a0a]" : "bg-white border-b border-gray-100"
      }`}
    >
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 py-5 sm:px-8 lg:px-10"
        aria-label="Main navigation"
      >
        <Link
          href="/"
          className={`font-display text-lg font-semibold tracking-tight transition-colors ${
            isDark ? "text-white hover:text-white/80" : "text-[#0a0a0a] hover:opacity-80"
          }`}
        >
          The Builders
        </Link>

        <ul className="hidden md:flex md:items-center md:gap-10">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={`text-sm font-medium tracking-wide transition-colors ${
                  isDark ? "text-white/80 hover:text-white" : "text-[#1a1a1a]/80 hover:text-[#0a0a0a]"
                }`}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="hidden md:block">
          <Link
            href="/#signup"
            className={`inline-flex items-center text-sm font-medium tracking-wide transition-colors ${
              isDark ? "text-white hover:text-white/80" : "text-[#0a0a0a] hover:opacity-80"
            }`}
          >
            Join our mission
          </Link>
        </div>

        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className={`inline-flex md:hidden items-center justify-center p-2 focus:outline-none ${
            isDark ? "text-white" : "text-[#0a0a0a]"
          }`}
          aria-expanded={isOpen}
          aria-controls="mobile-menu"
          aria-label="Toggle menu"
        >
          <span className="sr-only">Toggle menu</span>
          {isOpen ? (
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </nav>

      <div
        id="mobile-menu"
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        } bg-white border-b border-gray-100`}
        aria-hidden={!isOpen}
      >
        <ul className="px-5 py-6 space-y-1">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block py-3 text-sm font-medium text-[#1a1a1a] hover:text-[#0a0a0a]"
              >
                {link.label}
              </Link>
            </li>
          ))}
          <li className="pt-4">
            <Link
              href="/#signup"
              onClick={() => setIsOpen(false)}
              className="block py-3 text-sm font-medium text-[#0a0a0a]"
            >
              Join our mission
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
}
