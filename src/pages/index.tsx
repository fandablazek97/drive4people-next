import Container from "@/components/Container";
import Heading from "@/components/Heading";
import Layout from "@/components/Layout";
import Seo from "@/components/Seo";
import Hero from "@/components/sections/Hero";

import { useTranslation } from "@/hooks/useTranslation";

export default function Home() {
  const t = useTranslation();
  return (
    <Layout>
      <Seo title={t.index.seo.title} description={t.index.seo.description} />

      <Hero />

      <Container py="xl" className="bg-red-800">
        <Heading level={2} size="xl" className="text-center">
          Hero
        </Heading>
      </Container>
      <Container py="xl" className="bg-green-800">
        <Heading level={2} size="xl" className="text-center">
          Služby
        </Heading>
      </Container>
      <Container py="xl" className="bg-yellow-800">
        <Heading level={2} size="xl" className="text-center">
          Ceník
        </Heading>
      </Container>
      <Container py="xl" className="bg-blue-800">
        <Heading level={2} size="xl" className="text-center">
          Reference
        </Heading>
      </Container>
      <Container py="xl" className="bg-pink-800">
        <Heading level={2} size="xl" className="text-center">
          Řidiči
        </Heading>
      </Container>
      <Container py="xl" className="bg-purple-800">
        <Heading level={2} size="xl" className="text-center">
          Vozy
        </Heading>
      </Container>
      <Container py="xl" className="bg-sky-800">
        <Heading level={2} size="xl" className="text-center">
          Konkakt
        </Heading>
      </Container>
    </Layout>
  );
}
