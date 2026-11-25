import Section from "@/components/section";
import Hero from "@/components/hero";
import Overview from "@/components/overview";
import Testimonial from "@/components/testimonial";

export const metadata = { title: "Overview · NOVA" };

export default function HomePage() {
  return (
    <>
      <Hero />
      <Section id="overview" className="scroll-mt-6">
        <Overview />
      </Section>
      <Section className="scroll-mt-6 pb-24">
        <Testimonial />
      </Section>
    </>
  );
}
