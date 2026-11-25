import Section from "@/components/section";
import Pricing from "@/components/pricing";
import PricingFaq from "@/components/pricing-faq";

export const metadata = { title: "Pricing · NOVA" };

export default function PricingPage() {
  return (
    <>
      <Section id="pricing" className="scroll-mt-6">
        <Pricing />
      </Section>
      <Section className="scroll-mt-6 pb-24">
        <PricingFaq />
      </Section>
    </>
  );
}
