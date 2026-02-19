import { Hero } from "@/components/home/Hero";
import { TrustBadges } from "@/components/home/TrustBadges";
import { ServicesOverview } from "@/components/home/ServicesOverview";
import { Testimonials } from "@/components/home/Testimonials";
import { Process } from "@/components/home/Process";
import { FAQ } from "@/components/home/FAQ";
import { FinalCTA } from "@/components/home/FinalCTA";
import { buildMetadata } from "@/lib/seo";

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
