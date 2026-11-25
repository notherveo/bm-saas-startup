import Section from "@/components/section";
import Bento from "@/components/bento";
import ProductDemo from "@/components/product-demo";
import Faq from "@/components/faq";

export const metadata = { title: "Features · NOVA" };

export default function FeaturesPage() {
  return (
    <>
      <Section id="features" className="scroll-mt-6">
        <Bento />
      </Section>
      <Section className="scroll-mt-6">
        <ProductDemo />
      </Section>
      <Section className="scroll-mt-6 pb-24">
        <Faq />
      </Section>
    </>
  );
}
