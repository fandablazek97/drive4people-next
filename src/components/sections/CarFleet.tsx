import { useTranslation } from "@/hooks/useTranslation";
import Image from "next/image";
import Container from "../Container";
import Heading from "../Heading";
import PreHeading from "../PreHeading";
import Reveal from "../Reveal";

export default function CarFleet() {
  const t = useTranslation();
  return (
    <section id="vozy" className="bg-gray-800">
      <Container py="lg">
        <div className="grid grid-cols-1 gap-16 md:grid-cols-2">
          <Reveal>
            <PreHeading level={2} color="white" className="opacity-75">
              {t.index.drivers.preHeading}
            </PreHeading>
            <Heading level={"none"} size="md" color="white" hasMarginBottom>
              {t.index.carFleet.heading}
            </Heading>
          </Reveal>
          <Reveal>
            <Heading level={3} size="sm" color="primary" hasMarginBottom>
              Vozidlo je pro Vás vždy dokonale připravené.
            </Heading>
            <ul className="ml-8 list-disc text-gray-300">
              <li>
                Vozidlo je plně vybavené s automatickou převodovkou pro Vaše
                pohodlí
              </li>
              <li>
                Vozidlo je prostorné a pohodlné ať už jedete sami nebo ve více
                lidech
              </li>
              <li>Není problém naložit velké zavazadla</li>
              <li>
                Ve vozidle – Wi-Fi připojení, Občerstvení, Dobíjení, Platební
                terminál, Denní tisk
              </li>
            </ul>
          </Reveal>
        </div>

        <Reveal className="ui-heading mt-28">
          <Heading level={4} size="sm" color="white">
            Mercedes-Benz E Class 220D - 2019
          </Heading>
        </Reveal>
        <div className="mt-8 grid grid-cols-2 gap-8 md:grid-cols-4 md:grid-rows-3">
          <Reveal className="col-span-2 row-span-2">
            <Image
              src="/images/mercedes/mercedes-1.jpg"
              alt="Mercedes Benz"
              width={1920}
              height={1080}
              loading="lazy"
              className="aspect-[4/3]"
            />
          </Reveal>
          {/* <Reveal className=""></Reveal> */}

          <Reveal className="col-span-2 row-span-2">
            <Image
              src="/images/mercedes/mercedes-29.jpg"
              alt="Mercedes Benz"
              width={1920}
              height={1080}
              loading="lazy"
              className="aspect-[4/3]"
            />
          </Reveal>

          <Reveal className="col-span-1">
            <Image
              src="/images/mercedes/mercedes-9.jpg"
              alt="Mercedes Benz"
              width={1920}
              height={1080}
              loading="lazy"
              className="aspect-[4/3]"
            />
          </Reveal>

          <Reveal className="col-span-1 ">
            <Image
              src="/images/mercedes/mercedes-11.jpg"
              alt="Mercedes Benz"
              width={1920}
              height={1080}
              loading="lazy"
              className="aspect-[4/3]"
            />
          </Reveal>

          <Reveal className="col-span-1 ">
            <Image
              src="/images/mercedes/mercedes-24.jpg"
              alt="Mercedes Benz"
              width={1920}
              height={1080}
              loading="lazy"
              className="aspect-[4/3]"
            />
          </Reveal>

          <Reveal className="col-span-1">
            <Image
              src="/images/mercedes/mercedes-4.jpg"
              alt="Mercedes Benz"
              width={1920}
              height={1080}
              loading="lazy"
              className="aspect-[4/3]"
            />
          </Reveal>
        </div>

        <Reveal className="mt-28">
          <Heading level={4} size="sm" color="white">
            Volkswagen Golf VII Variant - 2017
          </Heading>
        </Reveal>
        <div className="mt-8 grid grid-cols-2 gap-8 md:grid-cols-4 md:grid-rows-3">
          <Reveal className="col-span-2 row-span-2">
            <Image
              src="/images/golf/golf-9.jpg"
              alt="Volkswagen Golf VII"
              width={1920}
              height={1080}
              loading="lazy"
              className="aspect-[4/3]"
            />
          </Reveal>

          <Reveal className="col-span-2 row-span-2">
            <Image
              src="/images/golf/golf-2.jpg"
              alt="Volkswagen Golf VII"
              width={1920}
              height={1080}
              loading="lazy"
              className="aspect-[4/3]"
            />
          </Reveal>

          <Reveal className="col-span-1">
            <Image
              src="/images/golf/golf-6.jpg"
              alt="Volkswagen Golf VII"
              width={1920}
              height={1080}
              loading="lazy"
              className="aspect-[4/3]"
            />
          </Reveal>

          <Reveal className="col-span-1">
            <Image
              src="/images/golf/golf-7.jpg"
              alt="Volkswagen Golf VII"
              width={1920}
              height={1080}
              loading="lazy"
              className="aspect-[4/3]"
            />
          </Reveal>

          <Reveal className="col-span-1">
            <Image
              src="/images/golf/golf-10.jpg"
              alt="Volkswagen Golf VII"
              width={1920}
              height={1080}
              loading="lazy"
              className="aspect-[4/3]"
            />
          </Reveal>

          <Reveal className="col-span-1">
            <Image
              src="/images/golf/golf-8.jpg"
              alt="Volkswagen Golf VII"
              width={1920}
              height={1080}
              loading="lazy"
              className="aspect-[4/3]"
            />
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
