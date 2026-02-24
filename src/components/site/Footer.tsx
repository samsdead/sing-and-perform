import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { siteData } from "@/content/siteData";

export function Footer() {
  const hasInstagram = Boolean(siteData.socials.instagram);
  const hasFacebook = Boolean(siteData.socials.facebook);

  return (
    <footer className="border-t border-black/5 bg-canvas">
      <Container className="py-10">
        <div className="grid gap-8 md:grid-cols-3">
          <div>
            <div className="text-lg font-extrabold tracking-tight">{siteData.businessName}</div>
            <p className="mt-2 text-sm text-muted">{siteData.defaultDescription}</p>
          </div>

          <div>
            <div className="text-sm font-bold">Pages</div>
            <ul className="mt-3 space-y-2 text-sm">
              <li><Link className="hover:underline" href="/">Home</Link></li>
              <li><Link className="hover:underline" href="/services">Services</Link></li>
              <li><Link className="hover:underline" href="/about">About</Link></li>
              <li><Link className="hover:underline" href="/contact">Contact</Link></li>
            </ul>
          </div>

          <div>
            <div className="text-sm font-bold">Contact</div>
            <ul className="mt-3 space-y-2 text-sm text-ink/80">
              <li>
                <span className="font-semibold">Phone:</span> {siteData.phoneDisplay || "Available on request"}
              </li>
              <li>
                <span className="font-semibold">Email:</span> {siteData.email || "Available on request"}
              </li>
              {hasInstagram || hasFacebook ? (
                <li className="pt-2">
                  <div className="text-sm font-bold">Social</div>
                  <div className="mt-2 flex gap-3">
                    {hasInstagram ? (
                      <a className="hover:underline" href={siteData.socials.instagram} target="_blank" rel="noreferrer">
                        Instagram
                      </a>
                    ) : null}
                    {hasFacebook ? (
                      <a className="hover:underline" href={siteData.socials.facebook} target="_blank" rel="noreferrer">
                        Facebook
                      </a>
                    ) : null}
                  </div>
                </li>
              ) : null}
            </ul>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-2 border-t border-black/5 pt-6 text-xs text-muted sm:flex-row sm:items-center sm:justify-between">
          <p className="font-semibold text-ink/90">
            Demo website only. Not affiliated with or endorsed by any business named Sing and Perform.
          </p>
          <p>Copyright {new Date().getFullYear()} {siteData.businessName}. All rights reserved.</p>
          <p>
            Built with Next.js | {" "}
            <a className="hover:underline" href="https://vercel.com" target="_blank" rel="noreferrer">
              Deploy on Vercel
            </a>
          </p>
        </div>
      </Container>
    </footer>
  );
}
