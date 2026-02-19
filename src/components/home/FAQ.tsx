"use client";

import { useState } from "react";
import { Section } from "@/src/components/ui/Section";
import { siteData } from "@/src/content/siteData";
import { cn } from "@/src/lib/utils";

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <Section className="bg-white/40" id="faq">
      <div className="max-w-2xl">
        <h2 className="text-3xl font-extrabold tracking-tight">FAQ</h2>
        <p className="mt-2 text-ink/80">
          If you’re wondering it, you’re probably not the only one.
        </p>
      </div>

      <div className="mt-8 divide-y divide-black/10 rounded-2xl bg-white shadow-soft ring-1 ring-black/5">
        {siteData.faq.map((item, idx) => {
          const isOpen = openIndex === idx;
          return (
            <div key={item.q} className="p-5 sm:p-6">
              <button
                type="button"
                className="flex w-full items-start justify-between gap-6 text-left"
                onClick={() => setOpenIndex(isOpen ? null : idx)}
                aria-expanded={isOpen}
              >
                <span className="text-base font-extrabold">{item.q}</span>
                <span
                  aria-hidden
                  className={cn(
                    "mt-1 inline-flex h-8 w-8 items-center justify-center rounded-xl bg-black/5 font-bold transition",
                    isOpen ? "rotate-45" : "rotate-0"
                  )}
                >
                  +
                </span>
              </button>

              {isOpen ? <p className="mt-3 text-sm text-ink/80">{item.a}</p> : null}
            </div>
          );
        })}
      </div>
    </Section>
  );
}
