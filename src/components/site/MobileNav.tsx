"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";
import { siteData } from "@/content/siteData";
import { Button } from "@/components/ui/Button";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" }
];

export function MobileNav() {
  const [open, setOpen] = useState(false);
  const panelRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    function onKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(false);
    }
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, []);

  useEffect(() => {
    function onClickOutside(e: MouseEvent) {
      if (!open) return;
      if (!panelRef.current) return;
      if (!panelRef.current.contains(e.target as Node)) setOpen(false);
    }
    document.addEventListener("mousedown", onClickOutside);
    return () => document.removeEventListener("mousedown", onClickOutside);
  }, [open]);

  return (
    <div className="md:hidden">
      <button
        type="button"
        className="inline-flex items-center justify-center rounded-xl bg-black/5 px-3 py-2 text-sm font-semibold"
        aria-expanded={open}
        aria-controls="mobile-menu"
        onClick={() => setOpen((v) => !v)}
      >
        Menu
      </button>

      <div
        id="mobile-menu"
        className={cn(
          "fixed inset-0 z-50 isolate transition",
          open ? "pointer-events-auto" : "pointer-events-none"
        )}
        aria-hidden={!open}
      >
        <div className={cn("absolute inset-0 z-0 bg-black/40", open ? "opacity-100" : "opacity-0")} />
        <div
          ref={panelRef}
          className={cn(
            "absolute right-0 top-0 z-10 h-full w-[88%] max-w-sm p-6 shadow-2xl ring-1 ring-black/10 transition",
            open ? "translate-x-0" : "translate-x-full"
          )}
          style={{ backgroundColor: "#ffffff" }}
          role="dialog"
          aria-modal="true"
          aria-label="Mobile navigation"
        >
          <div className="flex items-center justify-between">
            <div className="font-extrabold tracking-tight text-ink">{siteData.businessName}</div>
            <button
              className="rounded-xl bg-black/10 px-3 py-2 text-sm font-semibold text-ink"
              onClick={() => setOpen(false)}
              aria-label="Close menu"
            >
              Close
            </button>
          </div>

          <nav className="mt-8 space-y-2" aria-label="Mobile navigation links">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="block rounded-xl px-4 py-3 text-base font-semibold text-ink hover:bg-black/5"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="mt-8">
            <Button href="/contact" className="w-full" ariaLabel="Book a consultation">
              {siteData.primaryCta}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
