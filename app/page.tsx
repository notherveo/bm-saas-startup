import Section from "@/components/section";
import Hero from "@/components/hero";
import Features from "@/components/features";
import Stats from "@/components/stats";
import Cta from "@/components/cta";

export default function Home() {
  return (
    <>
      <Hero />
      <Section id="features" className="scroll-mt-6">
        <Features />
      </Section>
      <Stats />
      <Section id="cta" className="scroll-mt-6">
        <Cta />
      </Section>
    </>
  );
}
