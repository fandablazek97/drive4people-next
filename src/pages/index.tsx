import Container from "@/components/Container";
import Heading from "@/components/Heading";
import Layout from "@/components/Layout";
import Seo from "@/components/Seo";
import CarFleet from "@/components/sections/CarFleet";
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

      <Container py="xl" className="bg-sky-800">
        <Heading level={2} size="xl" className="text-center">
          Konkakt
        </Heading>
      </Container>
    </Layout>
  );
}
