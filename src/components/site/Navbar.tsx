import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { siteData } from "@/content/siteData";
import { MobileNav } from "./MobileNav";

const navItems = [
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" }
];

export function Navbar() {
  return (
    <header className="sticky top-0 z-40 border-b border-black/5 bg-canvas/80 backdrop-blur">
      <Container className="flex h-16 items-center justify-between">
        <Link href="/" className="font-extrabold tracking-tight">
          <span className="text-ink">{siteData.businessName}</span>
          <span className="ml-2 rounded-full bg-accent2/15 px-2 py-1 text-xs font-bold text-ink">
            Milton Keynes
          </span>
        </Link>

        <nav className="hidden items-center gap-6 md:flex" aria-label="Primary navigation">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-semibold text-ink/80 hover:text-ink"
            >
              {item.label}
            </Link>
          ))}
          <Button href="/contact" size="sm" ariaLabel="Book a quote / Get consultation">
            {siteData.primaryCta}
          </Button>
        </nav>

        <MobileNav />
      </Container>
    </header>
  );
}
