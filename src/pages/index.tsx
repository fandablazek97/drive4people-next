import Layout from "@/components/Layout";
import Seo from "@/components/Seo";
import CarFleet from "@/components/sections/CarFleet";
import Contact from "@/components/sections/Contact";
import Drivers from "@/components/sections/Drivers";
import Hero from "@/components/sections/Hero";
import PriceList from "@/components/sections/PriceList";
import Services from "@/components/sections/Services";
import Testimonials from "@/components/sections/Testimonials";

import { useTranslation } from "@/hooks/useTranslation";

export default function Home() {
  const t = useTranslation();
  return (
    <Layout>
      <Seo title={t.index.seo.title} description={t.index.seo.description} />

      <Hero />
      <Services />
      <PriceList />
      <Testimonials />
      <Drivers />
      <CarFleet />
      <Contact />
    </Layout>
  );
}
