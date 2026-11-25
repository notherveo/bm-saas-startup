import Section from "@/components/section";
import About from "@/components/about";

export const metadata = { title: "About · NOVA" };

export default function AboutPage() {
  return (
    <>
      <Section id="about" className="scroll-mt-6">
        <About />
      </Section>
    </>
  );
}
