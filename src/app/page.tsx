import { Hero } from "@/src/components/home/Hero";
import { TrustBadges } from "@/src/components/home/TrustBadges";
import { ServicesOverview } from "@/src/components/home/ServicesOverview";
import { Testimonials } from "@/src/components/home/Testimonials";
import { Process } from "@/src/components/home/Process";
import { FAQ } from "@/src/components/home/FAQ";
import { FinalCTA } from "@/src/components/home/FinalCTA";
import { buildMetadata } from "@/src/lib/seo";

export const metadata = buildMetadata({
  title: "Singing Lessons in Milton Keynes",
  description:
    "Friendly, confidence-building singing lessons in Milton Keynes. 1:1 coaching, performance prep, audition support — book a consultation."
});

export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustBadges />
      <ServicesOverview />
      <Testimonials />
      <Process />
      <FAQ />
      <FinalCTA />
    </>
  );
}
