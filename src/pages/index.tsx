import { CTA } from "@/components/cta/CTA";
import { Customers } from "@/components/customers/Customers";
import Carousel from "@/components/features/carousel/Carousel";
import { CodeDemo } from "@/components/features/code/CodeDemo";
import FeatureGrid from "@/components/features/grid/FeatureGrid";
import { Stats } from "@/components/features/stats/Stats";
import { Footer } from "@/components/footer/Footer";
import { Hero } from "@/components/hero/Hero";
import { Logos } from "@/components/logos/Logos";
import { Pricing } from "@/components/pricing/Pricing";
import { StickyCards } from "@/components/features/sticky-cards/StickyCards";

export default function Home() {
  return (
    <main>
      <Hero />
      {/* <StickyCards /> */}
      <Carousel />
     
      {/* <FeatureGrid />
      <CodeDemo />
      <Carousel />
      <Customers />
      <Stats />
      <Pricing /> */}
      {/* <CTA />  */}
      <Footer />
    </main>
  );
}
