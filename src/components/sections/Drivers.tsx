import { useTranslation } from "@/hooks/useTranslation";
import Image from "next/image";
import Container from "../Container";
import Heading from "../Heading";
import PreHeading from "../PreHeading";
import Reveal from "../Reveal";

export default function Drivers() {
  const t = useTranslation();
  return (
    <section className="w-screen bg-white">
      <Container
        id="ridici"
        py="lg"
        className="grid gap-x-8 gap-y-14 lg:grid-cols-2"
      >
        <Reveal className="col-span-1">
          <PreHeading level={2}>{t.index.drivers.preHeading}</PreHeading>
          <Heading level={"none"} size="md" hasMarginBottom>
            {t.index.drivers.heading}
          </Heading>
          <p className="max-w-prose">{t.index.drivers.perex}</p>
        </Reveal>

        <Reveal className="relative col-span-1">
          <Image
            src="/img/d4p-2023-2.jpg"
            width="1920"
            height="1280"
            alt="group photo of our drivers"
            className="relative z-10 rounded-3xl"
          />
          <div className="absolute -bottom-6 -right-6 h-full w-full rounded-3xl bg-primary" />
        </Reveal>

        <div className="col-span-2 mt-16 grid gap-4 xs:grid-cols-2 sm:gap-8 lg:grid-cols-3">
          {t.index.drivers.drivers.map((driver) => (
            <div
              key={driver.name}
              className="col-span-1 flex flex-col items-start"
            >
              <Image
                src={driver.src}
                width="1920"
                height="1280"
                alt={driver.name}
                className="rounded-3xl"
              />
              <Heading level={"none"} size="xs" className="mt-4">
                {driver.name}
              </Heading>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
