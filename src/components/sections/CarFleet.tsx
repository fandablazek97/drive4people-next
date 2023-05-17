import { useTranslation } from "@/hooks/useTranslation";
import Image from "next/image";
import Container from "../Container";
import Heading from "../Heading";
import PreHeading from "../PreHeading";
import Reveal from "../Reveal";

export default function CarFleet() {
  const t = useTranslation();
  return (
    <section id="vozy" className="bg-gray-900">
      <Container py="lg">
        <div className="grid grid-cols-1 gap-16 md:grid-cols-2">
          <Reveal>
            <PreHeading level={2} color="white" className="opacity-75">
              {t.index.carFleet.preHeading}
            </PreHeading>
            <Heading level={"none"} size="md" color="white" hasMarginBottom>
              {t.index.carFleet.heading}
            </Heading>
          </Reveal>
          <Reveal>
            <p className="pt-3 text-lg leading-relaxed text-gray-300">
              {t.index.carFleet.perex}
            </p>
          </Reveal>
        </div>

        <Reveal className="ui-heading mt-28">
          <Heading level={4} size="sm" color="white">
            {t.index.carFleet.cars.car1}
          </Heading>
        </Reveal>
        <div className="mt-8 grid gap-8 sm:grid-cols-2">
          <Reveal className="col-span-1">
            <Image
              src="/img/d4p-2023-8.jpg"
              alt="Mercedes Benz"
              width={1920}
              height={1280}
              loading="lazy"
              className="rounded-3xl"
            />
          </Reveal>

          <Reveal className="col-span-1">
            <Image
              src="/img/d4p-2023-9.jpg"
              alt="Mercedes Benz"
              width={1920}
              height={1280}
              loading="lazy"
              className="rounded-3xl"
            />
          </Reveal>
        </div>

        <Reveal className="mt-28">
          <Heading level={4} size="sm" color="white">
            {t.index.carFleet.cars.car2}
          </Heading>
        </Reveal>
        <div className="mt-8 grid gap-8 sm:grid-cols-2">
          <Reveal className="col-span-1">
            <Image
              src="/img/d4p-2023-4.jpg"
              alt="Mercedes Benz"
              width={1920}
              height={1280}
              loading="lazy"
              className="rounded-3xl"
            />
          </Reveal>

          <Reveal className="col-span-1">
            <Image
              src="/img/d4p-2023-3.jpg"
              alt="Mercedes Benz"
              width={1920}
              height={1280}
              loading="lazy"
              className="rounded-3xl"
            />
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
