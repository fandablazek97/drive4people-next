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
        className="grid grid-cols-1 gap-x-8 gap-y-14 lg:grid-cols-2"
      >
        <Reveal className="col-span-1">
          <PreHeading level={2}>{t.index.drivers.preHeading}</PreHeading>
          <Heading level={"none"} size="md" hasMarginBottom>
            {t.index.drivers.heading}
          </Heading>
          <p className="max-w-prose">{t.index.drivers.perex}</p>
        </Reveal>

        {/* <Reveal className="col-span-1">
          <div className="relative aspect-[3/2] w-full">
            <Image
              src="/img/d4p-2023-2.jpg"
              width="1920"
              height="1280"
              alt="group photo of our drivers"
              loading="lazy"
              className="relative z-10 rounded-3xl object-cover"
            />
            <div className="absolute -bottom-3 -right-3 h-full w-full rounded-3xl bg-primary lg:-bottom-6 lg:-right-6" />
          </div>
        </Reveal> */}

        <div className="col-span-1 mt-16 grid gap-4 xs:grid-cols-2 sm:gap-8 lg:col-span-2 lg:grid-cols-3">
          {t.index.drivers.drivers.map((driver) => (
            <Reveal
              key={driver.name}
              className="col-span-1 flex flex-col items-start"
            >
              <Image
                src={driver.src}
                width="1920"
                height="1280"
                alt={driver.name}
                loading="lazy"
                className="rounded-3xl"
              />
              <Heading level={"none"} size="xs" className="mt-4">
                {driver.name}
              </Heading>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
