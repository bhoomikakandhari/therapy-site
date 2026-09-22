import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Intro from "@/components/Intro";
import WhoWeHelp from "@/components/WhoWeHelp";
import Expertise from "@/components/Expertise";
import HowIWork from "@/components/HowIWork";
import Services from "@/components/Services";
import Office from "@/components/Office";
import FAQ from "@/components/FAQ";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Intro />
        <WhoWeHelp />
        <Expertise />
        <HowIWork />
        <Services />
        <Office /> {/* NEW custom section (Part 3) */}
        <FAQ />
        <CTA />
      </main>
      <Footer />
    </>
  );
}