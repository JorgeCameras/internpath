"use client";

import Link from "next/link";
import { useState } from "react";

const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "Applications", href: "/applications" },
  { label: "Research", href: "/research" },
  { label: "Dashboard", href: "/dashboard" },
  { label: "Chat", href: "/chat" },
  { label: "Pricing", href: "/pricing" },
  { label: "Docs", href: "/docs" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-paper/90 backdrop-blur">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/" className="flex items-center gap-2">
          <span className="flex h-8 w-8 items-center justify-center rounded-full bg-path text-sm font-display font-bold text-paper">
            IP
          </span>
          <span className="font-display text-lg font-bold tracking-tight text-ink">
            InternPath
          </span>
        </Link>

        {/* Desktop nav */}
        <ul className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="text-sm font-medium text-ink/70 transition-colors hover:text-path"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <Link
          href="/dashboard"
          className="hidden rounded-full bg-ink px-5 py-2 text-sm font-semibold text-paper transition-colors hover:bg-path md:inline-block"
        >
          Get started
        </Link>

        {/* Mobile toggle */}
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-label="Toggle navigation menu"
          className="flex h-9 w-9 items-center justify-center rounded-md border border-line md:hidden"
        >
          <span className="sr-only">Menu</span>
          <div className="flex flex-col gap-1.5">
            <span
              className={`h-0.5 w-5 bg-ink transition-transform ${
                open ? "translate-y-2 rotate-45" : ""
              }`}
            />
            <span
              className={`h-0.5 w-5 bg-ink transition-opacity ${
                open ? "opacity-0" : ""
              }`}
            />
            <span
              className={`h-0.5 w-5 bg-ink transition-transform ${
                open ? "-translate-y-2 -rotate-45" : ""
              }`}
            />
          </div>
        </button>
      </nav>

      {/* Mobile nav panel */}
      {open && (
        <ul className="flex flex-col gap-1 border-t border-line px-6 pb-6 pt-2 md:hidden">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                onClick={() => setOpen(false)}
                className="block rounded-md px-3 py-3 text-sm font-medium text-ink/80 hover:bg-path-light hover:text-path"
              >
                {link.label}
              </Link>
            </li>
          ))}
          <li className="pt-2">
            <Link
              href="/dashboard"
              onClick={() => setOpen(false)}
              className="block rounded-full bg-ink px-5 py-3 text-center text-sm font-semibold text-paper"
            >
              Get started
            </Link>
          </li>
        </ul>
      )}
    </header>
  );
}
