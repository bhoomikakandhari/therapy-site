"use client";
import { useState } from "react";
import { site, nav, navCta } from "@/lib/content";
import { PillLink } from "./ui";

const link = "text-[13px] uppercase tracking-[0.2em] hover:text-primary";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 bg-paper/95 backdrop-blur">
      <div className="mx-auto flex h-20 w-full max-w-[1500px] items-center justify-between px-5 md:px-10 lg:h-28 lg:px-24">
        <a href="#top" className="leading-tight">
          <span className="block font-display text-2xl font-light text-ink lg:text-4xl">{site.name}</span>
          <span className="mt-1 block text-[10px] uppercase tracking-[0.3em] text-primary lg:text-[11px]">{site.tagline}</span>
        </a>

        <nav className="hidden items-center gap-10 lg:flex" aria-label="Main">
          {nav.map((n) => <a key={n.label} href={n.href} className={link}>{n.label}</a>)}
          <PillLink href={navCta.href}>{navCta.label}</PillLink>
        </nav>

        <button className="p-2 text-ink lg:hidden" aria-expanded={open} aria-label="Toggle menu" onClick={() => setOpen(!open)}>
          <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
            {open ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M4 8h16M4 16h16" />}
          </svg>
        </button>
      </div>

      {open && (
        <nav className="border-t border-primary/15 bg-paper px-5 pb-8 pt-2 lg:hidden" aria-label="Mobile">
          {[...nav, navCta].map((n) => (
            <a key={n.label} href={n.href} onClick={() => setOpen(false)} className={`${link} block border-b border-primary/15 py-4`}>{n.label}</a>
          ))}
        </nav>
      )}
    </header>
  );
}